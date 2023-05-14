import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from './index3-f58250d6.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let audioPath;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  audioPath = "/audio/" + data.ardoise.numero + ".mp3";
  return `<div class="max-w-screen-lg m-auto pl-6 pr-6"><h5 class="frankie text-2xl mt-6">Etape ${escape(data.ardoise.numero)}</h5>
    <h1 class="frankie text-4xl mb-6">${escape(data.ardoise.titre)}</h1>
    <audio controls${add_attribute("src", audioPath, 0)} class="w-full"></audio>
    <div class="flex justify-between frankie text-4xl mt-6 mb-6">${data.previous ? `<a${add_attribute("href", "/balade-sonore/" + +data.previous.numero, 0)} class="mr-2" title="Etape précédente">←</a>` : ``}
        ${data.next ? `<a${add_attribute("href", "/balade-sonore/" + +data.next.numero, 0)} class="ml-auto" title="Etape suivante">→</a>` : ``}</div>
    <div class="texteArdoise text-lg lg:text-2xl mb-6">${each(data.ardoise.texteArdoise, (paragraph) => {
    return `<p class="mb-2">${escape(paragraph)}</p>`;
  })}</div>
    <div class="texteAudio text-base lg:text-xl"><h5 class="frankie text-2xl mb-6">Transcription</h5>
        ${each(data.ardoise.texteAudio, (paragraph) => {
    return `<p class="mb-3">${escape(paragraph)}</p>`;
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f576a444.js.map
