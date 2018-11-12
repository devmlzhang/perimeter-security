package com.weirdo.common.result;

/**
 * <p>
 *  公用返回结果类
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/12
 */
public class ResponseResult {

	/**返回错误编码*/
	private int errcode;
	/**返回错误信息*/
	private String errmsg;
	/**返回结果*/
	private Object result;

	public int getErrcode() {
		return errcode;
	}
	public void setErrcode(int errcode) {
		this.errcode = errcode;
	}
	public String getErrmsg() {
		return errmsg;
	}
	public void setErrmsg(String errmsg) {
		this.errmsg = errmsg;
	}
	public Object getResult() {
		return result;
	}
	public void setResult(Object result) {
		this.result = result;
	}

	@Override
	public String toString() {
		return "ResponseResult [errcode=" + errcode + ", errmsg=" + errmsg + ", result=" + result + "]";
	}

	public ResponseResult() {
	}

	public ResponseResult(int errcode, String errmsg, Object result) {
		super();
		this.errcode = errcode;
		this.errmsg = errmsg;
		this.result = result;
	}

	public ResponseResult(int errcode, String errmsg) {
		super();
		this.errcode = errcode;
		this.errmsg = errmsg;
	}

	/**处理成功返回 无返回内容*/
	public static ResponseResult successResult(){
		return new ResponseResult(ResultEnum.RESULT_SUCCESS.getCode(),
				ResultEnum.RESULT_SUCCESS.getValue()
		);
	}

	/**处理成功返回*/
	public static ResponseResult successResult(Object obj){
		return new ResponseResult(ResultEnum.RESULT_SUCCESS.getCode(),
				ResultEnum.RESULT_SUCCESS.getValue(),
				obj);
	}

	/**处理失败返回*/
	public static ResponseResult errorResult(Object obj){
		return new ResponseResult(ResultEnum.RESULT_ERROR.getCode(),
				ResultEnum.RESULT_ERROR.getValue(),
				obj);
	}

	/**处理失败返回  无返回内容*/
	public static ResponseResult errorResult(){
		return new ResponseResult(ResultEnum.RESULT_ERROR.getCode(),
				ResultEnum.RESULT_ERROR.getValue()
		);
	}

	/**参数错误返回*/
	public static ResponseResult paramsErrorResult(){
		return new ResponseResult(ResultEnum.PARAM_ERROR.getCode(),
				ResultEnum.PARAM_ERROR.getValue()
		);
	}

	/**处理失败返回  无返回内容*/
	public static ResponseResult errorString(String errmsg){
		return new ResponseResult(ResultEnum.RESULT_ERROR.getCode(),
				errmsg
		);
	}

}
