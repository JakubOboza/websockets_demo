var Application = {

    faye: null,

    init: function(){
      Map.init();
      Application.init_faye();
    },

    init_faye: function(){
      Application.faye = new Faye.Client('http://localhost:9292/faye');
      Application.faye.subscribe('/markers_ip', Application.message_ip_handler);
      Application.faye.subscribe('/markers_address', Application.message_address_handler);
    },

    message_ip_handler: function(message){
      Map.draw_marker(message.lat, message.lng, message.ip);
    },

    message_address_handler: function(message){
      Map.address_lookup(message.address);
    }
};

$(document).ready(function(){
  Application.init();
});
