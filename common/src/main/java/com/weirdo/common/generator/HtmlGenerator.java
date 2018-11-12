package com.ryoma.common.generator;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.tool.xml.Pipeline;
import com.itextpdf.tool.xml.XMLWorker;
import com.itextpdf.tool.xml.XMLWorkerFontProvider;
import com.itextpdf.tool.xml.XMLWorkerHelper;
import com.itextpdf.tool.xml.html.CssAppliersImpl;
import com.itextpdf.tool.xml.html.Tags;
import com.itextpdf.tool.xml.net.FileRetrieve;
import com.itextpdf.tool.xml.net.ReadingProcessor;
import com.itextpdf.tool.xml.parser.XMLParser;
import com.itextpdf.tool.xml.pipeline.css.CSSResolver;
import com.itextpdf.tool.xml.pipeline.css.CssResolverPipeline;
import com.itextpdf.tool.xml.pipeline.end.PdfWriterPipeline;
import com.itextpdf.tool.xml.pipeline.html.*;
import com.ryoma.common.freemarker.FreemarkerConfiguration;
import freemarker.template.Configuration;
import freemarker.template.Template;
import org.apache.commons.lang3.StringUtils;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.Map;
/**
 * <p>
 * 模板生成
 * </p>
 *
 * @Author ML.Zhang
 * @Since 2018/11/12
 */
public class HtmlGenerator {

	/**
	 * 生成模板内容
	 */
	public static String generate(String template, Map<String, Object> variables)
			throws Exception {
		Configuration config = FreemarkerConfiguration.getConfiguation();
		Template tp = config.getTemplate(template,"UTF-8");
		StringWriter stringWriter = new StringWriter();
		BufferedWriter writer = new BufferedWriter(stringWriter);
		tp.process(variables, writer);
		String htmlStr = stringWriter.toString();
		writer.flush();
		writer.close();
		return htmlStr;
	}
	/**
	 * 生成pdf
	 * @param htmlStr
	 * @param out
	 * @throws IOException
	 * @throws DocumentException
	 */
	public static void generatePdf(String htmlStr, OutputStream out)
			throws IOException, DocumentException {
		Document document = new Document(PageSize.A4, 30, 30, 30, 30);
		document.setMargins(30, 30, 30, 30);
		PdfWriter writer = PdfWriter.getInstance(document, out);
		document.open();
		// html内容解析
		HtmlPipelineContext htmlContext = new HtmlPipelineContext(
				new CssAppliersImpl(new XMLWorkerFontProvider() {
					@Override
					public Font getFont(String fontname, String encoding,float size, final int style) {
						if (fontname == null) {
							// 操作系统需要有该字体, 没有则需要安装; 当然也可以将字体放到项目中，再从项目中读取
							fontname = "SimSun";
						}
						return super.getFont(fontname, encoding, size, style);
					}
				})) {
			@Override
			public HtmlPipelineContext clone()
					throws CloneNotSupportedException {
				HtmlPipelineContext context = super.clone();
				try {
					ImageProvider imageProvider = this.getImageProvider();
					context.setImageProvider(imageProvider);
				} catch (NoImageProviderException e) {
				}
				return context;
			}
		};
		// 图片解析
		htmlContext.setImageProvider(new AbstractImageProvider() {
			@Override
			public String getImageRootPath() {
				return "";
			}

			@Override
			public Image retrieve(String src) {
				if (StringUtils.isEmpty(src)) {
					return null;
				}
				try {
					Image image = Image.getInstance(src);
					image.setAbsolutePosition(400, 400);
					if (image != null) {
						store(src, image);
						return image;
					}
				} catch (Throwable e) {
					e.printStackTrace();
				}
				return super.retrieve(src);
			}
		});
		htmlContext.setAcceptUnknown(true).autoBookmark(true)
				.setTagFactory(Tags.getHtmlTagProcessorFactory());
		// css解析
		CSSResolver cssResolver = XMLWorkerHelper.getInstance()
				.getDefaultCssResolver(true);
		cssResolver.setFileRetrieve(new FileRetrieve() {
			@Override
			public void processFromStream(InputStream in,
										  ReadingProcessor processor) throws IOException {
				try (InputStreamReader reader = new InputStreamReader(in,
						"UTF-8")) {
					int i = -1;
					while (-1 != (i = reader.read())) {
						processor.process(i);
					}
				} catch (Throwable e) {
				}
			}
			// 解析href
			@Override
			public void processFromHref(String href, ReadingProcessor processor)
					throws IOException {
				URL url = new URL(href);
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();
				conn.setRequestMethod("GET");
				conn.setConnectTimeout(5 * 1000);
				InputStream is = conn.getInputStream();

				try (InputStreamReader reader = new InputStreamReader(is,
						"UTF-8")) {
					int i = -1;
					while (-1 != (i = reader.read())) {
						processor.process(i);
					}
				} catch (Throwable e) {
					e.printStackTrace();
				}
			}
		});
		HtmlPipeline htmlPipeline = new HtmlPipeline(htmlContext,
				new PdfWriterPipeline(document, writer));
		Pipeline<?> pipeline = new CssResolverPipeline(cssResolver,
				htmlPipeline);
		XMLWorker worker = null;
		worker = new XMLWorker(pipeline, true);
		XMLParser parser = new XMLParser(true, worker,
				Charset.forName("UTF-8"));
		try (InputStream inputStream = new ByteArrayInputStream(
				htmlStr.getBytes())) {
			parser.parse(inputStream, Charset.forName("UTF-8"));
		}
		document.close();
	}
}
