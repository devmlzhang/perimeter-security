package com.weirdo.alarm.message;

import com.alibaba.fastjson.JSONObject;
import com.weirdo.alarm.event.dealMsg.MsgModelEventProducerWithTranslator;
import com.weirdo.alarm.model.MsgModel;
import com.weirdo.alarm.model.MyLatLng;
import com.weirdo.alarm.model.WebsocketModel;
import com.weirdo.alarm.service.MqttClientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


@Component
@EnableScheduling
@Service
public class MqttProducer {
    /**
     * 定时发送主题消息
     */

    private String DA_TOPIC = "Topic/Weirdo/DaChange";
    @Autowired
    MqttClientServiceImpl mqttClientService;
    @Autowired
    MsgModelEventProducerWithTranslator  msgModelEventProducerWithTranslator;


    @Scheduled(fixedDelay = 1000)
    public void send() {

        String msg = "xx";
        if (msg != null) {
            try {
                MsgModel mm = new MsgModel();
                MyLatLng myLatLng = new MyLatLng(106.632843+Math.random()*0.01,26.656165+Math.random()*0.01);
                mm.setData(myLatLng);
                mm.setMsgType("A");
                mm.setOriginaldata(msg);
                msgModelEventProducerWithTranslator.onData(mm);
            } catch (Exception e) {
                e.printStackTrace();

            }
        }

    }


}
