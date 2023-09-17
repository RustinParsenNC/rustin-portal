import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
const Counter_svelte_svelte_type_style_lang = "";
const west_orange_logo = "/_app/immutable/assets/i1.23752f6a.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-9n0cdu.svelte-9n0cdu{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}h1.svelte-9n0cdu.svelte-9n0cdu{width:100%}.welcome.svelte-9n0cdu.svelte-9n0cdu{display:block;position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.s1.svelte-9n0cdu.svelte-9n0cdu{color:orangered}.welcome.svelte-9n0cdu img.svelte-9n0cdu{position:absolute;width:100%;height:100%;top:0;display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-8gb88t_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-8gb88t_END -->`, ""} <section class="svelte-9n0cdu" data-svelte-h="svelte-paazy4"><div></div> <h1 class="display-4 svelte-9n0cdu">Rustin Parsen</h1> <span class="welcome svelte-9n0cdu"><picture>  <img${add_attribute("src", west_orange_logo, 0)} alt="SvelteKit" class="svelte-9n0cdu"></picture></span> <h1 class="s1 svelte-9n0cdu">West Orange High School</h1> <div>This is a Portal to my current and Futuer Projects.<br><br>
    Embedded Systems and Robotics are my current Interests.<br><br> I am
    Teaching Myself Software Developments and more.
    <br><br>Thank you for Visiting.</div> </section>`;
});
export {
  Page as default
};
