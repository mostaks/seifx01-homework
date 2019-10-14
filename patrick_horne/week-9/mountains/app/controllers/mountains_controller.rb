class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find_by(id: params[:id])
  end

  def edit
    @mountain = Mountain.find_by(id: params[:id])
    @mountain.name = params[:name]
    @mountain.height_metres = params[:height_metres]
    @mountain.country = params[:country]
    @mountain.first_ascent = params[:firstAscent]
  end

  def delete
    mountain = Mountain.find_by(id: :id)
    mountain.destroy
    redirect_to "/index"
  end

  def new
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.height_metres = params[:height_metres]
    mountain.country = params[:country]
    mountain.first_ascent = params[:firstAscent]
  end
end
