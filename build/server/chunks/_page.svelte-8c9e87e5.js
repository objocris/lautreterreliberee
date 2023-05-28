import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from './index3-b7b71654.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let audioPath;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  audioPath = `/audio/${data.ardoise.numero}.mp3`;
  return `${$$result.head += `<!-- HEAD_svelte-16us0vy_START -->${$$result.title = `<title>${escape(data.ardoise.titre)} — L&#39;autre terre libérée</title>`, ""}<!-- HEAD_svelte-16us0vy_END -->`, ""}

<div class="max-w-screen-lg m-auto pl-6 pr-6"><h5 class="frankie text-2xl mt-6">Ardoise ${escape(data.ardoise.numero)}</h5>
    <h1 class="frankie text-4xl mb-6">${escape(data.ardoise.titre)}</h1>

    <audio controls${add_attribute("src", audioPath, 0)} class="w-full mb-6"></audio>

    <div class="balade-nav flex justify-between frankie text-4xl mt-8 mb-8 ml-3 mr-3">${data.previous ? `<a${add_attribute("href", "/balade-sonore/" + +data.previous.numero, 0)} class="previous" title="Etape précédente"></a>` : ``}
        
        ${data.next ? `<a${add_attribute("href", "/balade-sonore/" + +data.next.numero, 0)} class="next ml-auto" title="Etape suivante"></a>` : ``}</div>

    <div class="texteArdoise text-lg lg:text-2xl mb-6">${each(data.ardoise.texteArdoise, (paragraph) => {
    return `<p class="mb-2"><!-- HTML_TAG_START -->${paragraph}<!-- HTML_TAG_END --></p>`;
  })}</div>
    <div class="texteAudio text-base lg:text-xl"><h5 class="frankie text-2xl mb-6">Transcription</h5>
        ${each(data.ardoise.texteAudio, (paragraph) => {
    return `<p class="mb-3"><!-- HTML_TAG_START -->${paragraph}<!-- HTML_TAG_END --></p>`;
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8c9e87e5.js.map
