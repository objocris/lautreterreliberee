const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/1.mp3","audio/2.mp3","audio/3.mp3","audio/4.mp3","audio/5.mp3","audio/6.mp3","audio/7.mp3","audio/8.mp3","favicons/android-chrome-192x192.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","favicons/site.webmanifest"]),
	mimeTypes: {".mp3":"audio/mpeg",".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.8025cbde.js","app":"_app/immutable/entry/app.6006d2c8.js","imports":["_app/immutable/entry/start.8025cbde.js","_app/immutable/chunks/index.07c54cb6.js","_app/immutable/chunks/singletons.f9620ce8.js","_app/immutable/entry/app.6006d2c8.js","_app/immutable/chunks/index.07c54cb6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-771dc95f.js'),
			() => import('./chunks/1-640c5725.js'),
			() => import('./chunks/2-1e52abbc.js'),
			() => import('./chunks/3-9c336015.js'),
			() => import('./chunks/4-84629208.js'),
			() => import('./chunks/5-d0a7cf24.js'),
			() => import('./chunks/6-ddff5005.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/balade-sonore/[slug]",
				pattern: /^\/balade-sonore\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/mentions-legales",
				pattern: /^\/mentions-legales\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 6 },
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
