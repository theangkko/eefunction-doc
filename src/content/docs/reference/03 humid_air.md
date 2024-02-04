---
title: Humid Air - ASHRAE
description: A reference page.
---

Humid Air은 다음 코드를 사용합니다
- [psychrolib](https://github.com/psychrometrics/psychrolib) by psychrometrics

Humid Air는 ASHRAE Code에 기반한 함수입니다.   
압력, 온도, 습도를 입력인수로 사용하여 각종 결과값을 제공합니다.



**Humid Air function UNIT**

|Abbr.|INPUT Unit|RESULT Unit|Function Description|
|-----|------|------|--------------------|
|RHO_PT_TEST   |pressure, bara <br>Temperature, 'C<br>             |kg/m3 |Get Air Density|
|H_TDRY_RH_P   |Dry Temperature, 'C <br> Rel. Humidity 0.0~1.0 <br> Pressure, bara|kJ/kg|Get Humid Air Enthalpy|
|HDRY_TDRY     |Dry Temperature, 'C                                 |kJ/kg       |Get Dry Air Enthalpy|
|HUMR_TDRY_RH_P|Dry Temperature, 'C <br> Rel. Humidity 0.0~1.0 <br> Pressure, bara  |kg/kgDA|Get Humidity ratio|
|HUMR_H_TDRY   |Moist Air Enthalpy, kJ/kg <br> Dry Temperature, 'C  |kg/kgAir|Get Humidity ratio|
|HUMR_PVAP_P   |Vapor Pressure, bara <br> Pressure, bara    |kg/kgAir|Get Humidity ratio|
|PSAT_TDRY     |Dry Temperature, 'C         | bara|Get Saturated (at 100% RH) Vapor Pressure|
|PVAP_TDEW     |Dewpoint Temp, 'C    | bara|Get Vapor Pressure|
|PVAP_TDRY_RH  |Dry Temperature, 'C <br> Rel. Humidity 0.0~1.0 | bara|Get Vapor Pressure|
|RHO_TDRY_RH_P |Dry Temperature, 'C <br> Rel. Humidity 0.0~1.0 <br> Pressure, bara  |kg/m3|Get Humid Air Density|
|RHO_TDRY_P    |Dry Temperature, 'C <br> Pressure, bara | kg/m3|Get Dry Air Density|
|RH_TDRY_HUMR_P|Dry Temperature, 'C <br> humRatio Humidity ratio, kg/kgAir <br> Pressure, bara  |decimal|Get Rel. Humidity|
|RH_TDRY_TWEB  |Dry Temperature, 'C <br> tWetBulb Wet Temp, 'C <br> Pressure, bara           |decimal|Get Rel. Humidity|
|TDRY_TDEW_P   |Dry Temperature, 'C <br> DewPoint Temp, 'C  <br> Pressure, bara |'C |Get Wet Bulb Temp|
|TWEB_TDRY_RH_P|Dry Temperature, 'C <br> Rel. Humidity 0.0~1.0 <br> Pressure, bara|'C|Get Wet Bulb Temp|
|V_TDRY_P      |Dry Temperature, 'C <br> Pressure, bara |   m3/kg|Get Dry Air Volume|
|V_TDRY_RH_P   |Dry Temperature, 'C <br> Rel. Humidity 0.0~1.0 <br> Pressure, bara| m3/kg   |Get Humid Air Volume|
|VIS_T         |Dry Temperature, 'C'     |  Pa-s|Get Typical Air Viscosity