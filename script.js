
   /* 
	كائن حدث الماوس
			أحداث الماوس
				onclick استدعاء دالة عند النقر فوق زر
				oncontextmenu الحدث عندما يقوم المستخدم بالنقر بزر الماوس الأيمن فوق عنصر
				ondblclick الحدث عندما ينقر المستخدم نقرًا مزدوجًا فوق عنصر
				onmousedown الحدث عندما يقوم المستخدم بالضغط على زر الماوس فوق عنصر
				onmouseenter الحدث عندما يدخل مؤشر الماوس إلى عنصر
				onmouseleave يحدث هذا الحدث عندما يترك مؤشر الماوس عنصرًا
				onmousemove الحدث عندما يتحرك المؤشر فوق عنصر
				onmouseout الحدث عندما يتحرك مؤشر الماوس خارج أحد العناصر
				onmouseover الحدث عندما يدخل مؤشر الماوس إلى عنصر
				onmouseup الحدث عندما يتم تحرير زر الماوس فوق أحد العناصر
			خصائص حدث الماوس
			    altKeyترجع الخاصية إذا trueتم الضغط على المفتاح ALT عند حدوث حدث الماوس
				button بإرجاع زر الماوس الذي تم الضغط عليه عند حدوث حدث الماوس
				buttons ما هو زر (أزرار) الماوس الذي تم الضغط عليه؟
				clientX بإرجاع إحداثيات العميل الأفقية لمؤشر الماوس عند حدوث حدث ماوس
				clientY بإرجاع إحداثيات العميل العمودي لمؤشر الماوس عند حدوث حدث ماوس
				ctrlKey تم الضغط على المفتاح CTRL عند حدوث حدث ماوس
				detail كم مرة تم النقر بالماوس
				metaKey تُرجع الخاصية إذا trueتم الضغط على مفتاح META عند تشغيل حدث الماوس، وإلا فإنها تُرجع 
				offsetX بإرجاع الإحداثيات الأفقية النسبية لمؤشر الماوس عند حدوث حدث ماوس
				offsetY بإرجاع الإحداثيات الرأسية النسبية لمؤشر الماوس عند حدوث حدث ماوس
				pageX بإرجاع إحداثي X النسبي للمستند لمؤشر الماوس عند حدوث حدث ماوس
				pageY بإرجاع المستند النسبي لمؤشر الماوس عند حدوث حدث ماوس
				relatedTarget احصل على العنصر الذي خرج منه المؤشر للتو
				screenX بإرجاع إحداثيات الشاشة الأفقية لمؤشر الماوس عند تشغيل حدث الماوس
				screenY بإرجاع إحداثيات الشاشة العمودية لمؤشر الماوس عند حدوث حدث ماوس
				shiftKeyترجع الخاصية إذا trueتم الضغط على مفتاح Shift عند تشغيل حدث الماوس، وإلا فإنها ترجع false		
		
  
		أحداث الحافظة
			oncopy استدعاء دالة عند نسخ بعض النصوص من عنصر
			oncut استدعاء دالة عند قص بعض النص في عنصر 
			onpaste استدعاء دالة عند لصق بعض النص في عنصر
		خصائص حدث الحافظة
			clipboardData

		change





  */

	let iconsBtn = document.querySelector('header .headerNav .menuList .iconsBtn');
	let listUl = document.querySelector('header .headerNav .menuList ul');
	iconsBtn.addEventListener('click',()=>{
		iconsBtn.classList.toggle('activeBtn')
		listUl.classList.toggle('activeUl')
	
			
		
	})
	
	
	
	// mySection
	
	
	
	let mySection = document.querySelector('.mySection')
	
	

	
	
	for(let i = 0 ; i < 100 ; i++){
		let span = document.createElement('span');
		span.className = 'spanAnmated';
		
		span.style.scale=`${Math.random() * 1 + 1}`;
			span.style.setProperty("--x", Math.random() * mySection.clientWidth - mySection.clientWidth / 2 + "px");
			span.style.setProperty("--y", Math.random() * mySection.clientHeight - mySection.clientHeight / 2  + "px");
	
		mySection.appendChild(span)
	}
	
	
	
	
	
	
	// myProject
	let main_project = document.querySelector('.myProject')
	let site_visit ='زيارة الموقع';
	const myProject =[
		{
			name:' بحث جيت هب',
			projectUl:'https://m21wx.github.io/API/',
		},
		{
			name:'القرآن الكريم',
			projectUl:'https://m21wx.github.io/design-Quran/',
		},
		{
			name:'لعبة الذاكره',
			projectUl:'https://m21wx.github.io/Game-1/',
		},
	{
			name:'موقع شخصي',
			projectUl:'https://m21wx.github.io/Najd-1/',
		},
		{
			name:'صفحة مشاريع',
			projectUl:'https://m21wx.github.io/profile-majid/',
		},
		{
			name:'موقع شخصي',
			projectUl:'https://m21wx.github.io/project-2/',
		},
		{
			name:'موقع شخصي',
			projectUl:'https://m21wx.github.io/project-4/',
		},
		{
			name:'موقع شخصي',
			projectUl:'https://m21wx.github.io/project-3/',
		},
	
	]
	
	
	
	
	
	

	
	
	for(let i = 0 ; i < myProject.length; i++ ){
			let box = `
				<div class='box'>
					<h4>${myProject[i].name} </h4>
					<a href=${myProject[i].projectUl} target='_blank'> ${site_visit} </a>
				</div>
			`;
			
			
			main_project.innerHTML += box;
	}
	
	
	
	
	
	
	
	
	
	
	
	