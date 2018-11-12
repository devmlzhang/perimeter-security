package com.ryoma.common.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @Author :ML.Zhang
 * @Date :2018/7/18
 * @Description :时间工具
 */
public class TimeUtil {

    /**
     * 通过时间秒毫秒数判断两个时间的间隔
     * @param startDate
     * @param endDate
     * @return
     */
    public static int differentDaysByMillisecond(Date startDate,Date endDate) {
        int days = (int) ((endDate.getTime() - startDate.getTime()) / (1000*3600*24));
        return days;
    }


    public static void main(String[] args) {
        String start = "2017-1-1 1:21:28";
        String end = "2018-1-2 1:21:28";
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try
        {
            Date endDate = format.parse(end);
            Date startDate = format.parse(start);

            System.out.println("两个日期的差距：" + differentDaysByMillisecond(startDate,endDate));
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
