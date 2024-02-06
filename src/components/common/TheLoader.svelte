<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let loading = true;
	let timeout: number;

	onMount(() => {
		timeout = setTimeout(() => {
			loading = false;
		}, 1500);
	});

	onDestroy(() => {
		clearTimeout(timeout);
	});
</script>

{#if loading}
	<div class="fixed inset-0 z-10 grid place-content-center bg-white text-slate-900">
		<p>Loading...</p>
	</div>
{/if}
