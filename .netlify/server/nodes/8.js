import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/8.32d894e5.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.b627ab77.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.334e0d8f.js"];
export const stylesheets = ["_app/immutable/assets/8.9d501049.css"];
export const fonts = [];
