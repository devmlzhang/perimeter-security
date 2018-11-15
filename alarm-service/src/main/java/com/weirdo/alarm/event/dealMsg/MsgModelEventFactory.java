package com.weirdo.alarm.event.dealMsg;

import com.lmax.disruptor.EventFactory;

public class MsgModelEventFactory implements EventFactory<MsgModelEvent> {

	@Override
	public MsgModelEvent newInstance() {
		return new MsgModelEvent();
	}

}
