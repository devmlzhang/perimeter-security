package com.ryoma.report.feign;

import com.ryoma.report.feign.hystrix.ReportFeignServiceHystric;
import com.weirdo.common.result.ResponseResult;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * <p>
 *  远程调用
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/12
 */
@Service
@FeignClient(value = "sys-service",fallback = ReportFeignServiceHystric.class)
public interface ReportFeignService {
    @RequestMapping(value = "/sys/dictinfos", method = RequestMethod.GET)
    ResponseResult getDictInfos(@RequestParam("codeType") String codeType);
}
