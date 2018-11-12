package com.ryoma.report.dao;

import com.ryoma.report.pojo.DictCodeInfo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface DictCodeInfoDao {
    /**
     * 查询所有字典信息
     * @return
     */
    List<DictCodeInfo> getAllDicts();

    /**
     * 通过类型查询字典信息
     */
    List<DictCodeInfo> getDicByType(@RequestParam("codeType") String codeType);

    /**
     * 通过代码类型及代码值查询字典信息
     * @param codeType
     * @param codeValue
     * @return
     */
    DictCodeInfo getDictByTypeVaule(@Param("codeType") String codeType, @Param("codeValue") String codeValue);
}