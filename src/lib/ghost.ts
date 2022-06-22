import GhostContentAPI from '@tryghost/content-api';
import { variables } from '$lib/variables';

export const api = GhostContentAPI({
	url: 'https://ghost.server.solofounderhere.com',
	key: variables.content_api_key,
	version: 'v5.0'
});
