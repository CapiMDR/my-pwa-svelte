<script>
  let { note, onclick } = $props();
</script>

<div class="note-card">
  {note.title}
  <button onclick={() => onclick(note.id)}> Delete </button>
</div>

<style>
  .note-card {
    padding: 1rem;
    margin-bottom: 0.5rem;

    border: 1px solid var(--primary-color);
    border-radius: 8px;
  }
</style>
