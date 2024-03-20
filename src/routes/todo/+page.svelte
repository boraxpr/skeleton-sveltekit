<script lang="ts">
	import type { PageData } from './$types';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

	export let data: PageData;
	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['id', 'note'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(data.todos, ['id', 'note']),
		// Optional: A list of footer labels.
		foot: ['Total', '', '<code class="code">' + data.todos.length + '</code>']
	};
</script>

<Table source={tableSimple} />
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
