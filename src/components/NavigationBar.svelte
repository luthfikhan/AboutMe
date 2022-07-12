<script lang="js">
	import logo from '@assets/images/logo.png';

	import sveltelogo from '@assets/images/svelte-logo.png';
	import tailwindlogo from '@assets/images/tailwind-logo.png';
	import fontawesomelogo from '@assets/images/fontawesome-logo.png';

	const credits = [
		{
			logo: sveltelogo,
			link: 'https://svelte.dev',
			alt: 'Svelte Logo'
		},
		{
			logo: tailwindlogo,
			link: 'https://tailwindcss.com',
			alt: 'Tailwind CSS Logo'
		},
		{
			logo: fontawesomelogo,
			link: 'https://fontawesome.com',
			alt: 'Font Awesome Logo'
		}
	];

	const routes = [
		{
			icon: 'fa-solid fa-house-crack',
			route: '#home'
		},
		{
			icon: 'fa-solid fa-id-card',
			route: '#about'
		},
		{
			icon: 'fa-solid fa-file-contract',
			route: '#resume'
		}
	];
</script>

<div class="bg-primary h-screen inline-flex flex-col items-center w-24 justify-between">
	<div class="inline-flex flex-col items-center ">
		<a href="/">
			<div class="p-5">
				<img alt="Logo" src={logo} class="w-12" />
			</div>
		</a>
		{#each routes as { icon, route }}
			<div class="px-5 pt-10 last:pb-10">
				<a href={route}>
					<i
						class={`${icon} text-2xl text-gray-100 hover:text-secondary transition-colors duration-500`}
					/>
				</a>
			</div>
		{/each}
	</div>
	<div>
		{#each credits as { logo, link, alt }}
			<div class="mt-6 last:pb-10">
				<a href={link} target="_blank">
					<img src={logo} {alt} class="w-8 h-8" />
				</a>
			</div>
		{/each}
	</div>
	<!-- <div class="text-secondary mb-2">
    <span>filab.id</span>
  </div> -->
</div>
