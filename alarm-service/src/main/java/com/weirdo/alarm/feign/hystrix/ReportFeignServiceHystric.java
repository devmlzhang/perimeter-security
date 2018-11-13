package com.weirdo.alarm.feign.hystrix;

import com.weirdo.common.result.ResponseResult;
import com.weirdo.alarm.dao.DictCodeInfoDao;
import com.weirdo.alarm.feign.ReportFeignService;
import com.weirdo.alarm.pojo.DictCodeInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class ReportFeignServiceHystric implements ReportFeignService {
    private static final Logger LOGGER = LoggerFactory.getLogger(ReportFeignServiceHystric.class);
    @Autowired
    private DictCodeInfoDao dictCodeInfoDao;

    @Override
    public ResponseResult getDictInfos(String codeType) {
        List<DictCodeInfo> codeInfos = dictCodeInfoDao.getDicByType(codeType);
        LOGGER.info("-----------report-service:字典断路器启动！");
        return ResponseResult.successResult(codeInfos);
    }
}
