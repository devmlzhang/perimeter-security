package com.ryoma.report.dao;

import com.ryoma.report.pojo.FileInfo;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface FileInfoDao {
    int deleteFileInfoById(Long fileId);

    int saveFileInfo(FileInfo record);

    /**
     * 报建物理id查询文件信息
     * @param id
     * @return
     */
    List<FileInfo> getFileInfos(Long id);

    int updateFileInfoById(FileInfo record);
}