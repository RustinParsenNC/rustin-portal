

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0bb06ee5.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.b627ab77.js","_app/immutable/chunks/stores.d8fb1bd6.js","_app/immutable/chunks/singletons.334e0d8f.js"];
export const stylesheets = [];
export const fonts = [];
