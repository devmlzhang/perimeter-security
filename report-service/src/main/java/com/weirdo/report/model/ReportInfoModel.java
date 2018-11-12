package com.ryoma.report.vo;

import com.ryoma.report.pojo.FileInfo;
import com.ryoma.report.pojo.ReportInfo;

import java.util.List;


/**
 * @Author :ML.Zhang
 * @Date :2018/7/24
 * @Description :报建信息业务实体
 */
public class ReportInfoModel extends ReportInfo {

    /**
     * 报建进度类型名
     */
    private String repConstTypeName;

    /**
     * 编撰人
     */
    private String writePeo;

    /**
     * 附件列表
     */
    private List<FileInfo> files;



    public String getRepConstTypeName() {
        return repConstTypeName;
    }

    public void setRepConstTypeName(String repConstTypeName) {
        this.repConstTypeName = repConstTypeName;
    }

    public String getWritePeo() {
        return writePeo;
    }

    public void setWritePeo(String writePeo) {
        this.writePeo = writePeo;
    }

    public List<FileInfo> getFiles() {
        return files;
    }

    public void setFiles(List<FileInfo> files) {
        this.files = files;
    }
}
