import { e as error } from './index-36410280.js';
import { a as ardoises } from './data-42a0cfb1.js';

function load({ params }) {
  const index = +params.slug - 1;
  const ardoise = ardoises[index];
  if (!ardoise)
    throw error(404);
  const result = { ardoise };
  if (index >= 1) {
    result.previous = ardoises[index - 1];
  }
  if (index < ardoises.length) {
    result.next = ardoises[index + 1];
  }
  return result;
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-7d6b2683.js')).default;
const server_id = "src/routes/balade-sonore/[slug]/boss/+page.server.ts";
const imports = ["_app/immutable/nodes/4.2a36b9b0.js","_app/immutable/chunks/index.d1855a2a.js"];
const stylesheets = ["_app/immutable/assets/4.91d09ae9.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-aa2992ff.js.map
