package com.weirdo.alarm.util;

import org.apache.commons.lang.StringUtils;

/**
 * 椭球体计算 精确计算
 * @author shenguoshan
 *
 */
public class CalculationEllipticEarth {
	/**
	* ** a, b, c, alpha, e, e2, W, V As Double
	'a      长轴半径
	'b      短轴
	'c      极曲率半径
	'alpha  扁率
	'e      第一偏心率
	'e2     第二偏心率
	'W      第一基本纬度函数
	'V      第二基本纬度函数
	** B1, L1, B2, L2 As Double
	'B1   点1的纬度
	'L1  点1的经度
	'B2   点1的纬度
	'L2  点2的经度
	** S As Double  '''''大地线长度
	** A1, A2 As Double
	'A1     点1到点2的方位角
	'A2     点2到点1的方位角
	*/
	private   final static double pi=Math.PI;
	private   final static double M_RAD = 1.74532925199433E-02;
	private static double a,b,c,alpha,e,e2,w,V;
	private static double B1;
	private static double L1;
	private static double B2;
	private static double L2;
	private static double s;
	private static double A1;
	private static double A2;
    private static final double R = 6371229;              //地球的半径
	private static void getellipseparameter(){
	/**
	* 椭球体 长半轴 a（米）短半轴b（米）
	Krassovsky （北京54采用）6378245 6356863.0188
	IAG 75（西安80采用）     6378140 6356755.2882
	WGS 84 6378137 6356752.3142
	*/
	//a = 6378140;//6378245;//6378137
	//b = 6356755.2882;
	a=6378137;
	b=6356752.3142;
	c = Math.pow(a,2)/b;
	alpha = (a-b)/a;
	e = Math.sqrt(Math.pow(a,2)-Math.pow(b,2))/a;
	e2 = Math.sqrt(Math.pow(a,2)-Math.pow(b,2))/b;
	}

