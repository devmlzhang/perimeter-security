package com.weirdo.alarm.message;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.jms.Queue;

/**
 * @Author ML.Zhang
 * @Date 2018/5/28
 */
@Component
@EnableScheduling
public class AmqProducer {

    /**
     * 定时发送队列消息
     */

    @Autowired
    JmsTemplate jmsTemplate;

    @Autowired//注入
    private Queue queue;
    private int age = 18;
   // @Scheduled(fixedDelay = 5000)//每隔5秒钟执行这个方法
    public void send() {
        age++;
        String json = new JSONObject().toJSONString("weirdo"+age);
        System.out.println("json:" + json+"  queue:"+queue);
        jmsTemplate.convertAndSend(queue, json);
    }
}
