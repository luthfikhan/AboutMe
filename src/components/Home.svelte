<script lang="js">
	import { onMount } from 'svelte';
	import Typed from 'typed.js';

	const resume =
		'https://drive.google.com/file/d/1PhsPjPxGVO1Nzi3SQ3HSAwCmjJdWG2YT/view?usp=sharing';

	const socialRoutes = [
		{
			icon: 'fa-brands fa-linkedin-in',
			route: 'https://www.linkedin.com/in/luthfikhan/'
		},
		{
			icon: 'fa-brands fa-github',
			route: 'https://github.com/luthfikhan'
		},
		{
			icon: 'fa-solid fa-link',
			route: 'https://linktr.ee/luthfikhan'
		},
		{
			icon: 'fa-solid fa-location-arrow',
			route:
				'https://www.google.co.id/maps/place/Kabupaten+Sukoharjo,+Jawa+Tengah/@-7.6828249,110.6913459,11z/data=!3m1!4b1!4m5!3m4!1s0x2e7a3c6b4b49bfd3:0x3027a76e352bc50!8m2!3d-7.6483506!4d110.8552919'
		}
	];

	const multipleBoxShadow = (/** @type {number} */ n) => {
		const boxShadow = [];

		for (let i = 0; i < n; i++) {
			boxShadow.push(
				`${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #fff`
			);
		}
		return boxShadow.join(', ');
	};

	onMount(() => {
		console.log('onMount');
		new Typed('#skill-text', {
			strings: ['Front-End Developer', 'Mobile Developer', 'Backend Developer'],
			typeSpeed: 20,
			backSpeed: 10,
			backDelay: 3000,
			loop: true
		});
	});
</script>

<div id="home" class="bg-primary-dark w-full h-screen flex justify-center items-center p-8">
	<div class="w-full h-screen absolute left-0 overflow-hidden">
		<div
			style={`box-shadow: ${multipleBoxShadow(700)};width:1px;height:1px;`}
			class="animate-staranimation bg-transparent  rounded-full"
		/>
		<div
			style={`box-shadow: ${multipleBoxShadow(200)};width:2px;height:2px;`}
			class="animate-[staranimation_100s] bg-transparent  rounded-full"
		/>
		<div
			style={`box-shadow: ${multipleBoxShadow(100)};width:3px;height:3px;`}
			class="animate-[staranimation_150s] bg-transparent  rounded-full"
		/>
	</div>
	<div class="sm:flex sm:justify-between sm:items-center w-full relative z-10">
		<div class="sm:max-w-xl">
			<div class="sm:text-6xl text-4xl font-semibold">
				<span class="text-white">Hi, i am&nbsp;</span>
				<span>
					<span class="absolute text-transparent text-stroke">Luthfi</span>
					<span class="text-secondary absolute animate-waterwave">Luthfi</span>
				</span>
			</div>
			<div class="mt-4">
				<span class="text-white text-xl" id="skill-text" />
			</div>
			<div class="mt-4">
				<span class="text-gray-400">
					I have been working since 2019. I am proficient in Front-End Web, Mobile development &
					NodeJs for Backend
				</span>
			</div>
			<a href={resume} target="_blank">
				<button
					class="py-3 px-6 mt-4 bg-secondary text-primary font-medium rounded-lg hover:text-white hover:tracking-wider transition-all"
				>
					Download CV
				</button>
			</a>
		</div>
		<div class="flex mt-20 sm:flex-col sm:mt-0 sm:ml-8 md:mr-4 lg:mr-16">
			{#each socialRoutes as { icon, route }}
				<a
					href={route}
					target="_blank"
					class="border rounded-lg border-gray-500 w-12 h-12 flex items-center justify-center mr-3 hover:rounded-full transition-all duration-300 hover:border-secondary hover:text-secondary text-gray-500 sm:mb-3"
				>
					<i class={`${icon} text-lg`} />
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.text-stroke {
		-webkit-text-stroke: 1px #f9ca21;
	}
</style>
