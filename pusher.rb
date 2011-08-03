require 'rubygems'
require 'bundler'
require 'json'
require 'faye'
require 'eventmachine'

client = Faye::Client.new('http://localhost:9292/faye')

EM.run {
  client.publish('/markers', 'lat' => '52.01', 'lng' => '1.02', 'ip' => '10.10.10.2')
}