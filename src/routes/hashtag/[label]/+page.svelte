<script lang="ts">
    import Main from "$lib/components/main.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";
    import { Card, Heading, List, Secondary } from "flowbite-svelte";

    const { data } = $props();
</script>

<Main>
    <Heading tag="h3" class="mb-4"># {data.hashtag.label}</Heading>

    <List class="space-y-4">
        {#each data.hashtag.articles as article}
            <Card href="/posts/{article.title}" size="xl" class="p-4">
                <Heading tag="h5" class="mb-2">{article.title}</Heading>
                <Secondary>/posts/{article.title}</Secondary>
            </Card>
        {/each}
    </List>

    {#snippet sidebar()}
        <Sidebar {...data.sidebar} />
    {/snippet}
</Main>
