package com.weirdo.alarm.event.eventhandler;

import com.lmax.disruptor.WorkHandler;
import com.weirdo.alarm.event.dealMsg.MsgModelEvent;
import com.weirdo.alarm.model.MsgModel;
import com.weirdo.alarm.service.MessageServiceImpl;
import org.apache.log4j.Logger;

public class PushMsgToAmqEventHandler implements WorkHandler<MsgModelEvent> {
	private static Logger log =Logger.getLogger(PushMsgToAmqEventHandler.class);
	//private CheckMsgService checkMsgService;

	private MessageServiceImpl messageService;

	public void setProcess(MessageServiceImpl messageService) {
		this.messageService = messageService;
	}



	@Override
	public void onEvent(MsgModelEvent event) throws Exception {
		MsgModel gm = event.getObject();
		System.out.println("gm:-------:"+gm);
		if (gm != null) {

			boolean check = true;
			messageService.send(gm);
			event.setStop(!check);
		}
	}
}
