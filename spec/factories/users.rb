FactoryBot.define do
  factory :user do
    nickname { Faker::Name.last_name }
    email { Faker::Internet.free_email }
    password { 'test000' }
    password_confirmation { password }
    type_id { 2 }
  end
end