/* global data */
/* exported data */
var imgInput = document.getElementById('imageInput');
var imgOutput = document.getElementById('imageOutput');
var form = document.querySelector('form');
var newEntryBtn = document.getElementById('new-btn-id');
var entryForm = document.getElementById('entry-form');
var viewContainer = document.getElementById('view-entries');
var entryForm = document.getElementById('entry-form');
var ul = document.getElementById('unlisted');

imgInput.addEventListener('blur', function (event) {
  var imgURL = imgInput.value;
  imgOutput.src = imgURL;
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var title = form.elements.title.value;
  var photoUrl = form.elements.url.value;
  var notes = form.elements.notes.value;

  var formValue = {
    id: data.nextEntryId,
    title: title,
    url: photoUrl,
    notes: notes
  };

  data.entries.unshift(formValue);
  ul.prepend(entryData(formValue));
  data.nextEntryId++;
  form.reset();
  imgOutput.setAttribute('src', './images/placeholder-image-square.jpg');
  entryForm.classList.add('hidden');
  viewContainer.classList.remove('hidden');

});

newEntryBtn.addEventListener('click', function (e) {
  entryForm.classList.remove('hidden');
  viewContainer.classList.add('hidden');
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
