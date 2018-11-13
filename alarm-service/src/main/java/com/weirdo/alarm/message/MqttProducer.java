package com.weirdo.alarm.message;

import com.alibaba.fastjson.JSONObject;
import com.weirdo.alarm.model.WebsocketModel;
import com.weirdo.alarm.service.MqttClientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;





@Component
@EnableScheduling
public class MqttProducer {
    /**
     * 定时发送主题消息
     */

    private String DA_TOPIC = "Topic/Weirdo/DaChange";
    @Autowired
    MqttClientServiceImpl mqttClientService;

    private int age = 18;
    @Scheduled(fixedDelay = 5000)//每隔5秒钟执行这个方法
    public void send() {
        age++;
        WebsocketModel websocketModel = new WebsocketModel();
        websocketModel.setData(age);
        websocketModel.setType("message");
        websocketModel.setOperation("add");
        String s = new JSONObject().toJSONString(websocketModel);
        System.out.println("MqttProducer:" + s);
        mqttClientService.sendMessage(DA_TOPIC,s);

    }

}
