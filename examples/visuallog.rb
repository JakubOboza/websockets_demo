require 'rubygems'
require 'bundler'
require 'json'
require 'rest_client'

#

def ask_for_address(ip)
  response = RestClient.get("http://api.hostip.info/get_html.php?ip=#{ip}&position=true")
  {:lat => response.scan(/Latitude:(.+)\n/).first.first ,
   :lng => response.scan(/Longitude:(.+)\n/).first.first,
   :ip => ip }
end

def post_to_faye(location)
  RestClient.post 'http://localhost:9292/faye', :message => {:channel => "/markers_ip", :data => {"lat" => location[:lat], "lng" => location[:lng], :ip => location[:ip] } }.to_json
end

File.foreach('production.log') do |line|
  ip = line.scan(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/)
  location = ask_for_address(ip)
  puts location.inspect
  post_to_faye(location)
end
