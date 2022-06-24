<script context="module" lang="ts">
	import type { Load, Server } from '@sveltejs/kit';
	export const load: Load = async ({ session }) => {
		darkMode.set((session as any).darkMode);
		return {};
	};
</script>

<script lang="ts">
	import '../styles/tailwind.css';
	import '../styles/app.css';
	import { darkMode } from '$lib/store';

	$: dark = $darkMode;
</script>

<div class:dark>
	<main class="bg-white text-black dark:bg-zinc-900 dark:text-white min-h-screen">
		<slot />
	</main>
</div>
