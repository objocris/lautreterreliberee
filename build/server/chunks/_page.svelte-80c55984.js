import { c as create_ssr_component, e as escape, d as add_attribute, h as each } from './index2-0bd1e788.js';

const css = {
  code: ".balade-nav.svelte-p9bnbs.svelte-p9bnbs{display:flex;align-items:center}.balade-nav.svelte-p9bnbs a.svelte-p9bnbs{border-right:10px solid #12133b;border-bottom:10px solid #12133b;width:30px;height:30px;transform:rotate(-45deg)}.balade-nav.svelte-p9bnbs a.previous.svelte-p9bnbs{transform:rotate(135deg)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let audioPath;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  audioPath = `/audio/${data.ardoise.numero}.mp3`;
  return `${$$result.head += `<!-- HEAD_svelte-81whmk_START -->${$$result.title = `<title>${escape(data.ardoise.titre)} — L&#39;autre terre libérée</title>`, ""}<!-- HEAD_svelte-81whmk_END -->`, ""}

<div class="max-w-screen-lg m-auto pl-6 pr-6"><h5 class="frankie text-2xl mt-6">Ardoise ${escape(data.ardoise.numero)}</h5>
    <h1 class="frankie text-4xl mb-6">${escape(data.ardoise.titre)}</h1>

    <audio controls${add_attribute("src", audioPath, 0)} class="w-full mb-6"></audio>

    <div class="balade-nav flex justify-between frankie text-4xl mt-8 mb-8 ml-3 mr-3 svelte-p9bnbs">${data.previous ? `<a${add_attribute("href", `/balade-sonore/${data.previous.numero}`, 0)} class="previous svelte-p9bnbs" title="Ardoise précédente"></a>` : ``}
        ${data.next ? `<a${add_attribute("href", `/balade-sonore/${data.next.numero}`, 0)} class="next ml-auto svelte-p9bnbs" title="Ardoise suivante"></a>` : ``}</div>

    <div class="text-center mb-4"><a href="/balade-sonore" class="frankie text-2xl mb-6">Retour à la carte
        </a></div>

    <div class="text-lg lg:text-2xl mb-6">${each(data.ardoise.texteArdoise, (paragraph) => {
    return `<p class="mb-2"><!-- HTML_TAG_START -->${paragraph}<!-- HTML_TAG_END --></p>`;
  })}</div>
    <div class="text-base lg:text-xl"><h5 class="frankie text-2xl mb-6">Transcription</h5>
        ${each(data.ardoise.texteAudio, (paragraph) => {
    return `<p class="mb-3"><!-- HTML_TAG_START -->${paragraph}<!-- HTML_TAG_END --></p>`;
  })}</div>

    <div class="text-center mt-8 italic"><p>Moyens techniques : <a href="https://masaoproductions.fr/" target="_blank">MASAO Productions</a></p>
        <p>Voix narrateur : Christophe Gaillard</p>
        <p>Voix Louis Rimbault : <a href="http://www.jean-barat.com/" target="_blank">Jean Barat</a></p>
        <p>Voix Nadaud : Marie-Désirée Martins</p>
        <p>Musique : Florian Motteau</p>
        <p>Stagiaires enregistrement sons : Albane Gaillard, Olive Motteau-Martins</p></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-80c55984.js.map
