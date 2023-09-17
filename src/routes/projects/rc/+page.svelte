<script>
  import i5 from "$lib/images/i5.png";
  import i7 from "$lib/images/i7.png";
  import i8 from "$lib/images/i8.png";
  import v3 from "$lib/images/v3.mp4";
</script>

<div class="text-center">
  <div class="card mb-3 s4">
    <picture class="s2">
      <h2 class="s0">project 1 -> Remote Command</h2>
      <img class="s1" src={i5} alt="SvelteKit" />
      <div class="card-body">
        <p class="card-text s3">
          Control any Electric device by pluging it to this Box.
        </p>
      </div>
    </picture>
  </div>

  <div class="card mb-3 s4">
    <picture class="s2">
      <h2 class="s0">project 1 -> Remote Command</h2>
      <img class="s1" src={i7} alt="SvelteKit" />
      <div class="card-body">
        <p class="card-text s3">
          I used ESP8266 Microcontroller which has a WIFI connection. ON/OFF
          command are given via a Graphical User Interface. The Code is writen
          in C Languge .
        </p>
      </div>
    </picture>
  </div>

  <div class="card mb-3 s4">
    <picture class="s2">
      <h2 class="s0">project 1 -> Remote Command</h2>
      <img class="s1" src={i8} alt="SvelteKit" />
      <div class="card-body">
        <p class="card-text s3">Overview of Wiring Design</p>
      </div>
    </picture>
  </div>

  <div class="card mb-3 s4">
    <div
      id="trailer"
      class="section d-flex justify-content-center embed-responsive embed-responsive-21by9"
    >
      <video class="embed-responsive-item" controls autoplay loop muted>
        <source src={v3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="card-body">
      <p class="card-text s3">Demo</p>
    </div>
  </div>
</div>

<style>
  .s0 {
    color: rgb(4, 151, 46);
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  .s1 {
    width: 75%;
    height: 60%;
    border: 2px solid #ffdd01;
  }

  .s2 {
    padding: 0%;
    /* margin-top: 2rem; */
  }

  .s3 {
    color: #460b66;
    word-wrap: break-word;
  }

  .s4 {
    min-height: 500px;
    height: fit-content;
  }
</style>
