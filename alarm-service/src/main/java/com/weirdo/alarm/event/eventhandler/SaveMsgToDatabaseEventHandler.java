package com.weirdo.alarm.event.eventhandler;


import com.lmax.disruptor.WorkHandler;
import com.weirdo.alarm.event.dealMsg.MsgModelEvent;
import com.weirdo.alarm.model.MsgModel;
import com.weirdo.alarm.service.AlarmService;
import org.apache.log4j.Logger;

/**
 * <p>
 *  保存到数据库
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/15
 */
public class SaveMsgToDatabaseEventHandler implements WorkHandler<MsgModelEvent> {
	private static Logger logger = Logger.getLogger(SaveMsgToDatabaseEventHandler.class);

	private AlarmService alarmService;

	public void setProcess(AlarmService alarmService) {
		this.alarmService = alarmService;
	}

	@Override
	public void onEvent(MsgModelEvent event) throws Exception {
		if(event.isStop()){// 校验未通过
			return;
		}
		MsgModel gm = event.getObject();
		alarmService.showAlarmInfo(gm);
	}

}
