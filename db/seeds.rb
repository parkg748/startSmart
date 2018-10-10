# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  Category.destroy_all

  categories = {
    '1' => {
      'name' => 'Art',
      'description' => 'Discover the artists and organizations using Kickstarter to realize ambitious projects in visual art, dance, and performance.'
    },
    '2' => {
      'name' => 'Comics & Illustration',
      'description' => 'Explore fantastical worlds and original characters from Kickstarter’s community of comics creators and illustrators.'
    },
    '3' => {
      'name' => 'Crafts',
      'description' => ''
    },
    '4' => {
      'name' => 'Dance',
      'description' =>
    },
    '5' => {
      'name' => 'Design',
      'description' =>
    },
    '6' => {
      'name' => 'Fashion',
      'description' =>
    },
    '7' => {
      'name' => 'Film & Video',
      'description' =>
    },
    '8' => {
      'name' => 'Food',
      'description' =>
    },
    '9' => {
      'name' => 'Games',
      'description' =>
    },
    '10' => {
      'name' => 'Journalism',
      'description' =>
    },
    '11' => {
      'name' => 'Music',
      'description' =>
    },
    '12' => {
      'name' => 'Photography',
      'description' =>
    },
    '13' => {
      'name' => 'Publishing',
      'description' =>
    },
    '14' => {
      'name' => 'Technology',
      'description' =>
    },
    '15' => {
      'name' => 'Theater',
      'description' =>
    }
  }
end
