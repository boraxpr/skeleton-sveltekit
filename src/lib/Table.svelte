<script lang="ts">
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

	export let todos;
	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['id', 'note'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(todos, ['id', 'note']),
		// Optional: A list of footer labels.
		foot: ['Total', '<code class="code">' + todos.length + '</code>']
	};
</script>

<Table source={tableSimple} />
