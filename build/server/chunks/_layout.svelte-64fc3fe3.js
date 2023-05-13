import { c as create_ssr_component, d as add_attribute } from './index3-f58250d6.js';
import { r as rimbaultTransparent, l as logoSmall } from './logo-small-ca2e234f.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}

<footer><div class="footer text-center"><img${add_attribute("src", rimbaultTransparent, 0)} alt="Portrait pochoir de Louis Rimbault">
        <img${add_attribute("src", logoSmall, 0)} alt="Logo de l'association L'autre terre libérée à Luynes"></div></footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-64fc3fe3.js.map
