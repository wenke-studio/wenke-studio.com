<script lang="ts" module>
    import type { Snippet } from "svelte";

    interface MainProps {
        children: Snippet;
        sidebar?: Snippet;
    }
</script>

<script lang="ts">
    import AdMobile from "./ad/ad-mobile.svelte";
    const { children, sidebar }: MainProps = $props();
</script>

<main class="relative w-full px-4 py-8">
    <div class="container mx-auto space-y-8">
        <div class="block lg:grid lg:grid-cols-[1fr_auto] lg:divide-x">
            <div class="md:pr-4">
                {@render children()}

                <AdMobile />
            </div>

            {#if sidebar}
                {@render sidebar()}
            {/if}
        </div>
    </div>
</main>
