<script>
  import i17 from "$lib/images/i17.png";
  import i20 from "$lib/images/i20.png";
  import i13 from "$lib/images/i13.png";
</script>

<div class="text-center">
  <div class="card mb-3 s4">
    <picture class="s2">
      <h2 class="s0">project 2 -> KYLO</h2>
      <img class="s1" src={i17} alt="SvelteKit" />
      <div class="card-body">
        <p class="card-text s3">
          KYLO (keep your lights On) is a Game I invented to practice Embedded
          system Design.<br /> Each Player has three On Lamp,<br /> Lamps will
          go Off as players score .<br /> First Player to have all three lamps Off
          will lose.
        </p>
      </div>
    </picture>
  </div>
  <div class="card mb-3 s4">
    <picture class="s2">
      <h2 class="s0">project 2 -> KYLO</h2>
      <img class="s1" src={i20} alt="SvelteKit" />
      <div class="card-body">
        <p class="card-text s3">
          ESP8266 Microcontroller used with C Language to Implement Game Rules
        </p>
      </div>
    </picture>
  </div>
  <div class="card mb-3 s4">
    <picture class="s2">
      <h2 class="s0">project 2 -> KYLO</h2>
      <img class="s1" src={i13} alt="SvelteKit" />
      <div class="card-body">
        <p class="card-text s3">
          Ultrasonic Sensor is Embedded in each Basket to Detect the Presence of
          the Ball.
        </p>
      </div>
    </picture>
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
