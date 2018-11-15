package com.weirdo.alarm.event.dealMsg;

import com.lmax.disruptor.EventTranslatorOneArg;
import com.lmax.disruptor.RingBuffer;
import com.lmax.disruptor.dsl.Disruptor;
import com.weirdo.alarm.model.MsgModel;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class MsgModelEventProducerWithTranslator {

	@Resource
	private MsgModelDisruptorFactory msgModelDisruptorFactory;

	private static final EventTranslatorOneArg<MsgModelEvent, MsgModel> TRANSLATOR = new EventTranslatorOneArg<MsgModelEvent, MsgModel>() {
		@Override
		public void translateTo(MsgModelEvent event, long sequence, MsgModel gm) {
			event.setObject(gm);
		}
	};


	public void onData(MsgModel gm) {
		Disruptor<MsgModelEvent> disruptor = msgModelDisruptorFactory.getDisruptor();
		RingBuffer<MsgModelEvent> ringBuffer = disruptor.getRingBuffer();

		long sequence = ringBuffer.next();
		try { 
            //用上面的索引取出一个空的事件用于填充 
			MsgModelEvent event = ringBuffer.get(sequence);// for the sequence 
            event.setObject(gm); 
        } finally { 
            //发布事件 
            ringBuffer.publish(sequence); 
        } 
		
	}
}
