package com.weirdo.alarm.model;

/**
 * <p>
 *  消息模型
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/15
 */
public class MsgModel {

	/**
	 * 消息数据模型
	 */
	private Object data;
	/**
	 * 消息原始数据
	 */
	private String originaldata;
	/**
	 * 消息类型
	 */
	private String  msgType;

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}
	

	public String getOriginaldata() {
		return originaldata;
	}

	public void setOriginaldata(String originaldata) {
		this.originaldata = originaldata;
	}

	public String getMsgType() {
		return msgType;
	}

	public void setMsgType(String msgType) {
		this.msgType = msgType;
	}

}
