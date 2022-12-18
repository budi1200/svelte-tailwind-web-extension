<script lang="ts">
    import Counter from "@/components/Counter.svelte";
    import browser from "webextension-polyfill";
</script>

<div class="flex w-96 flex-col items-center gap-4 bg-surface p-12 text-center text-on-surface">
    <h1 class="text-2xl">Popup Example</h1>
    <p class="flex items-center text-lg">Popup example page</p>
    <button
        class="rounded-md bg-primary px-3 py-2 text-on-primary shadow-md"
        on:click={() => browser.runtime.openOptionsPage()}
    >
        Open Options
    </button>

    <Counter />
</div>
