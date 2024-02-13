<script>
	import { onMount } from 'svelte';
	/**
	 * @typedef {Object} Todo
	 * @property {number} id - The ID of the todo.
	 * @property {string} note - The note of the todo.
	 */

	/** @type {Todo[]} */
	let data = [];

	// Function to fetch data from the API
	async function fetchData() {
		try {
			const response = await fetch('https://boraxpr.shuttleapp.rs/todos');
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	}

	// Use onMount lifecycle function to fetch data when the component mounts
	onMount(fetchData);
</script>

<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>id</th>
				<th>note</th>
			</tr>
		</thead>
		<tbody>
			{#each data as row, i}
				<tr>
					<td>{row.id}</td>
					<td>{row.note}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot> </tfoot>
	</table>
</div>
