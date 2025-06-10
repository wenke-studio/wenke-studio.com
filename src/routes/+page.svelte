<script lang="ts">
    import Main from "$lib/components/main.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";
    import { cn } from "$lib/utils";
    import { A, Badge, Card, Heading, Hr, P } from "flowbite-svelte";

    const { data } = $props();
</script>

{#snippet featuredCard(article, cardClass, imgClass)}
    <Card
        href="/posts/{article.title}"
        class={cn(cardClass, "")}
        size="xl"
        img="/images/{article.image}"
        {imgClass}
    >
        <div class="flex flex-col gap-2 p-2">
            <Heading tag="h6">{article.title}</Heading>
            <P>{article.description}</P>
        </div>
    </Card>
{/snippet}

<Main>
    <section id="Editor's Pick" class="relative w-full">
        <hgroup class="mb-4 flex justify-between gap-2">
            <Heading tag="h5">作者精選</Heading>
            <A href="/posts/">更多</A>
        </hgroup>

        <div class="grid h-[512px] grid-cols-3 grid-rows-2 gap-4">
            {@render featuredCard(
                data.featured[0],
                "col-span-2 row-span-2 h-full",
                "object-cover h-4/5"
            )}
            {@render featuredCard(data.featured[1], "col-start-3", "object-cover h-1/2")}
            {@render featuredCard(data.featured[2], "col-start-3", "object-cover h-1/2")}
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
                    href="/posts/{article.title}"
                    class=""
                    size="xl"
                    horizontal={index >= 2}
                    img="/images/{article.image}"
                    imgClass={cn("object-cover", index >= 2 && "w-32!")}
                >
                    <div class="flex flex-col gap-2 p-2">
                        <Heading tag="h5">{article.title}</Heading>
                        <P>{article.description}</P>
                    </div>
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
                <Card
                    href={`/posts/${item.title}`}
                    class="flex-row-reverse overflow-hidden"
                    size="xl"
                    img="/images/{item.image}"
                    imgClass="object-cover h-auto w-32 rounded-none border-0"
                >
                    <div class="grow p-4">
                        <Heading tag="h5">{item.title}</Heading>
                        <P>{item.description}</P>
                        <div class="mt-4 flex gap-2">
                            {#each item.hashtags as hashtag}
                                <Badge>#{hashtag.label}</Badge>
                            {/each}
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
