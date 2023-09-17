import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".s1.svelte-9ptn4h{background-color:rgb(62, 82, 238);color:aliceblue}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="navbar navbar-expand-lg navbar-light bg-light" data-svelte-h="svelte-hc0hci"> <button class="navbar-toggler s1 svelte-9ptn4h" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
    My Project List</button> <div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active"><a class="nav-link" href="/projects/rc"><button class="btn btn-success">Remote Command</button> <span class="sr-only">(current)</span></a></li> <li class="nav-item active"><a class="nav-link" href="/projects/kylo"><button class="btn btn-success">KYLO</button> <span class="sr-only">(current)</span></a></li></ul></div> </nav>`;
});
export {
  Page as default
};
