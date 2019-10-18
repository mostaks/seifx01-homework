require 'sinatra'
require 'sinatra/json'

$movies = ['My Little Pony: Friendship is Magic', 'Barbie: Princess Charm School']

get '/' do
    "Hello World"
end

get '/movies' do
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

get '/api/movies' do
    json  $movies
end

get '/api/movies/:index' do
    mIndex = params[:index].to_i
    json $movies[mIndex]
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

get '/movies/:index' do
  index = params[:index].to_i
  @index = index
  @movie = $movies[index]
  erb :movie
end

post '/forms/movies/:index/edit' do
  index = params[:index].to_i
  request.body.rewind
  payload = request.body.read
  # payload = JSON.parse(request.body.read, symbolize_names: true)

  p payload
  # Edit the movie at index
  $movies[index] = payload[:newMovie]
  redirect '/movies'
  json payload[:newMovie]
end
