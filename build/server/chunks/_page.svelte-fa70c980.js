import { c as create_ssr_component, b as add_attribute, v as validate_component, h as compute_rest_props, f as each, i as spread, j as escape_object, e as escape, k as escape_attribute_value, l as globals } from './index3-f6dc7f44.js';
import { a as afficheSansTexte } from './affiche-sanstexte-9d91d4b9.js';

const Raw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursor = 870711;
  function getId() {
    cursor += 1;
    return `fa-${cursor.toString(16)}`;
  }
  let raw = "";
  let { data } = $$props;
  function getRaw(data2) {
    if (!data2 || !data2.raw) {
      return "";
    }
    let rawData = data2.raw;
    const ids = {};
    rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
      const uniqueId = getId();
      ids[id] = uniqueId;
      return ` id="${uniqueId}"`;
    });
    rawData = rawData.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
      const id = rawId || pointerId;
      if (!id || !ids[id]) {
        return match;
      }
      return `#${ids[id]}`;
    });
    return rawData;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  raw = getRaw(data);
  return `<g><!-- HTML_TAG_START -->${raw}<!-- HTML_TAG_END --></g>`;
});
const css = {
  code: ".fa-icon.svelte-1mc5hvj{display:inline-block;fill:currentColor}.fa-flip-horizontal.svelte-1mc5hvj{transform:scale(-1, 1)}.fa-flip-vertical.svelte-1mc5hvj{transform:scale(1, -1)}.fa-spin.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s 0s infinite linear}.fa-inverse.svelte-1mc5hvj{color:#fff}.fa-pulse.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s infinite steps(8)}@keyframes svelte-1mc5hvj-fa-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "width", "height", "box", "spin", "inverse", "pulse", "flip", "style", "label"]);
  let { class: className = "" } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { box = "0 0 0 0" } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = "none" } = $$props;
  let { style = "" } = $$props;
  let { label = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.box === void 0 && $$bindings.box && box !== void 0)
    $$bindings.box(box);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css);
  return `<svg${spread(
    [
      { version: "1.1" },
      {
        class: "fa-icon " + escape(className, true)
      },
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      {
        "aria-label": escape_attribute_value(label)
      },
      {
        role: escape_attribute_value(label ? "img" : "presentation")
      },
      { viewBox: escape_attribute_value(box) },
      { style: escape_attribute_value(style) },
      escape_object($$restProps)
    ],
    {
      classes: (spin ? "fa-spin" : "") + " " + (pulse ? "fa-pulse" : "") + " " + (inverse ? "fa-inverse" : "") + " " + (flip === "horizontal" ? "fa-flip-horizontal" : "") + " " + (flip === "vertical" ? "fa-flip-vertical" : "") + " svelte-1mc5hvj"
    }
  )}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const { Object: Object_1 } = globals;
let outerScale = 1;
function normaliseData(data) {
  let name;
  let iconData;
  if (!data) {
    return void 0;
  } else if ("definition" in data) {
    console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead");
    return void 0;
  } else if ("iconName" in data && "icon" in data) {
    name = data.iconName;
    let paths = [];
    const [width, height, , , path] = data.icon;
    if (Array.isArray(path)) {
      paths = path;
    } else {
      paths = [path];
    }
    iconData = {
      width,
      height,
      paths: paths.map((path2) => {
        return { d: path2 };
      })
    };
  } else {
    name = Object.keys(data)[0];
    iconData = data[name];
  }
  return iconData;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "data", "scale", "spin", "inverse", "pulse", "flip", "label", "style"]);
  let { class: className = "" } = $$props;
  let { data } = $$props;
  let iconData;
  let { scale = 1 } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = void 0 } = $$props;
  let { label = "" } = $$props;
  let { style = "" } = $$props;
  let width = 10;
  let height = 10;
  let combinedStyle;
  let box;
  function normalisedScale() {
    let numScale = 1;
    if (typeof scale !== "undefined") {
      numScale = Number(scale);
    }
    if (isNaN(numScale) || numScale <= 0) {
      console.warn('Invalid prop: prop "scale" should be a number over 0.');
      return outerScale;
    }
    return numScale * outerScale;
  }
  function calculateBox() {
    if (iconData) {
      return `0 0 ${iconData.width} ${iconData.height}`;
    }
    return `0 0 ${width} ${height}`;
  }
  function calculateRatio() {
    if (!iconData) {
      return 1;
    }
    return Math.max(iconData.width, iconData.height) / 16;
  }
  function calculateWidth() {
    if (iconData) {
      return iconData.width / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateHeight() {
    if (iconData) {
      return iconData.height / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateStyle() {
    let combined = "";
    if (style !== null) {
      combined += style;
    }
    let size = normalisedScale();
    if (size === 1) {
      if (combined.length === 0) {
        return "";
      }
      return combined;
    }
    if (combined !== "" && !combined.endsWith(";")) {
      combined += "; ";
    }
    return `${combined}font-size: ${size}em`;
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        iconData = normaliseData(data);
        width = calculateWidth();
        height = calculateHeight();
        combinedStyle = calculateStyle();
        box = calculateBox();
      }
    }
    $$rendered = `${validate_component(Svg, "Svg").$$render($$result, Object_1.assign({}, { label }, { width }, { height }, { box }, { style: combinedStyle }, { spin }, { flip }, { inverse }, { pulse }, { class: className }, $$restProps), {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : `
    ${iconData ? `${iconData.paths ? `${each(iconData.paths, (path) => {
          return `<path${spread([escape_object(path)], {})}></path>`;
        })}` : ``}
      ${iconData.polygons ? `${each(iconData.polygons, (polygon) => {
          return `<polygon${spread([escape_object(polygon)], {})}></polygon>`;
        })}` : ``}
      ${iconData.raw ? `${validate_component(Raw, "Raw").$$render(
          $$result,
          { data: iconData },
          {
            data: ($$value) => {
              iconData = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}` : ``}
  `}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const map = {
  map: {
    width: 1792,
    height: 1792,
    paths: [
      {
        d: "M512 0q13 0 22.5 9.5t9.5 22.5v1472q0 20-17 28l-480 256q-7 4-15 4-13 0-22.5-9.5t-9.5-22.5v-1472q0-20 17-28l480-256q7-4 15-4zM1760 0q13 0 22.5 9.5t9.5 22.5v1472q0 20-17 28l-480 256q-7 4-15 4-13 0-22.5-9.5t-9.5-22.5v-1472q0-20 17-28l480-256q7-4 15-4zM640 0q8 0 14 3l512 256q18 10 18 29v1472q0 13-9.5 22.5t-22.5 9.5q-8 0-14-3l-512-256q-18-10-18-29v-1472q0-13 9.5-22.5t22.5-9.5z"
      }
    ]
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="img-header text-center flex justify-center mb-10"><img${add_attribute("src", afficheSansTexte, 0)} alt="Affiche Champ Libre 2023" class="w-60 max-w-full"></div>

<span class="frankie text-atl-blue text-2xl lg:text-5xl block">Mardi 27 juin 2023</span>

<span class="frankie text-atl-red text-6xl">19h
    <a href="https://osm.org/go/0AU8MOGON?way=68947126" target="blank">${validate_component(Icon, "Icon").$$render($$result, { data: map, class: "w-8 h-8" }, {}, {})}</a></span>
<h2 class="text-xl lg:text-2xl text-atl-red font-bold"><a href="https://cafeshistoriques.com/programme/la-rencontre-de-louis-rimbault-et-des-causeries-anarchistes">&quot;A la rencontre de Louis Rimbault et des causeries anarchistes&quot;</a></h2>
<p class="text-base lg:text-2xl mb-4">Conférence d&#39;<a href="https://fr.wikipedia.org/wiki/Anne_Steiner" target="_blank">Anne Steiner</a>, sociologue, spécialiste du <a href="https://fr.wikipedia.org/wiki/Anarchisme_individualiste" target="_blank">mouvement individualiste anarchiste</a>, en partenariat avec les
    <a href="https://rdv-histoire.com/" target="_blank">Rendez-vous de l&#39;histoire</a>, dans le cadre des <a href="https://cafeshistoriques.com/" target="_blank">cafés historiques en région Centre Val-de-Loire</a>.
</p>

<span class="frankie text-atl-blue text-2xl lg:text-5xl mt-8 block">Dimanche 2 juillet 2023</span>

<span class="frankie text-atl-red text-6xl">Balade sonore
    <a href="https://osm.org/go/0AU8MOGON?way=68947126" target="blank">${validate_component(Icon, "Icon").$$render($$result, { data: map, class: "w-8 h-8" }, {}, {})}</a></span>
<h2 class="text-xl lg:text-2xl text-atl-red font-bold">10h30 &gt; 12h30 - Départ sous la halle de Luynes</h2>
<p class="text-base lg:text-2xl mb-4">Départ à 10h30 sous la Halle de Luynes pour un promenade d&#39;environ 1h, parsemée de podcasts audio, qui vous amène à découvrir l’histoire de Louis Rimbault et de son école végétarienne Terre Libérée.</p>
<p class="text-base lg:text-2xl mb-4">Ce parcours sonore proposé par l’association &quot;L&#39;autre terre libérée&quot; vous racontera cette expérience qui a eu lieu à Luynes entre 1923 et 1949, et qui a disparu des mémoires collectives.</p>
<p class="text-base lg:text-2xl mb-4">Pour découvrir cette histoire, nous vous inviterons à scanner des codes QR installés tout au long du parcours pour écouter des petites pastilles audio tout en cheminant jusqu’au terrain de l&#39;association.</p>

<span class="frankie text-atl-red text-6xl">Pique-nique partagé &amp; Causeries
    <a href="https://osm.org/go/0AU8Qn3Nl-?m=" target="blank">${validate_component(Icon, "Icon").$$render($$result, { data: map, class: "w-8 h-8" }, {}, {})}</a></span>
<h2 class="text-xl lg:text-2xl text-atl-red font-bold">12h30 - Terrain de l&#39;association</h2>
<p class="text-base lg:text-2xl mb-4">Chaque participant est invité à préparer une spécialité culinaire, à la déposer sur la table pour partager le moment convivial du repas. Une buvette sera également disponible pour se désaltérer, proposant des boissons avec et sans alcool.</p>

<span class="frankie text-atl-red text-6xl">Fresque du climat et ateliers ludiques
    <a href="https://osm.org/go/0AU8Qn3Nl-?m=" target="blank">${validate_component(Icon, "Icon").$$render($$result, { data: map, class: "w-8 h-8" }, {}, {})}</a></span>
<h2 class="text-xl lg:text-2xl text-atl-red font-bold">15h - Terrain de l&#39;association</h2>
<p class="text-base lg:text-2xl mb-4">L’approche ludique et pédagogique de la Fresque du Climat permet à chacun de comprendre le fonctionnement, l’ampleur et la complexité des enjeux liés aux dérèglements climatiques. L’atelier mobilise l’intelligence collective pour sensibiliser les participants aux changements climatiques. Durant
    l’atelier, les participants relient les liens de cause à effets et intègrent les enjeux climatiques dans leur globalité.
</p>

<span class="frankie text-atl-red text-6xl">Vélo Sound System
    <a href="https://osm.org/go/0AU8Qn3Nl-?m=" target="blank">${validate_component(Icon, "Icon").$$render($$result, { data: map, class: "w-8 h-8" }, {}, {})}</a></span>
<h2 class="text-xl lg:text-2xl text-atl-red font-bold">15h30 - Terrain de l&#39;association</h2>
<p class="text-base lg:text-2xl mb-4">Occum quam aces aut remporum fugia aliae dus ped utemqui re volum inis eum santenis dit qui alitatus in rem quate occusam, optat quationse natias dolectio inctotae officit in nusdand ipsunt.</p>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fa70c980.js.map
