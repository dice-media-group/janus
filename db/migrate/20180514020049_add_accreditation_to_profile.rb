class AddAccreditationToProfile < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :accreditation, :string
  end
end
