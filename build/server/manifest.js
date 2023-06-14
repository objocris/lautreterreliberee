const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/1.mp3","audio/2.mp3","audio/3.mp3","audio/4.mp3","audio/5.mp3","audio/6.mp3","audio/7.mp3","audio/8.mp3","favicons/android-chrome-192x192.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","favicons/site.webmanifest"]),
	mimeTypes: {".mp3":"audio/mpeg",".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.18f08896.js","app":"_app/immutable/entry/app.9ce24497.js","imports":["_app/immutable/entry/start.18f08896.js","_app/immutable/chunks/index.d1855a2a.js","_app/immutable/chunks/singletons.bfa05079.js","_app/immutable/entry/app.9ce24497.js","_app/immutable/chunks/index.d1855a2a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-6efa8401.js'),
			() => import('./chunks/1-2f2e787c.js'),
			() => import('./chunks/2-60616e70.js'),
			() => import('./chunks/3-3f61258b.js'),
			() => import('./chunks/4-aa2992ff.js'),
			() => import('./chunks/5-870a2e69.js'),
			() => import('./chunks/6-c1d1c700.js')
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
				id: "/balade-sonore/[slug]",
				pattern: /^\/balade-sonore\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/balade-sonore/[slug]/boss",
				pattern: /^\/balade-sonore\/([^/]+?)\/boss\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/champ-libre-2023",
				pattern: /^\/champ-libre-2023\/?$/,
				params: [],
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
