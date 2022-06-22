<script lang="ts">
	export let content: string;
</script>

<div id="content">
	<article>
		{@html content}
	</article>
</div>

<style scoped>
	#content :global(p) {
		margin-bottom: 3rem;
		font-size: 1.125rem;
	}

	#content :global(h1) {
		font-size: 3.125rem;
		font-weight: 900;
		line-height: normal;
	}

	#content :global(h2) {
		margin: 1rem 0;
		font-size: 2rem;
		font-weight: 900;
		line-height: normal;
	}

	#content :global(h3) {
		margin-bottom: 0.5rem;
		padding: 0;
		font-size: 1.6rem;
		font-weight: 900;
		line-height: normal;
	}
</style>
