import { c as create_ssr_component, b as subscribe } from './index3-41dea004.js';
import { p as page } from './stores-f1b0481a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-rg8zxp_START --><!-- HEAD_svelte-rg8zxp_END -->`, ""}

<div class="max-w-screen-lg m-auto pl-6 pr-6"></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5f44d039.js.map
