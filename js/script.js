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
changeColInUri(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJUlEQVQIW2NkQAP/gYARWQwkAOLDBeECjEAAkkEWAKtEFwAJAgAZEBP+oM1IkwAAAABJRU5ErkJggg==",
    "#fff",
    "#999");


})
function changeColInUri(data,colfrom,colto) {
    // create fake image to calculate height / width
    var img = document.createElement("img");
    img.src = data;
    img.style.visibility = "hidden";
    document.body.appendChild(img);

    var canvas = document.createElement("canvas");
    canvas.width = img.offsetWidth;
    canvas.height = img.offsetHeight;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img,0,0);

    // remove image
    img.parentNode.removeChild(img);

    // do actual color replacement
    var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    var data = imageData.data;

    var rgbfrom = hexToRGB(colfrom);
    var rgbto = hexToRGB(colto);

    var r,g,b;
    for(var x = 0, len = data.length; x < len; x+=4) {
        r = data[x];
        g = data[x+1];
        b = data[x+2];

        if((r == rgbfrom.r) &&
           (g == rgbfrom.g) &&
           (b == rgbfrom.b)) {

            data[x] = rgbto.r;
            data[x+1] = rgbto.g;
            data[x+2] = rgbto.b;

        } 
    }

    ctx.putImageData(imageData,0,0);

    console.log(canvas.toDataURL()) ;
}
   function hexToRGB(hexStr) {
    var col = {};
    col.r = parseInt(hexStr.substr(1,2),16);
    col.g = parseInt(hexStr.substr(3,2),16);
    col.b = parseInt(hexStr.substr(5,2),16);
    return col;
}