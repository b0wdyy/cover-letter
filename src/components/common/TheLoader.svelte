<script lang="ts">
	import gsap from 'gsap';
	import { onDestroy, onMount } from 'svelte';

	export let loading = true;

	onMount(() => {
		gsap
			.timeline({ defaults: { duration: 0.5 } })
			.from('.loader__text span', { y: -100, stagger: 0.05 })
			.to('.loader__text', {
				overflow: 'visible'
			})
			.to('.loader__text', { x: 10, y: 10 })
			.to('.loader__text', { x: 0, y: 10 })
			.to('.loader__text', { x: 0, y: 0 })
			.to('.loader__text', { x: 10, y: 0 })
			.to('.loader__text span', { y: -500, stagger: 0.05, ease: 'power3.inOut' })
			.to('.loader', {
				delay: -1,
				yPercent: -100,
				duration: 0.5,
				ease: 'power4.in'
			})
			.then(() => {
				loading = false;
			});
	});

	onDestroy(() => {});
</script>

{#if loading}
	<div class="loader fixed inset-0 z-10 grid place-content-center bg-white text-slate-300">
		<p
			class="loader__text flex gap-1 overflow-hidden py-2 font-oswald text-5xl font-bold uppercase"
		>
			<span>L</span>
			<span>o</span>
			<span>a</span>
			<span>d</span>
			<span>i</span>
			<span>n</span>
			<span>g</span>
			<span>.</span>
			<span>.</span>
			<span>.</span>
		</p>
	</div>
{/if}
