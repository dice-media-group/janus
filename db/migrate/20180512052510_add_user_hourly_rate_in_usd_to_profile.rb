class AddUserHourlyRateInUsdToProfile < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :hourly_rate_in_usd, :string
  end
end
