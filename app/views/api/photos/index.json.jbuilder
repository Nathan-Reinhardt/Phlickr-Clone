json.array! @photos do |photo|
    json.extract! photo, :id, :title, :description, :views, :faves_num, :user_id, :album_id
    json.photoUrl url_for(photo.image)
end