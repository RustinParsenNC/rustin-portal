import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/ssr.js";
const i17 = "/_app/immutable/assets/i17.ca12cb60.png";
const i20 = "/_app/immutable/assets/i20.be2b7544.png";
const i13 = "/_app/immutable/assets/i13.1fae234e.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".s0.svelte-1mtjmzg{color:rgb(4, 151, 46);margin-bottom:1rem;margin-top:0.5rem}.s1.svelte-1mtjmzg{width:75%;height:60%;border:2px solid #ffdd01}.s2.svelte-1mtjmzg{padding:0%}.s3.svelte-1mtjmzg{color:#460b66;word-wrap:break-word}.s4.svelte-1mtjmzg{min-height:500px;height:fit-content}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="text-center" data-svelte-h="svelte-1smrwle"><div class="card mb-3 s4 svelte-1mtjmzg"><picture class="s2 svelte-1mtjmzg"><h2 class="s0 svelte-1mtjmzg">project 2 -&gt; KYLO</h2> <img class="s1 svelte-1mtjmzg"${add_attribute("src", i17, 0)} alt="SvelteKit"> <div class="card-body"><p class="card-text s3 svelte-1mtjmzg">KYLO (keep your lights On) is a Game I invented to practice Embedded
          system Design.<br> Each Player has three On Lamp,<br> Lamps will
          go Off as players score .<br> First Player to have all three lamps Off
          will lose.</p></div></picture></div> <div class="card mb-3 s4 svelte-1mtjmzg"><picture class="s2 svelte-1mtjmzg"><h2 class="s0 svelte-1mtjmzg">project 2 -&gt; KYLO</h2> <img class="s1 svelte-1mtjmzg"${add_attribute("src", i20, 0)} alt="SvelteKit"> <div class="card-body"><p class="card-text s3 svelte-1mtjmzg">ESP8266 Microcontroller used with C Language to Implement Game Rules</p></div></picture></div> <div class="card mb-3 s4 svelte-1mtjmzg"><picture class="s2 svelte-1mtjmzg"><h2 class="s0 svelte-1mtjmzg">project 2 -&gt; KYLO</h2> <img class="s1 svelte-1mtjmzg"${add_attribute("src", i13, 0)} alt="SvelteKit"> <div class="card-body"><p class="card-text s3 svelte-1mtjmzg">Ultrasonic Sensor is Embedded in each Basket to Detect the Presence of
          the Ball.</p></div></picture></div> </div>`;
});
export {
  Page as default
};
