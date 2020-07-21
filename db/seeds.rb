# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Photo.destroy_all

User.create(id: 1, first_name: "Nathan", last_name: "Reinhardt", age: 22, email: "nrein@gmail.com", password: "password", description: "")
User.create(id: 2, first_name: "Lawrence", last_name: "Fields", age: 18, email: "demo@demo.com", password: "password", description: "")

photo1 = Photo.create(id: 1, title: "City Lights", user_id: 1, views: 0, faves_num: 0, description: "Busy streets in Chicago")
file1 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/city1.jpg')
photo1.image.attach(io: file1, filename: 'city1.jpg')

photo2 = Photo.create(id: 2, title: "Swim Free", user_id: 2, views: 0, faves_num: 0, description: "Turtle swimming freely in the ocean")
file2 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/ocean2.jpg')
photo2.image.attach(io: file2, filename: 'ocean2.jpg')

photo3 = Photo.create(id: 3, title: "Farm House", user_id: 2, views: 0, faves_num: 0, description: "")
file3 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/farm3.jpg')
photo3.image.attach(io: file3, filename: 'farm3.jpg')

photo4 = Photo.create(id: 4, title: "Ball of Light", user_id: 2, views: 0, faves_num: 0, description: "Touch this ball to have great affect")
file4 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/tech4.jpg')
photo4.image.attach(io: file4, filename: 'tech4.jpg')

photo5 = Photo.create(id: 5, title: "School Time", user_id: 1, views: 0, faves_num: 0, description: "School needs to have an apple")
file5 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/school5.jpg')
photo5.image.attach(io: file5, filename: 'school5.jpg')

photo6 = Photo.create(id: 6, title: "Train Light", user_id: 1, views: 0, faves_num: 0, description: "This train has a light at the end of the tunnel")
file6 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/city6.jpg')
photo6.image.attach(io: file6, filename: 'city6.jpg')

photo7 = Photo.create(id: 7, title: "Puzzle Pieces Galore", user_id: 2, views: 0, faves_num: 0, description: "")
file7 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/puzzle7.jpg')
photo7.image.attach(io: file7, filename: 'puzzle7.jpg')

photo8 = Photo.create(id: 8, title: "Mighty Puzzle", user_id: 2, views: 0, faves_num: 0, description: "Land built from puzzle pieces")
file8 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/puzzle8.jpg')
photo8.image.attach(io: file8, filename: 'puzzle8.jpg')

photo9 = Photo.create(id: 9, title: "Coral Life", user_id: 2, views: 0, faves_num: 0, description: "The life of the sea")
file9 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/ocean9.jpg')
photo9.image.attach(io: file9, filename: 'ocean9.jpg')

photo10 = Photo.create(id: 10, title: "Coral Life", user_id: 1, views: 0, faves_num: 0, description: "")
file10 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/farm10.jpg')
photo10.image.attach(io: file10, filename: 'farm10.jpg')

photo11 = Photo.create(id: 11, title: "Study Time", user_id: 2, views: 0, faves_num: 0, description: "Knowledge can be learned anywhere")
file11 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/school11.jpg')
photo11.image.attach(io: file11, filename: 'school11.jpg')

# photo12 = Photo.create(id: 12, title: "Phone Nature", user_id: 1, views: 0, faves_num: 0, description: "")
# file12 = open('https://phlickr-clone-seed.s3-us-west-1.amazonaws.com/tech12.jpg')
# photo12.image.attach(io: file12, filename: 'tech12.jpg')