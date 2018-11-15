package com.weirdo.alarm.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.weirdo.alarm.constant.Constant;
import com.weirdo.alarm.model.MsgModel;
import com.weirdo.alarm.service.AlarmService;
import com.weirdo.alarm.service.MqttClientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  报警接口实现类
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/15
 */
@Service
public class AlarmServiceImpl implements AlarmService {


    @Autowired
    MqttClientServiceImpl mqttClientService;

    @Override
    public void sendAlarmInfo(MsgModel gm) {
        mqttClientService.sendMessage(Constant.ALARM_TOPIC, JSONObject.toJSONString(gm));
    }

    @Override
    public void showAlarmInfo(MsgModel gm) {
        System.out.println("showAlarmInfo:"+gm.getData().toString());

    }
}
