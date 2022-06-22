import { variables } from '$lib/variables';
import type { RequestHandler } from '@sveltejs/kit';
import axios from 'axios';

export const post: RequestHandler = async (event) => {
	const email = event.url.searchParams.get('email');

	try {
		const res = await axios.post(
			`https://emailoctopus.com/api/1.6/lists/${variables.email_octopus_list_id}/contacts`,
			{
				api_key: variables.email_octopus_api_key,
				email_address: email
			},
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		return {
			body: {
				message: 'You have signed up for the newsletter. Prepare to be amazed 🔥🔥',
				status: true
			}
		};
	} catch (error) {
		return {
			body: {
				message: 'Error subscribing. You might already be subcribed',
				status: false
			}
		};
	}
};
