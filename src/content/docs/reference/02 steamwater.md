---
title: Steam_Water - IF97
description: A reference page in my new Starlight docs site.
---

IF97 Steam Table은 다음 코드를 사용합니다
- [xsteam2](https://github.com/kpatvt/xsteam2) by kpatvt

Javascript로 계산되는 항목은 xsteam2 모듈을 사용합니다.

*[CoolProp.org](http://www.coolprop.org/)를 통해 값을 얻을 수도 있습니다.* 

<br>

**Steam function UNIT**

|Abbre viation|INPUT1 unit|INPUT2 unit|RESULT unit   |Function Description|
|--------|-----------|-----------|--------------|--------------------|
|psat_T     |deg.C  |　         |bar    |Saturation pressure|
|p_hs       |kJ/kg  |kJ/(kgK)   |bar    |Pressure as a function of h and s.|
|p_hrho     |kJ/kg  |kg/m3      |bar    |Pressure as a function of h and rho (density). Very inaccurate for solid water region since it's almost incompressible!|
|Tsat_p     |bar    |　         |deg.C  |Saturation temperature|
|T_ph       |bar    |kJ/kg      |deg.C  |Temperature as a function of pressure and enthalpy|
|T_ps       |bar    |kJ/(kgK)   |deg.C  |Temperatureasa function of pressure and entropy|
|T_hs       |kJ/kg  |kJ/(kgK)   |deg.C  |Temperatureasa function of enthalpy and entropy|
|hV_p       |bar|　|kJ/kg    |Saturated Vapor enthalpy|
|hL_p       |bar|　|kJ/kg    |Saturated liquid enthalpy|
|hV_T       |deg.C|　|kJ/kg    |Saturated Vapor enthalpy|
|hL_T       |deg.C|　|kJ/kg    |Saturated liquid enthalpy|
|h_pT       |bar|deg.C|kJ/kg|Enthalpy as a function of pressure and temperature.|
|h_ps       |bar|kJ/(kgK)|kJ/kg|Enthalpy as a function of pressure and entropy.|
|h_px       |bar|　|kJ/kg|Enthalpy as a function of pressure and Vapor fraction|
|h_Tx       |deg.C|　|kJ/kg|Enthalpy as a function of temperature and Vapor fraction|
|h_prho|bar|kg/m3|kJ/kg|	Enthalpy as a function of pressure and density. Observe for low temperatures (liquid) this equation has 2 solutions. (Not valid!!)|
|vV_p       |bar|　|m3/kg    |Saturated Vapor volume|
|vL_p       |bar|　|m3/kg    |Saturated liquid volume|
|vV_T       |deg.C|　|m3/kg    |Saturated Vapor volume|
|vL_T       |deg.C|　|m3/kg    |Saturated liquid volume|
|v_pT       |bar|deg.C|m3/kg|Specificvolumeasa function of pressure and temperature.|
|v_ph       |bar|kJ/kg|m3/kg|Specificvolumeasa function of pressure and enthalpy|
|v_ps       |bar|kJ/(kgK)|m3/kg|Specificvolumeasa function of pressure and entropy.|
|rhoV_p     |bar|　|kg/m3    |Saturated Vapor density|
|rhoL_p     |bar|　|kg/m3    |Saturated liquid density|
|rhoV_T     |deg.C|　|kg/m3    |Saturated Vapor density|
|rhoL_T     |deg.C|　|kg/m3    |Saturated liquid density|
|rho_pT     |bar|deg.C|kg/m3|Density as a function of pressure and temperature.|
|rho_ph     |bar|kJ/kg|kg/m3|Density as a function of pressure and enthalpy|
|rho_ps     |bar|kJ/(kgK)|kg/m3|Density as a function of pressure and entropy.|
|sV_p       |bar|　|kJ/(kgK)    |Saturated Vapor entropy|
|sL_p       |bar|　|kJ/(kgK)    |Saturated liquid entropy|
|sV_T       |deg.C|　|kJ/(kgK)    |Saturated Vapor entropy|
|sL_T       |deg.C|　|kJ/(kgK)    |Saturated liquid entropy|
|s_pT       |bar|deg.C|kJ/(kgK)|Specific entropy as a function of pressure and temperature (Returns saturated Vapor Enthalpy if mixture.)|
|s_ph       |bar|kJ/kg|kJ/(kgK)|Specificentropyasa function of pressure and enthalpy|
|uV_p       |bar|　|kJ/kg    |Saturated Vapor internal energy|
|uL_p       |bar|　|kJ/kg    |Saturated liquid internal energy|
|uV_T       |deg.C|　|kJ/kg    |Saturated Vapor internal energy|
|uL_T       |deg.C|　|kJ/kg    |Saturated liquid internal energy|
|u_pT       |bar|deg.C|kJ/kg|Specificinternal energyasa function of pressure and temperature.|
|u_ph       |bar|kJ/kg|kJ/kg|Specificinternal energyasa function of pressure and enthalpy|
|u_ps       |bar|kJ/(kgK)|kJ/kg|Specificinternal energyasa function of pressure and entropy.|
|CpV_p      |bar|　|kJ/(kgdeg.C)    |Saturated Vapor heatcapacity|
|CpL_p      |bar|　|kJ/(kgdeg.C)    |Saturated liquid heatcapacity|
|CpV_T      |deg.C|　|kJ/(kgdeg.C)    |Saturated Vapor heatcapacity|
|CpL_T      |deg.C|　|kJ/(kgdeg.C)    |Saturated liquid heatcapacity|
|Cp_pT      |bar|deg.C|kJ/(kgdeg.C)|Specificisobaricheatcapacityasa function of pressure and temperature.|
|Cp_ph      |bar|kJ/kg|kJ/(kgdeg.C)|Specificisobaricheatcapacityasa function of pressure and enthalpy|
|Cp_ps      |bar|kJ/(kgK)|kJ/(kgdeg.C)|Specificisobaricheatcapacityasa function of pressure and entropy.|
|CvV_p      |bar|　|kJ/(kgdeg.C)    |Saturated Vapor isochoricheatcapacity|
|CvL_p      |bar|　|kJ/(kgdeg.C)    |Saturated liquid isochoricheatcapacity|
|CvV_T      |deg.C|　|kJ/(kgdeg.C)    |Saturated Vapor isochoricheatcapacity|
|CvL_T      |deg.C|　|kJ/(kgdeg.C)    |Saturated liquid isochoricheatcapacity|
|Cv_pT      |bar|deg.C|kJ/(kgdeg.C)|Specific isobaric heat capacity as a function of pressure and temperature.|
|Cv_ph      |bar|kJ/kg|kJ/(kgdeg.C)|Specific isobaric heat capacity as a function of pressure and enthalpy|
|Cv_ps      |bar|kJ/(kgK)|kJ/(kgdeg.C)|Specific isobaric heat capacity as a function of pressure and entropy.|
|wV_p       |bar|　|m/s    |Saturated Vapor speed of sound|
|wL_p       |bar|　|m/s    |Saturated liquid speed of sound|
|wV_T       |deg.C|　|m/s    |Saturated Vapor speed of sound|
|wL_T       |deg.C|　|m/s    |Saturated liquid speed of sound|
|w_pT       |bar|deg.C|m/s|speed of sound as a function of pressure and temperature.|
|w_ph       |bar|kJ/kg|m/s|speed of sound as a function of pressure and enthalpy|
|w_ps       |bar|kJ/(kgK)|m/s|speed of sound as a function of pressure and entropy.|
|my_pT      |bar|deg.C|Pas|Viscosity as a function of pressure and temperature.|
|my_ph      |bar|kJ/kg|Pas|Viscosity as a function of pressure and enthalpy|
|my_ps      |bar|kJ/(kgK)|Pas|Viscosity as a function of pressure and entropy.|
|pr_pT      |bar|deg.C|-|　|
|pr_ph      |bar|kJ/kg|-|　|
|tcL_p      |bar|　|W/(mK)    |Saturated Vapor thermalconductivity|
|tcV_p      |bar|　|W/(mK)    |Saturated liquid thermalconductivity|
|tcL_T      |deg.C|　|W/(mK)    |Saturated Vapor thermalconductivity|
|tcV_T      |deg.C|　|W/(mK)    |Saturated liquid thermalconductivity|
|tc_pT      |bar|deg.C|W/(mK)|Thermalconductivityasa function of pressure and temperature.|
|tc_ph      |bar|kJ/(kgK)|W/(mK)|Thermalconductivityasa function of pressure and enthalpy|
|tc_hs      |kJ/(kgK)|kJ/(kgK)|W/(mK)|Thermalconductivityasa function of enthalpy and entropy|
|st_T       |deg.C|　|N/m|Surface tension for two phase water/steam as a function of T|
|st_p       |bar|　|N/m|Surface tension for two phase water/steam as a function of T|
|x_ph   |bar|kJ/kg|　|Vapor fraction as a function of pressure and enthalpy|
|x_ps   |bar|kJ/(kgK)|　|Vapor fraction as a function of pressure and entropy.|
|vx_ph      |bar|kJ/kg|　|Vapor volume fraction as a function of pressure and enthalpy|
|vx_ps      |bar|kJ/(kgK)|　|Vapor volume fraction as a function of pressure and entropy.|

<br>

_**Surface tension** IAPWS Release on Surface tension of Ordinary Water Substance,September 1994_

_**Vapor volume fraction** Observe that Vapor volume fraction is very sensitive. Vapor volume is about 1000 times greater than liquid volume and therefore Vapor volume fraction gets close to the accuracy of steam IF-97_

_**Thermal Conductivity** Revised release on the IAPS Formulation 1985 for the Thermal Conductivityofordinarywatersubstance(IAPWS1998)_

_**Dynamic Viscosity** Viscosity is not part of IAPWS Steam IF97. Equations from "Revised Release on the IAPWS Formulation 1985 for the Viscosity of Ordinary Water Substance", 2003 are used. Viscosity in the mixed region (4) is interpolated according to the density. This is not true since it will be two fases._