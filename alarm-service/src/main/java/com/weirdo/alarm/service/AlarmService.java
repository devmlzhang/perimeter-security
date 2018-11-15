package com.weirdo.alarm.service;

import com.weirdo.alarm.model.MsgModel;

/**
 * <p>
 *  报警接口类
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/15
 */
public interface AlarmService {
    /**
     * 发送报警信息
     * @param gm
     */
    public void sendAlarmInfo(MsgModel gm);

    /**
     * 显示报警信息
     * @param gm
     */
    public void showAlarmInfo (MsgModel gm);
}
