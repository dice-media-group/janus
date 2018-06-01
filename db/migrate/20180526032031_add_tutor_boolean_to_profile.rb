class AddTutorBooleanToProfile < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :is_tutor, :boolean, default: false
  end
end
