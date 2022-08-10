<script context="module" lang="ts">
	import { api } from '$lib/ghost';
	import type { GhostAPI } from 'tryghost__content-api';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		try {
			const posts = await (api as GhostAPI).posts.browse({
				fields: 'title, twitter_description, feature_image, slug, created_at',
				formats: 'plaintext'
			});
			return {
				props: {
					posts: posts
				}
			};
		} catch (error) {
			throw error;
		}
	};
</script>

<script lang="ts">
	import Navbar from 'src/components/Navbar.svelte';
	import { ArrowDownCircle } from '@svicons/feather';
	import moment from 'moment';
	import { styles } from 'src/styles';

	export let posts: any;
</script>

<svelte:head>
	<title>SoloFounderHere</title>
	<meta
		name="description"
		content="Hello 👋 I am eflat. I am a solo founder and I write about the founder journey (+ whatever else I find fascinating). I build my products in public on Twitter."
	/>
</svelte:head>

<div class="p-8 md:px-16 md:py-8">
	<section class="h-screen" id="home">
		<Navbar />
		<div class="h-full flex flex-col items-center justify-center md:mt-16">
			<img src="/avatar.jpg" alt="avatar" class="w-24 md:w-32 rounded-full mb-6" />
			<p class="text-lg md:text-xl md:w-1/2 leading-relaxed text-center">
				Hello 👋 I am eflat. I am a solo founder and I write about the founder journey (+ whatever
				else I find fascinating). I build my products in public on <a
					href="https://twitter.com/hey_eflat"
					target="_blank"
					class={styles.link}>Twitter</a
				>. This is my blog and I write longer, more useful content here. I also run a
				<a href="/newsletter" class={styles.link}>newsletter</a> in which I document the progress on
				my projects, and tell you about stuff that I found useful (and you could too).
			</p>
			<a href="#blog" class="mt-16">
				<ArrowDownCircle
					class="w-8 animate-bounce duration-1000 text-primary-500 dark:text-primary-300"
				/>
			</a>
		</div>
	</section>

	<section id="blog" class="md:py-12">
		<ul class="flex flex-col items-center justify-center gap-12 w-full">
			{#each posts as post}
				<li class="px-2 md:px-0 md:w-3/4">
					<a
						href={`/post/${post.slug}`}
						class="flex flex-col md:grid md:grid-cols-6 shadow-lg rounded-lg border border-zinc-100 dark:border-zinc-800 dark:bg-zinc-800 overflow-hidden"
					>
						<img src={post.feature_image} alt="post_image" class="md:col-span-2 md:object-cover" />
						<div class="p-4 md:col-span-4 md:py-6 md:px-10 overflow-hidden">
							<h3 class="md:text-xl font-black mb-2">{post.title}</h3>
							<p class="hidden md:block mb-4">
								{post.twitter_description}
							</p>
							<p class="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
								{moment(post.created_at).format('MMMM Do YYYY')}
							</p>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</div>
