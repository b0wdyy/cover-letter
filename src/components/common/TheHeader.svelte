<script>
	let signedIn = false;
</script>

<nav class="fixed right-[50%] flex translate-x-1/2 items-center justify-center pt-8">
	<ul class="flex items-center gap-12 rounded-lg bg-white p-4 shadow-lg dark:bg-slate-800">
		<li><a href="/">Home</a></li>
		{#if signedIn}
			<li><a href="/account">My account</a></li>
		{:else}
			<li>
				<a href="/login">Login</a>
			</li>
		{/if}
	</ul>
</nav>
