<script lang="ts">
    import UndrawPageNotFound from "$lib/assets/images/undraw_page-not-found_6wni.svelte";
    import BackButton from "$lib/components/back-button.svelte";
    import Main from "$lib/components/main.svelte";
    import { Heading } from "flowbite-svelte";
</script>

<Main>
    <div class="my-12">
        <Heading tag="h3" class="mb-8 text-center">Page Not Found</Heading>
        <div class="mx-auto max-w-lg">
            <UndrawPageNotFound />
            <div class="my-8">
                <BackButton />
            </div>
        </div>
    </div>
</Main>
