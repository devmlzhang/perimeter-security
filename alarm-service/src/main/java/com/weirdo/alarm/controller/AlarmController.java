package com.weirdo.alarm.controller;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * <p>
 *  报建管理入口
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/12
 */
@Api(value = "报警接口")
@RestController
@RequestMapping("/alarm")
public class AlarmController {
    private static final Logger LOGGER = LoggerFactory.getLogger(AlarmController.class);



    @Value("${fileName}")
    private String fileName;
    @Value("${filePath}")
    private String filePath;



    @ApiOperation("文件模版下载")
    @GetMapping("/download")
    public void downloadFile(HttpServletRequest request, HttpServletResponse response) {

    }


}
