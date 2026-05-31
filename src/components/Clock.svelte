<script>
  // @ts-nocheck
  function updateClock() {
    const now = new Date();
    timeString = now.toDateString();
  }

  // Update clock every second
  let timeString;
  setInterval(updateClock, 1000);
  updateClock(); // Initialize clock immediately
</script>

{timeString}
