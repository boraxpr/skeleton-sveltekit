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

// !!! Top level return promise will not be streamed instead the promise is recreated when the function reruns in the browser
// So if you return await fetch() then it will load the data on server and mimic promise on client (It's not lazy load and make the page load super long)