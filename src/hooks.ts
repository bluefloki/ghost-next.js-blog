import type { GetSession } from '@sveltejs/kit';

export const getSession: GetSession = async (event) => {
	const darkModeCookie = event.request.headers.get('cookie')?.split('=')[1];

	return {
		darkMode: darkModeCookie ? JSON.parse(darkModeCookie as string) : false
	};
};
