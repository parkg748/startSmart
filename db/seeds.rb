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
      'name' => 'Art'
    },
    '2' => {
      'name' => 'Comics'
    },
    '3' => {
      'name' => 'Crafts'
    },
    '4' => {
      'name' => 'Dance'
    },
    '5' => {
      'name' => 'Design'
    },
    '6' => {
      'name' => 'Fashion'
    },
    '7' => {
      'name' => 'Film & Video'
    },
    '8' => {
      'name' => 'Food'
    },
    '9' => {
      'name' => 'Games'
    },
    '10' => {
      'name' => 'Journalism'
    },
    '11' => {
      'name' => 'Music'
    },
    '12' => {
      'name' => 'Photography'
    },
    '13' => {
      'name' => 'Publishing'
    },
    '14' => {
      'name' => 'Technology'
    },
    '15' => {
      'name' => 'Theater'
    }
  }
end
