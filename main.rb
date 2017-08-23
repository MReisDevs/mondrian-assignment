require "Sinatra"

get "/" do
	erb :index
end

get "/saves" do
	erb :saves
end