const notes = [
  { name: "About", file: "ABOUT.md" }
]

function loadFile(selectedIdx) {
  const note = notes[selectedIdx];

  file_name.innerHTML = note.file
  file_content.src = `content?file=${note.file}`
}

const files = document.getElementById("files");
const file = document.getElementById("current-file");
const file_name = document.getElementById("file-name");
const file_content = document.getElementById("file-content");

notes.forEach(({ name }, i) => {
  const noteLink = document.createElement("span")
  noteLink.innerHTML = name
  noteLink.className = "cursor-pointer"
  noteLink.onclick = () => loadFile(i)
  files.append(noteLink)
});

// Load first file by default
loadFile(0);
