require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'
# require 'sinatra/json' 
# for some reason, repl breaks when we require sinatra/json


# These lines below are required for sinatra to run inside repl
set :protection, :except => :frame_options
set :bind, '0.0.0.0'

class Movie
	attr_accessor :movie_name, :movie_url, :movie_description, :movie_rating

	def initialize(movie_name)
        @movie_name = movie_name
		@movie_url = 'https://www.placecage.com/c/460/300'
		@movie_description = 'NICHOLAS CAGE'
		@movie_rating = '10/10'
    end

end

$movies = [
	Movie.new('Spiderman'), 
	Movie.new('The Avengers'),
	Movie.new('The Man From Earth')
]

get '/' do
    erb :index
end

get '/movies' do
    @movies = $movies
    erb :movies
end

get '/movies/:index' do
	index = params[:index].to_i
	movie = $movies[index].movie_name
	@movieIndex = index
	@movieImage = $movies[index].movie_url
	@movieName = $movies[index].movie_name
	@movieDescription = $movies[index].movie_description
	@movieRating = $movies[index].movie_rating
    erb :movie
end

post '/forms/movies/new' do
    newMovieName = params[:movieName]
    $movies.push(Movie.new(newMovieName))
    redirect to('/movies')
end

post '/forms/movies/:index/delete' do
    index = params[:index].to_i
	$movies.delete_at(index)
    redirect to('/movies')
end

post '/forms/movies/:index/update' do
	index = params[:index].to_i
    $movies[index].movie_name = params[:movieName]
	$movies[index].movie_url =  params[:movieImage]
	$movies[index].movie_description =  params[:movieDescription]
	$movies[index].movie_rating =  params[:movieRating]
	redirect to('/movies/' + index.to_s)
end

if(!File.exist?('books.db')) 
	db = SQLite3::Database.new 'books.db'
	db.results_as_hash = true
	db.execute_batch File.read('schemas/init.sql')
	db.close
end

get '/books' do
    db = SQLite3::Database.new('books.db')
    db.results_as_hash = true
    @books = db.execute("SELECT * FROM books")
    db.close
    erb :books
end

get '/books/:id' do
    id = params['id']
    db = SQLite3::Database.new('books.db')
    db.results_as_hash = true
    @item = db.execute("SELECT * FROM books WHERE id = #{id}").first
    db.close
    erb :books_moreinfo
end

post '/books/:id/edit' do
	db = SQLite3::Database.new('books.db')
    db.results_as_hash = true
	id = params['id']
	book_name = params['book_name']
	book_author = params['author']
	book_description = params['book_description']
	book_rating = params['book_rating']
	book_img = params['book_img']
    db.execute("UPDATE books SET book_name = #{book_name} where id = #{id}")
	db.execute("UPDATE books SET book_author = #{book_author} where id = #{id}")
	db.execute("UPDATE books SET book_description = #{book_description} where id = #{id}")
	db.execute("UPDATE books SET book_rating = #{book_rating} where id = #{id}")
	db.execute("UPDATE books SET book_img = #{book_img} where id = #{id}")
	db.close
    redirect "/books"
end

post '/books/:id/delete' do
    db = SQLite3::Database.new('books.db')
    id = params['id']
    db.execute("DELETE FROM books WHERE id = #{id}")
    db.close
    redirect "/books"
end

post '/books/add' do
    db = SQLite3::Database.new('books.db')
    count = db.execute("select count(1) from books")
	id = params['id']
	book_name = params['book_name']
	book_author = params['book_author']
	book_description = params['book_description']
	book_rating = params['book_rating']
	book_img = params['book_img']
    db.execute("INSERT INTO books (id, book_name, book_author, book_description, book_rating, book_img) VALUES ( #{id}, '#{book_name}', #{book_author}, '#{book_description}', #{book_rating}, #{book_img} )")
    db.close
    redirect "/books"
end