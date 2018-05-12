class AddUserPhotoUrlToProfile < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :user_photo_url, :text
  end
end
