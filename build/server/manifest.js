const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/1.mp3","audio/2.mp3","audio/3.mp3","audio/4.mp3","audio/5.mp3","audio/6.mp3","audio/7.mp3","audio/8.mp3","favicons/android-chrome-192x192.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","favicons/site.webmanifest"]),
	mimeTypes: {".mp3":"audio/mpeg",".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.147823e2.js","app":"_app/immutable/entry/app.13a29762.js","imports":["_app/immutable/entry/start.147823e2.js","_app/immutable/chunks/index.07a12486.js","_app/immutable/chunks/singletons.d906109c.js","_app/immutable/entry/app.13a29762.js","_app/immutable/chunks/index.07a12486.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-39bd166b.js'),
			() => import('./chunks/1-262c3ef8.js'),
			() => import('./chunks/2-7c1bd23b.js'),
			() => import('./chunks/3-ce4cd7e9.js'),
			() => import('./chunks/4-03626695.js'),
			() => import('./chunks/5-b12f11b3.js'),
			() => import('./chunks/6-eeabdd4c.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/association",
				pattern: /^\/association\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/balade-sonore",
				pattern: /^\/balade-sonore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/balade-sonore/[slug]",
				pattern: /^\/balade-sonore\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/mentions-legales",
				pattern: /^\/mentions-legales\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
