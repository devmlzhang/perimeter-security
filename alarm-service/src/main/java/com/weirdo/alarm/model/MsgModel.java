package com.weirdo.alarm.model;


public class MsgModel {

	private Object data;   //消息数据模型 入侵警告和设备异常
	private String originaldata;//消息原始数据
	private String  msgType;//消息类型   A：alarm，D：device

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
