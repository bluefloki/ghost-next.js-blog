<script lang="ts">
	import Navbar from 'src/components/Navbar.svelte';
	import { createForm } from 'felte';
	import classnames from 'classnames';
	import { styles } from 'src/styles';
	import { validator } from '@felte/validator-zod';
	import { z } from 'zod';
	import axios from 'axios';
	import { Loader } from '@svicons/feather';

	// variables
	let confirmationMessage: { message: string; status: boolean | null } = {
		message: '',
		status: null
	};
	const schema = z.object({
		email: z.string().email('Email is required').min(1)
	});

	// functions
	const { form, errors, isSubmitting, isValid } = createForm<z.infer<typeof schema>>({
		onSubmit: async (values) => {
			const res = await axios.post(`/subscribe?email=${values.email}`);
			confirmationMessage = res.data;
		},
		extend: validator({ schema })
	});
</script>

<div class="p-8 md:px-16 md:py-8">
	<Navbar />
	<div class="flex flex-row items-center justify-center h-screen md:h-[80vh]">
		<form use:form class="md:w-1/2 text-center">
			<h3 class="text-3xl mb-6 font-black">Join the amazing monthly newsletter</h3>

			<input
				type="text"
				name="email"
				class="w-full py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 dark:placeholder:text-zinc-500 mb-2"
				required
				placeholder="Enter your email address"
			/>
			{#if $errors.email != null}
				<p class="pt-2 text-red-400 text-left">{$errors.email[0]}</p>
			{/if}
			{#if confirmationMessage.message !== ''}
				<p
					class={classnames('mb-2 text-left', {
						'text-green-500 dark:text-green-300': confirmationMessage.status,
						'text-red-400': !confirmationMessage.status
					})}
				>
					{confirmationMessage.message}
				</p>
			{/if}
			<button
				type="submit"
				value="Submit"
				disabled={$isSubmitting || !$isValid}
				class={classnames(`${styles.button} w-full py-1 mt-6`)}
				>{#if $isSubmitting}
					<div class="w-full py-0.5 flex flex-col items-center justify-center">
						<Loader class="w-5 animate-spin duration-200" />
					</div>
				{:else}
					Submit
				{/if}</button
			>
		</form>
	</div>
</div>
