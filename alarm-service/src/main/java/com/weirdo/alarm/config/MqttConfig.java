package com.weirdo.alarm.config;

import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.integration.mqtt.core.DefaultMqttPahoClientFactory;
import org.springframework.integration.mqtt.outbound.MqttPahoMessageHandler;

/**
 * <p>
 * MQTT配置
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/13
 */
@Configuration
public class MqttConfig {

    @Value("${activemq.user}")
    private String user;

    @Value("${activemq.password}")
    private String password;

    @Value("${mqtt_url}")
    private String url;

    @Value("${mqtt_clientId}")
    private String clientId;


    @Bean
    public MemoryPersistence memoryPersistence(){
        return new MemoryPersistence();
    }

    @Bean
    public DefaultMqttPahoClientFactory DefaultMqttPahoClientFactory(){
        DefaultMqttPahoClientFactory defaultMqttPahoClientFactory = new DefaultMqttPahoClientFactory();
        defaultMqttPahoClientFactory.setKeepAliveInterval(60);
        defaultMqttPahoClientFactory.setCleanSession(false);
        defaultMqttPahoClientFactory.setConnectionTimeout(30);
        defaultMqttPahoClientFactory.setPersistence(new MemoryPersistence());
        defaultMqttPahoClientFactory.setUserName(user);
        defaultMqttPahoClientFactory.setPassword(password);
        return defaultMqttPahoClientFactory;
    }

    @Bean
    public MqttPahoMessageHandler mqttPahoMessageHandler(){
        MqttPahoMessageHandler mqttPahoMessageHandler = new MqttPahoMessageHandler(url, clientId, new DefaultMqttPahoClientFactory()) ;
        mqttPahoMessageHandler.setAsync(false);
        mqttPahoMessageHandler.setDefaultQos(0);
        return mqttPahoMessageHandler;
    }

}
