<script>
    // import { page } from "$app/stores";
    // import { onMount } from "svelte";
    export let data;
    $: audioPath = `/audio/${data.ardoise.numero}.mp3`;

    /*
    onMount(async () => {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Bearer': '6a164c91a926a32b6e3158c1d22a041a58765ff00bf2a3d8e7959b4ed0c85a6769680577b51399bbe97409ba4cca437493f2607196428a92b77858dd36f61663ec85c7ff84643d30bd6c65c5416c76f47f95d35d2e4fa20aa0cf2fb87f80b24895c2b29c0f7f616cd830d0d4be85cec4b8d5aee0a7bf1775a3ac785e98970d9f'
        });

        const url = `https://cms.lautreterreliberee.fr/api/ardoises?filters[numero][$eq]=${$page.params.slug}&populate=*`;
		const res = await fetch(url, { headers });
        console.log(res);
	});
    */
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
            <a href={`/balade-sonore/${data.previous.numero}/boss`} class="previous" title="Ardoise précédente" />
        {/if}
        {#if data.next}
            <a href={`/balade-sonore/${data.next.numero}/boss`} class="next ml-auto" title="Ardoise suivante" />
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
        }
    }
</style>
