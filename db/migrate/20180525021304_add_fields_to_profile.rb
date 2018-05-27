class AddFieldsToProfile < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :website, :string
    add_column :profiles, :bio_raw, :text
    add_column :profiles, :bio_cooked, :text
    add_column :profiles, :profile_background, :string
    add_column :profiles, :dismissed_banner_key, :integer
    add_column :profiles, :bio_cooked_version, :integer
    add_column :profiles, :badge_granted_title, :boolean
    add_column :profiles, :card_background, :boolean
    add_column :profiles, :views, :integer
  end
end
