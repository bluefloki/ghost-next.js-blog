import { api } from '$lib/ghost';
import type { GhostAPI } from 'tryghost__content-api';

export async function get() {
	// variables
	let posts;

	const website = 'https://solofounderhere.com';

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	// fetch post names
	try {
		posts = await (api as GhostAPI).posts.browse({
			fields: 'slug'
		});
	} catch (error) {
		throw error;
	}

	return {
		headers,
		body: `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      
    >
    <url>
      <loc>${website}/</loc>
      <lastmod>2022-07-09T08:41:18+00:00</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>${website}/newsletter</loc>
      <lastmod>2022-07-09T08:41:18+00:00</lastmod>
      <priority>0.80</priority>
    </url>
      ${posts
				.map(
					(post) => `
    <url>
      <loc>${website}/post/${post.slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  `
				)
				.join('')}</urlset>`
	};
}
