function addListItem() {
  var text = $("#new-item").val();
  $("#list-tab").append('<li>'+text+'<i class="fa fa-times delete" aria-hidden="true"></i><i class="fa fa-check added" aria-hidden="true"></i></li>');
  $("#new-item").val('');
}

function deleteItem() {
  $(this).parent().remove();
}

function addToCart() {
  $(this).parent().css('textDecoration', 'line-through');
}

$(document).ready(function() {
  $('.tabs .tab-links a').on('click', function(e)  {
    var currentAttrValue = $(this).attr('href');

    // Show/hide tabs
    $('.tabs ' + currentAttrValue).show().siblings().hide();

    // Change/remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');

    e.preventDefault();
  })

  $("#add").on('click', addListItem);
  $(document).on('click', '.delete', deleteItem);
  $(document).on('click', '.added', addToCart);
});
