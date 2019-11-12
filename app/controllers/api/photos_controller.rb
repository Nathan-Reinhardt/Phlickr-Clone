class Api::PhotosController < ApplicationController

    # def index
    #     @photos = Photo.all
    # end

    # def show
    #     @photo = Photo.find_by()
    # end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :views, :faves_num)
    end
end
