import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.aaa89f8e.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.b627ab77.js"];
export const stylesheets = [];
export const fonts = [];
