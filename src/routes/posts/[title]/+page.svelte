<script lang="ts">
    import Breadcrumb from "$lib/components/breadcrumb.svelte";
    import Main from "$lib/components/main.svelte";
    import { marked } from "marked";
    import "./article.css";

    const { data } = $props();
</script>

<Main>
    <Breadcrumb />
    <article class="relative w-full">
        {#if data.content}
            {@html marked(data.content)}
        {/if}
    </article>
</Main>
