import type { GetSession } from '@sveltejs/kit';

export const getSession: GetSession = async (event) => {
	const cookies = event.request.headers.get('cookie')?.split(';');
	const darkModeCookie = cookies?.find((el) => el.includes('darkMode'))?.split('=')[1];

	return {
		darkMode: darkModeCookie ? JSON.parse(darkModeCookie as string) : false
	};
};
