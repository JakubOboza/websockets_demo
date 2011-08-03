require "rubygems"
require "bundler/setup"
require 'faye'
require File.dirname(__FILE__) + '/app'

use Faye::RackAdapter, :mount      => '/faye',
                       :timeout    => 25

run Sinatra::Application