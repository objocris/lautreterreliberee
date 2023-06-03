import { c as create_ssr_component, e as escape, b as add_attribute, f as each } from './index3-f6dc7f44.js';

const css = {
  code: ".balade-nav.svelte-1gk2qq4.svelte-1gk2qq4{display:flex;align-items:center}.balade-nav.svelte-1gk2qq4 a.svelte-1gk2qq4{border-right:10px solid #12133b;border-bottom:10px solid #12133b;width:30px;height:30px;transform:rotate(-45deg)}.balade-nav.svelte-1gk2qq4 a.previous.svelte-1gk2qq4{transform:rotate(135deg)}.balade-nav.svelte-1gk2qq4 a.disabled.svelte-1gk2qq4{opacity:0.5;cursor:not-allowed;pointer-events:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let audioPath;
  let disableNext;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  audioPath = `/audio/${data.ardoise.numero}.mp3`;
  disableNext = +data.ardoise.numero >= 2;
  return `${$$result.head += `<!-- HEAD_svelte-81whmk_START -->${$$result.title = `<title>${escape(data.ardoise.titre)} — L&#39;autre terre libérée</title>`, ""}<!-- HEAD_svelte-81whmk_END -->`, ""}

<div class="max-w-screen-lg m-auto pl-6 pr-6"><h5 class="frankie text-2xl mt-6">Ardoise ${escape(data.ardoise.numero)}</h5>
    <h1 class="frankie text-4xl mb-6">${escape(data.ardoise.titre)}</h1>

    <audio controls${add_attribute("src", audioPath, 0)} class="w-full mb-6"></audio>

    <div class="balade-nav flex justify-between frankie text-4xl mt-8 mb-8 ml-3 mr-3 svelte-1gk2qq4">${data.previous ? `<a${add_attribute("href", `/balade-sonore/${data.previous.numero}`, 0)} class="previous svelte-1gk2qq4" title="Ardoise précédente"></a>` : ``}
        ${data.next ? `<a${add_attribute("href", `/balade-sonore/${data.next.numero}`, 0)} class="${["next ml-auto svelte-1gk2qq4", disableNext ? "disabled" : ""].join(" ").trim()}"${add_attribute("title", disableNext ? "A suivre..." : "Etape suivante", 0)}></a>` : ``}</div>

    <div class="texteArdoise text-lg lg:text-2xl mb-6">${each(data.ardoise.texteArdoise, (paragraph) => {
    return `<p class="mb-2"><!-- HTML_TAG_START -->${paragraph}<!-- HTML_TAG_END --></p>`;
  })}</div>
    <div class="texteAudio text-base lg:text-xl"><h5 class="frankie text-2xl mb-6">Transcription</h5>
        ${each(data.ardoise.texteAudio, (paragraph) => {
    return `<p class="mb-3"><!-- HTML_TAG_START -->${paragraph}<!-- HTML_TAG_END --></p>`;
  })}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c9411c3a.js.map
