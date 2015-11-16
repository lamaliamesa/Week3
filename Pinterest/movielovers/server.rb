require "sinatra"
require "sinatra/reloader" if development?
require 'imdb'


get "/" do
  erb(:moviesearch)
end

post '/movie_search' do
  @movie = Imdb::Search.new
  movies.load_movies_into_array
  erb (:searchresult)
end