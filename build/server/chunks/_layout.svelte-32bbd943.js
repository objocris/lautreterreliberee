import { c as create_ssr_component, b as add_attribute } from './index3-bcf1d9eb.js';

const logoSmall = "/_app/immutable/assets/logo-small.bc4e5765.jpg";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container p-4 pt-10"><div class="inner">${slots.default ? slots.default({}) : ``}</div>
    <footer class="mb-6"><div class="footer text-center"><img${add_attribute("src", logoSmall, 0)} alt="Logo de l'association L'autre terre libérée à Luynes"></div>
        <div class="text-center"><a href="/" class="mr-2 ml-2 text-sm">Accueil</a>
            <a href="/association" class="mr-2 ml-2 text-sm">L&#39;association</a>
            <a href="/balade-sonore/1" class="mr-2 ml-2 text-sm">Balade sonore</a>
            <a href="https://www.facebook.com/lautreterreliberee/" target="_blank" class="mr-2 ml-2 text-sm">Facebook</a>
            <a href="/mentions-legales" class="mr-2 ml-2 text-sm">Mentions légales</a></div></footer></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-32bbd943.js.map
