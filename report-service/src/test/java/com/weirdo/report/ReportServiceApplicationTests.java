package com.ryoma.report;

import com.ryoma.report.dao.FileInfoDao;
import com.ryoma.report.dao.ReportInfoDao;
import com.ryoma.report.pojo.FileInfo;
import com.ryoma.report.pojo.ReportInfo;
import com.ryoma.report.service.ReportInfoService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.FileInputStream;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ReportServiceApplicationTests {
	@Autowired
	private ReportInfoDao reportInfoDao;
	@Autowired
	ReportInfoService reportInfoService;
	@Autowired
	FileInfoDao fileInfoDao;

	@Test
	public void files() {
		List<FileInfo> fileInfos = fileInfoDao.getFileInfos(2L);
		System.out.println(fileInfos.toString());
	}

	@Test
	public void getReportInfos() {
		List<com.ryoma.report.vo.ReportInfoModel> roports = reportInfoService.getAllRoports("xm20170612");
		System.out.println(roports.toString());

	}

	@Test
	public void getReportTypeInfo() {

	}

	@Test
	public void excel() throws  Exception {
		FileInputStream in = new FileInputStream("/Users/weirdo/模版.xlsx");
		//ReportInfo reportByExcel = ExcelUtil.getReportByExcel(in);

	}


	@Test
	public void contextLoads() {
		ReportInfo reportInfo = reportInfoDao.selectByPrimaryKey(1L);
		System.out.println(reportInfo.toString());
	}

}
