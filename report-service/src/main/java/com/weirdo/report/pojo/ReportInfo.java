package com.ryoma.report.pojo;

import java.io.Serializable;
import java.util.Date;

public class ReportInfo implements Serializable {
    /**
     * 报建信息物理id
     */
    private Long id;

    /**
     * 项目物理id
     */
    private Long proId;

    /**
     * 报建类型
     */
    private String repConstType;

    /**
     * 文件名称
     */
    private String fileName;

    /**
     * 文件编号
     */
    private String fileCode;

    /**
     * 编撰单位
     */
    private String writeUnit;

    /**
     * 编撰人
     */
    private String writePeo;

    /**
     * 审核单位
     */
    private String checkUnit;

    /**
     * 审核状态
     */
    private String checkStatus;

    /**
     * 是否审核(0:未审核;1:已审核)
     */
    private String isCheck;

    /**
     * 审核流程
     */
    private String cheCircuit;

    /**
     * 审批人id
     */
    private Long chePeoId;

    /**
     * 审批意见
     */
    private String cheSug;

    /**
     * 新建时间
     */
    private Date creTime;

    /**
     * 修改时间
     */
    private Date upTime;

    /**
     * 数据状态
     */
    private String status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProId() {
        return proId;
    }

    public void setProId(Long proId) {
        this.proId = proId;
    }

    public String getRepConstType() {
        return repConstType;
    }

    public void setRepConstType(String repConstType) {
        this.repConstType = repConstType == null ? null : repConstType.trim();
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName == null ? null : fileName.trim();
    }

    public String getFileCode() {
        return fileCode;
    }

    public void setFileCode(String fileCode) {
        this.fileCode = fileCode == null ? null : fileCode.trim();
    }

    public String getWriteUnit() {
        return writeUnit;
    }

    public void setWriteUnit(String writeUnit) {
        this.writeUnit = writeUnit == null ? null : writeUnit.trim();
    }

    public String getWritePeo() {
        return writePeo;
    }

    public void setWritePeo(String writePeo) {
        this.writePeo = writePeo;
    }

    public String getCheckUnit() {
        return checkUnit;
    }

    public void setCheckUnit(String checkUnit) {
        this.checkUnit = checkUnit == null ? null : checkUnit.trim();
    }

    public String getCheckStatus() {
        return checkStatus;
    }

    public void setCheckStatus(String checkStatus) {
        this.checkStatus = checkStatus == null ? null : checkStatus.trim();
    }

    public String getIsCheck() {
        return isCheck;
    }

    public void setIsCheck(String isCheck) {
        this.isCheck = isCheck == null ? null : isCheck.trim();
    }

    public String getCheCircuit() {
        return cheCircuit;
    }

    public void setCheCircuit(String cheCircuit) {
        this.cheCircuit = cheCircuit == null ? null : cheCircuit.trim();
    }

    public Long getChePeoId() {
        return chePeoId;
    }

    public void setChePeoId(Long chePeoId) {
        this.chePeoId = chePeoId;
    }

    public String getCheSug() {
        return cheSug;
    }

    public void setCheSug(String cheSug) {
        this.cheSug = cheSug == null ? null : cheSug.trim();
    }

    public Date getCreTime() {
        return creTime;
    }

    public void setCreTime(Date creTime) {
        this.creTime = creTime;
    }

    public Date getUpTime() {
        return upTime;
    }

    public void setUpTime(Date upTime) {
        this.upTime = upTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }

    @Override
    public String toString() {
        return "ReportInfo{" +
                "id=" + id +
                ", proId=" + proId +
                ", repConstType='" + repConstType + '\'' +
                ", fileName='" + fileName + '\'' +
                ", fileCode='" + fileCode + '\'' +
                ", writeUnit='" + writeUnit + '\'' +
                ", writePeo='" + writePeo + '\'' +
                ", checkUnit='" + checkUnit + '\'' +
                ", checkStatus='" + checkStatus + '\'' +
                ", isCheck='" + isCheck + '\'' +
                ", cheCircuit='" + cheCircuit + '\'' +
                ", chePeoId=" + chePeoId +
                ", cheSug='" + cheSug + '\'' +
                ", creTime=" + creTime +
                ", upTime=" + upTime +
                ", status='" + status + '\'' +
                '}';
    }
}