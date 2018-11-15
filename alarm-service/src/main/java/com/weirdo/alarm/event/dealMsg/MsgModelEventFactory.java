package com.weirdo.alarm.event.dealMsg;

import com.lmax.disruptor.EventFactory;
/**
 * <p>
 *  事件工厂
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/15
 */
public class MsgModelEventFactory implements EventFactory<MsgModelEvent> {

	@Override
	public MsgModelEvent newInstance() {
		return new MsgModelEvent();
	}

}
