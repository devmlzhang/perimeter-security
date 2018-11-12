package com.ryoma.report.service.impl;

import com.ryoma.report.dao.FileInfoDao;
import com.ryoma.report.dao.ReportInfoDao;
import com.ryoma.report.pojo.ReportInfo;
import com.ryoma.report.service.ReportInfoService;
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
    public List<com.ryoma.report.vo.ReportInfoModel> getAllRoports(String proCode) {
        List<com.ryoma.report.vo.ReportInfoModel> list = new ArrayList<>();
        //查询所有报建信息
        List<ReportInfo> allRoports = reportInfoDao.getAllRoports(proCode);
        try {
            for(ReportInfo reportInfo : allRoports){
                com.ryoma.report.vo.ReportInfoModel reportInfoVO = new com.ryoma.report.vo.ReportInfoModel();
                BeanUtils.copyProperties(reportInfo,reportInfoVO);
                list.add(reportInfoVO);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
