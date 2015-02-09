$(document).ready(function(){
	var mapCanvas = document.getElementById('map-canvas');
	var myLatLong=new google.maps.LatLng(10.231454, 76.408848)
	var mapOptions = {
      center: myLatLong,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({
      position: myLatLong,
      map: map,
      title: 'Federal Institute Of Science & Technology'
  });


})