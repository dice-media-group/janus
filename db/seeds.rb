# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
def seed_users
  user_id = 0
  10.times do 
    User.create(
      email: "test#{user_id}#{Time.now.to_i}@test.com",
      password: '123456',
      password_confirmation: '123456'
    )
    user_id = user_id + 1
  end
end
def seed_profiles
	User.all.each do |user|
		profile = Profile.create!(
			user: 			user, 
			full_name: 		Faker::Name.name, 
			mobile_phone: 	rand(10**10).to_s, 
			biography: 		Faker::Lorem.paragraph,
			city: 			Faker::Address.city,
			state: 			Faker::Address.state,
			user_photo_url: "https://placem.at/people?random=1&w=288&h=316"
		)
		if user.id%1==0 && user.id.to_i.even?
			profile.update!(
				is_tutor: 			true, 
				hourly_rate_in_usd: rand(10**4).to_s,
				accreditation: 		"High School Diploma"
			)
		end
	end
end
p "Starting seed of users"
p "destroying previous data"
Profile.destroy_all
User.destroy_all
p "seed_users"
seed_users
p "seed_profiles"
seed_profiles
