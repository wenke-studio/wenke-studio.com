<script lang="ts">
    import Main from "$lib/components/main.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";
    import { A, Badge, Card, Heading, Hr, P } from "flowbite-svelte";

    const { data } = $props();
</script>

<Main>
    <section id="Editor's Pick" class="relative w-full">
        <hgroup class="mb-4 flex justify-between gap-2">
            <Heading tag="h5">作者精選</Heading>
            <A href="/posts/">更多</A>
        </hgroup>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2">
            <Card href={`/posts/${data.featured[0].title}`} class="row-span-2 h-96 p-4" size="xl">
                <div class="flex flex-col gap-2">
                    <Heading tag="h5">{data.featured[0].title}</Heading>
                    <!-- <Secondary>{data.featured[0].c.label}</Secondary> -->
                </div>
            </Card>

            {#each data.featured.slice(1, 2) as article}
                <Card href={`/posts/${article.title}`} class="hidden p-4 lg:block" size="xl">
                    <div class="flex flex-col gap-2">
                        <Heading tag="h5">{article.title}</Heading>
                        <!-- <Secondary>{article.category.label}</Secondary> -->
                    </div>
                </Card>
            {/each}
        </div>
    </section>

    <Hr />

    <section id="trending" class="relative w-full">
        <hgroup class="mb-4 flex justify-between gap-2">
            <Heading tag="h5">熱門文章</Heading>
            <A href="/posts/">更多</A>
        </hgroup>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            {#each data.popular.slice(0, 4) as article, index}
                <Card
                    href={`/posts/${article.title}`}
                    class="h-fit p-4"
                    size="xl"
                    horizontal={index >= 2}
                >
                    <div class="flex flex-col gap-2">
                        <Heading tag="h5">{article.title}</Heading>
                        <!-- <Secondary>{article.group}</Secondary> -->
                    </div>
                    <!-- <P class="min-h-64">{article.description}</P> -->
                </Card>
            {/each}
        </div>
    </section>

    <Hr />

    <section id="latest" class="relative w-full">
        <hgroup class="mb-4 flex justify-between gap-2">
            <Heading tag="h5">最新</Heading>
            <A href="/posts">查看全部</A>
        </hgroup>
        <div class="grid grid-cols-1 gap-4">
            {#each data.articles.slice(0, 4) as item}
                <Card href={`/posts/${item.title}`} class="h-fit p-4" size="xl">
                    <div class="flex flex-col justify-between gap-2 md:flex-row">
                        <div class="">
                            <Heading tag="h5">{item.title}</Heading>
                            <P>{item.description}</P>
                            <div class="mt-4 flex gap-2">
                                {#each item.hashtags as hashtag}
                                    <Badge>#{hashtag.label}</Badge>
                                {/each}
                            </div>
                        </div>
                        <div>
                            <div class="h-16 w-16 bg-gray-300"></div>
                        </div>
                    </div>
                </Card>
            {/each}
        </div>
    </section>

    {#snippet sidebar()}
        <Sidebar hashtags={data.hashtags} categories={data.categories} />
    {/snippet}
</Main>
