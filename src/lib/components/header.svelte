<script lang="ts" module>
    interface Link {
        label: string;
        href: string;
    }

    interface HeaderProps {
        title: string;
        links: Link[];
    }
</script>

<script lang="ts">
    import { Heading, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
    import Logo from "./icon/logo.svelte";
    import SearchDrawer from "./search-drawer.svelte";
    import SearchModal from "./search-modal.svelte";

    const { title, links }: HeaderProps = $props();
</script>

<header class="relative w-full">
    <Navbar>
        <NavBrand href="/" class="gap-2">
            <Logo class="h-6 sm:h-9" />
            <Heading tag="h5">
                {title}
            </Heading>
        </NavBrand>

        <div class="flex md:order-2">
            <div class=" flex gap-2 md:hidden">
                <SearchDrawer {links} />
                <NavHamburger />
            </div>

            <div class="hidden md:block">
                <SearchModal {links} />
            </div>
        </div>

        <NavUl class="flex-grow">
            {#each links as link}
                <NavLi href={link.href}>{link.label}</NavLi>
            {/each}
        </NavUl>
    </Navbar>
</header>
