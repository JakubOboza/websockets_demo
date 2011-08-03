var Application = {

    faye: null,

    init: function(){
      Map.init();
      Application.init_faye();
    },

    init_faye: function(){
      Application.faye = new Faye.Client('http://localhost:9292/faye');
      var subscription = Application.faye.subscribe('/markers', Application.message_handler);
    },

    message_handler: function(message){
      Map.draw_marker(message.lat, message.lng, message.ip);
    },

    test_message: function(){
      Application.faye.publish('/markers', {lat: 51.0, lng: -0.18, ip: "127.0.0.1"});
    }
};

$(document).ready(function(){
  Application.init();
});
