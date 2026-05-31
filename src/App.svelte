<script>
  // @ts-nocheck
  import { db } from "./lib/db.js";
  import NoteCard from "./components/NoteCard.svelte";
  import Clock from "./components/Clock.svelte";

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

  function deleteNote(noteID) {
    db.notes.delete(noteID);
    notes = notes.filter((note) => note.id != noteID);
    console.log("deleting " + noteID);
  }
</script>

<h1>My Notes</h1>
<Clock />
<hr />
<input bind:value={noteText} placeholder="Write a note..." />

<button onclick={saveNote}> Save </button>

<button onclick={clearList}> Clear List </button>

<hr />

{#each notes as note (note.id)}
  <NoteCard {note} onclick={deleteNote} />
{/each}
