package com.weirdo.monitor.message;

import com.alibaba.fastjson.JSONObject;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;


@Component
public class AmqConsumer {
     //@JmsListener(destination = "${queue}")//activeMq监听监听接收消息队列
    public void receive(String msg){//这个msg就是从消息队列获得到的参数
        System.out.println(msg);
        JSONObject jsonObject = new JSONObject();
        System.out.println(jsonObject.toString()+"消费方");
    }
}