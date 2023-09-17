

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/rc/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.148d5f87.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.b627ab77.js"];
export const stylesheets = ["_app/immutable/assets/6.8e6dd701.css"];
export const fonts = [];
