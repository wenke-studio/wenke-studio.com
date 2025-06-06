<script lang="ts">
    import Breadcrumb from "$lib/components/breadcrumb.svelte";
    import Main from "$lib/components/main.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";
    import { Card, Heading, List, P, Secondary } from "flowbite-svelte";

    const { data } = $props();
</script>

<div class="container mx-auto mt-12">
    <Card size="xl" img={data.category.img} horizontal>
        <section class=" p-4">
            <Breadcrumb />
            <Heading tag="h3" class="mb-4">{data.category.name}</Heading>
            <P>{data.category.description}</P>
        </section>
    </Card>
</div>

<Main>
    <List class="space-y-4">
        {#each data.category.articles as article}
            <Card href="/blog/{article.title}" size="xl" class="p-4">
                <Heading tag="h5" class="mb-2">{article.title}</Heading>
                <Secondary>/blog/{article.title}</Secondary>
            </Card>
        {/each}
    </List>

    {#snippet sidebar()}
        <Sidebar {...data.sidebar} />
    {/snippet}
</Main>
