
function addListItem() {
  var text = $("#new-item").val();
  if (text.length > 0) {
    $("#list-tab").append('<li>'+text+'<i class="fa fa-times delete" aria-hidden="true"></i><i class="fa fa-check added" aria-hidden="true"></i></li>');
    $("#new-item").val('');
    $(".tab-content #list-p").hide();
  }
}

function deleteItem() {
  $(this).parent().fadeOut();
}

function addToCart() {
  $(this).parent().appendTo('#cart-tab');
  $(this).hide();
  $(".tab-content #cart-tab p").hide();
}

/* function addToCart() {
  $(this).parent().fadeOut(function() {
    $(this).parent().appendTo('#cart-tab');
    $(this).hide();
    $(".tab-content #cart-tab p").hide();
  })
} */

$(document).ready(function() {
  $('.tabs .tab-links a').on('click', function(e)  {
    var currentAttrValue = $(this).attr('href');
    // Show/hide tabs
    $('.tabs ' + currentAttrValue).show().siblings().hide();
    // Change/remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  })

  $(document).on('click', '#add', addListItem);
  /* $("#add").on('click', addListItem); */
  $(document).on('click', '.delete', deleteItem);
  $(document).on('click', '.added', addToCart);
});
