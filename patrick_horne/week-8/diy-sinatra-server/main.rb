require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def connect_to_db
  db = SQLite3::Database.new('./db/catalog.db')
  db.results_as_hash = true
  db
end

get '/' do
  puts "Hello!"
end

get '/movies' do
  db = connect_to_db
  @catalog = db.execute('SELECT * FROM movies').first
  erb :catalog
end

get '/movies/:id' do
  @id = :id
  db = connect_to_db
  @movie = db.execute("SELECT * FROM movies WHERE id = '#{@id}'").first
  :movie
end

get '/movies/:id/edit' do
  
  erb :movie_edit
end
