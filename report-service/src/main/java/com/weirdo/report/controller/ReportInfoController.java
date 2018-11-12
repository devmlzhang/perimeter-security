package com.weirdo.report.controller;


import com.weirdo.report.feign.ReportFeignService;
import com.weirdo.report.service.ReportInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.poi.util.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.*;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

/**
 * <p>
 *  报建管理入口
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/12
 */
@Api(value = "报建管理接口")
@RestController
@RequestMapping("/report")
public class ReportInfoController {
    private static final Logger LOGGER = LoggerFactory.getLogger(ReportInfoController.class);

    @Autowired
    private ReportInfoService reportInfoService;
    @Autowired
    private ResourceLoader resourceLoader;
    @Autowired
    private ReportFeignService reportFeignService;
    @Value("${fileName}")
    private String fileName;
    @Value("${filePath}")
    private String filePath;



    @ApiOperation("文件模版下载")
    @GetMapping("/download")
    public void downloadFile(HttpServletRequest request, HttpServletResponse response) {
        InputStream inputStream = null;
        ServletOutputStream servletOutputStream = null;
        try {
            //String filename = "模版.xlsx";
            //String path = "template/模版.xlsx";
            Resource resource = resourceLoader.getResource("classpath:" + filePath);

            response.setContentType("application/vnd.ms-excel");
            response.addHeader("Cache-Control", "no-feign, no-store, must-revalidate");
            response.addHeader("charset", "utf-8");
            response.addHeader("Pragma", "no-feign");
            String encodeName = URLEncoder.encode(fileName, StandardCharsets.UTF_8.toString());
            response.setHeader("Content-Disposition", "attachment; filename=\"" + encodeName + "\"; filename*=utf-8''" + encodeName);

            inputStream = resource.getInputStream();
            servletOutputStream = response.getOutputStream();
            IOUtils.copy(inputStream, servletOutputStream);
            response.flushBuffer();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (servletOutputStream != null) {
                    servletOutputStream.close();
                    servletOutputStream = null;
                }
                if (inputStream != null) {
                    inputStream.close();
                    inputStream = null;
                }
                // 召唤jvm的垃圾回收器
                System.gc();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }


}
