<script context="module" lang="ts">
	import { api } from '$lib/ghost';
	import type { Load } from '@sveltejs/kit';
	import type { GhostAPI } from 'tryghost__content-api';

	export const load: Load = async ({ params }) => {
		try {
			const post = await (api as GhostAPI).posts.read({ slug: params.slug });
			return {
				props: {
					post: post
				}
			};
		} catch (error) {
			throw error;
		}
	};
</script>

<script lang="ts">
	import classnames from 'classnames';
	import Navbar from 'src/components/Navbar.svelte';
	import PostHtml from 'src/components/PostHtml.svelte';
	import { styles } from 'src/styles';

	export let post: any;
</script>

<svelte:head>
	<title>{post.meta_title}</title>
	<meta name="description" content={post.meta_description} />
	<meta name="twitter:title" content={post.twitter_title} />
	<meta name="twitter:image" content={post.twitter_image} />
	<meta name="twitter:description" content={post.twitter_description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@solofounderhere" />
	<meta property="og:title" content={post.og_title} />
	<meta property="og:image" content={post.og_image} />
	<meta property="og:description" content={post.og_description} />
</svelte:head>

<div class="p-8 md:px-16 md:py-8 w-full">
	<Navbar />
	<div class="flex flex-col items-center justify-center mt-16">
		<div class="md:w-3/4 leading-loose">
			<img src={post.feature_image} alt="feature_image" class="w-full mb-12 md:mb-24" />

			<h2 class="text-4xl md:text-5xl font-black mb-12">{post.title}</h2>

			<PostHtml content={post.html} />

			<div
				class="mt-16 text-center p-6 border border-zinc-100 dark:border-zinc-800 dark:bg-zinc-800 shadow-lg rounded-lg"
			>
				<h3 class="text-2xl md:text-3xl mb-6 font-black">Join the amazing monthly newsletter</h3>
				<a href="/newsletter" class={classnames(`${styles.button} px-24 md:px-20`)}>Join Now</a>
			</div>
		</div>
	</div>
	<div id="commento">{''}</div>
</div>
