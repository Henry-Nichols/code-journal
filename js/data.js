/* exported data */

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
  var ul = document.getElementById('unlisted');
  for (var i = 0; i < data.entries.length; i++) {
    var element = entryData(data.entries[i]);
    ul.appendChild(element);
  }
});

function entryData(journalEntry) {

  var row = document.createElement('div');
  row.classList.add('row');

  var columnImage = document.createElement('img');

  columnImage.classList.add('column-half');
  columnImage.src = journalEntry.url;
  row.appendChild(columnImage);

  var columnHalfTwo = document.createElement('div');
  columnHalfTwo.classList.add('column-half');
  row.appendChild(columnHalfTwo);

  var headerTitle = document.createElement('h2');
  columnHalfTwo.appendChild(headerTitle);
  headerTitle.textContent = journalEntry.title;

  var textArea = document.createElement('p');
  columnHalfTwo.appendChild(textArea);
  textArea.textContent = journalEntry.notes;

  return row;
}
