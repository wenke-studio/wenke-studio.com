<script lang="ts">
    import "../app.css";

    let { children } = $props();
</script>

<header class="flex items-center justify-between p-4">
    <nav>
        <a href="/">Home</a>
        <a href="/blog/">Blog</a>
    </nav>
</header>
{@render children()}
