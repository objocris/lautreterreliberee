<script>
	export let data;
    $: audioPath = '/audio/' + data.ardoise.numero + '.mp3';
</script>

<svelte:head>
   <title>{data.ardoise.titre} — L'autre terre libérée</title>
</svelte:head>

<div class="max-w-screen-lg m-auto pl-6 pr-6">
    <h5 class="frankie text-2xl mt-6">Etape {data.ardoise.numero}</h5>
    <h1 class="frankie text-4xl mb-6">{data.ardoise.titre}</h1>

    <audio controls src={audioPath} class="w-full mb-6"/>

    <div class="balade-nav flex justify-between frankie text-4xl mt-8 mb-8 ml-3 mr-3">
        {#if data.previous}
            <a href={'/balade-sonore/' + (+data.previous.numero)} class="previous" title="Etape précédente"> </a>
        {/if}
        
        {#if data.next}
            <a href={'/balade-sonore/' + (+data.next.numero)} class="next" title="Etape suivante"> </a>
        {/if}
    </div>

    <div class="texteArdoise text-lg lg:text-2xl mb-6">
        {#each data.ardoise.texteArdoise as paragraph}
            <p class="mb-2">{paragraph}</p>
        {/each}
    </div>
    <div class="texteAudio text-base lg:text-xl">
        <h5 class="frankie text-2xl mb-6">Transcription</h5>
        {#each data.ardoise.texteAudio as paragraph}
            <p class="mb-3">{paragraph}</p>
        {/each}
    </div>
</div>
