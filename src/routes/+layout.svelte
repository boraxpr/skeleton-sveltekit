<script lang="ts">
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import { AppBar, AppShell, Drawer, getDrawerStore, initializeStores, LightSwitch } from '@skeletonlabs/skeleton';
	import '../app.postcss';
// Highlight JS
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	import 'highlight.js/styles/github-dark.css';
// for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
// Floating UI for Popups
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();
	const drawerStore = getDrawerStore();

	const drawerOpen = () => {
		drawerStore.open();
	};
</script>

<Drawer>
	<h1 class="p-4 text-7xl h1">Menu</h1>
	<hr />
	<Navigation />
</Drawer>
<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-16 lg:w-56">
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<Navigation />
		<!-- --- -->
	</svelte:fragment>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="h3 uppercase"><div class="hover:animate-shake">
						<a href='/'>Boraxpr</a></div></strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.linkedin.com/in/naipawat/"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/boraxpr"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="footer">
		<div>Foot</div>
	</svelte:fragment>
</AppShell>
