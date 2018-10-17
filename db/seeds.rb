# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  Category.destroy_all
  Category.create([{name: 'Art', subcategories: ['Ceramics', 'Conceptual Art', 'Digital Art', 'Illustration', 'Installations', 'Mixed Media', 'Painting', 'Performance Art', 'Public Art', 'Sculpture', 'Textiles', 'Video Art']},
    {name: 'Comics', subcategories: ['Anthologies', 'Comic Books', 'Events', 'Graphic Novels', 'Webcomics']},
    {name: 'Crafts', subcategories: ['Candles', 'Crochet', 'DIY', 'Embroidery', 'Glass', 'Knitting', 'Pottery', 'Printing', 'Quilts', 'Stationery', 'Taxidermy', 'Weaving', 'Woodworking']},
    {name: 'Dance', subcategories: ['Performances', 'Residencies', 'Spaces', 'Workshops']},
    {name: 'Design', subcategories: ['Architecture', 'Civic Design', 'Graphic Design', 'Interactive Design', 'Product Design', 'Typography']},
    {name: 'Fashion', subcategories: ['Accessories', 'Apparel', 'Childrenswear', 'Couture', 'Footwear', 'Jewelry', 'Pet Fashion', 'Ready-to-wear']},
    {name: 'Film', subcategories: ['Action', 'Animation', 'Comedy', 'Documentary', 'Drama', 'Experimental', 'Family', 'Fantasy', 'Festivals', 'Horror', 'Movie Theaters', 'Music Videos', 'Narrative Film', 'Romance', 'Science Fiction', 'Shorts', 'Television', 'Thrillers', 'Webseries']},
    {name: 'Food', subcategories: ['Bacon', 'Community Gardens', 'Cookbooks', 'Drinks', 'Events', 'Farmer\'s Markets', 'Farms', 'Food Trucks', 'Restaurants', 'Small Batch', 'Spaces', 'Vegan']},
    {name: 'Games', subcategories: ['Gaming Hardware', 'Live Games', 'Mobile Games', 'Playing Cards', 'Puzzles', 'Tabletop Games', 'Video Games']},
    {name: 'Journalism', subcategories: ['Audio', 'Photo', 'Print', 'Video', 'Web']},
    {name: 'Music', subcategories: ['Blues', 'Chiptune', 'Classical Music', 'Comedy', 'Country & Folk', 'Electronic Music', 'Faith', 'Hip-Hop', 'Indie Rock', 'Jazz', 'Kids', 'Latin', 'Metal', 'Pop', 'Punk', 'R&B', 'Rock', 'World Music']},
    {name: 'Photography', subcategories: ['Animals', 'Fine Art', 'Nature', 'People', 'Photobooks', 'Places']},
    {name: 'Publishing', subcategories: ['Academic', 'Anthologies', 'Art Books', 'Calendars', 'Children\'s Books', 'Comedy', 'Fiction', 'Letterpress', 'Literary Journals', 'Nonfiction', 'Periodicals', 'Poetry', 'Radio & Podcasts', 'Translations', 'Young Adult', 'Zines', 'Literary Spaces']},
    {name: 'Technology', subcategories: ['3D Printing', 'Apps', 'Camera Equipment', 'DIY Electronics', 'Fabrication Tools', 'Flight', 'Gadgets', 'Hardware', 'Makerspaces', 'Robots', 'Software', 'Sound', 'Space Exploration', 'Wearables', 'Web']},
    {name: 'Theater', subcategories: ['Comedy', 'Experimental', 'Festivals', 'Immersive', 'Musical', 'Plays', 'Spaces']}])
  User.destroy_all
  User.create({name: 'Guest', email: 'demouser@gmail.com', password: 'starwars'})
end
