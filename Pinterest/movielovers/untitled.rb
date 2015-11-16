    @poster[title] = result.movies[i].poster

      def poster
  src = document.at("a[@name='poster'] img")['src'] rescue nil
  case src
  when /^(http:.+@@)/
    Regexp.last_match[1] + '.jpg'
  when /^(http:.+?)\.[^\/]+$/
    Regexp.last_match[1] + '.jpg'
  end


   if query_movies[i].poster != nil
        @poster_list << query_movies[i].poster
        @year_list <<query_movies[i].year


post "/movie_search" do
  session[:movie] = params[:movie]
  erb (:searchresult)
end 

@word = value[rand(value.size)]
