class OceansController < ApplicationController

    def index
        @oceans = Ocean.all
    end

    def show
        @ocean = Ocean.find params[:id]
    end

    def new
    end

    def create
        ocean = Ocean.new
        ocean.name = params[:name]
        ocean.image = params[:image]
        ocean.description = params[:description]
        ocean.rating = params[:rating]
        ocean.save
        redirect_to ocean_path(ocean.id)
    end
    
    def edit
        @ocean = Ocean.find params[:id]
    end

    def update
        ocean = Ocean.find params[:id]
        ocean.name = params[:name]
        ocean.image = params[:image]
        ocean.description = params[:description]
        ocean.rating = params[:rating]
        ocean.save
        redirect_to ocean_path(ocean.id)
    end
    
    def destroy
        ocean = Ocean.find params[:id]
        ocean.destroy
        redirect_to oceans_path
    end

    def search
        @query = Ocean.where(name: params[:query])
    end

end