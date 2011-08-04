# What is it ?

  This is a demo of faye websockets, this demo has 2 channels `/markers_ip` and `/markers_address` first one accepts messages with longitute and latitude and ip then puts marker on map. `/markers_address` is a bit more smarter, for it you just need to supply address and he will try to put all aproximations from google geocoder on map as markers. To see more deatails see first `examples/pusher2.rb` then you can explore other two examples.

Why I used websockets for it ? The task is simple find what are people looking for on our site and put it on map :). We have loads of logs more then few gigs... so i decided to use Map Reduce style. Map function will be built out of many worksers in Ruby / Erlang / Nodejs sending messages to reducer which is faye/browser. I will add workers to this repo soon.

# install

    bundle install

# run

    bundle exec ./start.sh

# example

    bundle exec ruby examples/pusher2.rb