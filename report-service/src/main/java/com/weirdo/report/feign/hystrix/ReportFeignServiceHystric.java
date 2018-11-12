package com.ryoma.report.feign.hystrix;

import com.weirdo.common.result.ResponseResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class ReportFeignServiceHystric implements com.ryoma.report.feign.ReportFeignService {
    private static final Logger LOGGER = LoggerFactory.getLogger(ReportFeignServiceHystric.class);
    @Autowired
    private com.ryoma.report.dao.DictCodeInfoDao dictCodeInfoDao;

    @Override
    public ResponseResult getDictInfos(String codeType) {
        List<com.ryoma.report.pojo.DictCodeInfo> codeInfos = dictCodeInfoDao.getDicByType(codeType);
        LOGGER.info("-----------report-service:字典断路器启动！");
        return ResponseResult.successResult(codeInfos);
    }
}
