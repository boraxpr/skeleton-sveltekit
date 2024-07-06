<script lang="ts">
	import MainCharacter from '$lib/assets/boraxprWiz.png';
	import Prop1 from '$lib/assets/boraxprWiz1.png';
	import Prop2 from '$lib/assets/boraxprWiz2.png';
	import Prop3 from '$lib/assets/boraxprWiz3.png';
	import Prop4 from '$lib/assets/boraxprWiz4.png';
	import Card from '$lib/Card.svelte';
	export const imageSize = {
		height: 100,
		width: 100
	};
</script>

<div class="container mx-auto space-y-16 h-full flex flex-col justify-center">
	<div class="grid grid-flow-col justify-center">
		<div class="grid grid-flow-row">
			<img alt="Profile" src={Prop2} class="animate-float1 row-span-1" />
			<img alt="Profile" src={Prop4} class="animate-float2 row-span-1" />
		</div>
		<div class="grid grid-rows-1">
			<div class="flex justify-center items-center h-full">
				<img alt="Profile" src={MainCharacter} class="animate-float3 shrink-0" />
			</div>
		</div>
		<div class="grid grid-flow-row">
			<div>
				<img alt="Profile" src={Prop1} class="animate-float4 row-span-1" />
			</div>
			<div>
				<img alt="Profile" src={Prop3} class="animate-float5 row-span-1" />
			</div>
		</div>
	</div>
	<div class="grid sm:md:lg:grid-cols-2 grid-cols-1 gap-4">
		<Card header="Frontend" />
		<Card
			header="Backend"
			techs={[
				{
					name: 'Spring',
					src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg'
				},
				{
					name: 'Go',
					src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg'
				},
				{
					name: 'Node',
					src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
				},
				{
					name: 'Rust',
					src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-line.svg'
				}
			]}
		/>
		<Card header="Database" />
		<Card header="Mobile" />
		<Card header="DevOps" />
	</div>
</div>
