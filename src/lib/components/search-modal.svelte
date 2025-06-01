<script lang="ts" module>
    interface Link {
        label: string;
        href: string;
    }

    interface SearchModalProps {
        links: Link[];
    }
</script>

<script lang="ts">
    import { Button, Card, Input, Modal } from "flowbite-svelte";
    import { SearchOutline } from "flowbite-svelte-icons";

    const { links }: SearchModalProps = $props();
    let searchModal = $state(false);
    let search = $state("");

    const filteredLinks = $derived(
        links.filter(
            (link) =>
                !search || link.label.includes(search) || link.href.includes(search.toLowerCase())
        )
    );
</script>

<Button pill outline onclick={() => (searchModal = true)}>
    <SearchOutline class="mr-2 h-5 w-5" /> Search
</Button>

<Modal bind:open={searchModal} autoclose class="max-h-[72vh]" dismissable={false}>
    {#snippet header()}
        <Input placeholder="Search" class="w-full" bind:value={search} />
    {/snippet}

    <div class="space-y-2">
        {#each filteredLinks as link}
            <Card size="xl" class="h-16 p-2" href={link.href}>{link.label}</Card>
        {/each}
    </div>
</Modal>
