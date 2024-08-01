let notes = [
  { name: "About", file: "ABOUT.md" }
]

const files = document.getElementById("files");
const file = document.getElementById("current-file");
const file_name = document.getElementById("file-name");
const file_content = document.getElementById("file-content");

notes.forEach(note => {
  const noteLink = document.createElement("span")
  noteLink.innerHTML = note.name
  noteLink.className = "cursor-pointer"

  noteLink.onclick = () => {
    file_name.innerHTML = note.file
    file_content.src = `content?file=${note.file}`
  }

  files.append(noteLink)
});

