import { todos_api } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
	fetch
}): Promise<{ todos: { id: number; note: string }[] }> => {
	try {
		const res = await fetch(todos_api);
		return {
			todos: await res.json()
		};
	} catch (error) {
		throw error;
	}
};
