const notes = [
	{ name: 'Ideas & Life', file: 'Ideas_And_Life.md' },
	{ name: 'About', file: 'ABOUT.md' }
]

function loadFile(selectedIdx) {
	const note = notes[selectedIdx]

	file_name.innerHTML = note.name
	file_content.src = `content?file=${note.file}`
}

const files = document.getElementById('files')
const file = document.getElementById('current-file')
const file_name = document.getElementById('file-name')
const file_content = document.getElementById('file-content')

notes.forEach(({ name }, i) => {
	const noteLink = document.createElement('div')
	noteLink.innerHTML = i + 1 + '. ' + name
	noteLink.className = 'cursor-pointer'
	noteLink.onclick = () => loadFile(i)
	files.append(noteLink)
})

// Load first file by default
loadFile(0)
