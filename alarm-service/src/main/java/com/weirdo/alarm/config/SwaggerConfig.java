package com.weirdo.alarm.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * <p>
 *  swagger配置
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/12
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket config() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.weirdo.alarm.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("报警文档接口")
                .version("1.0.0")
                .license("右键保存为Json")
                .licenseUrl("http://localhost:8766/v2/api-docs")
                .contact(new Contact("ML.Zhang", "http://localhost:8766/swagger-ui.html", "dev_mlzhang@163.com"))
                .build();
    }

}

