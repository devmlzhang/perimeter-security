package com.weirdo.common.result;

/**
 * <p>
 *  errorcode-msg 枚举
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/12
 */
public enum ResultEnum {

    /**成功处理*/
    RESULT_SUCCESS(0,"处理成功"),
    /**处理业务失败*/
    RESULT_ERROR(500,"处理错误"),
    /**参数验证失败*/
    PARAM_ERROR(501,"参数错误");


    /**返回编码*/
    private int code;
    /**返回描述*/
    private String value;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    ResultEnum(int code, String value){
        this.code=code;
        this.value=value;
    }
}
