(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports==='object'){factory(require('jquery'))}else{factory(jQuery)}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s)}function decode(s){return config.raw?s:decodeURIComponent(s)}function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value))}function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\')}try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s}catch(e){}}function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value}var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*864e+5)}return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))}var result=key?undefined:{};var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break}if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie}}return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false}$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key)}}));
var htmlStr = '<div class="fot-fixd"><div class="fot-fixd-msg"><span></span><a href="javascript:void(0)" class="cookie-href"></a></div><div class="fot-fixd-box clearfix"><span class="fot-cookie-show"></span> <span class="fot-fixd-close"></span></div></div><div class="cookie-fixd"><div class="cookie-gray"></div><div class="cookie-main clearfix"><div class="cookie-close"><span class="cookie-close-btn"></span></div><div class="cookie-title"></div><div class="cookie-des"><span></span> <a href="javascript:void(0)" class="cookie-href"></a></div><div class="cookie-div-box clearfix"><span class="cookie-name cookie-name1"></span><div class="cookie-msg cookie-msg1"></div><div class="cookie-btn-box clearfix cookie-remove ga-cookie"><span class="yes"></span> <span class="no"></span> <span class="cookie-btn"></span></div></div><div class="cookie-div-box clearfix"><span class="cookie-name cookie-name2"></span><div class="cookie-msg cookie-msg2"></div><div class="cookie-btn-box clearfix cookie-remove ad-cookie"><span class="yes"></span> <span class="no"></span> <span class="cookie-btn"></span></div></div><div class="cookie-div-box clearfix"><span class="cookie-name cookie-name3"></span><div class="cookie-msg cookie-msg3"></div></div><div class="cookie-submit-box clearfix"><span class="cookie-submit"></span></div></div></div>';
$("body").append(htmlStr);

	var language = document.getElementById('cookieScriptId').getAttribute('language');
	var gaUrl = document.getElementById('cookieScriptId').getAttribute('gaName');
	var aLink = document.getElementById('cookieScriptId').getAttribute('aLink');
	var gaNameTwo = document.getElementById('cookieScriptId').getAttribute('gaNameTwo'); 
	 
	if(language=="ar"){
		var cssAr = '<style>.cookie-fixd{z-index:99;display:none;width:100%;height:100%;position:fixed;left:0;top:0;right:0;bottom:0}.cookie-gray{width:100%;height:100%;position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.62)}.cookie-main{width:98%;margin:auto;max-width:600px;background:#fff;border-radius:4px;padding:0 20px;position:absolute;left:0;right:0;top:40px}.cookie-close{height:20px}.cookie-close-btn{position:absolute;width:30px;height:30px;border-radius:25px;cursor:pointer;left:10px;top:0}.cookie-close-btn:before{position:absolute;content:"";width:20px;height:2px;background:#333;transform:rotate(45deg);top:14px;left:5px}.cookie-close-btn:after{content:"";position:absolute;width:20px;height:2px;background:#333;transform:rotate(-45deg);top:14px;left:5px}.cookie-title{font-size:18px;padding-bottom:10px}.cookie-des{color:#666}.cookie-des a{text-decoration:underline;opacity:.6}.cookie-des a:hover{opacity:1}.cookie-div-box{margin-top:20px;padding-right:90px;padding-left:80px;position:relative;color:#999}.cookie-name{position:absolute;right:0;top:0;display:block;width:70px;color:#333}.cookie-btn-box{cursor:pointer;width:80px;position:absolute;left:0;top:10px;height:26px;border-radius:13px;background:#ccc}.cookie-btn-box .yes{float:left;margin-left:10px;color:#fff;line-height:26px;display:none}.cookie-btn-box .no{float:right;margin-right:10px;color:#fff;line-height:26px;display:inline}.cookie-btn-box .cookie-btn{display:block;width:37px;height:20px;margin-top:3px;background:#fff;border-radius:10px;margin-right:40px;transition:all .4s ease}.cookie-remove{background:#3278c0}.cookie-remove .cookie-btn{margin-right:3px}.cookie-remove .yes{display:inline}.cookie-remove .no{display:none}.cookie-submit-box{padding:10px 0}.cookie-submit{cursor:pointer;display:block;float:left;display:block;width:80px;height:40px;text-align:center;line-height:40px;background:#3278c0;border-radius:4px;color:#fff}.fot-fixd{z-index:9;width:100%;position:fixed;left:0;right:0;bottom:0;background:#000;padding:20px;padding-left:230px;font-family:Arial;color:#fff;vertical-align:middle}.fot-fixd-msg{line-height:20px;padding:10px 0;padding-right:20px;font-size:16px;max-width:100%}.fot-fixd-box{align-items:center;align-content:space-between;position:absolute;left:20px;top:20px}.fot-fixd-msg a{opacity:.8;color:#fff;text-decoration:underline}.fot-fixd-msg a:hover{opacity:1}.fot-cookie-show{cursor:pointer;margin-left:20px;font-weight:700;float:right;margin-top:10px}.fot-fixd-close{float:left;cursor:pointer;display:inline-block;width:125px;height:40px;text-align:center;line-height:40px;color:#333;background:#f1d600;font-weight:700}@media only screen and (max-width:800px){.fot-fixd{flex-direction:column}.fot-fixd-msg{padding:0}.fot-fixd{padding-left:20px}.fot-fixd-box{position:relative;padding-bottom:20px;left:auto}.fot-cookie-show,.fot-fixd-close{float:right}}@media only screen and (max-height:500px){.cookie-main{overflow-y:auto;height:100%;bottom:20px}}</style>';         
		$("body").append(cssAr);
	}else{
		var cssEn = '<style>.cookie-fixd{z-index:99;display:none;width:100%;height:100%;position:fixed;left:0;top:0;right:0;bottom:0}.cookie-gray{width:100%;height:100%;position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.62)}.cookie-main{width:98%;margin:auto;max-width:600px;background:#fff;border-radius:4px;padding:0 20px;position:absolute;left:0;right:0;top:40px}.cookie-close{height:20px}.cookie-close-btn{position:absolute;width:30px;height:30px;border-radius:25px;cursor:pointer;right:10px;top:0}.cookie-close-btn:before{position:absolute;content:"";width:20px;height:2px;background:#333;transform:rotate(45deg);top:14px;left:5px}.cookie-close-btn:after{content:"";position:absolute;width:20px;height:2px;background:#333;transform:rotate(-45deg);top:14px;left:5px}.cookie-title{font-size:18px;padding-bottom:10px}.cookie-des{color:#666}.cookie-des a{text-decoration:underline;opacity:.6}.cookie-des a:hover{opacity:1}.cookie-div-box{margin-top:20px;padding-left:90px;padding-right:80px;position:relative;color:#999}.cookie-name{position:absolute;left:0;top:0;display:block;width:70px;color:#333}.cookie-btn-box{cursor:pointer;width:80px;position:absolute;right:0;top:10px;height:26px;border-radius:13px;background:#ccc}.cookie-btn-box .yes{float:left;margin-left:10px;color:#fff;line-height:26px;display:none}.cookie-btn-box .no{float:right;margin-right:10px;color:#fff;line-height:26px;display:inline}.cookie-btn-box .cookie-btn{display:block;width:37px;height:20px;margin-top:3px;background:#fff;border-radius:10px;margin-left:4px;transition:all .4s ease}.cookie-remove{background:#3278c0}.cookie-remove .cookie-btn{margin-left:38px}.cookie-remove .yes{display:inline}.cookie-remove .no{display:none}.cookie-submit-box{padding:10px 0}.cookie-submit{cursor:pointer;display:block;float:right;display:block;width:80px;height:40px;text-align:center;line-height:40px;background:#3278c0;border-radius:4px;color:#fff}.fot-fixd{z-index:9;flex-direction:row;width:100%;position:fixed;left:0;right:0;bottom:0;background:#000;padding:6px;display:flex;font-family:Arial;color:#fff;vertical-align:middle}.fot-fixd-msg{line-height:20px;padding:6px 0;padding-right:20px;font-size:16px;flex:1 1 auto;max-width:100%}.fot-fixd-msg a{opacity:.8;color:#fff;text-decoration:underline}.fot-fixd-msg a:hover{opacity:1}.fot-fixd-box{display:flex;align-items:center;align-content:space-between}.fot-cookie-show{cursor:pointer;margin-right:20px;font-weight:700}.fot-fixd-close{cursor:pointer;display:inline-block;width:125px;height:40px;text-align:center;line-height:40px;color:#333;background:#f1d600;font-weight:700}@media only screen and (max-width:800px){.fot-fixd{flex-direction:column}.fot-fixd-msg{padding-right:0;padding-bottom:20px}}@media only screen and (max-height:500px){.cookie-main{overflow-y:auto;height:100%;bottom:20px}}</style>';
		$("body").append(cssEn);
	}
	 
	if(language=="en"){
		var fotFixdMsg = "By using this website, you agree that we and our partners may set cookies for purposes such as customising content and advertising.";
		var fotCookieShow = "";
		var fotFixdClose = "I Understand";
		
		var cookieHref = "Learn more";
		var cookieTitle = "This site uses cookies.";
		var cookieSesSpan = "Our website uses cookies to understand how our services are used and how they are used for advertising purposes. Read about the types of cookies we use and why we use cookies.";
		var yes = "Yes";
		var no = "No";
		var cookieName1 = "Analytical Cookies";
		var cookieMsg1 = "Analytical cookies help us to improve our website by collecting and reporting information on its usage.";
		
		var cookieName2 = "Marketing Cookies";
		var cookieMsg2 = "Our partners collect data and use cookies to personalize ads and measure ad performance. If you choose not to allow this cookie, you may see ads that are less relevant to you. These ads use cookies, but not to provide personalized content.";
		var cookieName3 = "Necessary Cookies";
		var cookieMsg3 = "Necessary cookies enable core functionality. The website cannot function properly without these cookies, and can only be disabled by changing your browser preferences.";
		var cookieSubmit = "Save";

	}else if(language=="es"){
		var fotFixdMsg = "¿Podemos usar sus datos para adaptar los anuncios para usted? Nuestros socios recopilarán datos y utilizarán cookies para la personalización y la medición de los anuncios. Puede cambiar su elección en cualquier momento en nuestro centro de privacidad.";
		var fotCookieShow = "Rechazar";
		var fotFixdClose = "Permitir cookies";

		var cookieHref = "Más información";
		var cookieTitle = "Este sitio utiliza cookies.";
		var cookieSesSpan = "Nuestro sitio web utiliza cookies para comprender cómo se utilizan nuestros servicios y cómo se utilizan con fines publicitarios. Lea sobre los tipos de cookies que utilizamos y por qué las utilizamos.";
		var yes = "Sí";
		var no = "No";
		var cookieName1 = "Cookies analíticas";
		var cookieMsg1 = "Las cookies analíticas nos ayudan a mejorar nuestro sitio web al recopilar e informar sobre su uso.";

		var cookieName2 = "Cookies de marketing";
		var cookieMsg2 = "Nuestros socios recopilan datos y utilizan cookies para personalizar los anuncios y medir el rendimiento de los anuncios. Si elige no permitir esta cookie, es posible que vea anuncios que sean menos relevantes para usted. Estos anuncios utilizan cookies, pero no proporcionan contenido personalizado. . ";
		var cookieName3 = "Cookies necesarias";
		var cookieMsg3 = "Las cookies necesarias habilitan la funcionalidad principal. El sitio web no puede funcionar correctamente sin estas cookies, y solo se puede desactivar cambiando las preferencias de su navegador.";
		var cookieSubmit = "Guardar";

	}else if(language=="ru"){
		var fotFixdMsg = "Можем ли мы использовать ваши данные для адаптации рекламы для вас? Наши партнеры будут собирать данные и использовать файлы cookie для персонализации и измерения рекламы. Вы можете изменить свой выбор в любое время в нашем центре конфиденциальности.";
		var fotCookieShow = "Отклонить";
		var fotFixdClose = "Разрешить куки";

		var cookieHref = "Узнать больше";
		var cookieTitle = "Этот сайт использует куки.";
		var cookieSesSpan = "Наш веб-сайт использует файлы cookie, чтобы понять, как используются наши услуги и как они используются в рекламных целях. Узнайте о типах файлов cookie, которые мы используем, и о том, почему мы используем файлы cookie.";
		var yes = "Да";
		var no = "Нет";
		var cookieName1 = "Аналитические файлы cookie";
		var cookieMsg1 = "Аналитические куки-файлы помогают нам улучшить наш веб-сайт, собирая и сообщая информацию об его использовании.";

		var cookieName2 = "Маркетинговые куки";
		var cookieMsg2 = "Наши партнеры собирают данные и используют файлы cookie для персонализации рекламы и измерения эффективности рекламы. Если вы решите не разрешать использование этого файла cookie, вы можете видеть объявления, которые менее релевантны для вас. Эти объявления используют файлы cookie, но не для предоставления персонализированного контента. ";
		var cookieName3 = "Необходимые файлы cookie";
		var cookieMsg3 = "Необходимые файлы cookie включают основные функции. Без этих файлов cookie веб-сайт не может работать должным образом и может быть отключен только путем изменения настроек браузера.";
		var cookieSubmit = "Сохранить";

	}else if(language=="pt"){
		var fotFixdMsg = "Podemos usar seus dados para adaptar anúncios para você? Nossos parceiros coletarão dados e usarão cookies para personalização e medição de anúncios. Você pode alterar sua escolha a qualquer momento em nossa Central de Privacidade.";
		var fotCookieShow = "Recusar";
		var fotFixdClose = "Permitir cookies";

		var cookieHref = "Saiba mais";
		var cookieTitle = "Este site usa cookies.";
		var cookieSesSpan = "Nosso site usa cookies para entender como nossos serviços são usados ​​e como eles são usados ​​para fins publicitários. Leia sobre os tipos de cookies que usamos e por que usamos cookies.";
		var yes = "sim";
		var no = "não";
		var cookieName1 = "Cookies analíticos";
		var cookieMsg1 = "Os cookies analíticos nos ajudam a melhorar nosso site, coletando e relatando informações sobre seu uso.";

		var cookieName2 = "Cookies de marketing";
		var cookieMsg2 = "Nossos parceiros coletam dados e usam cookies para personalizar anúncios e avaliar o desempenho de anúncios. Se você optar por não permitir esse cookie, talvez veja anúncios menos relevantes para você. Esses anúncios usam cookies, mas não para fornecer conteúdo personalizado . ";
		var cookieName3 = "Cookies necessários";
		var cookieMsg3 = "Os cookies necessários permitem a funcionalidade principal. O site não pode funcionar corretamente sem esses cookies, e só pode ser desativado alterando as preferências do seu navegador.";
		var cookieSubmit = "Salvar";

	}else if(language=="ar"){
		var fotFixdMsg = "هل يمكننا استخدام بياناتك لتخصيص الإعلانات لك؟ سيقوم شركاؤنا بجمع البيانات واستخدام ملفات تعريف الارتباط لتخصيص الإعلانات وقياسها. يمكنك تغيير اختيارك في أي وقت في مركز الخصوصية لدينا.";
		var fotCookieShow = "رفض";
		var fotFixdClose = "السماح للكوكيز";

		var cookieHref = "معرفة المزيد" ;
		var cookieTitle = "هذا الموقع يستخدم ملفات تعريف الارتباط.";
		var cookieSesSpan = "يستخدم موقعنا الإلكتروني ملفات تعريف الارتباط لفهم كيفية استخدام خدماتنا وكيفية استخدامها لأغراض الدعاية. اقرأ حول أنواع ملفات تعريف الارتباط التي نستخدمها ولماذا نستخدم ملفات تعريف الارتباط.";
		var yes = "نعم";
		var no = "لا";
		var cookieName1 = "ملفات تعريف الارتباط التحليلية" ;
		var cookieMsg1 = "تساعدنا ملفات تعريف الارتباط التحليلية على تحسين موقعنا على الويب عن طريق جمع المعلومات حول استخدامها والإبلاغ عنها.";

		var cookieName2 = "ملفات تعريف الارتباط التسويقية" ;
		var cookieMsg2 = "يقوم شركاؤنا بجمع البيانات واستخدام ملفات تعريف الارتباط لتخصيص الإعلانات وقياس أداء الإعلانات. إذا اخترت عدم السماح بملف تعريف الارتباط هذا ، فقد ترى إعلانات أقل صلة بك. تستخدم هذه الإعلانات ملفات تعريف الارتباط ، ولكن ليس لتقديم محتوى مخصص . ";
		var cookieName3 = "ملفات تعريف الارتباط الضرورية" ;
		var cookieMsg3 = "تعمل ملفات تعريف الارتباط الضرورية على تمكين الوظائف الأساسية. لا يمكن لموقع الويب العمل بشكل صحيح بدون ملفات تعريف الارتباط هذه ، ولا يمكن تعطيله إلا من خلال تغيير تفضيلات المتصفح.";
		var cookieSubmit = "حفظ";

	}else if(language=="id"){
		var fotFixdMsg = "Bisakah kami menggunakan data Anda untuk menyesuaikan iklan untuk Anda? Mitra kami akan mengumpulkan data dan menggunakan cookie untuk personalisasi dan pengukuran iklan. Anda dapat mengubah pilihan Anda kapan saja di pusat privasi kami.";
		var fotCookieShow = "Tolak";
		var fotFixdClose = "Izinkan cookie";

		var cookieHref = "Pelajari lebih lanjut";
		var cookieTitle = "Situs ini menggunakan cookie.";
		var cookieSesSpan = "Situs web kami menggunakan cookie untuk memahami bagaimana layanan kami digunakan dan bagaimana mereka digunakan untuk tujuan iklan. Baca tentang jenis cookie yang kami gunakan dan mengapa kami menggunakan cookie.";
		var yes = "Ya";
		var no = "Tidak";
		var cookieName1 = "Cookie Analitik";
		var cookieMsg1 = "Cookie analitik membantu kami meningkatkan situs web kami dengan mengumpulkan dan melaporkan informasi tentang penggunaannya.";

		var cookieName2 = "Cookie Pemasaran";
		var cookieMsg2 = "Mitra kami mengumpulkan data dan menggunakan cookie untuk mempersonalisasi iklan dan mengukur kinerja iklan. Jika Anda memilih untuk tidak mengizinkan cookie ini, Anda mungkin melihat iklan yang kurang relevan bagi Anda. Iklan ini menggunakan cookie, tetapi tidak menyediakan konten yang dipersonalisasi . ";
		var cookieName3 = "Cookie yang Diperlukan";
		var cookieMsg3 = "Cookie yang diperlukan mengaktifkan fungsionalitas inti. Situs web tidak dapat berfungsi dengan baik tanpa cookie ini, dan hanya dapat dinonaktifkan dengan mengubah preferensi browser Anda.";
		var cookieSubmit = "Simpan";

	}else if(language=="de"){
		var fotFixdMsg = "Können wir Ihre Daten verwenden, um Anzeigen für Sie anzupassen? Unsere Partner erheben Daten und verwenden Cookies zur Personalisierung und Messung von Anzeigen. Sie können Ihre Auswahl jederzeit in unserem Datenschutzcenter ändern.";
		var fotCookieShow = "Ablehnen";
		var fotFixdClose = "Cookies zulassen";

		var cookieHref = "Weitere Informationen";
		var cookieTitle = "Diese Seite verwendet Cookies.";
		var cookieSesSpan = "Unsere Website verwendet Cookies, um zu verstehen, wie unsere Dienste verwendet werden und wie sie zu Werbezwecken verwendet werden. Lesen Sie, welche Arten von Cookies wir verwenden und warum wir Cookies verwenden.";
		var yes = "yes";
		var no = "No";
		var cookieName1 = "Analytische Cookies";
		var cookieMsg1 = "Analytische Cookies helfen uns dabei, unsere Website zu verbessern, indem Informationen über ihre Nutzung erfasst und gemeldet werden.";

		var cookieName2 = "Marketing-Cookies";
		var cookieMsg2 = "Unsere Partner erheben Daten und verwenden Cookies, um Anzeigen zu personalisieren und die Anzeigenleistung zu messen. Wenn Sie sich entscheiden, dieses Cookie nicht zuzulassen, werden möglicherweise Anzeigen angezeigt, die für Sie weniger relevant sind. Diese Anzeigen verwenden Cookies, bieten jedoch keinen personalisierten Inhalt . ";
		var cookieName3 = "Notwendige Cookies";
		var cookieMsg3 = "Notwendige Cookies aktivieren die Kernfunktionalität. Die Website kann ohne diese Cookies nicht ordnungsgemäß funktionieren und kann nur durch Ändern der Browsereinstellungen deaktiviert werden.";
		var cookieSubmit = "Speichern";

	}else if(language=="th"){
		var fotFixdMsg = "เราสามารถใช้ข้อมูลของคุณเพื่อปรับแต่งโฆษณาให้คุณได้หรือไม่พันธมิตรของเราจะรวบรวมข้อมูลและใช้คุกกี้เพื่อปรับเปลี่ยนโฆษณาในแบบของคุณ";
		var fotCookieShow = "ปฏิเสธ";
		var fotFixdClose = "อนุญาตคุกกี้";

		var cookieHref = "เรียนรู้เพิ่มเติม";
		var cookieTitle = "ไซต์นี้ใช้คุกกี้";
		var cookieSesSpan = "เว็บไซต์ของเราใช้คุกกี้เพื่อทำความเข้าใจว่าบริการของเรามีการใช้งานอย่างไรและใช้เพื่อจุดประสงค์ในการโฆษณาอ่านเกี่ยวกับประเภทของคุกกี้ที่เราใช้และเหตุผลที่เราใช้คุกกี้";
		var yes = "ใช่";
		var no = "ไม่";
		var cookieName1 = "คุกกี้วิเคราะห์";
		var cookieMsg1 = "คุกกี้เชิงวิเคราะห์ช่วยให้เราปรับปรุงเว็บไซต์ของเราโดยรวบรวมและรายงานข้อมูลการใช้งาน";

		var cookieName2 = "คุกกี้การตลาด";
		var cookieMsg2 = "พันธมิตรของเรารวบรวมข้อมูลและใช้คุกกี้เพื่อปรับเปลี่ยนโฆษณาและวัดประสิทธิภาพโฆษณาในแบบของคุณหากคุณเลือกที่จะไม่อนุญาตให้ใช้คุกกี้นี้คุณอาจเห็นโฆษณาที่มีความเกี่ยวข้องน้อยกว่าคุณโฆษณาเหล่านี้ใช้คุกกี้ . ";
		var cookieName3 = "คุกกี้ที่จำเป็น";
		var cookieMsg3 = "คุกกี้ที่จำเป็นเปิดใช้งานฟังก์ชั่นหลักเว็บไซต์ไม่สามารถทำงานได้อย่างถูกต้องหากไม่มีคุกกี้เหล่านี้และสามารถปิดใช้งานได้โดยเปลี่ยนการตั้งค่าเบราว์เซอร์ของคุณ";
		var cookieSubmit = "บันทึก";

	}else if(language=="tr"){
		var fotFixdMsg = "Verilerinizi reklamları sizin için uyarlamak için kullanabilir miyiz? Ortaklarımız veri toplayacak ve reklam kişiselleştirme ve ölçüm için çerezleri kullanacak. Seçiminizi istediğiniz zaman gizlilik merkezimizde değiştirebilirsiniz.";
		var fotCookieShow = "Reddet";
		var fotFixdClose = "Çerezlere izin ver";

		var cookieHref = "Daha fazla bilgi edinin";
		var cookieTitle = "Bu site çerez kullanıyor.";
		var cookieSesSpan = "Web sitemiz, hizmetlerimizin nasıl kullanıldığını ve reklam amaçlı nasıl kullanıldığını anlamak için çerezleri kullanıyor. Kullandığımız çerez türlerini ve neden çerezleri kullandığımızı okuyun.";
		var yes = "Evet";
		var no = "Hayır";
		var cookieName1 = "Analitik Çerezler";
		var cookieMsg1 = "Analitik çerezler, kullanımı hakkında bilgi toplayarak ve rapor ederek web sitemizi geliştirmemize yardımcı olur.";

		var cookieName2 = "Pazarlama Çerezleri";
		var cookieMsg2 = "İş ortaklarımız, reklamları kişiselleştirmek ve reklam performansını ölçmek için veri toplar ve çerezleri kullanır. Bu çereze izin vermemeyi seçerseniz, sizinle daha az alakalı reklamlar görebilirsiniz. Bu reklamlar çerezleri kullanır, ancak kişiselleştirilmiş içerik sağlamaz. . ";
		var cookieName3 = "Gerekli Çerezler";
		var cookieMsg3 = "Gerekli çerezler çekirdek işlevselliği sağlar. Web sitesi bu çerezler olmadan düzgün bir şekilde çalışamaz ve yalnızca tarayıcı tercihlerinizi değiştirerek devre dışı bırakılabilir.";
		var cookieSubmit = "Kaydet";

	}else if(language=="fr"){
		var fotFixdMsg = "Pouvons-nous utiliser vos données pour personnaliser les annonces? Nos partenaires collecteront des données et utiliseront des cookies pour la personnalisation et le mesure des annonces. Vous pouvez modifier votre choix à tout moment dans notre centre de protection de la vie privée.";
		var fotCookieShow = "Décliner";
		var fotFixdClose = "Autoriser les cookies";

		var cookieHref = "En savoir plus";
		var cookieTitle = "Ce site utilise des cookies.";
		var cookieSesSpan = "Notre site Web utilise des cookies pour comprendre comment nos services sont utilisés et dans le but de les utiliser à des fins publicitaires. Découvrez les types de cookies que nous utilisons et pourquoi nous les utilisons.";
		var yes = "oui";
		var no = "Non";
		var cookieName1 = "Cookies analytiques";
		var cookieMsg1 = "Les cookies analytiques nous aident à améliorer notre site web en collectant et rapportant des informations sur son utilisation.";

		var cookieName2 = "Cookies marketing";
		var cookieMsg2 = "Nos partenaires collectent des données et utilisent des cookies pour personnaliser les annonces et mesurer les performances des annonces. Si vous choisissez de ne pas autoriser ce cookie, vous risquez de visualiser des annonces moins pertinentes. Ces annonces utilisent des cookies, mais pas pour fournir un contenu personnalisé. . ";
		var cookieName3 = "Cookies nécessaires";
		var cookieMsg3 = "Les cookies nécessaires activent les fonctionnalités principales. Le site Web ne peut pas fonctionner correctement sans ces cookies et ne peut être désactivé qu'en modifiant les préférences de votre navigateur.";
		var cookieSubmit = "Enregistrer";

	}else if(language=="it"){
		var fotFixdMsg = "Possiamo utilizzare i tuoi dati per personalizzare gli annunci per te? I nostri partner raccoglieranno dati e utilizzeranno i cookie per la personalizzazione e la misurazione degli annunci. Puoi cambiare la tua scelta in qualsiasi momento nel nostro centro privacy.";
		var fotCookieShow = "Rifiuta";
		var fotFixdClose = "Permetti i cookie";

		var cookieHref = "Ulteriori informazioni";
		var cookieTitle = "Questo sito utilizza i cookie.";
		var cookieSesSpan = "Il nostro sito Web utilizza i cookie per capire come vengono utilizzati i nostri servizi e come vengono utilizzati a scopo pubblicitario. Informati sui tipi di cookie che utilizziamo e sul motivo per cui utilizziamo i cookie.";
		var yes = "Sì";
		var no = "No";
		var cookieName1 = "Cookie analitici";
		var cookieMsg1 = "I cookie analitici ci aiutano a migliorare il nostro sito web raccogliendo e riportando informazioni sul suo utilizzo.";

		var cookieName2 = "Cookie di marketing";
		var cookieMsg2 = "I nostri partner raccolgono dati e utilizzano i cookie per personalizzare gli annunci e misurare il rendimento degli annunci.Se si sceglie di non consentire questo cookie, è possibile che vengano visualizzati annunci meno pertinenti per te Questi annunci utilizzano i cookie, ma non per fornire contenuti personalizzati . ";
		var cookieName3 = "Cookie necessari";
		var cookieMsg3 = "I cookie necessari abilitano la funzionalità di base. Il sito Web non può funzionare correttamente senza questi cookie e può essere disabilitato solo modificando le preferenze del browser.";
		var cookieSubmit = "Salva";

	}else if(language=="vi"){
		var fotFixdMsg = "Chúng tôi có thể sử dụng dữ liệu của bạn để điều chỉnh quảng cáo cho bạn không? Đối tác của chúng tôi sẽ thu thập dữ liệu và sử dụng cookie để cá nhân hóa và đo lường quảng cáo. Bạn có thể thay đổi lựa chọn của mình bất cứ lúc nào trong trung tâm bảo mật của chúng tôi.";
		var fotCookieShow = "Từ chối";
		var fotFixdClose = "Cho phép cookie";

		var cookieHref = "Tìm hiểu thêm";
		var cookieTitle = "Trang web này sử dụng cookie.";
		var cookieSesSpan = "Trang web của chúng tôi sử dụng cookie để hiểu cách sử dụng dịch vụ của chúng tôi và cách chúng được sử dụng cho mục đích quảng cáo. Đọc về các loại cookie chúng tôi sử dụng và lý do chúng tôi sử dụng cookie.";
		var yes = "Có";
		var no = "Không";
		var cookieName1 = "Cookies phân tích";
		var cookieMsg1 = "Cookie phân tích giúp chúng tôi cải thiện trang web của mình bằng cách thu thập và báo cáo thông tin về việc sử dụng nó.";

		var cookieName2 = "Cookie tiếp thị";
		var cookieMsg2 = "Đối tác của chúng tôi thu thập dữ liệu và sử dụng cookie để cá nhân hóa quảng cáo và đo lường hiệu suất quảng cáo. Nếu bạn chọn không cho phép cookie này, bạn có thể thấy quảng cáo ít liên quan đến mình. Những quảng cáo này sử dụng cookie, nhưng không cung cấp nội dung được cá nhân hóa . ";
		var cookieName3 = "Cookies cần thiết";
		var cookieMsg3 = "Cookie cần thiết kích hoạt chức năng cốt lõi. Trang web không thể hoạt động bình thường nếu không có các cookie này và chỉ có thể bị vô hiệu hóa bằng cách thay đổi tùy chọn trình duyệt của bạn.";
		var cookieSubmit = "Lưu";

	}else{
		var fotFixdMsg = "CBy using this website, you agree that we and our partners may set cookies for purposes such as customising content and advertising.";
		var fotCookieShow = "Decline";
		var fotFixdClose = "Allow cookies";
		
		var cookieHref = "Learn more";
		var cookieTitle = "This site uses cookies.";
		var cookieSesSpan = "Our website uses cookies to understand how our services are used and how they are used for advertising purposes. Read about the types of cookies we use and why we use cookies.";
		var yes = "Yes";
		var no = "No";
		var cookieName1 = "Analytical Cookies";
		var cookieMsg1 = "Analytical cookies help us to improve our website by collecting and reporting information on its usage.";
		
		var cookieName2 = "Marketing Cookies";
		var cookieMsg2 = "Our partners collect data and use cookies to personalize ads and measure ad performance. If you choose not to allow this cookie, you may see ads that are less relevant to you. These ads use cookies, but not to provide personalized content.";
		var cookieName3 = "Necessary Cookies";
		var cookieMsg3 = "Necessary cookies enable core functionality. The website cannot function properly without these cookies, and can only be disabled by changing your browser preferences.";
		var cookieSubmit = "Save";

	}
	 
	
	$(".fot-fixd-msg").text(fotFixdMsg);
	$(".fot-cookie-show").text(fotCookieShow);
	$(".fot-fixd-close").text(fotFixdClose); 
	
	
	$(".cookie-href").text(cookieHref);
	$(".cookie-title").text(cookieTitle);
	$(".cookie-des span").text(cookieSesSpan);
	
	
	
	$(".yes").text(yes);
	$(".no").text(no);
	$(".cookie-name1").text(cookieName1);
	$(".cookie-msg1").text(cookieMsg1);
	$(".cookie-name2").text(cookieName2);
	$(".cookie-msg2").text(cookieMsg2);
	$(".cookie-name3").text(cookieName3);
	$(".cookie-msg3").text(cookieMsg3);
	$(".cookie-submit").text(cookieSubmit); 
	$(".cookie-href").attr("href",aLink); 
	 
	 
	if($.cookie('fotCookie')==1){
		 $(".fot-fixd").hide();  
	}else{
		$(".fot-fixd").show();  
	};
	
	$(".fot-cookie-show").click(function(){ 
		$(".cookie-fixd").show();
	});
	$(".fot-fixd-close").click(function(){
		$(".fot-fixd").hide();  
		$.cookie('fotCookie','1', { path:'/', expires: 7 });
	});	 
	
	
	
	
	if($.cookie('gaCookie')==1){
		$(".ga-cookie").removeClass("cookie-remove");
	}; 
	if($.cookie('adCookie')==1){
		$(".ad-cookie").removeClass("cookie-remove");
	};  
	
	if(!$.cookie('gaCookie') || $.cookie('gaCookie')==0){
		cookie(gaUrl);
	} 
	$(".ga-cookie").attr("show-css",$.cookie('gaCookie'));
	var gaNum = $(".ga-cookie").attr("show-css"); 
	$(".ad-cookie").attr("show-css",$.cookie('adCookie'));
	var adNum = $(".ad-cookie").attr("show-css"); 
	$(".ga-cookie").bind("click",function(){
		 
		if(gaNum==0||gaNum==null){
			$(this).removeClass("cookie-remove");  
	 	 	gaNum=1;
		}else{
			$(this).addClass("cookie-remove");  
	  		gaNum=0;
		}
	});    
	$(".ad-cookie").bind("click",function(){
		 
		if(adNum==0||adNum==null){
			$(this).removeClass("cookie-remove");   
	 	 	adNum=1; 
		}else{
			$(this).addClass("cookie-remove");  
		  	adNum=0; 
		} 
	});   
		 
	function cookie(gaUrl){
		if(!$.cookie('gaCookie') || $.cookie('gaCookie')==0){
			
  
		}else if($.cookie('gaCookie')==1){	  
			if(gaUrl!=""){
 				
				
 			}
			if(gaNameTwo!=""){ 
				$("script[id='gaIdTwo").remove();
			}
			
		}	 
	};	
	$(".cookie-close-btn").click(function(){ 
		var gaclose = $.cookie('gaCookie');
		if(gaclose==0){
			$(this).addClass("cookie-remove");   
		}else if(gaclose==1){
			$(this).removeClass("cookie-remove");    
		}
		var adclose = $.cookie('adCookie');
		if(adclose==0){
			$(this).addClass("cookie-remove");   
		}else if(adclose==1){
			$(this).removeClass("cookie-remove");    
		}
		 
		$(".cookie-fixd").hide();  
		window.location.reload();
		$.cookie('fotCookie','1', { expires: 7 });
		 
	});

	$(".cookie-submit").click(function(){ 
		
		 
		if(gaNum==0||gaNum==null){
			$(this).removeClass("cookie-remove");   
	 	 	$.cookie('gaCookie','0', { expires: 7 });
	 	 	 
		}else if(gaNum==1){
			$(this).addClass("cookie-remove"); 
	  		$.cookie('gaCookie','1', { expires: 7 }); 
		}
		
		if(adNum==0||adNum==null){
			$(this).removeClass("cookie-remove");   
	 	 	$.cookie('adCookie','0', { expires: 7 });
	 	 	 
		}else if(adNum==1){
			$(this).addClass("cookie-remove"); 
	  		$.cookie('adCookie','1', { expires: 7 }); 
		} 
		cookie(gaUrl);
		$(".cookie-fixd").hide();  
		window.location.reload();
		$.cookie('fotCookie','1', { expires: 7 });
	});
