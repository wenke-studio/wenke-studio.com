<script lang="ts">
    import Sidebar from "./sidebar.svelte";
    const { children } = $props();
</script>

<main class="relative w-full px-4 py-8">
    <div class="container mx-auto space-y-8">
        <div class="block lg:grid lg:grid-cols-[1fr_auto] lg:divide-x">
            <div class="md:pr-4">
                {@render children()}

                <div class="fixed inset-x-0 bottom-0 h-32 md:hidden">
                    <div class="h-32 bg-gray-600">
                        <div class="flex h-full items-center justify-center">AD</div>
                    </div>
                </div>
            </div>

            <Sidebar />
        </div>
    </div>
</main>
