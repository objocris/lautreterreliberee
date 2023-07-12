const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/1.mp3","audio/2.mp3","audio/3.mp3","audio/4.mp3","audio/5.mp3","audio/6.mp3","audio/7.mp3","audio/8.mp3","favicons/android-chrome-192x192.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","favicons/site.webmanifest"]),
	mimeTypes: {".mp3":"audio/mpeg",".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.09cb606e.js","app":"_app/immutable/entry/app.9606da6d.js","imports":["_app/immutable/entry/start.09cb606e.js","_app/immutable/chunks/index.5fb73ef7.js","_app/immutable/chunks/singletons.8045ee72.js","_app/immutable/entry/app.9606da6d.js","_app/immutable/chunks/index.5fb73ef7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-3d9afde8.js'),
			() => import('./chunks/1-f9cb1215.js'),
			() => import('./chunks/2-831ae647.js'),
			() => import('./chunks/3-d5f36341.js'),
			() => import('./chunks/4-00f66660.js'),
			() => import('./chunks/5-44809e72.js'),
			() => import('./chunks/6-aef15640.js'),
			() => import('./chunks/7-b901b981.js')
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/association",
				pattern: /^\/association\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(fullscreen)/balade-sonore",
				pattern: /^\/balade-sonore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/balade-sonore/[slug]",
				pattern: /^\/balade-sonore\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/mentions-legales",
				pattern: /^\/mentions-legales\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
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
