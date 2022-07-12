<script>
	import profile from '@assets/images/profile.jpeg';

	const abouts1 = [
		{
			icon: 'fa-solid fa-user-astronaut',
			text: 'Luthfi Khoirul Anwar'
		},
		{
			icon: 'fa-solid fa-envelope',
			text: 'luthfikhoirulanwar55@gmail.com'
		}
	];
	const abouts2 = [
		{
			icon: 'fa-solid fa-location-crosshairs',
			text: 'Sukoharjo, Jawa Tengah'
		},
		{
			icon: 'fa-solid fa-phone',
			text: '081 555 7676 10'
		}
	];
</script>

<div
	id="about"
	class="flex flex-col items-center pt-12 px-12 pb-20 md:flex-row md:items-start md:justify-center"
>
	<div class="mt-20">
		<img
			class="w-full rounded-3xl max-w-sm object-cover aspect-[8/9] animate-imagebounce"
			alt="profile"
			src={profile}
		/>
	</div>
	<div class="w-full mt-8 md:mt-16 md:ml-8 md:max-w-2xl">
		<p class="text-4xl font-semibold text-gray-200">About Me</p>
		<p class="mt-6 text-gray-500">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore quo fuga iusto
			perferendis voluptas, architecto quaerat velit, accusamus incidunt magni, libero repudiandae.
			Atque, neque. Aliquam, dolorum? Asperiores, incidunt tempora!
		</p>

		<div class="mt-8 xl:flex">
			<div class="xl:mr-6">
				{#each abouts1 as { icon, text }}
					<div class="flex items-center mt-1">
						<i class={`${icon} text-secondary text-lg`} />
						<div class="ml-4"><span class="text-gray-500">{text}</span></div>
					</div>
				{/each}
			</div>
			<div>
				{#each abouts2 as { icon, text }}
					<div class="flex items-center mt-1">
						<i class={`${icon} text-secondary text-lg`} />
						<div class="ml-4"><span class="text-gray-500">{text}</span></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
