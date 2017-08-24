require "sinatra"
require "sinatra/reloader"
require "uri"
require "csv"
require "json"
require "net/http"

get "/" do
	erb :index
end

get "/saves" do
	colorFile = params['savedColors']
	File.open("savefiles.csv", "a") do |line|
		line.puts colorFile.chomp
	end
	erb :index
end