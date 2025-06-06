<script lang="ts">
    import { A, Badge, Heading, Hr, Secondary } from "flowbite-svelte";
    import AdSidebar from "./ad/ad-sidebar.svelte";
    import CategoryCard from "./category-card.svelte";

    const { hashtags, categories } = $props();
</script>

<div class="hidden max-w-96 overflow-x-hidden pl-4 lg:block">
    <AdSidebar />

    <Hr />

    <CategoryCard id="hashtag" title="Recommmend Hashtag">
        {#each hashtags as hashtag}
            <Badge href={`/hashtag/${hashtag.label}`} size="small" class="w-fit">
                #{hashtag.label}
            </Badge>
        {/each}
    </CategoryCard>

    <Hr />

    <CategoryCard id="category" title="Categories" divClass="flex-col divide-y">
        {#each categories as category}
            <A
                href="/category/{category.name}"
                class="border-dash inline-block p-2 hover:border hover:border-gray-200"
            >
                <Heading tag="h6">{category.name}</Heading>
                <Secondary>{category.description}</Secondary>
            </A>
        {/each}
    </CategoryCard>

    <Hr />

    <CategoryCard id="recent" title="Recent">
        {#each Array(4) as _}
            <div class="flex items-center gap-4">
                <div>
                    <div class="h-12 w-12 rounded-full bg-gray-200"></div>
                </div>
                <div>
                    <Heading tag="h6">Lorem ipsum dolor sit amet</Heading>
                    <Secondary>2025-06-02</Secondary>
                </div>
            </div>
        {/each}
    </CategoryCard>
</div>
