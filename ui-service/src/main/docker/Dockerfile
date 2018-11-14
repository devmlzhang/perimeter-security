FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD ui-service.jar ui-service.jar
RUN sh -c 'touch /ui-service.jar'
#时间同步
ENV TZ=Asia/Shanghai
RUN apk add tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /ui-service.jar" ]
