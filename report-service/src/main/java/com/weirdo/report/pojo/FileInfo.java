package com.ryoma.report.pojo;

import java.io.Serializable;

/**
 *
 *@Author :ML.Zhang
 *@Date :2018/7/19
 *@Description :文件实体
 */
public class FileInfo implements Serializable {
    /**
     * 文件物理id
     */
    private Long fileId;

    /**
     * 文件引用id(作为外键来使用)
     */
    private Long msgId;

    /**
     * 文件返回的id
     */
    private String backId;

    /**
     * 文件名称
     */
    private String fileName;

    /**
     * 文件来源类型
     */
    private String sourceType;

    private static final long serialVersionUID = 1L;

    public Long getFileId() {
        return fileId;
    }

    public void setFileId(Long fileId) {
        this.fileId = fileId;
    }

    public Long getMsgId() {
        return msgId;
    }

    public void setMsgId(Long msgId) {
        this.msgId = msgId;
    }

    public String getBackId() {
        return backId;
    }

    public void setBackId(String backId) {
        this.backId = backId == null ? null : backId.trim();
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName == null ? null : fileName.trim();
    }

    public String getSourceType() {
        return sourceType;
    }

    public void setSourceType(String sourceType) {
        this.sourceType = sourceType == null ? null : sourceType.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", fileId=").append(fileId);
        sb.append(", msgId=").append(msgId);
        sb.append(", backId=").append(backId);
        sb.append(", fileName=").append(fileName);
        sb.append(", sourceType=").append(sourceType);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}