<script Lang="ts">
	export let color = 'bg-gradient-to-r from-[#25b9bc] via-[#25ffbc] to-[#d5ffbc]';
	export let header = 'Header';
	export const imageSize = {
		height: 100,
		width: 100
	};
	export let techs = [
		{
			name: 'Svelte',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg'
		},
		{
			name: 'React',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg'
		},
		{
			name: 'Vue',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg'
		}
	];
</script>

<div class="card p-1 {color}">
	<div class="bg-gray-800">
		<header class="card-header text-2xl">{header}</header>
		<section class="p-4">
			<div class="flex flex-row gap-2">
				{#each techs as tech (tech.src)}
					<img {...imageSize} src={tech.src} alt={tech.name} />
				{/each}
			</div>
		</section>
	</div>
</div>
