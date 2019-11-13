class Api::PhotosController < ApplicationController

    def create
        @photo = Photo.new(photo_params)
        if @photo.save
            # render @photo
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def index
        @photos = Photo.all
    end

    def show
        @photo = Photo.find(params[:id])
    end

    def edit
        @photo = Photo.find(params[:id])
    end

    def update
        @photo = current_user.photos.find(params[:id])
        if @photo.update_attributes(photo_params)
            #render
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def destroy
        photo = Photo.find(params[:id])
        photo.destroy
        #render
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :views, :faves_num)
    end
end
