package com.weirdo.alarm.service;

import com.weirdo.alarm.model.MsgModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/15
 */
@Service
public class MessageServiceImpl {

    private String DA_TOPIC = "Topic/Weirdo/DaChange";
    @Autowired
    MqttClientServiceImpl mqttClientService;

    public void send(MsgModel gm) {
        mqttClientService.sendMessage(DA_TOPIC,gm.toString());

    }

    public void show (MsgModel gm) {
        System.out.println("show:"+gm.toString());
    }
}
