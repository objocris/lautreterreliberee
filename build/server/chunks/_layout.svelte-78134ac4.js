import { c as create_ssr_component, d as add_attribute } from './index3-f58250d6.js';
import { l as logoSmall } from './logo-small-4093e461.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}

<footer class="mb-6"><div class="footer text-center"><img${add_attribute("src", logoSmall, 0)} alt="Logo de l'association L'autre terre libérée à Luynes"></div>
    <div class="text-center"><a href="/" class="mr-2 ml-2">Accueil</a>
        <a href="/mentions-legales" class="mr-2 ml-2">Mentions légales</a></div></footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-78134ac4.js.map
