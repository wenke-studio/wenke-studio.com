<script lang="ts">
    import Main from "$lib/components/main.svelte";
    import { Avatar, Card, Heading, P, Secondary } from "flowbite-svelte";

    const { data } = $props();
</script>

<Main>
    <div class="grid grid-cols-1 gap-8 xl:grid-cols-3">
        {#each data.articles as article}
            <Card
                img={article.img || "/images/pexels-ekrulila-2203051.jpg"}
                href={`/posts/${article.title}`}
                size="xl"
                imgClass="object-cover h-64"
            >
                <div class="flex h-32 flex-col p-4">
                    <Heading tag="h5">{article.title}</Heading>
                    <div class="grow"></div>

                    <div class="mt-4">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                            <Avatar cornerStyle="rounded" border />
                            <div>
                                <P class="capitalize">{article.author.username}</P>
                                <Secondary>{article.date}</Secondary>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        {/each}
    </div>
</Main>
