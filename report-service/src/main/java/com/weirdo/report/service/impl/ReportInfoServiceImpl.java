package com.weirdo.report.service.impl;


import com.weirdo.report.dao.FileInfoDao;
import com.weirdo.report.dao.ReportInfoDao;
import com.weirdo.report.model.ReportInfoModel;
import com.weirdo.report.pojo.ReportInfo;
import com.weirdo.report.service.ReportInfoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 *  项目报建信息实现类
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/12
 */
@Service("reportInfoService")
public class ReportInfoServiceImpl implements ReportInfoService {

    @Autowired
    private ReportInfoDao reportInfoDao;
    @Autowired
    private FileInfoDao fileInfoDao;



    @Override
    public List<ReportInfoModel> getAllRoports(String proCode) {
        List<ReportInfoModel> list = new ArrayList<>();
        //查询所有报建信息
        List<ReportInfo> allRoports = reportInfoDao.getAllRoports(proCode);
        try {
            for(ReportInfo reportInfo : allRoports){
                ReportInfoModel reportInfoVO = new ReportInfoModel();
                BeanUtils.copyProperties(reportInfo,reportInfoVO);
                list.add(reportInfoVO);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
