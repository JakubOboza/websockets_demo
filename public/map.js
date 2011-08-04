/*
  TODO:
  refactor current demo implementation to make one ajax view reloading markers and positions on front map
*/

var Map = {

    map: null,

    overlays: null,

    init: function(){
      this.map = $("#map");
      if(map){
        Map.init_google_map(51.0 , -0.18); //Default to London
      }
    },

    init_google_map: function(lat, lng, options){
      if( Map.overlays == null){
        Map.overlays = new Array();
      }
      var zoom = 5;
      var latlng = new google.maps.LatLng(lat, lng);
      var options = {
        scrollwheel: false,
        zoom: zoom,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(document.getElementById("map") , options);
    },

    address_lookup: function(address){
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': address }, function(results, status) {
          if(results[0] === undefined){
            return ""; /* stop if there is no results*/
          }
          $.each(results, function(i, elem){
            var lat = elem.geometry.location.lat();
            var lng = elem.geometry.location.lng();
            Map.draw_marker(lat, lng);
          });
       });
    },

    draw_marker: function(x, y, name){
      var latlng = new google.maps.LatLng(x, y);

      var marker = new google.maps.Marker({
        position: latlng,
        map: this.map,
        title: name
      });

      Map.overlays.push(marker);
    },

    clear_overlays: function(){
      while(Map.overlays[0]){
        Map.overlays.pop().setMap(null);
      }
    }

};
