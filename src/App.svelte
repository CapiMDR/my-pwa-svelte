<script>
  // @ts-nocheck
  import { db } from "./lib/db.js";
  import NoteCard from "./components/NoteCard.svelte";

  let noteText = "";

  let notes = [];

  async function loadNotes() {
    notes = await db.notes.toArray();
  }

  async function saveNote() {
    if (!noteText.trim()) return;

    await db.notes.add({
      title: noteText,
      createdAt: Date.now(),
    });

    noteText = "";

    await loadNotes();
  }

  async function clearList() {
    db.notes.clear();
    notes = [];
  }

  loadNotes();
</script>

<h1>My Notes</h1>

<input bind:value={noteText} placeholder="Write a note..." />

<button onclick={saveNote}> Save </button>

<button onclick={clearList}> Clear List </button>

<hr />

{#each notes as note (note.id)}
  <NoteCard {note} />
{/each}
