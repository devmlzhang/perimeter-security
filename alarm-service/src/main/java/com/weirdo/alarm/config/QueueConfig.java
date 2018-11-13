package com.weirdo.alarm.config;

import org.apache.activemq.command.ActiveMQQueue;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.jms.Queue;

/**
 * <p>
 *  队列
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/13
 */
@Configuration
public class QueueConfig {
    @Value("${queue}")
    private String queueName;

    @Bean
    public Queue queue() {
        return new ActiveMQQueue(queueName);
    }

}
