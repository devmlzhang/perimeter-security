package com.ryoma.common.freemarker;

import freemarker.template.Configuration;

public class FreemarkerConfiguration {
	private static Configuration config = null;

	/**
	 * Static initialization.
	 * 
	 * Initialize the configuration of Freemarker.
	 */
	static {
		config = new Configuration(Configuration.getVersion());
		config.setClassForTemplateLoading(FreemarkerConfiguration.class,
				"/template");
	}

	public static Configuration getConfiguation() {
		return config;
	}
}
