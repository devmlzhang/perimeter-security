package com.weirdo.alarm.model;

public class MyLatLng {
	public final static double Rc = 6378137;
	public final static double Rj = 6356725;
	public double m_LoDeg, m_LoMin, m_LoSec;
	public double m_LaDeg, m_LaMin, m_LaSec;
	public double m_Longitude, m_Latitude;
	public double m_RadLo, m_RadLa;
	public double Ec;
	public double Ed;
	public double longitude;
	public double latitude;

	/**
	 * 
	 * @param longitude
	 *            经度
	 * @param latitude
	 *            纬度
	 */
	public MyLatLng(double longitude, double latitude) {
		m_LoDeg = (int) longitude;
		m_LoMin = (int) ((longitude - m_LoDeg) * 60);
		m_LoSec = (longitude - m_LoDeg - m_LoMin / 60.) * 3600;

		m_LaDeg = (int) latitude;
		m_LaMin = (int) ((latitude - m_LaDeg) * 60);
		m_LaSec = (latitude - m_LaDeg - m_LaMin / 60.) * 3600;

		m_Longitude = longitude;
		m_Latitude = latitude;
		m_RadLo = longitude * Math.PI / 180.;
		m_RadLa = latitude * Math.PI / 180.;
		Ec = Rj + (Rc - Rj) * (90. - m_Latitude) / 90.;
		Ed = Ec * Math.cos(m_RadLa);
		this.longitude=longitude;
		this.latitude=latitude;
	}

	@Override
	public String toString() {
		return "MyLatLng{" +
				"m_LoDeg=" + m_LoDeg +
				", m_LoMin=" + m_LoMin +
				", m_LoSec=" + m_LoSec +
				", m_LaDeg=" + m_LaDeg +
				", m_LaMin=" + m_LaMin +
				", m_LaSec=" + m_LaSec +
				", m_Longitude=" + m_Longitude +
				", m_Latitude=" + m_Latitude +
				", m_RadLo=" + m_RadLo +
				", m_RadLa=" + m_RadLa +
				", Ec=" + Ec +
				", Ed=" + Ed +
				", longitude=" + longitude +
				", latitude=" + latitude +
				'}';
	}
}