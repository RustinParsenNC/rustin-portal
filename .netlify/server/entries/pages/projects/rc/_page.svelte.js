import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/ssr.js";
const i5 = "/_app/immutable/assets/i5.47e6c50f.png";
const i7 = "/_app/immutable/assets/i7.cbbd286d.png";
const i8 = "/_app/immutable/assets/i8.8916566f.png";
const v3 = "/_app/immutable/assets/v3.b4146747.mp4";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".s0.svelte-1mtjmzg{color:rgb(4, 151, 46);margin-bottom:1rem;margin-top:0.5rem}.s1.svelte-1mtjmzg{width:75%;height:60%;border:2px solid #ffdd01}.s2.svelte-1mtjmzg{padding:0%}.s3.svelte-1mtjmzg{color:#460b66;word-wrap:break-word}.s4.svelte-1mtjmzg{min-height:500px;height:fit-content}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="text-center" data-svelte-h="svelte-1nk8igd"><div class="card mb-3 s4 svelte-1mtjmzg"><picture class="s2 svelte-1mtjmzg"><h2 class="s0 svelte-1mtjmzg">project 1 -&gt; Remote Command</h2> <img class="s1 svelte-1mtjmzg"${add_attribute("src", i5, 0)} alt="SvelteKit"> <div class="card-body"><p class="card-text s3 svelte-1mtjmzg">Control any Electric device by pluging it to this Box.</p></div></picture></div> <div class="card mb-3 s4 svelte-1mtjmzg"><picture class="s2 svelte-1mtjmzg"><h2 class="s0 svelte-1mtjmzg">project 1 -&gt; Remote Command</h2> <img class="s1 svelte-1mtjmzg"${add_attribute("src", i7, 0)} alt="SvelteKit"> <div class="card-body"><p class="card-text s3 svelte-1mtjmzg">I used ESP8266 Microcontroller which has a WIFI connection. ON/OFF
          command are given via a Graphical User Interface. The Code is writen
          in C Languge .</p></div></picture></div> <div class="card mb-3 s4 svelte-1mtjmzg"><picture class="s2 svelte-1mtjmzg"><h2 class="s0 svelte-1mtjmzg">project 1 -&gt; Remote Command</h2> <img class="s1 svelte-1mtjmzg"${add_attribute("src", i8, 0)} alt="SvelteKit"> <div class="card-body"><p class="card-text s3 svelte-1mtjmzg">Overview of Wiring Design</p></div></picture></div> <div class="card mb-3 s4 svelte-1mtjmzg"><div id="trailer" class="section d-flex justify-content-center embed-responsive embed-responsive-21by9"><video class="embed-responsive-item" controls autoplay loop muted><source${add_attribute("src", v3, 0)} type="video/mp4">
        Your browser does not support the video tag.</video></div> <div class="card-body"><p class="card-text s3 svelte-1mtjmzg">Demo</p></div></div> </div>`;
});
export {
  Page as default
};
