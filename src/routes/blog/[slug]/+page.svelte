<script lang="ts">
    import { marked } from "marked";
    import "./article.css";

    const { data } = $props();
</script>

<article class="relative w-full">
    {#if data.content}
        {@html marked(data.content)}
    {/if}
</article>
