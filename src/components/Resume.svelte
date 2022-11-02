<script>
	const skills = [
		{
			title: 'Mobile Development',
			texts: ['Flutter', 'Android Native', 'React Native'],
			icon: 'fa-solid fa-mobile-screen'
		},
		{
			title: 'Web Development',
			texts: ['ReactJs', 'Svelte', 'Tailwind CSS'],
			icon: 'fa-solid fa-laptop-code'
		},
		{
			title: 'NodeJs for Backend Development',
			texts: ['ExpressJs', 'HapiJs'],
			icon: 'fa-brands fa-node-js'
		},
		{
			title: 'Others',
			texts: ['Git', 'Scrum', 'Agile'],
			icon: 'fa-brands fa-unsplash'
		}
	];

	const experiences = [
		{
			title: 'Web Developer',
			subtitle: 'PT. Phincon ( Mar 2021 - Present )',
			project: 'MyTelkomsel',
			texts: ['ReactJs', 'Agile', 'HapiJs', 'ExpressJs', 'Docker'],
			icon: 'fa-solid fa-laptop-code',
			link: 'https://my.telkomsel.com'
		},
		{
			title: 'Mobile Developer',
			subtitle: 'PT. Sentragro ( Sept 2020 - Feb 2021 )',
			project: 'Sentragro Kios',
			texts: ['Flutter', 'GIT'],
			icon: 'fa-solid fa-mobile-screen',
			link: 'https://play.google.com/store/apps/details?id=com.sentragro.kios'
		},
		{
			title: 'Mobile Developer',
			subtitle: 'PT. Tebar ( Feb - Apr 2020 )',
			project: 'Pramusaji',
			texts: ['Flutter', 'GIT'],
			icon: 'fa-solid fa-mobile-screen',
			link: 'https://drive.google.com/file/d/1d8JSyb7c7-0p_Wq8q7zW6dGSm7aY9cJP'
		}
	];
</script>

<div id="resume" class="bg-gray-100 justify-center items-center py-20">
	<div class="text-center">
		<p class="text-3xl xs:text-5xl font-semibold text-gray-200">My Resume</p>
		<p class="mt-3 text-2xl xs:text-4xl text-primary">Skills & Experience</p>
	</div>
	<div class="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 max-w-5xl mx-auto">
		<div>
			{#each skills as { title, texts, icon }}
				<div
					class="bg-white  p-6 m-6 shadow-lg rounded-xl transition-all duration-[1.5s] bg-gradient-to-r from-secondary via-transparent to-white bg-[length:500%] bg-pos-100 hover:bg-pos-0"
				>
					<div
						class="mr-6 w-14 h-14 rounded-full flex items-center justify-center bg-gray-100 mb-6 text-center"
					>
						<i class={`${icon} text-gray-700 text-4xl`} />
					</div>
					<div class="overflow-clip">
						<p class="text-2xl mb-2 text-gray-700">{title}</p>
						<div class="text-sm sm:text-base">
							{#each texts as text}
								<div class="flex items-center text-gray-500 mb-1">
									<i class="fa-solid fa-chevron-right text-xs" />
									<p class="ml-3">{text}</p>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div>
			{#each experiences as { title, subtitle, icon, project, texts, link }}
				<a href={link}>
					<div
						class="bg-white  p-6 m-6 shadow-lg rounded-xl transition-all duration-[1.5s] bg-gradient-to-r from-secondary via-transparent to-transparent bg-[length:500%] bg-pos-100 hover:bg-pos-0"
					>
						<div
							class="mr-6 w-14 h-14 rounded-full flex items-center justify-center bg-gray-100 mb-6 text-center"
						>
							<i class={`${icon} text-gray-700 text-4xl`} />
						</div>
						<div class="overflow-clip">
							<p class="text-2xl mb-2 text-gray-700">{title}</p>
							<p class="text-gray-500 mb-1">{subtitle}</p>
							<p class="text-gray-500 mb-1">{project}</p>
							<p class="text-gray-500 mb-1">{texts.join(', ')}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
