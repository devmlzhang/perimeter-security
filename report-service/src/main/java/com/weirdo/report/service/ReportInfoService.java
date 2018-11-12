package com.weirdo.report.service;

import java.util.List;

/**
 * <p>
 *  项目报建进度
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/12
 */
public interface ReportInfoService {
    /**
     * 通过项目id查询报建信息
     * @param proCode
     * @return
     */
    List<com.ryoma.report.vo.ReportInfoModel> getAllRoports(String proCode);


}
