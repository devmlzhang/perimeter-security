package com.weirdo.alarm.feign.hystrix;

import com.weirdo.common.result.ResponseResult;
import com.weirdo.alarm.feign.ReportFeignService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class ReportFeignServiceHystric implements ReportFeignService {
    private static final Logger LOGGER = LoggerFactory.getLogger(ReportFeignServiceHystric.class);

    @Override
    public ResponseResult getDictInfos(String codeType) {

        LOGGER.info("-----------report-service:字典断路器启动！");
        return ResponseResult.successResult();
    }
}
