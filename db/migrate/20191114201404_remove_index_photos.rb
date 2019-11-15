class RemoveIndexPhotos < ActiveRecord::Migration[5.2]
  def change
    remove_index :photos, :user_id
    remove_index :photos, :album_id
  end
end
