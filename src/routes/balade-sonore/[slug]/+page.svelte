<script>
    export let data;
    $: audioPath = `/audio/${data.ardoise.numero}.mp3`;
</script>

<svelte:head>
    <title>{data.ardoise.titre} — L'autre terre libérée</title>
</svelte:head>

<div class="max-w-screen-lg m-auto pl-6 pr-6">
    <h5 class="frankie text-2xl mt-6">Ardoise {data.ardoise.numero}</h5>
    <h1 class="frankie text-4xl mb-6">{data.ardoise.titre}</h1>

    <audio controls src={audioPath} class="w-full mb-6" />

    <div class="balade-nav flex justify-between frankie text-4xl mt-8 mb-8 ml-3 mr-3">
        {#if data.previous}
            <a href={`/balade-sonore/${data.previous.numero}`} class="previous" title="Ardoise précédente" />
        {/if}
        {#if data.next}
            <a href={`/balade-sonore/${data.next.numero}`} class="next ml-auto" title="Ardoise suivante" />
        {/if}
    </div>

    <div class="texteArdoise text-lg lg:text-2xl mb-6">
        {#each data.ardoise.texteArdoise as paragraph}
            <p class="mb-2">{@html paragraph}</p>
        {/each}
    </div>
    <div class="texteAudio text-base lg:text-xl">
        <h5 class="frankie text-2xl mb-6">Transcription</h5>
        {#each data.ardoise.texteAudio as paragraph}
            <p class="mb-3">{@html paragraph}</p>
        {/each}
    </div>
</div>

<style lang="scss">
    .balade-nav {
        display: flex;
        align-items: center;

        a {
            border-right: 10px solid #12133b;
            border-bottom: 10px solid #12133b;
            width: 30px;
            height: 30px;
            transform: rotate(-45deg);

            &.previous {
                transform: rotate(135deg);
            }

            &.disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    }
</style>
