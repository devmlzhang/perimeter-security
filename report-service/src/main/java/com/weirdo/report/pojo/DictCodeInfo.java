package com.ryoma.report.pojo;

import java.io.Serializable;

public class DictCodeInfo implements Serializable {
    /**
     * 代码类型
     */
    private String codeType;

    /**
     * 代码说明
     */
    private String codeSpieg;

    /**
     * 代码值
     */
    private String codeValue;

    /**
     * 代码解释
     */
    private String codeDesc;

    private static final long serialVersionUID = 1L;

    public String getCodeType() {
        return codeType;
    }

    public void setCodeType(String codeType) {
        this.codeType = codeType == null ? null : codeType.trim();
    }

    public String getCodeSpieg() {
        return codeSpieg;
    }

    public void setCodeSpieg(String codeSpieg) {
        this.codeSpieg = codeSpieg == null ? null : codeSpieg.trim();
    }

    public String getCodeValue() {
        return codeValue;
    }

    public void setCodeValue(String codeValue) {
        this.codeValue = codeValue == null ? null : codeValue.trim();
    }

    public String getCodeDesc() {
        return codeDesc;
    }

    public void setCodeDesc(String codeDesc) {
        this.codeDesc = codeDesc == null ? null : codeDesc.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append(", codeType=").append(codeType);
        sb.append(", codeSpieg=").append(codeSpieg);
        sb.append(", codeValue=").append(codeValue);
        sb.append(", codeDesc=").append(codeDesc);
        sb.append("]");
        return sb.toString();
    }
}