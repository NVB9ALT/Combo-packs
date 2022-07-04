javascript: (() => {lagReductionInterval = setInterval(function(){geofs.api.renderingSettings.degradedCollisions = true;geofs.api.renderingSettings.lowResRunways = true;}, 100);var script1 = document.createElement('script'); script1.src="https://cdn.jsdelivr.net/gh/NVB9ALT/Bookmarklet_AP-Plus-Plus@main/ap++.js"; document.body.appendChild(script1);script1.onload = function (){runAPplusplus()};ui.notification.show("Use q to lock the launch bar");let catLlas=[[37.778307623586805,-122.6090264835742,22.753097613256113]],carrierPlaneIds=["7","2581","3460"],barDown=!0,barLocked=!1,launchKey="`",lockKey="q";function gearBarPosLock(){barLocked&&geofs.aircraft.instance.rigidBody.setLinearVelocity([0,0,0])}function resolveForceVector(e,a){return fx=e*Math.cos(a*(Math.PI/180)),fy=e*Math.sin(a*(Math.PI/180)),[fx,fy,0]}function distance(e,a){var t=a[0]-e[0],n=a[1]-e[1],o=a[2]-e[2];return Math.sqrt(t*t+n*n+o*o)}carrierPlaneIds.includes(geofs.aircraft.instance.id)&&document.addEventListener("keypress",function(e){if(e.key===lockKey&&(barLocked?(barLocked=!1,clearInterval(lockInt),ui.notification.show("Launch Bar Unlocked")):catLlas.forEach(function(e){distance(geofs.aircraft.instance.llaLocation,e)<10&&(barLocked=!0,ui.notification.show("Launch bar locked, apply max power and press ~ to launch."),lockInt=setInterval(function(){gearBarPosLock()}))})),e.key===launchKey&&barLocked&&1==geofs.animation.values.throttle){clearInterval(lockInt),barLocked=!1,barDown=!1,geofs.aircraft.instance.rigidBody.reset();var a=10*geofs.aircraft.instance.rigidBody.mass;let e=new geofs.fx.ParticleEmitter({anchor:{worldPosition:[0,0,-1]},duration:1e5,rate:.05,life:4e4,easing:"easeOutQuart",startScale:5e-4,endScale:5e-4,randomizeStartScale:.05,randomizeEndScale:.15,startOpacity:.9,endOpacity:1e-5,startRotation:"random",texture:"whitesmoke"});launchInterval=setInterval(function(){1==geofs.animation.values.groundContact?geofs.aircraft.instance.rigidBody.applyCentralImpulse([resolveForceVector(a,geofs.animation.values.heading360)[1],resolveForceVector(a,geofs.animation.values.heading360)[0],resolveForceVector(a,geofs.animation.values.heading360)[2]]):(clearInterval(launchInterval),e.destroy())},200)}});!function(e){var o=setInterval(function(){window.geofs&&geofs.aircraft&&geofs.aircraft.instance&&geofs.aircraft.instance.object3d&&(clearInterval(o),function(){window.enabled=void 0,$(document).off("keydown"),$(document).on("keydown",".geofs-stopKeyboardPropagation",function(e){e.stopImmediatePropagation()}),$(document).on("keydown",".address-input",function(e){e.stopImmediatePropagation()}),controls.spoilersArming=!1,controls.setters.spoilersArming={label:"Spoiler Arming",set:function(){enabled&&(geofs.aircraft.instance.groundContact?controls.spoilersArming=!1:controls.spoilersArming=!controls.spoilersArming)}};var e=controls.keyDown;controls.keyDown=function(o){"undefined"!=typeof enabled&&o.which===geofs.preferences.keyboard.keys["Airbrake toggle (on/off)"].keycode?o.shiftKey?(enabled=!0,controls.setters.spoilersArming.set()):(enabled=!1,controls.spoilersArming=!1,controls.setters.setAirbrakes.set()):e(o)},instruments.definitions.spoilersArming={overlay:{url:"https://raw.githubusercontent.com/Guy-Adler/GeoFSSpoilersArming/main/spoilersArm.png",alignment:{x:"right",y:"bottom"},size:{x:100,y:21},position:{x:20,y:195},anchor:{x:100,y:0},rescale:!0,rescalePosition:!0,animations:[{type:"show",value:"spoilersArmed"}]}};var o=instruments.init;instruments.init=function(e){aircraftWithBadlyImplementedSpoilers=["2871","2865","2870","2769","2772"],void 0!==e.spoilers||aircraftWithBadlyImplementedSpoilers.includes(geofs.aircraft.instance.aircraftRecord.id)?(enabled=!0,e.spoilersArming=e.spoilers):enabled=void 0,o(e)},instruments.init(geofs.aircraft.instance.setup.instruments),$(document).on("keydown",controls.keyDown),geofs.api.addFrameCallback(function(){geofs.aircraft.instance.animationValue.spoilersArmed=controls.spoilersArming,controls.spoilersArming&&geofs.aircraft.instance.groundContact&&0===controls.airbrakes.position&&enabled&&(controls.spoilersArming=!1,controls.setters.setAirbrakes.set())},"spoilersArming")}())},100)}();function gBlackout() {if (geofs.animation.values.accZ >= 90) {ui.showCrashNotification();geofs.camera.animations.orbitHorizontal.active = !1}else {ui.hideCrashNotification()}}blackoutInt = setInterval(function(){gBlackout();},10);function fixSpin () {var pitch = geofs.animation.values.atilt;setTimeout(() => {if ((geofs.animation.values.atilt + 50 < pitch) || (geofs.animation.values.atilt - 50 > pitch)) {geofs.aircraft.instance.definition.minimumSpeed = 600;console.log("Spin detected");geofs.flyToCamera();console.log("Spin fixed");setTimeout(() => {geofs.aircraft.instance.definition.minimumSpeed = 250}, 5000)}}, 500)};let fixyFixy = setInterval(function(){fixSpin()}, 1000);var notifiedTrue=new Boolean(0);function fixAircraft(){if(geofs.aircraft.instance.id==2581){if(geofs.animation.values.optionalAnimatedPartPosition==0){geofs.aircraft.instance.definition.parts[2].area=50;geofs.aircraft.instance.definition.parts[3].area=50};if(geofs.animation.values.optionalAnimatedPartPosition==1){geofs.aircraft.instance.definition.parts[2].area=20;geofs.aircraft.instance.definition.parts[3].area=20}};if(geofs.aircraft.instance.id==2840);{geofs.aircraft.instance.definition.parts[17].thrust=25000;geofs.aircraft.instance.definition.zeroRPMAltitude=100000}if(geofs.aircraft.instance.id==2844){geofs.aircraft.instance.definition.sounds[0].effects.volume.value="flapsPosition";geofs.aircraft.instance.definition.sounds[1].file="https://geo-fs.com/sounds/f16/rpm1.ogg";geofs.aircraft.instance.definition.sounds[2].file="https://geo-fs.com/sounds/f16/rpm2.ogg";geofs.aircraft.instance.definition.parts[25].animations[0].ratio=2.5;geofs.aircraft.instance.definition.parts[25].animations[1].ratio=-2.5};if(geofs.aircraft.instance.id==2310||geofs.aircraft.instance.id==2581||geofs.aircraft.instance.id==2857||geofs.aircraft.instance.id==3591||geofs.aircraft.instance.id==3617||geofs.aircraft.instance.id==2953){var machTenth=geofs.animation.values.machTenth;geofs.animation.values.machTenth=Math.floor(10*(geofs.animation.values.mach%1).toPrecision(2));geofs.aircraft.instance.definition.instruments.hud.overlay.overlays[6].animations[0].value=machTenth};if(geofs.aircraft.instance.id==3591){if(notifiedTrue==0){ui.notification.show("Note: this aircraft does not have realistic simulation. Do not expect IRL-accurate performance.");notifiedTrue=1}}};let implementFixes=setInterval(function(){fixAircraft()},1000);var script2 = document.createElement('script'); script2.src="https://cdn.jsdelivr.net/gh/NVB9ALT/Realism-pack.@main/Aircraft%20fixes.js"; document.body.appendChild(script2);script2.onload = function (){runFixes()};})();