	private static void computerw() {
		w = Math.sqrt(1 - Math.pow(e, 2) * (Math.pow(Math.sin(B1), 2)));
		V = w * (a / b);
	}
	/**
	* 获取数值的正负号
	* @param v
	* @return
	*/
	private static int Sgn(double v) {
		if (v > 0) {
			return 1;
		} else if (v < 0) {
			return -1;
		} else {
			return 0;
		}
	}
	/**
	* 　1弧度约为57°17'44.806''，1°为π/180，近似值为0.01745弧度，周角为2π弧度，平角（即180°角）为π弧度，直角为π/2弧度。
	* 已知角度求弧度
	* @param angle_d
	* @return
	*/
	public static double rad(double angle_d){
	double rad = angle_d * Math.PI / 180;
	return rad;
	}
	/**
	* 用于计算从指定的 LatLng 出发，按某个方向行进指定距离所得到的 LatLng。
	* @param STARTLAT 起点维度
	* @param STARTLONG 起点经度
	* @param ANGLE1  起点到终点的方位角
	* @param DISTANCE 距离长度
	* @return  经纬度
	*/
	public static double[] computeOffset(double STARTLONG, double STARTLAT, double ANGLE1, double DISTANCE) {// 正算
		double sinu1, cosu1, sinA0, cotq1, sin2q1, cos2q1, cos2A0;
		double k2, q0, sin2q1q0, cos2q1q0;
		double q;
		double theta;
		double aa, BB, cc, EE22, AAlpha, BBeta;
		double sinu2, lamuda;
		double e1;
		double W1;
		B1 = STARTLAT;
		L1 = STARTLONG;
		A1 = ANGLE1;
		s = DISTANCE;
		//
		getellipseparameter();

		if (B1 == 0) {
			if (A1 == 90) {
				A2 = 270;
				B2 = 0;
				L2 = L1 + s / a * 180 / Math.PI;
			}
			if (A1 == 270) {
				A2 = 90;
				B2 = 0;
				L2 = L1 - s / a * 180 / Math.PI;
			}
			return null;
		}
		B1 = rad(B1); // 弧度函数
		L1 = rad(L1);
		A1 = rad(A1);
		computerw();
		e1 = e;
		W1 = w;
		sinu1 = Math.sin(B1) * Math.sqrt(1 - e1 * e1) / W1;
		cosu1 = Math.cos(B1) / W1;
		sinA0 = cosu1 * Math.sin(A1);
		cotq1 = cosu1 * Math.cos(A1);
		sin2q1 = 2 * cotq1 / (Math.pow(cotq1, 2) + 1);
		cos2q1 = (Math.pow(cotq1, 2) - 1) / (Math.pow(cotq1, 2) + 1);
		cos2A0 = 1 - Math.pow(sinA0, 2);
		e2 = Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2)) / b;
		k2 = e2 * e2 * cos2A0;
		aa = b * (1 + k2 / 4 - 3 * k2 * k2 / 64 + 5 * k2 * k2 * k2 / 256);
		BB = b * (k2 / 8 - k2 * k2 / 32 + 15 * k2 * k2 * k2 / 1024);
		cc = b * (k2 * k2 / 128 - 3 * k2 * k2 * k2 / 512);
		e2 = e1 * e1;
		// 计算扁率
		AAlpha = (e2 / 2 + e2 * e2 / 8 + e2 * e2 * e2 / 16) - (e2 * e2 / 16 + e2 * e2 * e2 / 16) * cos2A0
				+ (3 * e2 * e2 * e2 / 128) * cos2A0 * cos2A0;
		BBeta = (e2 * e2 / 32 + e2 * e2 * e2 / 32) * cos2A0 - (e2 * e2 * e2 / 64) * cos2A0 * cos2A0;
		q0 = (s - (BB + cc * cos2q1) * sin2q1) / aa;
		sin2q1q0 = sin2q1 * Math.cos(2 * q0) + cos2q1 * Math.sin(2 * q0);
		cos2q1q0 = cos2q1 * Math.cos(2 * q0) - sin2q1 * Math.sin(2 * q0);
		q = q0 + (BB + 5 * cc * cos2q1q0) * sin2q1q0 / aa;
		// theta = (AAlpha * q + BBeta * (sin2q1q0 - sin2q1)) * sinA0;
		theta = (AAlpha * q + BBeta * (sin2q1q0 - sin2q1)) * sinA0;
		sinu2 = sinu1 * Math.cos(q) + cosu1 * Math.cos(A1) * Math.sin(q);
		B2 = Math.atan(sinu2 / (Math.sqrt(1 - e1 * e1) * Math.sqrt(1 - sinu2 * sinu2))) * 180 / Math.PI;
		lamuda = Math.atan(Math.sin(A1) * Math.sin(q) / (cosu1 * Math.cos(q) - sinu1 * Math.sin(q) * Math.cos(A1)))
				* 180 / Math.PI;
		if (Math.sin(A1) > 0) {
			if (Math.sin(A1) * Math.sin(q) / (cosu1 * Math.cos(q) - sinu1 * Math.sin(q) * Math.cos(A1)) > 0) {
				lamuda = Math.abs(lamuda);
			} else {
				lamuda = 180 - Math.abs(lamuda);
			}
		} else {
			if (Math.sin(A1) * Math.sin(q) / (cosu1 * Math.cos(q) - sinu1 * Math.sin(q) * Math.cos(A1)) > 0) {
				lamuda = Math.abs(lamuda) - 180;
			} else {
				lamuda = -Math.abs(lamuda);
			}
		}
		L2 = L1 * 180 / Math.PI + lamuda - theta * 180 / Math.PI;
		A2 = Math.atan(cosu1 * Math.sin(A1) / (cosu1 * Math.cos(q) * Math.cos(A1) - sinu1 * Math.sin(q))) * 180
				/ Math.PI;
		if (Math.sin(A1) > 0) {
			if (cosu1 * Math.sin(A1) / (cosu1 * Math.cos(q) * Math.cos(A1) - sinu1 * Math.sin(q)) > 0) {
				A2 = 180 + Math.abs(A2);
			} else {
				A2 = 360 - Math.abs(A2);
			}
		} else {
			if (cosu1 * Math.sin(A1) / (cosu1 * Math.cos(q) * Math.cos(A1) - sinu1 * Math.sin(q)) > 0) {
				A2 = Math.abs(A2);
			} else {
				A2 = 180 - Math.abs(A2);
			}
		}
		// System.out.println(B2+","+L2);
		return new double[] { L2, B2 };
	}
	
	  /**
     * 计算入侵物的位置坐标
     * 原点为雷达所处的位置(0,0),(x,y)为相对位置坐标
     * @param x 相对原点的x距离 单位：米
     * @param y 相对原点y距离 单位：米
     * @param lon 原点所在的经度
     * @param lat 原点所在的经度
     * @param angle 雷达的投射中轴线与正北的夹角 单位度，（夹角为逆时针的角度）
     * @return [lon,lat] 位置坐标
     */
	public static Double[] getRealPosition(double x, double y, double lon, double lat, double angle) {
		
		double azimuth=360-angle;//相对方位角
        x=-x;
		double tan = x / y;// 正切值
		double atan = Math.atan(tan);// 反正切值
		double brng = Math.toDegrees(atan);// 与Y轴的夹角
		if (brng < 0)
			brng = brng + 360;
		double realAzimuth = (brng + azimuth) % 360;// 绝对方位角
		double distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
		double[] lonLat = computeOffset(lon, lat, realAzimuth, distance);
		return new Double[]{lonLat[0],lonLat[1]};
	}

	/**
	 * 根据雷达的坐标（起点）、防区长度、雷达的投射中轴线与正北的夹角 计算防区终点坐标
	 * @param lon 雷达坐标经度
	 * @param lat 雷达坐标纬度
	 * @param angle 雷达的投射中轴线与正北的夹角，（夹角为逆时针的角度）
	 * @param distance 防区长度（单位米）
	 * @return
	 */
	public static Double[] getEndPoint(double lon, double lat, double angle,double distance){

		double azimuth=360-angle;
		double[] lonLat = computeOffset(lon, lat, azimuth, distance);

		return new Double[]{lonLat[0],lonLat[1]};
	}
	
	
	public static void main(String[] args) {
			
		double centerLon=0;
        double centerLat=0;
        
        //double x=-50d;
        //double y=50d;
        //double angle=90d;

        double x=1d;
        double y=1d;
        double angle=90d;
        
        long s=System.currentTimeMillis();
        // Double[] realPosition = CalculationEllipticEarth.getRealPosition(x,y, centerLon, centerLat, angle);
      //  System.out.println(StringUtils.join(realPosition,";"));
         
        long e=System.currentTimeMillis();

       // System.out.println("精确计算，耗时间毫秒："+(e-s));
        s=System.currentTimeMillis();
        for(int i=0;i<1;i++){

        Double[] realPosition2 = CalculationSphereEarth.getRealPosition(x,y, centerLon, centerLat, angle);
        
        System.out.println(StringUtils.join(realPosition2,";"));
        }
        e=System.currentTimeMillis();
        System.out.println("模糊计算，耗时间毫秒："+(e-s));

    
	}
}