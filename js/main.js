/* global data */
/* exported data */
var imgInput = document.getElementById('imageInput');
var imgOutput = document.getElementById('imageOutput');
var form = document.querySelector('form');

var nextEntryId = 0;
var nextEntryIdStorage = localStorage.getItem('code-journal-next-id');
if (nextEntryIdStorage == null) {
  nextEntryId = 0;
} else {
  nextEntryId = nextEntryIdStorage;
}

var dataModel = [];
var storage = localStorage.getItem('code-journal');
if (storage === null) {
  dataModel = [];
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
    id: nextEntryId,
    title: title,
    url: photoUrl,
    notes: notes
  };

  dataModel.unshift(JSON.stringify(formValue));
  nextEntryId++;

  localStorage.setItem('code-journal', dataModel);
  localStorage.setItem('code-journal-next-id', nextEntryId);

  form.reset();
  imgOutput.removeAttribute('src');

  imgOutput.setAttribute('src', './images/placeholder-image-square.jpg');
});
