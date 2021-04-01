/* global data */
/* exported data */
var imgInput = document.getElementById('imageInput');
var imgOutput = document.getElementById('imageOutput');
var form = document.querySelector('form');
var newEntryBtn = document.getElementById('new-btn-id');
var entryForm = document.getElementById('entry-form');
var viewContainer = document.getElementById('view-entries');

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
