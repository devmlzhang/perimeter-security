package com.weirdo.uiservice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <p>
 *  页面跳转
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/14
 */
@Controller
public class HomeController {

    @RequestMapping("/index")
    public String index() {
        return "index";
    }

    @RequestMapping("/pages/welcome")
    public String  welcome(){
        return "pages/welcome";
    }
}
