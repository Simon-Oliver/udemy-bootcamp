$('li').click(strikeOut);
$('span').click(deletItem);
$('input[type="text"]').keypress(e => {
  if (e.which === 13) {
    addItem();
  }
});
$('.plusDiv').click(() => {
  $('input[type="text"]').fadeToggle();
});

function addItem() {
  if (!$('input').val() == '') {
    $('ul').append(`
        <li><span><i class="far fa-trash-alt"></i></span> ${$(
          'input'
        ).val()}</li>
        `);
    $('input').val('');
    $('span').click(deletItem);
  }
}

function deletItem(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });

  e.stopPropagation();
}

function strikeOut() {
  $(this).toggleClass('completed');
}
