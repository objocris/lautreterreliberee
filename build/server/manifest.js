const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/1.mp3","audio/2.mp3","audio/3.mp3","audio/4.mp3","audio/5.mp3","audio/6.mp3","audio/7.mp3","audio/8.mp3"]),
	mimeTypes: {".mp3":"audio/mpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.56e5cd6c.js","app":"_app/immutable/entry/app.10a1ce01.js","imports":["_app/immutable/entry/start.56e5cd6c.js","_app/immutable/chunks/index.0c59758d.js","_app/immutable/chunks/singletons.eb72914c.js","_app/immutable/entry/app.10a1ce01.js","_app/immutable/chunks/index.0c59758d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-bab80c79.js'),
			() => import('./chunks/1-6da2bb65.js'),
			() => import('./chunks/2-dd8fdb18.js'),
			() => import('./chunks/3-b67fbbfb.js'),
			() => import('./chunks/4-de013904.js'),
			() => import('./chunks/5-d75a60bc.js'),
			() => import('./chunks/6-48df66ed.js')
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
