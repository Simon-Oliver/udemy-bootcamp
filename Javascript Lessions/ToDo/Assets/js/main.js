$('li').click(strikeOut);
$('span').click(deletItem);
$('button').click(addItem);

function addItem() {
  const input = $('input').val();
  $('ul').append(`
    <li><span>X</span> ${input}</li>
    `);
  $('input').val('');
  $('span').click(deletItem);
}

function deletItem() {
  $(this)
    .parent()
    .remove();
}

function strikeOut() {
  $(this).toggleClass('completed');
}
