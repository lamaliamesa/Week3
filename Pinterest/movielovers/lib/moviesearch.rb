require 'Imdb'

require 'imdb'

class MovieSearch
  attr_accessor :movies, :word
  def initialize word
    @movies = []
    @word = word
  end

  def imdb_search
    array_with_movie_objects = (Imdb::Search.new(@word)).movies
    array_with_movie_objects
  end

  def load_movies_into_array

    count = 0

    imdb_search.each do |movie|
      if count < 9
        if !movie.poster.nil?
          @movies.push(movie)
          count+=1
        end
      end
    end
  end
end
     
search = Imdb::Search.new(@word)

