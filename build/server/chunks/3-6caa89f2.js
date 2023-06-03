import { e as error } from './index-36410280.js';
import { a as ardoises } from './data-0708aaa7.js';

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

const index = 3;
const component = async () => (await import('./_page.svelte-c9411c3a.js')).default;
const server_id = "src/routes/balade-sonore/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/3.cac8c1a8.js","_app/immutable/chunks/index.d1855a2a.js"];
const stylesheets = ["_app/immutable/assets/3.bca0d003.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-6caa89f2.js.map
