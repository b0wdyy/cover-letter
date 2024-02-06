<script lang="ts">
	import { TheHeader, TheDarkModeToggle, TheLoader } from '$components';
	import '../app.css';
</script>

<TheHeader />
<TheLoader />
<slot />
<TheDarkModeToggle />
