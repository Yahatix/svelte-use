<script lang="ts">
	import hover from '$lib/ui/hover';
	import type { hoverhHandlerFn } from '$lib/ui/hover';

	const handleHover: hoverhHandlerFn = (state) => {
		console.log(state);
	};
</script>

<div use:hover={handleHover}>Hover me and look at console</div>
