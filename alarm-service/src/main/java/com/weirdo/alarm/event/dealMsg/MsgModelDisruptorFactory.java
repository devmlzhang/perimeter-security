package com.weirdo.alarm.event.dealMsg;


import com.lmax.disruptor.IgnoreExceptionHandler;
import com.lmax.disruptor.WaitStrategy;
import com.lmax.disruptor.dsl.Disruptor;
import com.lmax.disruptor.dsl.EventHandlerGroup;
import com.lmax.disruptor.dsl.ProducerType;
import com.weirdo.alarm.event.config.WaitStrategyManager;
import com.weirdo.alarm.event.eventhandler.PushMsgToAmqEventHandler;
import com.weirdo.alarm.event.eventhandler.SaveMsgToDatabaseEventHandler;
import com.weirdo.alarm.service.AlarmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

/**
 * <p>
 * DisruptorFactory
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/15
 */

@Service
public class MsgModelDisruptorFactory {
	static Executor executor = Executors.newCachedThreadPool();
	int bufferSize = 1024;
	static Disruptor<MsgModelEvent> disruptor;


	@Autowired
	private AlarmService alarmService;


	@Resource
	private WaitStrategyManager waitStrategyManager;

	@Value("${numberofconsumers}")
	private int NUMBEROFCONSUMERS;

	// 抛弃异常开关
	@Value("${ignoreException}")
	private boolean ignoreException;

	public Disruptor<MsgModelEvent> getDisruptor() {
		if (disruptor == null) {
			iniDisruptor();
		}
		return disruptor;
	}

	@PostConstruct
	private void iniDisruptor() {
		MsgModelEventFactory gmEventfactory = new MsgModelEventFactory();
		// 获取等待策略
		WaitStrategy waitStrategy = waitStrategyManager.getWaitStrategy();
		disruptor = new Disruptor<>(gmEventfactory, bufferSize, executor, ProducerType.MULTI, waitStrategy);

		if (ignoreException) { // 抛掉异常
			disruptor.handleExceptionsWith(new IgnoreExceptionHandler());
		}
		// 推送到AMQ中
		PushMsgToAmqEventHandler[] pushMsgToAmqEventHandlers = new PushMsgToAmqEventHandler[NUMBEROFCONSUMERS];
		for (int i = 0; i < NUMBEROFCONSUMERS; i++) {
			PushMsgToAmqEventHandler pushMsgToAmqEventHandler = new PushMsgToAmqEventHandler();
			// 设置判断类
			pushMsgToAmqEventHandler.setProcess(alarmService);
			pushMsgToAmqEventHandlers[i] = pushMsgToAmqEventHandler;
		}


		// 保存到数据库中  为了避免多线程而导致alarmid重复，所以此处使用1
		SaveMsgToDatabaseEventHandler[] savemsg2DatabaseEventHandlers = new SaveMsgToDatabaseEventHandler[1];
		for (int i = 0; i < 1; i++) {
			SaveMsgToDatabaseEventHandler saveMsgToDatabaseEventHandler = new SaveMsgToDatabaseEventHandler();
			saveMsgToDatabaseEventHandler.setProcess(alarmService);
			savemsg2DatabaseEventHandlers[i] = saveMsgToDatabaseEventHandler;
		}



		// 推送到Amq中
		// 存储到数据库中
		EventHandlerGroup<MsgModelEvent> msgModelEventEventHandlerGroup = disruptor.handleEventsWithWorkerPool(pushMsgToAmqEventHandlers);
		msgModelEventEventHandlerGroup.thenHandleEventsWithWorkerPool(savemsg2DatabaseEventHandlers);

		disruptor.start();
	}

}
