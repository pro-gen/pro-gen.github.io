// Created by iWeb 3.0.2 local-build-20101005

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:3.00}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,144),url:'Bienvenida_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Bienvenida_files/stroke_1.png'},{rect:new IWRect(2,-2,367,4),url:'Bienvenida_files/stroke_2.png'},{rect:new IWRect(369,-2,4,4),url:'Bienvenida_files/stroke_3.png'},{rect:new IWRect(369,2,4,144),url:'Bienvenida_files/stroke_4.png'},{rect:new IWRect(369,146,4,5),url:'Bienvenida_files/stroke_5.png'},{rect:new IWRect(2,146,367,5),url:'Bienvenida_files/stroke_6.png'},{rect:new IWRect(-2,146,4,5),url:'Bienvenida_files/stroke_7.png'}],new IWSize(371,148))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Bienvenida_files/BienvenidaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
