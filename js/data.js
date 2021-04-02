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
