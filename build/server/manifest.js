const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/1.mp3","audio/2.mp3","audio/3.mp3","audio/4.mp3","audio/5.mp3","audio/6.mp3","audio/7.mp3","audio/8.mp3","favicons/android-chrome-192x192.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","favicons/site.webmanifest"]),
	mimeTypes: {".mp3":"audio/mpeg",".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.8bfe1fa1.js","app":"_app/immutable/entry/app.08d04b5d.js","imports":["_app/immutable/entry/start.8bfe1fa1.js","_app/immutable/chunks/index.07c54cb6.js","_app/immutable/chunks/singletons.7cb65195.js","_app/immutable/entry/app.08d04b5d.js","_app/immutable/chunks/index.07c54cb6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-060eb95b.js'),
			() => import('./chunks/1-1b6037b3.js'),
			() => import('./chunks/2-1e52abbc.js'),
			() => import('./chunks/3-64f08745.js'),
			() => import('./chunks/4-84629208.js'),
			() => import('./chunks/5-d5f4c74d.js'),
			() => import('./chunks/6-26a41794.js'),
			() => import('./chunks/7-292eda76.js')
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
				id: "/champ-libre-2023",
				pattern: /^\/champ-libre-2023\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/mentions-legales",
				pattern: /^\/mentions-legales\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 7 },
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
