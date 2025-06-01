<script lang="ts" module>
    interface Link {
        label: string;
        href: string;
    }

    interface SearchDrawerProps {
        links: Link[];
    }
</script>

<script>
    import { Button, Card, Drawer, Drawerhead, Input } from "flowbite-svelte";
    import { SearchOutline } from "flowbite-svelte-icons";
    import { sineIn } from "svelte/easing";

    const { links }: SearchDrawerProps = $props();
    let searchDrawer = $state(true);
    let search = $state("");
    const filteredLinks = $derived(
        links.filter(
            (link) =>
                !search || link.label.includes(search) || link.href.includes(search.toLowerCase())
        )
    );

    let transitionParamsTop = {
        y: -320,
        duration: 200,
        easing: sineIn
    };
</script>

<Button pill outline onclick={() => (searchDrawer = false)}>
    <SearchOutline class="h-4 w-4" />
</Button>

<Drawer
    bind:hidden={searchDrawer}
    placement="top"
    transitionParams={transitionParamsTop}
    class="w-full"
>
    <Drawerhead>
        <Input bind:value={search} placeholder="Search" class="mr-4" />
    </Drawerhead>

    <div class="space-y-2 py-4">
        {#each filteredLinks as link}
            <Card size="xl" class="h-16 p-2" href={link.href}>{link.label}</Card>
        {/each}
    </div>
</Drawer>
