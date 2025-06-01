<script lang="ts">
    import { page } from "$app/state";
</script>

<h1>article error page</h1>
<h1>{page.status}: {page.error?.message}</h1>

<a href="/blog">Go back</a>
