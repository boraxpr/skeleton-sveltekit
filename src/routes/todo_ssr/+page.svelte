<script script lang="ts">
	import type { PageData } from './$types';
	import {
		ProgressRadial,
		Table,
		tableMapperValues,
		type TableSource
	} from '@skeletonlabs/skeleton';
	import MyTable from '$lib/Table.svelte';
	export let data: PageData;
</script>

<!-- SKELETON WAY -->
<!-- NOTE: For skeleton ui way, it's needed to create a new component because "then todos" todos cannot be worked with directly in the script. I think that this will be the common pattern on working with svelte -->
<!-- As Skeleton table needs tableMapperValues which needs todos to be fully fetched (not promise). By that reason, it's not possible to work with "todos" directly in the script. so TableSource (Skeleton object) needs to be worked in side "then" block -->
<div class="card">
	{#await data.todos}
		<section class="card w-full">
			<div class="p-4 space-y-4">
				<div class="placeholder animate-pulse" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder animate-pulse" />
					<div class="placeholder animate-pulse" />
					<div class="placeholder animate-pulse" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder animate-pulse" />
					<div class="placeholder animate-pulse" />
					<div class="placeholder animate-pulse" />
					<div class="placeholder animate-pulse" />
				</div>
			</div>
		</section>
	{:then todos}
		<MyTable {todos} />
	{:catch error}
		<p>Something went wrong: {error.message}</p>
	{/await}
</div>

<!-- NON - SKELETON WAY -->
<!-- <div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>id</th>
						<th>note</th>
					</tr>
				</thead>
				<tbody>
					{#each todos as row}
						<tr>
							<td>{row.id}</td>
							<td>{row.note}</td>
						</tr>
					{/each}
				</tbody>
				<tfoot></tfoot>
			</table>
		</div> -->
