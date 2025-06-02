<script lang="ts">
    import { Badge, Heading, Hr, P, Secondary } from "flowbite-svelte";

    const hashtag = [
        "business",
        "son",
        "familey",
        "father",
        "technology",
        "science",
        "health",
        "education"
    ];
</script>

<div class="hidden max-w-96 overflow-x-hidden pl-4 lg:block">
    <section id="ad" class="h-64 w-full bg-gray-600 dark:bg-gray-500">
        <div class="flex h-full items-center justify-center">AD</div>
    </section>

    <Hr />

    <section id="hashtag">
        <div class="divide-y border">
            <div class="p-4">
                <Heading tag="h5">Recommended Hashtag</Heading>
            </div>
            <div class="flex flex-wrap gap-4 p-4">
                {#each hashtag as tag}
                    <Badge href={`/blog/${tag}`} size="small" class="w-fit">
                        #{tag}
                    </Badge>
                {/each}
            </div>
        </div>
    </section>

    <Hr />

    <section id="recent">
        <div class="divide-y border">
            <div class="p-4">
                <Heading tag="h5">Recent</Heading>
            </div>
            <div class="space-y-4 p-4">
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
            </div>
        </div>
    </section>

    <Hr />

    <section id="topic">
        <div class="divide-y border">
            <div class="p-4">
                <Heading tag="h5">Topic</Heading>
            </div>
            <div class="space-y-4 p-4">
                {#each Array(4) as _}
                    <div class="flex items-center gap-4">
                        <div>
                            <div class="h-12 w-12 rounded-full bg-gray-200"></div>
                        </div>
                        <div>
                            <Heading tag="h6">Lorem ipsum</Heading>
                            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</div>
