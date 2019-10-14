class MountainsController < ApplicationController

    def index
        @mountains = Mountain.all
    end

    def show
        @mountain = Mountain.find params[:id]
    end

    def new
    end

    def create
        mountain = Mountain.new
        mountain.name = params[:name]
        mountain.image = params[:image]
        mountain.description = params[:description]
        mountain.rating = params[:rating]
        mountain.save
        redirect_to movie_path(mountain.id)
    end
    
    def edit
        @mountain = Mountain.find params[:id]
    end

    def update
        mountain = Mountain.find params[:id]
        mountain.name = params[:name]
        mountain.image = params[:image]
        mountain.description = params[:description]
        mountain.rating = params[:rating]
        mountain.save
        redirect_to mountain_path(mountain.id)
    end
    
    def destroy
        mountain = Mountain.find params[:id]
        mountain.destroy
        redirect_to mountains_path
    end

    def search
        @query = Mountain.where(name: params[:query])
    end

end