<script lang="ts">
    import { page } from "$app/state";
    import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";

    const paths = page.url.pathname.split("/");
</script>

<Breadcrumb aria-label="breadcrumb" class="mb-4">
    {#each paths as path}
        {#if path === ""}
            <BreadcrumbItem home>Home</BreadcrumbItem>
        {:else}
            <BreadcrumbItem>{decodeURIComponent(path)}</BreadcrumbItem>
        {/if}
    {/each}
</Breadcrumb>
