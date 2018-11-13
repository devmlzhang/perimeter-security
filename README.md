# perimeter-security
周界安防物联网

##一、模块说明
1. common:公共类
2. config-service:公共配置文件服务
3. discovery-service:服务注册与发现服务
4. gateway-service:网关服务
5. zipkin-service:链路追踪服务
6. alarm-service:报警服务
7. monitor-service:监控服务
8. ui-service:ui服务

#其他模块待续...
##二、各模块包说明
1. config:该服务配置包
2. controller:控制器包
3. dao:持久层接口
4. service:业务接口
5. pojo:持久层实体包
6. model:业务实体包
7. feign:服务调用与熔断机制包

##二、地址说明 
* [监控服务swagger地址](http://loaclhost:8763/swagger-ui.html)
* [报警服务swagger地址](http://loaclhost:8765/swagger-ui.html)
* [网关地址](http://loaclhost:8762/) 

##三、服务端口占用
* 服务名                     端口
  
* zipkin-service            9411
* config-service            8760
* discovery-service         8761
* gateway-service           8762
* monitor-service           8763
* ui-service                8764
* alarm-service             8765

