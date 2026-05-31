<script>
  let { note } = $props();
</script>

<div class="note-card">
  {note.title}
</div>

<style>
  .note-card {
    padding: 1rem;
    margin-bottom: 0.5rem;

    border: 1px solid #ccc;
    border-radius: 8px;
  }
</style>
