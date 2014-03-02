// Created by iWeb 3.0.2 local-build-20101103

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,144),url:'Soporte_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Soporte_files/stroke_1.png'},{rect:new IWRect(2,-2,367,4),url:'Soporte_files/stroke_2.png'},{rect:new IWRect(369,-2,4,4),url:'Soporte_files/stroke_3.png'},{rect:new IWRect(369,2,4,144),url:'Soporte_files/stroke_4.png'},{rect:new IWRect(369,146,4,5),url:'Soporte_files/stroke_5.png'},{rect:new IWRect(2,146,367,5),url:'Soporte_files/stroke_6.png'},{rect:new IWRect(-2,146,4,5),url:'Soporte_files/stroke_7.png'}],new IWSize(371,148)),reflection_0:new IWReflection({opacity:0.50,offset:3.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Soporte_files/SoporteMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
