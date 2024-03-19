<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
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
			{#each data.todos as row}
				<tr>
					<td>{row.id}</td>
					<td>{row.note}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot> </tfoot>
	</table>
</div>
