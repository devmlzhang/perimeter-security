package com.weirdo.alarm.model;
/**
 * <p>
 * Websocket模型
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/15
 */
public class WebsocketModel {
	/**
	 * 类型
	 */
	private String type;
	/**
	 * 操作  新增（add）、删除（del）、更新（upd）、变化（change）
	 */
	private String operation;
	/**
	 * 数据类型
	 */
	private Object data;
	
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	public String getOperation() {
		return operation;
	}
	public void setOperation(String operation) {
		this.operation = operation;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "WebsocketModel{" +
				"type='" + type + '\'' +
				", operation='" + operation + '\'' +
				", data=" + data +
				'}';
	}
}