class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.integer :album_id
      t.integer :views, null: false
      t.integer :faves_num, null: false
      t.string :description
      t.timestamps
    end

    add_index :photos, :user_id, unique: true
    add_index :photos, :album_id, unique: true
  end
end
