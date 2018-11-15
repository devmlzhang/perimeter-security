package com.weirdo.alarm.event.eventhandler;

import com.lmax.disruptor.WorkHandler;
import com.weirdo.alarm.event.dealMsg.MsgModelEvent;
import com.weirdo.alarm.model.MsgModel;
import com.weirdo.alarm.service.AlarmService;
import org.apache.log4j.Logger;

/**
 * <p>
 *  推送信息到AMQ
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/15
 */
public class PushMsgToAmqEventHandler implements WorkHandler<MsgModelEvent> {
	private static Logger log =Logger.getLogger(PushMsgToAmqEventHandler.class);

	private AlarmService alarmService;

	public void setProcess(AlarmService alarmService) {
		this.alarmService = alarmService;
	}

	@Override
	public void onEvent(MsgModelEvent event) throws Exception {
		MsgModel gm = event.getObject();
		System.out.println("gm:-------:"+gm);
		if (gm != null) {
			boolean check = true;
			alarmService.sendAlarmInfo(gm);
			event.setStop(!check);
		}
	}
}
