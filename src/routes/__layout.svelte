<script lang="js">
	import '../app.css';
	import NavigationBar from '@components/NavigationBar.svelte';
	import { onDestroy, onMount } from 'svelte';

	let burgerOpen = false;
	let smSize = false;

	const onHumbergerClick = () => {
		burgerOpen = !burgerOpen;
	};

	onMount(() => {
		smSize = window.matchMedia('(min-width: 640px)').matches;
		window.addEventListener('resize', () => {
			smSize = window.matchMedia('(min-width: 640px)').matches;
		});
	});
</script>

<section class="overflow-x-hidden scroll-smooth">
	<div
		class="sm:hidden fixed transition-all ease-in duration-300 z-50 left-0"
		class:left-24={burgerOpen}
		class:left-0={!burgerOpen}
	>
		<div
			class="tham tham-e-squeeze tham-w-8 m-5"
			class:tham-active={burgerOpen}
			on:click={onHumbergerClick}
		>
			<div class="tham-box">
				<div class="tham-inner bg-secondary duration-300" />
			</div>
		</div>
	</div>

	{#if smSize}
		<!-- Fixed left navigation on desktop view -->
		<div class="flex">
			<div class="fixed flex z-50"><NavigationBar /></div>
			<div class="absolute pl-24 w-full">
				<slot />
			</div>
		</div>
	{:else}
		<!-- Side navigation overlay / mobile size -->
		<div
			class="flex fixed top-0 -left-24 transition-all ease-in duration-300 z-50"
			class:left-0={burgerOpen}
			class:-left-24={!burgerOpen}
		>
			<NavigationBar />
		</div>
		<div class="w-full h-full fixed z-40" class:hidden={!burgerOpen} on:click={onHumbergerClick} />
		<div class="w-full">
			<slot />
		</div>
	{/if}
</section>
