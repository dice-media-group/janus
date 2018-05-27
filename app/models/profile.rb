class Profile < ApplicationRecord
	def self.convert_to_dollars(pennies)
		value = pennies.to_i * 0.01
	end

	belongs_to :user
end
