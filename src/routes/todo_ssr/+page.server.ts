import { todos_api } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ fetch }) => {
	return {
		todos: fetch(todos_api).then((res) => res.json())
	};
};

// Sveltekit
//  https://kit.svelte.dev/docs/load#streaming-with-promises
// Top level promises are awaited.
// Nested promises are streamed.
// return promise will not be streamed instead the promise is recreated when the function reruns in the browser
