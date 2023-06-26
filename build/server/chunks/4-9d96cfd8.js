import { e as error } from './index-36410280.js';
import { a as ardoises } from './data-df5bb18b.js';

function load({ params }) {
  const index = +params.slug - 1;
  const ardoise = ardoises[index];
  if (!ardoise || index > 1)
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
const component = async () => (await import('./_page.svelte-2ff0102e.js')).default;
const server_id = "src/routes/balade-sonore/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/4.56f52b8e.js","_app/immutable/chunks/index.07a12486.js"];
const stylesheets = ["_app/immutable/assets/4.6f07d20b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-9d96cfd8.js.map
