import { c as create_ssr_component, d as add_attribute } from './index3-f58250d6.js';
import { r as rimbaultTransparent } from './rimbault-transparent-ca888b84.js';
import { l as logoSmall } from './logo-small-4093e461.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}

<footer><div class="footer text-center"><img${add_attribute("src", rimbaultTransparent, 0)} alt="Portrait pochoir de Louis Rimbault">
        <img${add_attribute("src", logoSmall, 0)} alt="Logo de l'association L'autre terre libérée à Luynes"></div></footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-56c2364c.js.map
