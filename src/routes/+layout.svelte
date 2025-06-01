<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
    import "../app.css";

    let { children } = $props();

    const title = "Wenke";

    const links = [
        { label: "所有文章", href: "/posts" },
        { label: "關於我", href: "/about" }
    ];
</script>

<Header {title} {links} />
{@render children()}
<Footer />
