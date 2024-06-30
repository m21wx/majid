

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
			name:' github Api',
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
			name:'موقع شخصي نجد',
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
	
	
	
	
	
	
	
	
	
	
	
	
