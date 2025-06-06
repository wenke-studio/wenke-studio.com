<script lang="ts">
    import Main from "$lib/components/main.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";
    import { A, Card, Heading, Hr, P, Secondary } from "flowbite-svelte";

    const trending = [
        {
            title: "Trending 1",
            group: "Business",
            date: "2025-01-01",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            href: "/blog/trending_1"
        },
        {
            title: "Trending 2",
            group: "Family",
            date: "2025-01-01",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            href: "/blog/trending_2"
        },
        {
            title: "Trending 3",
            group: "Technology",
            date: "2025-01-01",
            href: "/blog/trending_3"
        },
        {
            title: "Trending 4",
            group: "Technology",
            date: "2025-01-01",
            href: "/blog/trending_4"
        },
        {
            title: "Trending 5",
            group: "Technology",
            date: "2025-01-01",
            href: "/blog/trending_5"
        },
        {
            title: "Trending 6",
            group: "Technology",
            date: "2025-01-01",
            href: "/blog/trending_6"
        }
    ];
    const latest = trending;
</script>

<Main>
    <section id="Editor's Pick" class="relative w-full">
        <hgroup class="mb-4 flex justify-between gap-2">
            <Heading tag="h5">作者精選</Heading>
            <A href="/blog/editor_pick">更多</A>
        </hgroup>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2">
            <Card href="/blog/editor_pick_1" class="row-span-2 h-96 p-4" size="xl">
                <div class="flex flex-col gap-2">
                    <Heading tag="h5">Editor's Pick 1</Heading>
                    <Secondary>Business</Secondary>
                </div>
            </Card>
            <Card href="/blog/editor_pick_2" class="hidden p-4 lg:block" size="xl">
                <div class="flex flex-col gap-2">
                    <Heading tag="h5">Editor's Pick 2</Heading>
                    <Secondary>Family</Secondary>
                </div>
            </Card>
            <Card href="/blog/editor_pick_3" class="hidden p-4 lg:block" size="xl">
                <div class="flex flex-col gap-2">
                    <Heading tag="h5">Editor's Pick 3</Heading>
                    <Secondary>Technology</Secondary>
                </div>
            </Card>
        </div>
    </section>

    <Hr />

    <section id="trending" class="relative w-full">
        <hgroup class="mb-4 flex justify-between gap-2">
            <Heading tag="h5">熱門文章</Heading>
            <A href="/blog/trending">更多</A>
        </hgroup>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            {#each trending as item}
                <Card href={item.href} class="h-fit p-4" size="xl">
                    <div class="flex flex-col gap-2">
                        <Heading tag="h5">{item.title}</Heading>
                        <Secondary>{item.group}</Secondary>
                    </div>
                    {#if item.description}
                        <P class="min-h-64">{item.description}</P>
                    {/if}
                </Card>
            {/each}
        </div>
    </section>

    <Hr />

    <section id="latest" class="relative w-full">
        <hgroup class="mb-4 flex justify-between gap-2">
            <Heading tag="h5">最新</Heading>
            <A href="/blog/latest">查看全部</A>
        </hgroup>
        <div class="grid grid-cols-1 gap-4">
            {#each latest as item}
                <Card href={item.href} class="h-fit p-4" size="xl">
                    <div class="flex flex-col justify-between gap-2 md:flex-row">
                        <div class="">
                            <P class="mb-2 text-emerald-600 dark:text-emerald-500">{item.group}</P>
                            <Heading tag="h5">{item.title}</Heading>
                            <P>{item.description}</P>
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
        <Sidebar />
    {/snippet}
</Main>
