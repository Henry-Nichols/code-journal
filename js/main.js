/* global data */
/* exported data */
var imgInput = document.getElementById('imageInput');
var imgOutput = document.getElementById('imageOutput');
var form = document.querySelector('form');

imgInput.addEventListener('blur', function (event) {
  var imgURL = imgInput.value;
  imgOutput.src = imgURL;
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var title = form.elements[0].value;
  var photoUrl = form.elements[1].value;
  var notes = form.elements[2].value;

  var formValue = {
    id: data.nextEntryId,
    title: title,
    url: photoUrl,
    notes: notes
  };

  data.entries.unshift(formValue);
  data.nextEntryId++;
  form.reset();
  imgOutput.setAttribute('src', './images/placeholder-image-square.jpg');
});
