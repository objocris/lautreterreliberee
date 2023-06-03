import { c as create_ssr_component, b as add_attribute } from './index3-f6dc7f44.js';

const logoSmall = "/_app/immutable/assets/logo-small.96bd569f.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container pt-10">${slots.default ? slots.default({}) : ``}
    <footer class="mb-6"><div class="footer text-center"><img${add_attribute("src", logoSmall, 0)} alt="Logo de l'association L'autre terre libérée à Luynes"></div>
        <div class="text-center"><a href="/" class="mr-2 ml-2">Accueil</a>
            <a href="/mentions-legales" class="mr-2 ml-2">Mentions légales</a></div></footer></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-d90f942f.js.map
