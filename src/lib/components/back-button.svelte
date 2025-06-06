<script lang="ts">
    import { browser } from "$app/environment";
    import { Button } from "flowbite-svelte";

    const goBack = () => {
        if (browser) window.history.back();
    };
</script>

<Button outline onclick={goBack}>上一頁</Button>
