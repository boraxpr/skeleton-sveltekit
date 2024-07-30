<script lang="ts">
	import MyTable from '$lib/Table.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	let isLoading = false;

	let data: { name: string; email: string; phone: string; website: string }[] = [];
	onMount(async () => {
		isLoading = true;
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		data = await response.json();
		isLoading = false;
	});
</script>

<div class="card">
	{#if isLoading}
		<div class="w-full">
			<ProgressRadial meter="stroke-primary-500" />
		</div>
	{:else if data}
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Website</th>
				</tr>
			</thead>
			<tbody>
				{#await data then data}
					{#each data as user}
						<tr>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.phone}</td>
							<td>{user.website}</td>
						</tr>
					{/each}
				{/await}
			</tbody>
		</table>
	{:else}
		<p>No data available yet.</p>
	{/if}
</div>
