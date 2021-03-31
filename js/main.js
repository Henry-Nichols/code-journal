/* global data */
/* exported data */

var imgInput = document.getElementById('imageInput');
var imgOutput = document.getElementById('imageOutput');
var form = document.querySelector('form');

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

imgInput.addEventListener('blur', function (event) {
  var imgURL = imgInput.value;
  imgOutput.src = imgURL;
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var title = event.currentTarget[0].value;
  var photoUrl = event.currentTarget[1].value;
  var notes = event.currentTarget[2].value;

  var formValue = {
    id: data.nextEntryId,
    title: title,
    url: photoUrl,
    notes: notes
  };

  data.entries.unshift(formValue);
  data.nextEntryId++;

  localStorage.setItem('code-journal', JSON.stringify(data));

  form.reset();
  imgOutput.removeAttribute('src');

  imgOutput.setAttribute('src', './images/placeholder-image-square.jpg');
});
