package com.weirdo.uiservice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <p>
 *
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/13
 */
@Controller
public class IndexController {

    @RequestMapping("/index")
    public String index( ){
        return "index";
    }
}
