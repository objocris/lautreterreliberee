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

const index = 5;
const component = async () => (await import('./_page.svelte-0cfe6a31.js')).default;
const server_id = "src/routes/balade-sonore/[slug]/boss/+page.server.ts";
const imports = ["_app/immutable/nodes/5.bb2e9531.js","_app/immutable/chunks/index.07a12486.js"];
const stylesheets = ["_app/immutable/assets/5.91d09ae9.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-86659315.js.map
