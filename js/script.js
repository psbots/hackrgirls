$(document).ready(function(){
    $('.load-more').on('click',function(e){
        e.preventDefault();
        $('.day-2').removeClass('hide');
        $('.day-2-date').removeClass('hide');
        $(this).addClass('hide');
    });
	var mapCanvas = document.getElementById('map-canvas');
	var myLatLong=new google.maps.LatLng(10.231454, 76.408848)
	var mapOptions = {
      center: myLatLong,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dde6e8"},{"visibility":"on"}]}]
    }
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({
      position: myLatLong,
      map: map,
      title: 'Federal Institute Of Science & Technology'
      
  });
});