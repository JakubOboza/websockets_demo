require 'rubygems'
require 'bundler'
require 'json'
require 'rest_client'

RestClient.post 'http://localhost:9292/faye', :message => {:channel => "/markers", :data => {"lat" => 52.0, "lng" => 2.0, :ip => "0.0.0.0" } }.to_json