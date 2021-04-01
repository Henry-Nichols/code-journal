/* exported data */

var entryForm = document.getElementById('entry-form');
var ul = document.getElementById('unlisted');

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var storage = localStorage.getItem('code-journal');
if (storage !== null) {
  data = JSON.parse(storage);
}

window.addEventListener('beforeunload', event => {
  localStorage.setItem('code-journal', JSON.stringify(data));
});

window.addEventListener('DOMContentLoaded', function (event) {
  entryForm.classList.add('hidden');
  for (var i = 0; i < data.entries.length; i++) {
    var element = entryData(data.entries[i]);
    ul.appendChild(element);
  }
});

function entryData(journalEntry) {

  var row = document.createElement('div');
  row.classList.add('entryRow');

  var imageDiv = document.createElement('div');
  imageDiv.classList.add('column-half');
  row.appendChild(imageDiv);

  var columnImage = document.createElement('img');
  columnImage.classList.add('inputImage');
  columnImage.src = journalEntry.url;
  imageDiv.appendChild(columnImage);

  var columnHalfTwo = document.createElement('div');
  columnHalfTwo.classList.add('column-half');
  row.appendChild(columnHalfTwo);

  var headerTitle = document.createElement('h2');
  headerTitle.classList.add('inputHeader');
  columnHalfTwo.appendChild(headerTitle);
  headerTitle.textContent = journalEntry.title;

  var textArea = document.createElement('p');
  columnHalfTwo.appendChild(textArea);
  textArea.textContent = journalEntry.notes;

  return row;
}
