<script lang="ts">
    import IconRemove from "~icons/mdi/remove";
    import IconAdd from "~icons/mdi/add";
    let count = 0;
</script>

<div class="flex flex-col items-center gap-2">
    <h1>Common Component example</h1>
    <p>Click the buttons to change the counter</p>
    <div class="flex items-center justify-center gap-4">
        <button on:click={() => count--}><IconRemove /></button>
        <span>{count}</span>
        <button on:click={() => count++}><IconAdd /></button>
    </div>
</div>
