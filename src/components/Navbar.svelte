<script lang="ts">
	import classnames from 'classnames';
	import { styles } from 'src/styles';
	import { Twitter, Moon, Sun } from '@svicons/feather';
	import { darkMode } from '$lib/store';
	import cookie from 'js-cookie';

	const setDarkMode = () => {
		cookie.set('darkMode', JSON.stringify(!$darkMode));
		darkMode.set(!$darkMode);
	};
</script>

<header class="md:visible w-full flex flex-row items-center justify-between">
	<a href="/"><h1 class="text-xl md:text-3xl font-black">SoloFounderHere</h1></a>
	<div class="flex flex-row items-center gap-8">
		<a href="https://twitter.com/hey_eflat" target="_blank">
			<Twitter class="w-6 transition-all ease-linear duration-300 hover:text-primary-300" /></a
		>
		<button on:click={setDarkMode}>
			{#if $darkMode}
				<Sun class="w-6 transition-all ease-linear duration-300 hover:text-primary-300" />
			{:else}
				<Moon class="w-6 transition-all ease-linear duration-300 hover:text-primary-300" />
			{/if}
		</button>
		<a
			href="/newsletter"
			class={classnames(`${styles.button} px-8 text-primary-100 hidden md:block`)}
		>
			Join Newsletter
		</a>
	</div>
</header>
