require 'sinatra'
require 'sinatra/json'

$movies = ['The Terminator', 'The Running Man', 'Commando']

get '/' do
  File.read('index.html')
end

get '/api/movies' do
  json $movies
end

get '/api/movies/:index' do
    index = params[:index].to_i
    json $movies[index]
end

post '/api/movies' do
    # use this syntax to read the content of the request body
    request.body.rewind
    payload = JSON.parse(request.body.read, symbolize_names: true)

    # add the movie to the movies array
    $movies.push(payload[:movieName])

    # return the movie
    json payload[:movieName]
end

delete '/api/movies/:index' do
    index = params[:index].to_i
    movieToDelete = $movies[index]
    $movies.delete_at(index)
    json movieToDelete
end

get '/movies' do 
  # tell sinatra to return the 
  # movies.erb template that will
  # be embedded into layout.erb
  @movies = $movies 
  erb :movies
end

post '/forms/movies/new' do
    newMovieName = params[:movieName]
    $movies.push(newMovieName)
    redirect to('/movies')
end

post '/forms/movies/:index/delete' do
    index = params[:index].to_i
    $movies.delete_at(index)
    redirect to('/movies')
end

get '/movies/:index' do
  @movie = $movies[:index]
  erb :movie
end
