var dict = {};
$(document).ready(function() {
  $('input[type=checkbox]').change(
    function(){
      if (this.checked) {
        dict[this.data-id] = this.data-name;
      }
      else{
        delete dict[this.data-id];
      }
    });
  if (Object.keys(dict).length === 0) {
    $('div.amenities h4').html('&nbsp');
  }
  else{
    $('div.amenities h4').text(Object.values(dict).join(', '));
  }
  $.get("http://0.0.0.0:5001/api/v1/places_search/", function(data, status){
    if(xhr.status==200){
      $('div#api_status').addClass('available');
    }
    else{
      $('div#api_status').removeClass('available')
    }
  });
  $.ajax ({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: curl "http://0.0.0.0:5001/api/v1/places_search" -XPOST -H "Content-Type: application/json" -d '{}',
    contentType: "application/json",
    traditional: true,
    success: function (data) {}
  });
});
