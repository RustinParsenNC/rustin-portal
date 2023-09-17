import * as universal from '../entries/pages/sverdle/how-to-play/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/how-to-play/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/sverdle/how-to-play/+page.js";
export const imports = ["_app/immutable/nodes/9.ba39f390.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.b627ab77.js"];
export const stylesheets = ["_app/immutable/assets/9.89a9e780.css"];
export const fonts = [];
