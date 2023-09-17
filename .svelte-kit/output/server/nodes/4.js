

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/myLab/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.feb4a006.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.b627ab77.js"];
export const stylesheets = [];
export const fonts = [];
