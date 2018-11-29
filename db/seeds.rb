# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  Category.destroy_all
  categories = Category.create([{name: 'Art', subcategories: ['Ceramics', 'Conceptual Art', 'Digital Art', 'Illustration', 'Installations', 'Mixed Media', 'Painting', 'Performance Art', 'Public Art', 'Sculpture', 'Textiles', 'Video Art']},
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
  Project.destroy_all
  user1 = User.create({name: 'Guest', email: 'demouser@gmail.com', password: 'starwars'})
  user2 = User.new(name: "Wynd Technologies, Inc.", email: "wyndtechnologiesinc@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath2 = File.join(Rails.root, 'app', "assets", "images", "26441e13bbd6229c41392b247987ed53_original.png")
  user2.profile_url.attach(io: File.open(userpath2), filename: "26441e13bbd6229c41392b247987ed53_original.png")
  user2.save
  project2 = Project.new(duration: 0, limit: false, user_id: user2.id, country: "the United States", title: "Wynd Halo + Home Purifier: Keep your home’s air healthy", description: "The world's smartest air monitor meets the most powerful purifier in its class.", pledge_amt: 0, eta: nil, shipping: "", city: "Redwood City", state: "CA", funding_goal: "$50,000", category_id: categories[13].id, subcategory: "Hardware", challenges: nil)
  projectpath2 = File.join(Rails.root, 'app', "assets", "images", "d60844185a965dbb862faef51950e637_original.png")
  project2.image_url.attach(io: File.open(projectpath2), filename: "d60844185a965dbb862faef51950e637_original.png")
  project2.save
  user3 = User.new(name: "Maurice Ribble", email: "mauriceribble@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath3 = File.join(Rails.root, 'app', "assets", "images", "ed91c4b4f5971395e1d338eb5c4e61dd_original.jpg")
  user3.profile_url.attach(io: File.open(userpath3), filename: "ed91c4b4f5971395e1d338eb5c4e61dd_original.jpg")
  user3.save
  project3 = Project.new(duration: 0, limit: false, user_id: user3.id, country: "the United States", title: "Electric Eel Wheel Mini 2", description: "The hand-sized fully functioning electric spinning wheel that spins wool and other fibers into yarn.", pledge_amt: 0, eta: nil, shipping: "", city: "Worcester", state: "MA", funding_goal: "$15,000", category_id: categories[13].id, subcategory: nil, challenges: nil)
  projectpath3 = File.join(Rails.root, 'app', "assets", "images", "b5ef915e27ebecfd5c2cef12b8eff881_original.jpg")
  project3.image_url.attach(io: File.open(projectpath3), filename: "b5ef915e27ebecfd5c2cef12b8eff881_original.jpg")
  project3.save
  user4 = User.new(name: "Mira Ong Chua", email: "miraongchua@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath4 = File.join(Rails.root, 'app', "assets", "images", "f969b4f6b2151164ea07b9dd655a554d_original.png")
  user4.profile_url.attach(io: File.open(userpath4), filename: "f969b4f6b2151164ea07b9dd655a554d_original.png")
  user4.save
  project4 = Project.new(duration: 0, limit: false, user_id: user4.id, country: "the United States", title: "ROADQUEEN: ETERNAL ROADTRIP TO LOVE", description: "Help us print the first book of Cut Time, a fantasy comic inspired by astrology for teen readers and up!", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: "$5,500", category_id: categories[1].id, subcategory: "Graphic Novels", challenges: nil)
  projectpath4 = File.join(Rails.root, 'app', "assets", "images", "e7e9eceb13789f84a65dee211a99c645_original.jpg")
  project4.image_url.attach(io: File.open(projectpath4), filename: "e7e9eceb13789f84a65dee211a99c645_original.jpg")
  project4.save
  user5 = User.new(name: "Hiveworks Comics", email: "hiveworkscomics@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath5 = File.join(Rails.root, 'app', "assets", "images", "379a5196027eb91b651314d19c66f005_original.png")
  user5.profile_url.attach(io: File.open(userpath5), filename: "379a5196027eb91b651314d19c66f005_original.png")
  user5.save
  project5 = Project.new(duration: 0, limit: false, user_id: user5.id, country: "the United States", title: "Cut Time - Book 1", description: "Help us print the first book of Cut Time, a fantasy comic inspired by astrology for teen readers and up!", pledge_amt: 0, eta: nil, shipping: "", city: "Austin", state: "TX", funding_goal: "$15,000", category_id: categories[1].id, subcategory: "Webcomics", challenges: nil)
  projectpath5 = File.join(Rails.root, 'app', "assets", "images", "97ca269b2421afae3577441e10e51a66_original.png")
  project5.image_url.attach(io: File.open(projectpath5), filename: "97ca269b2421afae3577441e10e51a66_original.png")
  project5.save
  user6 = User.new(name: "TO Comix Press", email: "tocomixpress@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath6 = File.join(Rails.root, 'app', "assets", "images", "a66fc34972e18b43886b9bf6807030d1_original.jpg")
  user6.profile_url.attach(io: File.open(userpath6), filename: "a66fc34972e18b43886b9bf6807030d1_original.jpg")
  user6.save
  project6 = Project.new(duration: 0, limit: false, user_id: user6.id, country: "Canada", title: "Shout Out Anthology", description: "A bold new anthology of queer comics for teen readers, from an award-winning queer creative team.", pledge_amt: 0, eta: nil, shipping: "", city: "Toronto", state: "Canada", funding_goal: "$22,547", category_id: categories[1].id, subcategory: "Anthologies", challenges: nil)
  projectpath6 = File.join(Rails.root, 'app', "assets", "images", "d31b76e30dd1707f27dbca6bb0e3856f_original.jpg")
  project6.image_url.attach(io: File.open(projectpath6), filename: "d31b76e30dd1707f27dbca6bb0e3856f_original.jpg")
  project6.save
  user7 = User.new(name: "Lyfe Illustration", email: "lyfeillustration@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath7 = File.join(Rails.root, 'app', "assets", "images", "eda10c4a6d87deac69415dbe0f447363_original.jpg")
  user7.profile_url.attach(io: File.open(userpath7), filename: "eda10c4a6d87deac69415dbe0f447363_original.jpg")
  user7.save
  project7 = Project.new(duration: 0, limit: false, user_id: user7.id, country: "the United States", title: "Galaxy Girls: Illustrated Constellations", description: "A beautifully detailed art book filled with 31 astrology and constellation based art work by Lyfe Illustration", pledge_amt: 0, eta: nil, shipping: "", city: "Ventura", state: "CA", funding_goal: "$7,500", category_id: categories[0].id, subcategory: "Illustration", challenges: nil)
  projectpath7 = File.join(Rails.root, 'app', "assets", "images", "05afadadeb0222c204e4dccd80bf31c5_original.png")
  project7.image_url.attach(io: File.open(projectpath7), filename: "05afadadeb0222c204e4dccd80bf31c5_original.png")
  project7.save
  user8 = User.new(name: "PvP Online", email: "pvponline@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath8 = File.join(Rails.root, 'app', "assets", "images", "fe3c47da90bb8f71bc1e6c6bb6966ec5_original.jpg")
  user8.profile_url.attach(io: File.open(userpath8), filename: "fe3c47da90bb8f71bc1e6c6bb6966ec5_original.jpg")
  user8.save
  project8 = Project.new(duration: 0, limit: false, user_id: user8.id, country: "the United States", title: "PvP Definitive Edition 20th Anniversary Collection", description: '9 volumes with over 2,500 pages in deluxe 12"x10" oversized hardcover format collecting all 20 Years of PvP comics.', pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: "$75,000", category_id: categories[1].id, subcategory: "Webcomics", challenges: nil)
  projectpath8 = File.join(Rails.root, 'app', "assets", "images", "e4e7bbd041416787ffc9dc010460b2ec_original.jpg")
  project8.image_url.attach(io: File.open(projectpath8), filename: "e4e7bbd041416787ffc9dc010460b2ec_original.jpg")
  project8.save
  user9 = User.new(name: "Mythic Games, Inc.", email: "mythicgamesinc@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath9 = File.join(Rails.root, 'app', "assets", "images", "659d6858b1f5fb59d53c05aa3cf42769_original.png")
  user9.profile_url.attach(io: File.open(userpath9), filename: "659d6858b1f5fb59d53c05aa3cf42769_original.png")
  user9.save
  project9 = Project.new(duration: 0, limit: false, user_id: user9.id, country: "the United States", title: "Reichbusters: Projekt Vril", description: "Aliens! Mutants! Weird science! Gather your Heroes to smash the Nazis in this cooperative action-adventure board game for 1-4 players.", pledge_amt: 0, eta: nil, shipping: "", city: "Newark", state: "DE", funding_goal: "$100,000", category_id: categories[8].id, subcategory: nil, challenges: nil)
  projectpath9 = File.join(Rails.root, 'app', "assets", "images", "1c67faa6a069410393fd6a289b82aff9_original.jpg")
  project9.image_url.attach(io: File.open(projectpath9), filename: "1c67faa6a069410393fd6a289b82aff9_original.jpg")
  project9.save
  user10 = User.new(name: "Labyrinth", email: "labyrinth@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath10 = File.join(Rails.root, 'app', "assets", "images", "6fcd624d088bdd668f919ce6ef538cd9_original.png")
  user10.profile_url.attach(io: File.open(userpath10), filename: "6fcd624d088bdd668f919ce6ef538cd9_original.png")
  user10.save
  project10 = Project.new(duration: 0, limit: false, user_id: user10.id, country: "New Zealand", title: "Aethyr", description: "Aethyr is an Open World 2D Action Adventure game set in a world ruined by an arcane apocalypse inspired by the golden age of RPGs.", pledge_amt: 0, eta: nil, shipping: "", city: "Prague", state: "Czech Republic", funding_goal: "$15,000", category_id: categories[8].id, subcategory: "Video Games", challenges: nil)
  projectpath10 = File.join(Rails.root, 'app', "assets", "images", "81c149b136b579ad58e721ba14392b63_original.png")
  project10.image_url.attach(io: File.open(projectpath10), filename: "81c149b136b579ad58e721ba14392b63_original.png")
  project10.save
  user11 = User.new(name: "Triton Noir", email: "tritonnoir@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath11 = File.join(Rails.root, 'app', "assets", "images", "b6d2a438f01bf4167f12a3fe7898c7fe_original.png")
  user11.profile_url.attach(io: File.open(userpath11), filename: "b6d2a438f01bf4167f12a3fe7898c7fe_original.png")
  user11.save
  project11 = Project.new(duration: 0, limit: false, user_id: user11.id, country: "Canada", title: "Assassin's Creed®: Brotherhood of Venice", description: "The story driven cooperative miniatures board game in the Assassin's Creed® universe", pledge_amt: 0, eta: nil, shipping: "", city: "Montreal", state: "Canada", funding_goal: "$97,704", category_id: categories[8].id, subcategory: "Tabletop Games", challenges: nil)
  projectpath11 = File.join(Rails.root, 'app', "assets", "images", "9db8ced04389262d3e9d2ca1d2f66517_original.jpg")
  project11.image_url.attach(io: File.open(projectpath11), filename: "9db8ced04389262d3e9d2ca1d2f66517_original.jpg")
  project11.save
  user12 = User.new(name: "Aloft Studio", email: "aloftstudio@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath12 = File.join(Rails.root, 'app', "assets", "images", "5b6769c9e418a90c10c20751c870e6d9_original.png")
  user12.profile_url.attach(io: File.open(userpath12), filename: "5b6769c9e418a90c10c20751c870e6d9_original.png")
  user12.save
  project12 = Project.new(duration: 0, limit: false, user_id: user12.id, country: "the United States", title: "Hazelnut Bastille, a 16bit Indie Adventure", description: "Hazelnut Bastille is a topdown, Zelda-like ARPG, presented in a rigorously-period 16 bit style.", pledge_amt: 0, eta: nil, shipping: "", city: "Virginia Beach", state: "VA", funding_goal: "$65,000", category_id: categories[8].id, subcategory: "Video Games", challenges: nil)
  projectpath12 = File.join(Rails.root, 'app', "assets", "images", "9b810a43a612858ddbc3c26304034874_original.png")
  project12.image_url.attach(io: File.open(projectpath12), filename: "9b810a43a612858ddbc3c26304034874_original.png")
  project12.save
  user13 = User.new(name: "Jonas Manke", email: "jonasmanke@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath13 = File.join(Rails.root, 'app', "assets", "images", "3aa20a27333fab69b104d7e57bf07b08_original.jpg")
  user13.profile_url.attach(io: File.open(userpath13), filename: "3aa20a27333fab69b104d7e57bf07b08_original.jpg")
  user13.save
  project13 = Project.new(duration: 0, limit: false, user_id: user13.id, country: "Germany", title: "OMNO - an atmospheric exploration and puzzle adventure", description: "A journey of discovery through an ancient world of wonders", pledge_amt: 0, eta: nil, shipping: "", city: "Bielefeld", state: "Germany", funding_goal: "$36,145", category_id: categories[8].id, subcategory: "Video Games", challenges: nil)
  projectpath13 = File.join(Rails.root, 'app', "assets", "images", "88bb96ca3ab257a919755df3d24875ff_original.jpg")
  project13.image_url.attach(io: File.open(projectpath13), filename: "88bb96ca3ab257a919755df3d24875ff_original.jpg")
  project13.save
  user14 = User.new(name: "Andrea Donadio & Lisa Predko", email: "andreadonadiolisapredko@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath14 = File.join(Rails.root, 'app', "assets", "images", "7e025ed0ae018a800264b9a82c620513_original.jpg")
  user14.profile_url.attach(io: File.open(userpath14), filename: "7e025ed0ae018a800264b9a82c620513_original.jpg")
  user14.save
  project14 = Project.new(duration: 0, limit: false, user_id: user14.id, country: "the United States", title: "Lisa Food Vol. 1 - a gluten free vegetarian cookbook", description: "A collaboration between BFF's Lisa & Andy - Lisa Food is a collection of delicious GF recipes and incredible conceptual photography! :)", pledge_amt: 0, eta: nil, shipping: "", city: "Chicago", state: "IL", funding_goal: "$8,000", category_id: categories[7].id, subcategory: "Cookbooks", challenges: nil)
  projectpath14 = File.join(Rails.root, 'app', "assets", "images", "00d2bf95a707475dc3df944f8612cb4d_original.jpg")
  project14.image_url.attach(io: File.open(projectpath14), filename: "00d2bf95a707475dc3df944f8612cb4d_original.jpg")
  project14.save
  user15 = User.new(name: "Kosan Travel Co.", email: "kosantravelco@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath15 = File.join(Rails.root, 'app', "assets", "images", "8a0bc6d2f0152f9656ed340b42e03588_original.png")
  user15.profile_url.attach(io: File.open(userpath15), filename: "8a0bc6d2f0152f9656ed340b42e03588_original.png")
  user15.save
  project15 = Project.new(duration: 0, limit: false, user_id: user15.id, country: "Canada", title: "The Kosan Go Travel Dress", description: "Lightweight, odour blocking, wrinkle resistant and adjustable, the Go Travel Dress is packed with 14 travel-friendly features!", pledge_amt: 0, eta: nil, shipping: "", city: "Vancouver", state: "Canada", funding_goal: "$11,273", category_id: categories[5].id, subcategory: "Apparel", challenges: nil)
  projectpath15 = File.join(Rails.root, 'app', "assets", "images", "e05d0215fb76bdad3ff957733f5112ba_original.jpg")
  project15.image_url.attach(io: File.open(projectpath15), filename: "e05d0215fb76bdad3ff957733f5112ba_original.jpg")
  project15.save
  user16 = User.new(name: "Crowd Cookware", email: "crowdcookware@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath16 = File.join(Rails.root, 'app', "assets", "images", "39a9fc0024ea26c0abb2a12f25b83245_original.png")
  user16.profile_url.attach(io: File.open(userpath16), filename: "39a9fc0024ea26c0abb2a12f25b83245_original.png")
  user16.save
  project16 = Project.new(duration: 0, limit: false, user_id: user16.id, country: "Luxembourg", title: "Blackbeard cookware set: chef-grade, nonstick and nonscratch", description: "A new hack. A complete cookware set of the chef’s essentials. Based on our crowd’s wishes. For a fair price.", pledge_amt: 0, eta: nil, shipping: "", city: "Tilburg", state: "Netherlands", funding_goal: "$45,182", category_id: categories[7].id, subcategory: nil, challenges: nil)
  projectpath16 = File.join(Rails.root, 'app', "assets", "images", "3f6e8771ed6448290eea8382192a7766_original.jpg")
  project16.image_url.attach(io: File.open(projectpath16), filename: "3f6e8771ed6448290eea8382192a7766_original.jpg")
  project16.save
  user17 = User.new(name: "Amy Nazer", email: "amynazer@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath17 = File.join(Rails.root, 'app', "assets", "images", "5ce61e93e85f95c482c5ac81a1ede208_original.jpg")
  user17.profile_url.attach(io: File.open(userpath17), filename: "5ce61e93e85f95c482c5ac81a1ede208_original.jpg")
  user17.save
  project17 = Project.new(duration: 0, limit: false, user_id: user17.id, country: "the United States", title: "A Holiday Cocktail Kit from Woodward Extract Co.", description: "Spice up your home bar with new winter flavors from Woodward Extract Co.", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: "$2,000", category_id: categories[7].id, subcategory: "Drinks", challenges: nil)
  projectpath17 = File.join(Rails.root, 'app', "assets", "images", "0a979dea7d2229cd87c2503b761165e8_original.jpg")
  project17.image_url.attach(io: File.open(projectpath17), filename: "0a979dea7d2229cd87c2503b761165e8_original.jpg")
  project17.save
  user18 = User.new(name: "Joyce Zhu", email: "joycezhu@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath18 = File.join(Rails.root, 'app', "assets", "images", "fcd159c55045a764cb4e4a48cf72ce04_original.png")
  user18.profile_url.attach(io: File.open(userpath18), filename: "fcd159c55045a764cb4e4a48cf72ce04_original.png")
  user18.save
  project18 = Project.new(duration: 0, limit: false, user_id: user18.id, country: "the United States", title: "Natural Milk Chews: tastes like candy, performs like a bar.", description: "Healthy, snack-able candy exists! Subtly sweet with more than 10 essential vitamins, 4g protein per serving, and just 6 ingredients.", pledge_amt: 0, eta: nil, shipping: "", city: "Lansdale", state: "PA", funding_goal: "$2,500", category_id: categories[7].id, subcategory: "Small Batch", challenges: nil)
  projectpath18 = File.join(Rails.root, 'app', "assets", "images", "a7f86ad6b26a394c6a4b92409295186e_original.png")
  project18.image_url.attach(io: File.open(projectpath18), filename: "a7f86ad6b26a394c6a4b92409295186e_original.png")
  project18.save
  user19 = User.new(name: "Gustaf Fjelstrom", email: "gustaffjelstrom@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath19 = File.join(Rails.root, 'app', "assets", "images", "c8094323daebcd3771cc175cbc30c2ea_original.jpeg")
  user19.profile_url.attach(io: File.open(userpath19), filename: "c8094323daebcd3771cc175cbc30c2ea_original.jpeg")
  user19.save
  project19 = Project.new(duration: 0, limit: false, user_id: user19.id, country: "the United States", title: "Codex Aegis : Volume II of the Peripheral Arc : Vinyl + CD", description: "A new album of instrumental ambient rock. Vinyl + CD + Digital", pledge_amt: 0, eta: nil, shipping: "", city: "San Jose", state: "CA", funding_goal: "$5,000", category_id: categories[10].id, subcategory: "Rock", challenges: nil)
  projectpath19 = File.join(Rails.root, 'app', "assets", "images", "f43129a6bed7173f407cc36eba69afe0_original.jpg")
  project19.image_url.attach(io: File.open(projectpath19), filename: "f43129a6bed7173f407cc36eba69afe0_original.jpg")
  project19.save
  user20 = User.new(name: "Electric Six", email: "electricsix@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath20 = File.join(Rails.root, 'app', "assets", "images", "c4955c206519123821aea85dc6813f2e_original.jpeg")
  user20.profile_url.attach(io: File.open(userpath20), filename: "c4955c206519123821aea85dc6813f2e_original.jpeg")
  user20.save
  project20 = Project.new(duration: 0, limit: false, user_id: user20.id, country: "the United States", title: "Electric Six - Live In Liverpool", description: "A filmed concert DVD/BluRay/Digital version of Electric Six Live In Liverpool, England", pledge_amt: 0, eta: nil, shipping: "", city: "Detroit", state: "MI", funding_goal: "$30,000", category_id: categories[10].id, subcategory: nil, challenges: nil)
  projectpath20 = File.join(Rails.root, 'app', "assets", "images", "6b093b468c9c6adaf0756f19f6ae7746_original.jpg")
  project20.image_url.attach(io: File.open(projectpath20), filename: "6b093b468c9c6adaf0756f19f6ae7746_original.jpg")
  project20.save
  user21 = User.new(name: "Tiffany Topol", email: "tiffanytopol@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath21 = File.join(Rails.root, 'app', "assets", "images", "f85ba491e896c62d31debd4539fd6ecf_original.png")
  user21.profile_url.attach(io: File.open(userpath21), filename: "f85ba491e896c62d31debd4539fd6ecf_original.png")
  user21.save
  project21 = Project.new(duration: 0, limit: false, user_id: user21.id, country: "the United States", title: "A Regenerative Pop Album Made by Womxn", description: "Tiffany Topol wants to put more womxn behind the scenes with her debut album - nearly 34 years in the making.", pledge_amt: 0, eta: nil, shipping: "", city: "Queens", state: "NY", funding_goal: "$8,500", category_id: categories[10].id, subcategory: nil, challenges: nil)
  projectpath21 = File.join(Rails.root, 'app', "assets", "images", "9826a13e7ee48be908f7e8e16f35bf2b_original.jpeg")
  project21.image_url.attach(io: File.open(projectpath21), filename: "9826a13e7ee48be908f7e8e16f35bf2b_original.jpeg")
  project21.save
  user22 = User.new(name: "The Teacups", email: "theteacups@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath22 = File.join(Rails.root, 'app', "assets", "images", "de9f1edb30b0095a2a108b50af5a0b44_original.jpg")
  user22.profile_url.attach(io: File.open(userpath22), filename: "de9f1edb30b0095a2a108b50af5a0b44_original.jpg")
  user22.save
  project22 = Project.new(duration: 0, limit: false, user_id: user22.id, country: "the United Kingdom", title: "The Teacups Third Studio Album", description: "An album of traditional and contemporary a capella folk music from close-harmony quartet The Teacups", pledge_amt: 0, eta: nil, shipping: "", city: "Newcastle upon Tyne", state: "UK", funding_goal: "$8,279", category_id: categories[10].id, subcategory: "Country & Folk", challenges: nil)
  projectpath22 = File.join(Rails.root, 'app', "assets", "images", "5d9e2e74dac8a3d0d8242e6032be89f0_original.jpg")
  project22.image_url.attach(io: File.open(projectpath22), filename: "5d9e2e74dac8a3d0d8242e6032be89f0_original.jpg")
  project22.save
  user23 = User.new(name: "Blues Funeral Recordings", email: "bluesfuneralrecordings@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath23 = File.join(Rails.root, 'app', "assets", "images", "121275afbf83ebcc73d60f6a32293b56_original.jpg")
  user23.profile_url.attach(io: File.open(userpath23), filename: "121275afbf83ebcc73d60f6a32293b56_original.jpg")
  user23.save
  project23 = Project.new(duration: 0, limit: false, user_id: user23.id, country: "the United States", title: "POSTWAX - A Curated Heavy Music Vinyl Subscription Series", description: "PostWax is a curated series of limited edition records from some of the best stoner metal, doom and heavy psych bands on the planet.", pledge_amt: 0, eta: nil, shipping: "", city: "Albuquerque", state: "NM", funding_goal: "$9,000", category_id: categories[10].id, subcategory: nil, challenges: nil)
  projectpath23 = File.join(Rails.root, 'app', "assets", "images", "ebf7241f6b39cdb11c7b9e4994bd01e8_original.jpg")
  project23.image_url.attach(io: File.open(projectpath23), filename: "ebf7241f6b39cdb11c7b9e4994bd01e8_original.jpg")
  project23.save
  user24 = User.new(name: "Fortuna Media", email: "fortunamedia@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath24 = File.join(Rails.root, 'app', "assets", "images", "fbc3a5f889240c4a23bd44ecf0580f92_original.png")
  user24.profile_url.attach(io: File.open(userpath24), filename: "fbc3a5f889240c4a23bd44ecf0580f92_original.png")
  user24.save
  project24 = Project.new(duration: 0, limit: false, user_id: user24.id, country: "the United States", title: "Almost Real: A Speculative Biology Zine (Vol. 2 • FLIGHT)", description: "Take off into the world of speculative biology with Almost Real's second volume focused on flight, powered by 15 amazing contributors.", pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: "$16,000", category_id: categories[12].id, subcategory: "Anthologies", challenges: nil)
  projectpath24 = File.join(Rails.root, 'app', "assets", "images", "b7f7d1e91229f804bf3300200f312d7b_original.png")
  project24.image_url.attach(io: File.open(projectpath24), filename: "b7f7d1e91229f804bf3300200f312d7b_original.png")
  project24.save
  user25 = User.new(name: "Sven Sauer", email: "svensauer@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath25 = File.join(Rails.root, 'app', "assets", "images", "dd8e3cc2a2276e9b923fb7029ce4bfe5_original.jpg")
  user25.profile_url.attach(io: File.open(userpath25), filename: "dd8e3cc2a2276e9b923fb7029ce4bfe5_original.jpg")
  user25.save
  project25 = Project.new(duration: 0, limit: false, user_id: user25.id, country: "Germany", title: "Unseen Westeros Artbook - authorized by George R.R. Martin", description: "40 original `Game of Thrones` artists teamed up for 3 years to create an artbook about the pre-story of `A Song of Ice and Fire`.", pledge_amt: 0, eta: nil, shipping: "", city: "Berlin", state: "Germany", funding_goal: "$28,239", category_id: categories[12].id, subcategory: "Art Books", challenges: nil)
  projectpath25 = File.join(Rails.root, 'app', "assets", "images", "1c3ba14b03a3be3abc67e2c407326b24_original.jpg")
  project25.image_url.attach(io: File.open(projectpath25), filename: "1c3ba14b03a3be3abc67e2c407326b24_original.jpg")
  project25.save
  user27 = User.new(name: "Micheline Pitt", email: "michelinepitt@gmail.com", password: "starwars", biography: "Micheline Pitt is a designer, artist, and filmmaker, best known for her fashion lines Vixen by Micheline Pitt and La Femme en Noire.", websites: "", google_analytics: nil)
  userpath27 = File.join(Rails.root, 'app', "assets", "images", "089b6c7d51de6f70724530a9eb51654e_original.jpg")
  user27.profile_url.attach(io: File.open(userpath27), filename: "089b6c7d51de6f70724530a9eb51654e_original.jpg")
  user27.save
  project27 = Project.new(duration: 0, limit: false, user_id: user27.id, country: "the United States", title: "GRUMMY", description: "A gothic fantasy film and children's book featuring legendary creature effects artist, KEVIN YAGHER.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: "$95,000", category_id: categories[6].id, subcategory: "Fantasy", challenges: nil)
  projectpath27 = File.join(Rails.root, 'app', "assets", "images", "a6bea493e617e59dc755eafefa23cf9c_original.jpg")
  project27.image_url.attach(io: File.open(projectpath27), filename: "a6bea493e617e59dc755eafefa23cf9c_original.jpg")
  project27.save
  user28 = User.new(name: "Yasha Levine", email: "yashalevine@gmail.com", password: "starwars", biography: 'Yasha Levine is a Russian-born American author and investigative journalist. He came to the United States as a refugee and grew up in San Francisco. The New Yorker magazine praised his last book — Surveillance Valley: The Secret Military History of the Internet — as "forceful" and "salutary." He has reported extensively from both the United States and the former Soviet Union. His work has been published and profiled in The Baffler, Wired Magazine, The Nation, Slate, Penthouse, The New York Observer, Playboy, Not Safe For Work Corp, Alternet, Vanity Fair, The Verge, MSNBC and many others.', websites: nil, google_analytics: nil)
  userpath28 = File.join(Rails.root, 'app', "assets", "images", "d88286e4ad9bf5eb2f083a8e79dc72ca_original.jpg")
  user28.profile_url.attach(io: File.open(userpath28), filename: "d88286e4ad9bf5eb2f083a8e79dc72ca_original.jpg")
  user28.save
  project28 = Project.new(duration: 0, limit: false, user_id: user28.id, country: "the United States", title: "Pistachio Wars: Killing California for a Snack Food", description: "A groundbreaking documentary about Beverly Hills billionaires, marketing madness, water privatization, and...war with Iran.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: "$50,000", category_id: categories[6].id, subcategory: "Documentary", challenges: nil)
  projectpath28 = File.join(Rails.root, 'app', "assets", "images", "0fddc7258e9daf3116f5f225ddb4b690_original.jpg")
  project28.image_url.attach(io: File.open(projectpath28), filename: "0fddc7258e9daf3116f5f225ddb4b690_original.jpg")
  project28.save
  user29 = User.new(name: "WG Film", email: "wgfilm@gmail.com", password: "starwars", biography: "WG Film produces high quality documentaries for broadcast and cinema. The earlier films of WG Film were often local stories with global relevance. With time, the films have become more and more international and WG Film is today considered one of the most successful companies in the genre of author- driven documentary film in Sweden and internationally. Selected films: Becoming Zlatan, Bikes vs Cars, Big Boys Gone Bananas!*, Love Always, Carolyn, BANANAS!*, Burma VJ (co-production), I Bought A Rainforest.", websites: nil, google_analytics: nil)
  userpath29 = File.join(Rails.root, 'app', "assets", "images", "5948fe741affee116595afeffeb0b9e5_original.jpeg")
  user29.profile_url.attach(io: File.open(userpath29), filename: "5948fe741affee116595afeffeb0b9e5_original.jpeg")
  user29.save
  project29 = Project.new(duration: 0, limit: false, user_id: user29.id, country: "Sweden", title: "PUSH - YOU CAN'T LIVE HERE ANYMORE", description: "Documentary exploring why it's become so expensive to live in our cities, feat Leilani Farha, UN Special Rapporteur to Adequate Housing", pledge_amt: 0, eta: nil, shipping: "", city: "Malmö", state: "Sweden", funding_goal: "$50,000", category_id: categories[6].id, subcategory: "Documentary", challenges: nil)
  projectpath29 = File.join(Rails.root, 'app', "assets", "images", "37c6f5d10f6f8f01756ccf37c86fd357_original.jpg")
  project29.image_url.attach(io: File.open(projectpath29), filename: "37c6f5d10f6f8f01756ccf37c86fd357_original.jpg")
  project29.save
  user30 = User.new(name: "Shawn Pryor", email: "superflux@gmail.com", password: "starwars", biography: "Shawn Pryor is the creator and co-writer of the all-ages graphic novel mystery series CASH & CARRIE, writer of KENTUCKY KAIJU, and writer and co-creator of the football/drama series FORCE. He is one of the co-founders of Action Lab Entertainment and currently serves as their President of Creative Relations. In his free time, he enjoys reading, cooking, listening to streaming music playlists, and talking about why Zack from the Mighty Morphin Power Rangers is the greatest Black superhero of all-time.", websites: "", google_analytics: nil)
  userpath30 = File.join(Rails.root, 'app', "assets", "images", "a07448b1b6343b523c291198cd026ccb_original.jpg")
  user30.profile_url.attach(io: File.open(userpath30), filename: "a07448b1b6343b523c291198cd026ccb_original.jpg")
  user30.save
  project30 = Project.new(duration: 0, limit: false, user_id: user30.id, country: "Ireland", title: "CASH & CARRIE - BOOK TWO: SUMMER SLEUTHS!", description: "Middle school detectives Dallas Cash & Inez Carrie attempt to do some summer sleuthing in their BRAND NEW graphic novel!", pledge_amt: 0, eta: nil, shipping: "", city: "Lexington", state: "KY", funding_goal: "$8,000", category_id: categories[1].id, subcategory: "Graphic Novels", challenges: nil)
  projectpath30 = File.join(Rails.root, 'app', "assets", "images", "26353cd6cfb032a8239ca56388ccb303_original.png")
  project30.image_url.attach(io: File.open(projectpath30), filename: "26353cd6cfb032a8239ca56388ccb303_original.png")
  project30.save
  user31 = User.new(name: "Natalija Vekic", email: "natalijavekic@gmail.com", password: "starwars", biography: '', websites: nil, google_analytics: nil)
  userpath31 = File.join(Rails.root, 'app', "assets", "images", "0057e043b034d9de868c7d89e18caf48_original.jpg")
  user31.profile_url.attach(io: File.open(userpath31), filename: "0057e043b034d9de868c7d89e18caf48_original.jpg")
  user31.save
  project31 = Project.new(duration: 0, limit: false, user_id: user31.id, country: "the United States", title: '"Jane" a short Film', description: "It's 1969. There is no Roe v. Wade. Teresa and Josie are part of an underground group who help women access safe abortions.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: "$25,000", category_id: categories[6].id, subcategory: "Drama", challenges: nil)
  projectpath31 = File.join(Rails.root, 'app', "assets", "images", "44eda5a59396f69d225e3aff5130114e_original.png")
  project31.image_url.attach(io: File.open(projectpath31), filename: "44eda5a59396f69d225e3aff5130114e_original.png")
  project31.save
  user32 = User.new(name: "AlexHubbell", email: "alexhubbell@gmail.com", password: "starwars", biography: "Alex is an artist and educator, but most of all, an animal lover. Her work uses natural elements to showcase the beauty of creatures great and small.", websites: nil, google_analytics: nil)
  userpath32 = File.join(Rails.root, 'app', "assets", "images", "72be69defe1aa41b21f98ee38427e345_original.jpg")
  user32.profile_url.attach(io: File.open(userpath32), filename: "72be69defe1aa41b21f98ee38427e345_original.jpg")
  user32.save
  project32 = Project.new(duration: 0, limit: false, user_id: user32.id, country: "the United States", title: "12 Months of Indigo Cats", description: "Bring twelve Watercolor Felines into your home, and get a bonus Mini Print for Christmas! Each calendar is handmade by the artist.", pledge_amt: 0, eta: nil, shipping: "", city: "Columbia", state: "MO", funding_goal: "$2,500", category_id: categories[0].id, subcategory: "Painting", challenges: nil)
  projectpath32 = File.join(Rails.root, 'app', "assets", "images", "76b87493caab5f3ea34bc839b6e4ddef_original.jpg")
  project32.image_url.attach(io: File.open(projectpath32), filename: "76b87493caab5f3ea34bc839b6e4ddef_original.jpg")
  project32.save
  user33 = User.new(name: "April Soetarman", email: "aprilsoetarman@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath33 = File.join(Rails.root, 'app', "assets", "images", "1c3929e4d6464331461593ee89436b96_original.jpg")
  user33.profile_url.attach(io: File.open(userpath33), filename: "1c3929e4d6464331461593ee89436b96_original.jpg")
  user33.save
  project33 = Project.new(duration: 0, limit: false, user_id: user33.id, country: "the United States", title: "ATTENTION: YOU ARE WONDERFUL and other street sign art", description: "A guerrilla art series of unexpected sayings on metal street signs, installed in public spaces. Now you can get a sign for yourself!", pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: "$7,200", category_id: categories[0].id, subcategory: "Installations", challenges: nil)
  projectpath33 = File.join(Rails.root, 'app', "assets", "images", "a9edfcda4f8efed3d591b3a2e9fbb41a_original.jpg")
  project33.image_url.attach(io: File.open(projectpath33), filename: "a9edfcda4f8efed3d591b3a2e9fbb41a_original.jpg")
  project33.save
  user35 = User.new(name: "Marco Klahold", email: "marcoklahold@gmail.com", password: "starwars", biography: "", websites: "", google_analytics: nil)
  userpath35 = File.join(Rails.root, 'app', "assets", "images", "53ae10e82c5ed7e2778cc4177b82efc4_original.jpg")
  user35.profile_url.attach(io: File.open(userpath35), filename: "53ae10e82c5ed7e2778cc4177b82efc4_original.jpg")
  user35.save
  project35 = Project.new(duration: 0, limit: false, user_id: user35.id, country: "Germany", title: "\"Tagebuch eines Streuners\" by Marco Klahold (Photobook)", description: "My second book. 240 pages filled with photographs and thoughts of the past two years.", pledge_amt: 0, eta: nil, shipping: "", city: "Cologne", state: "Germany", funding_goal: "$10,166", category_id: categories[11].id, subcategory: "Photobooks", challenges: nil)
  projectpath35 = File.join(Rails.root, 'app', "assets", "images", "ce1368517f3801c614dad6ab235fd976_original.jpg")
  project35.image_url.attach(io: File.open(projectpath35), filename: "ce1368517f3801c614dad6ab235fd976_original.jpg")
  project35.save
  user36 = User.new(name: "Shannon Shird", email: "shannonshird@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath36 = File.join(Rails.root, 'app', "assets", "images", "320f89c54ef2add6e6852918e4846bc8_original.jpeg")
  user36.profile_url.attach(io: File.open(userpath36), filename: "320f89c54ef2add6e6852918e4846bc8_original.jpeg")
  user36.save
  project36 = Project.new(duration: 0, limit: false, user_id: user36.id, country: "the United States", title: "BodyMore at the Intersection of #BlackLivesMatter & #MeToo", description: "Carrie returns to Baltimore to protest police violence but a reunion at a party ignites a series of betrayals that complicate her fight", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: "$20,000", category_id: categories[6].id, subcategory: "Shorts", challenges: nil)
  projectpath36 = File.join(Rails.root, 'app', "assets", "images", "b8a3e4255f4624d96c0dd34b8f9b9219_original.jpeg")
  project36.image_url.attach(io: File.open(projectpath36), filename: "b8a3e4255f4624d96c0dd34b8f9b9219_original.jpeg")
  project36.save
  user37 = User.new(name: "Jack Harries & Geordie Cargill", email: "jackharriesgeordiecargill@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath37 = File.join(Rails.root, 'app', "assets", "images", "1cf804fd3c2258150597e1c05fcaf532_original.jpg")
  user37.profile_url.attach(io: File.open(userpath37), filename: "1cf804fd3c2258150597e1c05fcaf532_original.jpg")
  user37.save
  project37 = Project.new(duration: 0, limit: false, user_id: user37.id, country: "Australia", title: "Heavy Volume III.", description: "The third instalment in our ongoing journal series 'Heavy'— A compendium of contemporary photography focusing on the conversation.", pledge_amt: 0, eta: nil, shipping: "", city: "Sydney", state: "AU", funding_goal: "$12,656", category_id: categories[11].id, subcategory: "Photobooks", challenges: nil)
  projectpath37 = File.join(Rails.root, 'app', "assets", "images", "573346cf29d8556cf46d08f19da4e676_original.jpg")
  project37.image_url.attach(io: File.open(projectpath37), filename: "573346cf29d8556cf46d08f19da4e676_original.jpg")
  project37.save
  user38 = User.new(name: "Joseph Perez", email: "josephperez@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath38 = File.join(Rails.root, 'app', "assets", "images", "ace684374cbb57215a7459b71b4807ea_original.jpg")
  user38.profile_url.attach(io: File.open(userpath38), filename: "ace684374cbb57215a7459b71b4807ea_original.jpg")
  user38.save
  project38 = Project.new(duration: 0, limit: false, user_id: user38.id, country: "the United States", title: "Chicago Sentrock Studio & Creative Workshop Space", description: "Art studio, creative workspace & platform for open studios / workshops for student interns and creatives.", pledge_amt: 0, eta: nil, shipping: "", city: "Chicago", state: "IL", funding_goal: "$7,000", category_id: categories[0].id, subcategory: "Painting", challenges: nil)
  projectpath38 = File.join(Rails.root, 'app', "assets", "images", "d6881893fca1a2807dc86574a4000bc5_original.jpeg")
  project38.image_url.attach(io: File.open(projectpath38), filename: "d6881893fca1a2807dc86574a4000bc5_original.jpeg")
  project38.save
  user39 = User.new(name: "Playeress", email: "playeress@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath39 = File.join(Rails.root, 'app', "assets", "images", "832ee7b21cf37feea778f4b80bf97f9a_original.png")
  user39.profile_url.attach(io: File.open(userpath39), filename: "832ee7b21cf37feea778f4b80bf97f9a_original.png")
  user39.save
  project39 = Project.new(duration: 0, limit: false, user_id: user39.id, country: "Austria", title: "WHO'S SHE? - a guessing game about extraordinary women!", description: "A wooden guessing game featuring strong, mighty women. It's all about their adventures not their looks! Made to inspire. Made to last.", pledge_amt: 0, eta: nil, shipping: "", city: "Warsaw", state: "Poland", funding_goal: "$16,943", category_id: categories[4].id, subcategory: "Product Design", challenges: nil)
  projectpath39 = File.join(Rails.root, 'app', "assets", "images", "62047465f9d62694af3fb8896cb0c952_original.jpg")
  project39.image_url.attach(io: File.open(projectpath39), filename: "62047465f9d62694af3fb8896cb0c952_original.jpg")
  project39.save
  user40 = User.new(name: "Solgaard Design", email: "solgaarddesign@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath40 = File.join(Rails.root, 'app', "assets", "images", "b252b7227e96f49c0d75068969e61fd7_original.png")
  user40.profile_url.attach(io: File.open(userpath40), filename: "b252b7227e96f49c0d75068969e61fd7_original.png")
  user40.save
  project40 = Project.new(duration: 0, limit: false, user_id: user40.id, country: "the United States", title: "Ocean Plastics Daypack by Solgaard: The Upcycled Backpack", description: "A backpack made from recycled plastic recovered from the ocean. Designed for everyday carry, including laptop and other tech gear.", pledge_amt: 0, eta: nil, shipping: "", city: "New York", state: "NY", funding_goal: "$25,000", category_id: categories[4].id, subcategory: "Product Design", challenges: nil)
  projectpath40 = File.join(Rails.root, 'app', "assets", "images", "eb78346a66642eff0ce1ea9b8ef7c60d_original.jpg")
  project40.image_url.attach(io: File.open(projectpath40), filename: "eb78346a66642eff0ce1ea9b8ef7c60d_original.jpg")
  project40.save
  user41 = User.new(name: "Andrew Sanderson", email: "andrewsanderson@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath41 = File.join(Rails.root, 'app', "assets", "images", "9ce3607e194a0f4d6eaaae0cc2859208_original.jpg")
  user41.profile_url.attach(io: File.open(userpath41), filename: "9ce3607e194a0f4d6eaaae0cc2859208_original.jpg")
  user41.save
  project41 = Project.new(duration: 0, limit: false, user_id: user41.id, country: "the United States", title: "A Minimal Pen That Will Last You a Lifetime", description: "A sleek, minimal, solid metal, American-made retractable pen designed to last a lifetime", pledge_amt: 0, eta: nil, shipping: "", city: "Austin", state: "TX", funding_goal: "$8,000", category_id: categories[4].id, subcategory: "Product Design", challenges: nil)
  projectpath41 = File.join(Rails.root, 'app', "assets", "images", "357b908922f2d8828b0c951d70dfbb28_original.jpeg")
  project41.image_url.attach(io: File.open(projectpath41), filename: "357b908922f2d8828b0c951d70dfbb28_original.jpeg")
  project41.save
  user42 = User.new(name: "Wyatt J Hesemeyer", email: "wyattjhesemeyer@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath42 = File.join(Rails.root, 'app', "assets", "images", "c28b3647351aa685766eafb66f425455_original.jpg")
  user42.profile_url.attach(io: File.open(userpath42), filename: "c28b3647351aa685766eafb66f425455_original.jpg")
  user42.save
  project42 = Project.new(duration: 0, limit: false, user_id: user42.id, country: "the United States", title: "The Line Defined Tarot", description: "The Line Defined Tarot is a unique, black work rendition of the traditional 78 card deck. Drawing inspiration from alchemy & nature", pledge_amt: 0, eta: nil, shipping: "", city: "Santa Cruz", state: "CA", funding_goal: "$12,500", category_id: categories[12].id, subcategory: "Art Books", challenges: nil)
  projectpath42 = File.join(Rails.root, 'app', "assets", "images", "18c9d33f5cf851cd4ced858c161de518_original.jpg")
  project42.image_url.attach(io: File.open(projectpath42), filename: "18c9d33f5cf851cd4ced858c161de518_original.jpg")
  project42.save
  user43 = User.new(name: "John Betancourt", email: "johnbetancourt@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath43 = File.join(Rails.root, 'app', "assets", "images", "bad800552efa4bd4d85f69f381e8a161_original.jpg")
  user43.profile_url.attach(io: File.open(userpath43), filename: "bad800552efa4bd4d85f69f381e8a161_original.jpg")
  user43.save
  project43 = Project.new(duration: 0, limit: false, user_id: user43.id, country: "the United States", title: "Frozen Hell: The Book That Inspired The Thing", description: 'A newly discovered, expanded version of the classic sci-fi story "Who Goes There?" (THE THING) by John W. Campbell, Jr.', pledge_amt: 0, eta: nil, shipping: "", city: "Rockville", state: "MD", funding_goal: "$1,000", category_id: categories[12].id, subcategory: "Fiction", challenges: nil)
  projectpath43 = File.join(Rails.root, 'app', "assets", "images", "d8f48be82465ab2309bcbdeef5e303a6_original.jpg")
  project43.image_url.attach(io: File.open(projectpath43), filename: "d8f48be82465ab2309bcbdeef5e303a6_original.jpg")
  project43.save
  user44 = User.new(name: "Ben Tibbetts", email: "bentibbetts@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath44 = File.join(Rails.root, 'app', "assets", "images", "916af299e76bc328aafc5810deaa4d96_original.jpg")
  user44.profile_url.attach(io: File.open(userpath44), filename: "916af299e76bc328aafc5810deaa4d96_original.jpg")
  user44.save
  project44 = Project.new(duration: 0, limit: false, user_id: user44.id, country: "the United Kingdom", title: "ALPENGLOW - A book of high Alpine inspiration", description: "ALPENGLOW is a beautiful and inspiring book of photographs, drawings and stories from the highest peaks of the European Alps", pledge_amt: 0, eta: nil, shipping: "", city: "London", state: "UK", funding_goal: "£6,000", category_id: categories[12].id, subcategory: nil, challenges: nil)
  projectpath44 = File.join(Rails.root, 'app', "assets", "images", "4a1bec07816f66c5338274bc09e6a1df_original.jpg")
  project44.image_url.attach(io: File.open(projectpath44), filename: "4a1bec07816f66c5338274bc09e6a1df_original.jpg")
  project44.save
  user45 = User.new(name: "Paper Hat, Inc.", email: "paperhatinc@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath45 = File.join(Rails.root, 'app', "assets", "images", "33718439736dd20af4142d532902915d_original.jpg")
  user45.profile_url.attach(io: File.open(userpath45), filename: "33718439736dd20af4142d532902915d_original.jpg")
  user45.save
  project45 = Project.new(duration: 0, limit: false, user_id: user45.id, country: "the United States", title: "Paper Hat", description: "Opening a print studio and art gallery in Chicago's Logan Square neighborhood.", pledge_amt: 0, eta: nil, shipping: "", city: "Chicago", state: "IL", funding_goal: "$10,000", category_id: categories[0].id, subcategory: nil, challenges: nil)
  projectpath45 = File.join(Rails.root, 'app', "assets", "images", "861ce10f634eac181e4a45f0e91c0665_original.jpg")
  project45.image_url.attach(io: File.open(projectpath45), filename: "861ce10f634eac181e4a45f0e91c0665_original.jpg")
  project45.save
  user46 = User.new(name: "Cowboy Cricket Farms", email: "cowboycricketfarms@gmail.com", password: "starwars", biography: nil, websites: nil, google_analytics: nil)
  userpath46 = File.join(Rails.root, 'app', "assets", "images", "1b92d9803ed55fb605c3cbab5ef74e16_original.jpg")
  user46.profile_url.attach(io: File.open(userpath46), filename: "1b92d9803ed55fb605c3cbab5ef74e16_original.jpg")
  user46.save
  project46 = Project.new(duration: 0, limit: false, user_id: user46.id, country: "the United States", title: "Cowboy Cricket Jumpers made with SuperCrickets", description: "SuperSustainable SuperCrickets for SuperHumans! Three brand new flavors of Jumpers - and we want you to get them first!", pledge_amt: 0, eta: nil, shipping: "", city: "Bozeman", state: "MT", funding_goal: "$5,000", category_id: categories[7].id, subcategory: nil, challenges: nil)
  projectpath46 = File.join(Rails.root, 'app', "assets", "images", "982b484895c2608a08a9998d737acbcb_original.png")
  project46.image_url.attach(io: File.open(projectpath46), filename: "982b484895c2608a08a9998d737acbcb_original.png")
  project46.save
end
