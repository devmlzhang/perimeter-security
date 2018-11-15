package com.weirdo.alarm.event.config;

import com.lmax.disruptor.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
public class WaitStrategyManager {
	@Value("${waitStrategyType}")
	private String waitStrategyType;
	
	/**
	 * @return
	 */
	public WaitStrategy getWaitStrategy() {
		WaitStrategy waitStrategy;
		if ("1".equals(waitStrategyType)) {
			waitStrategy = new BlockingWaitStrategy();
		} else if ("2".equals(waitStrategyType)) {
			waitStrategy = new BusySpinWaitStrategy();
		} else if ("3".equals(waitStrategyType)) {
			waitStrategy = new LiteBlockingWaitStrategy();
		} else if ("4".equals(waitStrategyType)) {
//			waitStrategy = new PhasedBackoffWaitStrategy(2, 2, TimeUnit.MILLISECONDS, fallbackStrategy)
			waitStrategy =  PhasedBackoffWaitStrategy.withLock(2, 2, TimeUnit.MILLISECONDS);
		} else if ("5".equals(waitStrategyType)) {
			waitStrategy = new SleepingWaitStrategy();
		} else if ("6".equals(waitStrategyType)) {
			waitStrategy = new TimeoutBlockingWaitStrategy(2, TimeUnit.MILLISECONDS);
		} else if ("7".equals(waitStrategyType)) {
			waitStrategy = new YieldingWaitStrategy();
		}else if("8".equals(waitStrategyType)){
			waitStrategy = new MySleepingWaitStrategy();
		}else{
			waitStrategy = new SleepingWaitStrategy();
		}
		return waitStrategy;
	}

}
