package com.weirdo.alarm.service;

import com.weirdo.alarm.model.ReportInfoModel;

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
    List<ReportInfoModel> getAllRoports(String proCode);


}
