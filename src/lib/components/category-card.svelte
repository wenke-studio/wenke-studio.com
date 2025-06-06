<script lang="ts" module>
    import type { Snippet } from "svelte";

    interface CategoryCardProps {
        id: string;
        title: string;
        children: Snippet;
        divClass?: string;
    }
</script>

<script lang="ts">
    import { cn } from "$lib/utils";
    import { Heading } from "flowbite-svelte";

    const { id, title, children, divClass }: CategoryCardProps = $props();
</script>

<section {id} class="divide-y border">
    <hgroup class="p-4">
        <Heading tag="h5">{title}</Heading>
    </hgroup>
    <div class={cn("flex flex-wrap gap-4 p-4", divClass)}>
        {@render children()}
    </div>
</section>
