require "faker"
status = ['applied', 'wishlist', 'interviewed', 'offered', 'rejected']


User.create(email:"test1@test.com", password:"123456")
10.times do 
  j = Job.create(
  company: Faker::Company.name,
  job_title: Faker::Company.industry,
  salary: Faker::Number.decimal(l_digits: 2),
  location: Faker::Address.city,
  date_applied: Faker::Date.in_date_period,
  description: Faker::Quote.yoda,
  status: status.sample,
  user_id: 1,
  )
  2.times do
    Note.create(
      description: Faker::Hacker.say_something_smart,
      job_id: j.id,
    )
  end
  
  2.times do
    Contact.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      phone: Faker::Number.number(digits: 10),
      email: Faker::Internet.email,
      job_id: j.id,
      )
  end
end


puts "data seeded"


