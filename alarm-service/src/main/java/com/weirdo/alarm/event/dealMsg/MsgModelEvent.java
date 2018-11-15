package com.weirdo.alarm.event.dealMsg;


import com.weirdo.alarm.model.MsgModel;
/**
 * <p>
 *  事件
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/15
 */
public class MsgModelEvent {
	private MsgModel object;
	
	/**
	 * 是否终止事件传递
	 */
	private boolean isStop;

	public MsgModel getObject() {
		return object;
	}

	public void setObject(MsgModel  object) {
		this.object = object;
	}

	public boolean isStop() {
		return isStop;
	}

	public void setStop(boolean isStop) {
		this.isStop = isStop;
	}
	

}
