$('ul').on('click', '.textToDo', strikeOut);
$('ul').on('click', 'span', deletItem);
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
        <li><span><i class="far fa-trash-alt"></i></span><div class="textToDo">
        ${$('input').val()}
        </div></li>
        `);
    $('input').val('');
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
