<script>
  import Counter from "./Counter.svelte";
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  import west_orange_logo from "$lib/images/i1.svg";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div></div>
  <h1 class="display-4">Rustin Parsen</h1>
  <span class="welcome">
    <picture>
      <!-- <source srcset={welcome} type="image/webp" /> -->
      <!-- <img src={welcome_fallback} alt="Welcome" /> -->
      <img src={west_orange_logo} alt="SvelteKit" />
    </picture>
  </span>
  <h1 id="b3" class="s1">West Orange High School</h1>
  <div>
    This is a Portal to my current and Futuer Projects.<br /><br />
    Embedded Systems and Robotics are my current Interests.<br /><br /> I am
    Teaching Myself Software Developments and more.
    <br /><br />Thank you for Visiting.
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .s1 {
    color: orangered;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }

  /* Fixed minimum value below the minimum breakpoint */
</style>
