

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.2a06328c.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.b627ab77.js"];
export const stylesheets = ["_app/immutable/assets/5.65f49291.css"];
export const fonts = [];
