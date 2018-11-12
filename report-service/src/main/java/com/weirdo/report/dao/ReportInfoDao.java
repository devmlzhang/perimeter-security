package com.weirdo.report.dao;

import com.weirdo.report.pojo.ReportInfo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportInfoDao {
    int deleteById(Long id);

    int insertSelective(ReportInfo record);

    ReportInfo selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(ReportInfo record);

    /**
     * 通过项目id查询报建信息
     * @param proCode
     * @return
     */
    List<ReportInfo> getAllRoports(String proCode);

}