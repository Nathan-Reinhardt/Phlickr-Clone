class Api::PhotosController < ApplicationController

    def create
        @photo = Photo.new(photo_params)
        if @photo.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def index
        @photos = Photo.all
        render :index
    end

    def show
        @photo = Photo.with_attached_images.find(params[:id])
    end

    # def edit
    #     @photo = Photo.find(params[:id])
    # end

    # def update
    #     @photo = current_user.photos.find(params[:id])
    #     if @photo.update_attributes(photo_params)
    #         render :show
    #     else
    #         render json: @photo.errors.full_messages, status: 422
    #     end
    # end

    # def destroy
    #     photo = Photo.find(params[:id])
    #     photo.destroy
    #     render :index
    # end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :views, :faves_num, images: [])
    end
end
