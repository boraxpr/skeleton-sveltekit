<script lang="ts">
	import { Bed, ListTodo } from 'lucide-svelte';
</script>

<nav class="list-nav">
	<ul>
		<li>
			<a href="/"><span class="hidden lg:block">Home</span> <Bed class="lg:hidden" /></a>
		</li>
		<li>
			<a href="/todo_ssr"><span class="hidden lg:block">Todo</span><ListTodo class="lg:hidden" /></a
			>
		</li>
	</ul>
</nav>
