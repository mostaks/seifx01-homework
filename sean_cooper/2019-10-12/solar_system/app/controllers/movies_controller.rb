class MoviesController < ApplicationController

    def index
        @movies = Movie.all
    end

    def show
        @movie = Movie.find params[:id]
    end

    def new
    end

    def create
        movie = Movie.new
        movie.name = params[:name]
        movie.image = params[:image]
        movie.description = params[:description]
        movie.rating = params[:rating]
        movie.save
        redirect_to movie_path(movie.id)
    end
    
    def edit
        @movie = Movie.find params[:id]
    end

    def update
        movie = Movie.find params[:id]
        movie.name = params[:name]
        movie.image = params[:image]
        movie.description = params[:description]
        movie.rating = params[:rating]
        movie.save
        redirect_to movie_path(movie.id)
    end
    
    def destroy
        movie = Movie.find params[:id]
        movie.destroy
        redirect_to movies_path
    end

    def search
        @query = Movie.where(name: params[:query])
    end

end