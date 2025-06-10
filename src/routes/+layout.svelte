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

<svelte:head>
    <title>文克筆記 - 記錄家庭、生活與職場經驗</title>
    <meta
        name="description"
        content="分享家庭、生活與職場經驗。透過真實經驗分享與反思，探索個人成長、工作生活平衡，以及面對挑戰時的智慧與勇氣。"
    />
</svelte:head>

<Header {title} {links} />
{@render children()}
<Footer />
