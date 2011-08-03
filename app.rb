require 'sinatra'

set :public, File.dirname(__FILE__) + '/public'

get '/' do
  %q{
   <head>
     <link rel=stylesheet href="/main.css" type="text/css" media=screen>
     <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
     <script type="text/javascript"
       src="http://maps.google.com/maps/api/js?sensor=true">
     </script>
     <script type="text/javascript" src="/jquery.js"></script>
     <script type="text/javascript" src="/application.js"></script>
     <script type="text/javascript" src="/map.js"></script>
     <script type="text/javascript" src="/faye.js"></script>
   </head>
   <body>
     <div id="map"></div>
   </body>
  }
end

