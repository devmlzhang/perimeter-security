package com.weirdo.alarm.event.eventhandler;


import com.lmax.disruptor.WorkHandler;
import com.weirdo.alarm.event.dealMsg.MsgModelEvent;
import com.weirdo.alarm.model.MsgModel;
import com.weirdo.alarm.service.MessageServiceImpl;
import org.apache.log4j.Logger;

public class SaveMsgToDatabaseEventHandler implements WorkHandler<MsgModelEvent> {
	private static Logger logger = Logger.getLogger(SaveMsgToDatabaseEventHandler.class);

	private MessageServiceImpl messageService;

	public void setProcess(MessageServiceImpl messageService) {
		this.messageService = messageService;
	}

	@Override
	public void onEvent(MsgModelEvent event) throws Exception {
		if(event.isStop()){// 校验未通过
			return;
		}
		MsgModel gm = event.getObject();
		System.out.println("SaveMsgToDatabaseEventHandler-----:"+gm);
		messageService.show(gm);
		//saveMsgToDatabaseProcess.saveMsg(gm);
	}

}
