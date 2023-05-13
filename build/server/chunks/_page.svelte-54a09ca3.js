import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from './index3-f58250d6.js';

const css = {
  code: ".ardoise.svelte-1sme3r1{max-width:1024px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let audioPath;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  audioPath = "/audio/" + data.ardoise.numero + ".mp3";
  return `<div class="ardoise m-auto pl-6 pr-6 svelte-1sme3r1"><h5 class="frankie text-4xl mt-6">Etape ${escape(data.ardoise.numero)}</h5>
    <h1 class="frankie text-6xl mb-6">${escape(data.ardoise.titre)}</h1>
    <audio controls${add_attribute("src", audioPath, 0)} class="w-full"></audio>
    <div class="flex justify-center frankie text-5xl mt-6 mb-6">${data.previous ? `<a${add_attribute("href", "/balade-sonore/" + +data.previous.numero, 0)} class="ml-2 mr-2" title="Etape précédente">←</a>` : ``}
        ${data.next ? `<a${add_attribute("href", "/balade-sonore/" + +data.next.numero, 0)} class="ml-2 mr-2" title="Etape suivante">→</a>` : ``}</div>
    <div class="texteArdoise text-2xl mb-6">${each(data.ardoise.texteArdoise, (paragraph) => {
    return `<p class="mb-2">${escape(paragraph)}</p>`;
  })}</div>
    <div class="texteAudio text-xl"><h5 class="frankie text-4xl mb-6">Transcription</h5>
        ${each(data.ardoise.texteAudio, (paragraph) => {
    return `<p class="mb-3">${escape(paragraph)}</p>`;
  })}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-54a09ca3.js.map
