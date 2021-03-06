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
  user2 = User.new(name: "Wynd Technologies, Inc.", email: "wyndtechnologiesinc@gmail.com", password: "starwars", biography: "We're a startup that wants to enable clean air for everyone. Wynd was founded in 2014, and since then, the team has been hard at work engineering a solution that can bring healthy air to those in unhealthy environments.", google_analytics: "")
  userpath2 = File.join(Rails.root, 'app', "assets", "images", "26441e13bbd6229c41392b247987ed53_original.png")
  user2.profile_url.attach(io: File.open(userpath2), filename: "26441e13bbd6229c41392b247987ed53_original.png")
  user2.save
  project2 = Project.new(duration: 0, limit: false, user_id: user2.id, country: "the United States", title: "Wynd Halo + Home Purifier: Keep your home’s air healthy", description: "The world's smartest air monitor meets the most powerful purifier in its class.", pledge_amt: 0, eta: nil, shipping: "", city: "Redwood City", state: "CA", funding_goal: 50000, category_id: categories[13].id, subcategory: "Hardware", challenges: "")
  projectpath2 = File.join(Rails.root, 'app', "assets", "images", "d60844185a965dbb862faef51950e637_original.png")
  project2.image_url.attach(io: File.open(projectpath2), filename: "d60844185a965dbb862faef51950e637_original.png")
  project2.save
  user3 = User.new(name: "Maurice Ribble", email: "mauriceribble@gmail.com", password: "starwars", biography: "Maurice is an inventor and engineer. He enjoys understanding fragments of the universe and solving problems he encounters.", google_analytics: "")
  userpath3 = File.join(Rails.root, 'app', "assets", "images", "ed91c4b4f5971395e1d338eb5c4e61dd_original.jpg")
  user3.profile_url.attach(io: File.open(userpath3), filename: "ed91c4b4f5971395e1d338eb5c4e61dd_original.jpg")
  user3.save
  project3 = Project.new(duration: 0, limit: false, user_id: user3.id, country: "the United States", title: "Electric Eel Wheel Mini 2", description: "The hand-sized fully functioning electric spinning wheel that spins wool and other fibers into yarn.", pledge_amt: 0, eta: nil, shipping: "", city: "Worcester", state: "MA", funding_goal: 15000, category_id: categories[13].id, subcategory: nil, challenges: "")
  projectpath3 = File.join(Rails.root, 'app', "assets", "images", "b5ef915e27ebecfd5c2cef12b8eff881_original.jpg")
  project3.image_url.attach(io: File.open(projectpath3), filename: "b5ef915e27ebecfd5c2cef12b8eff881_original.jpg")
  project3.save
  user4 = User.new(name: "Mira Ong Chua", email: "miraongchua@gmail.com", password: "starwars", biography: "comic artist", google_analytics: "")
  userpath4 = File.join(Rails.root, 'app', "assets", "images", "f969b4f6b2151164ea07b9dd655a554d_original.png")
  user4.profile_url.attach(io: File.open(userpath4), filename: "f969b4f6b2151164ea07b9dd655a554d_original.png")
  user4.save
  project4 = Project.new(duration: 0, limit: false, user_id: user4.id, country: "the United States", title: "ROADQUEEN: ETERNAL ROADTRIP TO LOVE", description: "Help us print the first book of Cut Time, a fantasy comic inspired by astrology for teen readers and up!", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: 5500, category_id: categories[1].id, subcategory: "Graphic Novels", challenges: "")
  projectpath4 = File.join(Rails.root, 'app', "assets", "images", "e7e9eceb13789f84a65dee211a99c645_original.jpg")
  project4.image_url.attach(io: File.open(projectpath4), filename: "e7e9eceb13789f84a65dee211a99c645_original.jpg")
  project4.save
  user5 = User.new(name: "Hiveworks Comics", email: "hiveworkscomics@gmail.com", password: "starwars", biography: "Hiveworks Comics is a creator-owned published and studio dedicated to distributing and promoting wonderful stories to an online audience.", google_analytics: "")
  userpath5 = File.join(Rails.root, 'app', "assets", "images", "379a5196027eb91b651314d19c66f005_original.png")
  user5.profile_url.attach(io: File.open(userpath5), filename: "379a5196027eb91b651314d19c66f005_original.png")
  user5.save
  project5 = Project.new(duration: 0, limit: false, user_id: user5.id, country: "the United States", title: "Cut Time - Book 1", description: "Help us print the first book of Cut Time, a fantasy comic inspired by astrology for teen readers and up!", pledge_amt: 0, eta: nil, shipping: "", city: "Austin", state: "TX", funding_goal: 15000, category_id: categories[1].id, subcategory: "Webcomics", challenges: "")
  projectpath5 = File.join(Rails.root, 'app', "assets", "images", "97ca269b2421afae3577441e10e51a66_original.png")
  project5.image_url.attach(io: File.open(projectpath5), filename: "97ca269b2421afae3577441e10e51a66_original.png")
  project5.save
  user6 = User.new(name: "TO Comix Press", email: "tocomixpress@gmail.com", password: "starwars", biography: "The TO Comix Press publishes comic work celebrating upcoming creators and diverse voices. Founded in 2014, we've sold over 5,000 books and raised over $75,000 on Kickstarter. We've been nominated for the Gene Day Award for excellence in self-publishing in 2015, 2016, and 2017.", google_analytics: "")
  userpath6 = File.join(Rails.root, 'app', "assets", "images", "a66fc34972e18b43886b9bf6807030d1_original.jpg")
  user6.profile_url.attach(io: File.open(userpath6), filename: "a66fc34972e18b43886b9bf6807030d1_original.jpg")
  user6.save
  project6 = Project.new(duration: 0, limit: false, user_id: user6.id, country: "Canada", title: "Shout Out Anthology", description: "A bold new anthology of queer comics for teen readers, from an award-winning queer creative team.", pledge_amt: 0, eta: nil, shipping: "", city: "Toronto", state: "Canada", funding_goal: 22547, category_id: categories[1].id, subcategory: "Anthologies", challenges: "")
  projectpath6 = File.join(Rails.root, 'app', "assets", "images", "d31b76e30dd1707f27dbca6bb0e3856f_original.jpg")
  project6.image_url.attach(io: File.open(projectpath6), filename: "d31b76e30dd1707f27dbca6bb0e3856f_original.jpg")
  project6.save
  user7 = User.new(name: "Lyfe Illustration", email: "lyfeillustration@gmail.com", password: "starwars", biography: "Hello there! My name is Lydia Fenwick, but the internet knows me as Lyfe Illustration. I am a California native professional illustrator focussing on portraying the harmony between femininity and nature. I graduated summa cum laude from Laguna College of Art and Design in 2016 and am now back teaching my own class: Artist as Entrepreneur. In addition to being an illustrator, I am a \"Mother of Tree Dragons,\" aka: panther chameleons.", google_analytics: "")
  userpath7 = File.join(Rails.root, 'app', "assets", "images", "eda10c4a6d87deac69415dbe0f447363_original.jpg")
  user7.profile_url.attach(io: File.open(userpath7), filename: "eda10c4a6d87deac69415dbe0f447363_original.jpg")
  user7.save
  project7 = Project.new(duration: 0, limit: false, user_id: user7.id, country: "the United States", title: "Galaxy Girls: Illustrated Constellations", description: "A beautifully detailed art book filled with 31 astrology and constellation based art work by Lyfe Illustration", pledge_amt: 0, eta: nil, shipping: "", city: "Ventura", state: "CA", funding_goal: 7500, category_id: categories[0].id, subcategory: "Illustration", challenges: "")
  projectpath7 = File.join(Rails.root, 'app', "assets", "images", "05afadadeb0222c204e4dccd80bf31c5_original.png")
  project7.image_url.attach(io: File.open(projectpath7), filename: "05afadadeb0222c204e4dccd80bf31c5_original.png")
  project7.save
  user8 = User.new(name: "PvP Online", email: "pvponline@gmail.com", password: "starwars", biography: "PvP Online is an Eisner and Harvey award winning comic created by cartoonist Scott Kurtz. First appearing online May 4th, 1998 it has become one of the most prominent and longest running pop-culture related webcomics on the internet.", google_analytics: "")
  userpath8 = File.join(Rails.root, 'app', "assets", "images", "fe3c47da90bb8f71bc1e6c6bb6966ec5_original.jpg")
  user8.profile_url.attach(io: File.open(userpath8), filename: "fe3c47da90bb8f71bc1e6c6bb6966ec5_original.jpg")
  user8.save
  project8 = Project.new(duration: 0, limit: false, user_id: user8.id, country: "the United States", title: "PvP Definitive Edition 20th Anniversary Collection", description: '9 volumes with over 2,500 pages in deluxe 12"x10" oversized hardcover format collecting all 20 Years of PvP comics.', pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: 75000, category_id: categories[1].id, subcategory: "Webcomics", challenges: "")
  projectpath8 = File.join(Rails.root, 'app', "assets", "images", "e4e7bbd041416787ffc9dc010460b2ec_original.jpg")
  project8.image_url.attach(io: File.open(projectpath8), filename: "e4e7bbd041416787ffc9dc010460b2ec_original.jpg")
  project8.save
  user9 = User.new(name: "Mythic Games, Inc.", email: "mythicgamesinc@gmail.com", password: "starwars", biography: "We are a relatively new company, though one with almost a century of games industry experience among our staff. This is the first Kickstarter campaign we have done on our own - the previous one was one of our designs: Mythic Battles: Pantheon, Kickstarted in collaboration with Monolith. This proved very popular, with 13,635 happy backers. At Mythic Games, we aim to make games that are so attractive that you don’t want to leave them on the shelf, and so much fun to play that you don’t want to put them back. This process starts with brilliant designers, artists, and sculptors, goes through intense public testing, and arrives here, on Kickstarter. And even this is not the end of the development process. We see a Kickstarter campaign as a collaborative event, not just a shop window. We want you to give your feedback, and we are happy to listen. That is the route to the best games in the world!", google_analytics: "")
  userpath9 = File.join(Rails.root, 'app', "assets", "images", "659d6858b1f5fb59d53c05aa3cf42769_original.png")
  user9.profile_url.attach(io: File.open(userpath9), filename: "659d6858b1f5fb59d53c05aa3cf42769_original.png")
  user9.save
  project9 = Project.new(duration: 0, limit: false, user_id: user9.id, country: "the United States", title: "Reichbusters: Projekt Vril", description: "Aliens! Mutants! Weird science! Gather your Heroes to smash the Nazis in this cooperative action-adventure board game for 1-4 players.", pledge_amt: 0, eta: nil, shipping: "", city: "Newark", state: "DE", funding_goal: 100000, category_id: categories[8].id, subcategory: nil, challenges: "")
  projectpath9 = File.join(Rails.root, 'app', "assets", "images", "1c67faa6a069410393fd6a289b82aff9_original.jpg")
  project9.image_url.attach(io: File.open(projectpath9), filename: "1c67faa6a069410393fd6a289b82aff9_original.jpg")
  project9.save
  user10 = User.new(name: "Labyrinth", email: "labyrinth@gmail.com", password: "starwars", biography: "A boy with a dream to make video games.", google_analytics: "")
  userpath10 = File.join(Rails.root, 'app', "assets", "images", "6fcd624d088bdd668f919ce6ef538cd9_original.png")
  user10.profile_url.attach(io: File.open(userpath10), filename: "6fcd624d088bdd668f919ce6ef538cd9_original.png")
  user10.save
  project10 = Project.new(duration: 0, limit: false, user_id: user10.id, country: "New Zealand", title: "Aethyr", description: "Aethyr is an Open World 2D Action Adventure game set in a world ruined by an arcane apocalypse inspired by the golden age of RPGs.", pledge_amt: 0, eta: nil, shipping: "", city: "Prague", state: "Czech Republic", funding_goal: 15000, category_id: categories[8].id, subcategory: "Video Games", challenges: "")
  projectpath10 = File.join(Rails.root, 'app', "assets", "images", "81c149b136b579ad58e721ba14392b63_original.png")
  project10.image_url.attach(io: File.open(projectpath10), filename: "81c149b136b579ad58e721ba14392b63_original.png")
  project10.save
  user11 = User.new(name: "Triton Noir", email: "tritonnoir@gmail.com", password: "starwars", biography: "Triton Noir is an independent studio creating and publishing board games. Founded in 2014, we are located in Montréal.", google_analytics: "")
  userpath11 = File.join(Rails.root, 'app', "assets", "images", "b6d2a438f01bf4167f12a3fe7898c7fe_original.png")
  user11.profile_url.attach(io: File.open(userpath11), filename: "b6d2a438f01bf4167f12a3fe7898c7fe_original.png")
  user11.save
  project11 = Project.new(duration: 0, limit: false, user_id: user11.id, country: "Canada", title: "Assassin's Creed®: Brotherhood of Venice", description: "The story driven cooperative miniatures board game in the Assassin's Creed® universe", pledge_amt: 0, eta: nil, shipping: "", city: "Montreal", state: "Canada", funding_goal: 97704, category_id: categories[8].id, subcategory: "Tabletop Games", challenges: "")
  projectpath11 = File.join(Rails.root, 'app', "assets", "images", "9db8ced04389262d3e9d2ca1d2f66517_original.jpg")
  project11.image_url.attach(io: File.open(projectpath11), filename: "9db8ced04389262d3e9d2ca1d2f66517_original.jpg")
  project11.save
  user12 = User.new(name: "Aloft Studio", email: "aloftstudio@gmail.com", password: "starwars", biography: "Dennis Varvaro, age 31, does Art, Design, Writing, and Community media and Marketing for Aloft. He is a long-time student of Game Design Theory, and a life-long gamer with high reverence for the great productions of the early 90's.He has been involved in the indie game development and protoyping scene for around 7 years. He is the holder of a Professional-Bachelor's degree in Architecture from the University of Notre Dame with an emphasis on historic and traditional design. He has done work in classically-oriented architecture and landscape architecture firms on the US east coast and in Belgium, and has contributed to historic architectural survey work for the Prince's Foundation. He is also an adept at several commercial game engines and computer modeling suites, and an amateur musician and composer. Mark Harbaugh, age 31, does Code, Prototyping, Scripting, and Design for Aloft. He has been writing code for over 13 years now, and is fluent in C\#, C++, Javascript, HTML, PHP, Actionscript, GML, and Clojure, as well as Assembly and Machine language. For almost as long, he has been putting those skills to work prototyping around a dozen of his own game concepts. Mark pursues game development as a way of balancing his interest and proficiency in computer science with his strong creative impulse. He has a great love for the idea of games as a vehicle for storytelling and world building, as well as a careful hand for the minutia of a functional game structure. Mark is a long-time student of the mechanics of classic-era game engines, and their common solutions, and brings this knowledge to bear in invoking the feel of these great titles by learning from their solutions. Shannon Mason, (AKA \"Pongball\"), age 35, is joining us as a composer for Hazelnut Bastille. She is a lifelong composer who has worked on indie and casual mobile games for around 7 years. Shannon writes in a wide range of musical styles, but has found a particular niche in the romanticism of the 16 bit era. Through her close understanding of the writing techniques and character of the time, she has managed to create a sound which is a direct continuation of the lineage of the great 16 bit soundtracks, rather than merely an imitation of them. Samples of past work can be found at: https://soundcloud.com/pongball", google_analytics: "")
  userpath12 = File.join(Rails.root, 'app', "assets", "images", "5b6769c9e418a90c10c20751c870e6d9_original.png")
  user12.profile_url.attach(io: File.open(userpath12), filename: "5b6769c9e418a90c10c20751c870e6d9_original.png")
  user12.save
  project12 = Project.new(duration: 0, limit: false, user_id: user12.id, country: "the United States", title: "Hazelnut Bastille, a 16bit Indie Adventure", description: "Hazelnut Bastille is a topdown, Zelda-like ARPG, presented in a rigorously-period 16 bit style.", pledge_amt: 0, eta: nil, shipping: "", city: "Virginia Beach", state: "VA", funding_goal: 65000, category_id: categories[8].id, subcategory: "Video Games", challenges: "")
  projectpath12 = File.join(Rails.root, 'app', "assets", "images", "9b810a43a612858ddbc3c26304034874_original.png")
  project12.image_url.attach(io: File.open(projectpath12), filename: "9b810a43a612858ddbc3c26304034874_original.png")
  project12.save
  user13 = User.new(name: "Jonas Manke", email: "jonasmanke@gmail.com", password: "starwars", biography: "I am a 33 year old professional freelance character animator and work in the games- and filmindustry for more than a decade, raising 3 kids in a small city in Germany. Art, traditional or digital, plays a huge role in my life, I enjoy playing instruments and have a nerdy passion for science stuff like astronomy.", google_analytics: "")
  userpath13 = File.join(Rails.root, 'app', "assets", "images", "3aa20a27333fab69b104d7e57bf07b08_original.jpg")
  user13.profile_url.attach(io: File.open(userpath13), filename: "3aa20a27333fab69b104d7e57bf07b08_original.jpg")
  user13.save
  project13 = Project.new(duration: 0, limit: false, user_id: user13.id, country: "Germany", title: "OMNO - an atmospheric exploration and puzzle adventure", description: "A journey of discovery through an ancient world of wonders", pledge_amt: 0, eta: nil, shipping: "", city: "Bielefeld", state: "Germany", funding_goal: 36145, category_id: categories[8].id, subcategory: "Video Games", challenges: "")
  projectpath13 = File.join(Rails.root, 'app', "assets", "images", "88bb96ca3ab257a919755df3d24875ff_original.jpg")
  project13.image_url.attach(io: File.open(projectpath13), filename: "88bb96ca3ab257a919755df3d24875ff_original.jpg")
  project13.save
  user14 = User.new(name: "Andrea Donadio & Lisa Predko", email: "andreadonadiolisapredko@gmail.com", password: "starwars", biography: "Lisa Food is a gluten free cookbook that celebrates the shared aesthetic and best friendship shared by photographer Lisa Predko and artist representative Andrea Donadio. This project is a love story about food, photography, and 2 best friends.", google_analytics: "")
  userpath14 = File.join(Rails.root, 'app', "assets", "images", "7e025ed0ae018a800264b9a82c620513_original.jpg")
  user14.profile_url.attach(io: File.open(userpath14), filename: "7e025ed0ae018a800264b9a82c620513_original.jpg")
  user14.save
  project14 = Project.new(duration: 0, limit: false, user_id: user14.id, country: "the United States", title: "Lisa Food Vol. 1 - a gluten free vegetarian cookbook", description: "A collaboration between BFF's Lisa & Andy - Lisa Food is a collection of delicious GF recipes and incredible conceptual photography! :)", pledge_amt: 0, eta: nil, shipping: "", city: "Chicago", state: "IL", funding_goal: 8000, category_id: categories[7].id, subcategory: "Cookbooks", challenges: "")
  projectpath14 = File.join(Rails.root, 'app', "assets", "images", "00d2bf95a707475dc3df944f8612cb4d_original.jpg")
  project14.image_url.attach(io: File.open(projectpath14), filename: "00d2bf95a707475dc3df944f8612cb4d_original.jpg")
  project14.save
  user15 = User.new(name: "Kosan Travel Co.", email: "kosantravelco@gmail.com", password: "starwars", biography: "We are Kosan Travel Co., we design and produce the best clothing, gear and accessories for world travel. We believe that travel can effect positive change by inspiring new perspectives about the world you live in, and that the more you travel, the better off the world will be. We also know that the better prepared you are, the more you will be able to enjoy the experience. So, we’ve set out to build the best products for those who travel the world, and our mission is to help our travellers prepare for their journey.", google_analytics: "")
  userpath15 = File.join(Rails.root, 'app', "assets", "images", "8a0bc6d2f0152f9656ed340b42e03588_original.png")
  user15.profile_url.attach(io: File.open(userpath15), filename: "8a0bc6d2f0152f9656ed340b42e03588_original.png")
  user15.save
  project15 = Project.new(duration: 0, limit: false, user_id: user15.id, country: "Canada", title: "The Kosan Go Travel Dress", description: "Lightweight, odour blocking, wrinkle resistant and adjustable, the Go Travel Dress is packed with 14 travel-friendly features!", pledge_amt: 0, eta: nil, shipping: "", city: "Vancouver", state: "Canada", funding_goal: 11273, category_id: categories[5].id, subcategory: "Apparel", challenges: "")
  projectpath15 = File.join(Rails.root, 'app', "assets", "images", "e05d0215fb76bdad3ff957733f5112ba_original.jpg")
  project15.image_url.attach(io: File.open(projectpath15), filename: "e05d0215fb76bdad3ff957733f5112ba_original.jpg")
  project15.save
  user16 = User.new(name: "Crowd Cookware", email: "crowdcookware@gmail.com", password: "starwars", biography: "Cooking is love made edible. For the love of cooking, we have come up with a brand name that brings us together: Crowd Cookware. With this, we can kick-start Crowd Cookware like traditional pirates. We are sailing a new trade route that doesn’t stop at the big brands’ route. This campaign is just the beginning of a bigger adventure for us: if we sail on the right course, then we can take things even further. Together we can do everything. For example, a multifunctional cast-iron frying pan for slow-cooked casseroles. Premium quality stainless steel blades that are comfortable to use. And kitchen electronics that make cooking a lot easier.", google_analytics: "")
  userpath16 = File.join(Rails.root, 'app', "assets", "images", "39a9fc0024ea26c0abb2a12f25b83245_original.png")
  user16.profile_url.attach(io: File.open(userpath16), filename: "39a9fc0024ea26c0abb2a12f25b83245_original.png")
  user16.save
  project16 = Project.new(duration: 0, limit: false, user_id: user16.id, country: "Luxembourg", title: "Blackbeard cookware set: chef-grade, nonstick and nonscratch", description: "A new hack. A complete cookware set of the chef’s essentials. Based on our crowd’s wishes. For a fair price.", pledge_amt: 0, eta: nil, shipping: "", city: "Tilburg", state: "Netherlands", funding_goal: 45182, category_id: categories[7].id, subcategory: nil, challenges: "")
  projectpath16 = File.join(Rails.root, 'app', "assets", "images", "3f6e8771ed6448290eea8382192a7766_original.jpg")
  project16.image_url.attach(io: File.open(projectpath16), filename: "3f6e8771ed6448290eea8382192a7766_original.jpg")
  project16.save
  user17 = User.new(name: "Amy Nazer", email: "amynazer@gmail.com", password: "starwars", biography: "Aspiring mad scientist making flavor extracts for cooking, baking, and cocktails", google_analytics: "")
  userpath17 = File.join(Rails.root, 'app', "assets", "images", "5ce61e93e85f95c482c5ac81a1ede208_original.jpg")
  user17.profile_url.attach(io: File.open(userpath17), filename: "5ce61e93e85f95c482c5ac81a1ede208_original.jpg")
  user17.save
  project17 = Project.new(duration: 0, limit: false, user_id: user17.id, country: "the United States", title: "A Holiday Cocktail Kit from Woodward Extract Co.", description: "Spice up your home bar with new winter flavors from Woodward Extract Co.", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: 2000, category_id: categories[7].id, subcategory: "Drinks", challenges: "")
  projectpath17 = File.join(Rails.root, 'app', "assets", "images", "0a979dea7d2229cd87c2503b761165e8_original.jpg")
  project17.image_url.attach(io: File.open(projectpath17), filename: "0a979dea7d2229cd87c2503b761165e8_original.jpg")
  project17.save
  user18 = User.new(name: "Joyce Zhu", email: "joycezhu@gmail.com", password: "starwars", biography: "My mother and I make all-natural milk chews, milk-based chewy snacks influenced by an Asian treat my mother grew up eating. We love traveling, discovering good food, and hiking.", google_analytics: "")
  userpath18 = File.join(Rails.root, 'app', "assets", "images", "fcd159c55045a764cb4e4a48cf72ce04_original.png")
  user18.profile_url.attach(io: File.open(userpath18), filename: "fcd159c55045a764cb4e4a48cf72ce04_original.png")
  user18.save
  project18 = Project.new(duration: 0, limit: false, user_id: user18.id, country: "the United States", title: "Natural Milk Chews: tastes like candy, performs like a bar.", description: "Healthy, snack-able candy exists! Subtly sweet with more than 10 essential vitamins, 4g protein per serving, and just 6 ingredients.", pledge_amt: 0, eta: nil, shipping: "", city: "Lansdale", state: "PA", funding_goal: 2500, category_id: categories[7].id, subcategory: "Small Batch", challenges: "")
  projectpath18 = File.join(Rails.root, 'app', "assets", "images", "a7f86ad6b26a394c6a4b92409295186e_original.png")
  project18.image_url.attach(io: File.open(projectpath18), filename: "a7f86ad6b26a394c6a4b92409295186e_original.png")
  project18.save
  user19 = User.new(name: "Gustaf Fjelstrom", email: "gustaffjelstrom@gmail.com", password: "starwars", biography: "Gustaf Fjelstrom is a San Francisco Bay Area bassist, composer and producer. As an independent artist focused on instrumental works, Gustaf composes, records and performs ambient, looping, electronic post-rock. As a founding member of the power-trio Maximum Indifference in the late ’90’s, Gustaf composed and performed a unique body of cinematic instrumental rock music. By 2009, Gustaf had completed his inaugural solo release, METAMESMERIC, which featured his live-looping approach on the bass cello. In 2015, Gustaf released INTENTION, a collection of ambient, down tempo, post-rock pieces. The music composed for INTENTION represents a full-spectrum approach, incorporating ambient textures, nostalgic washes of analog synth, layers of live drums and programmed rhythms, etherial vocals, and rich, luxurious bass guitar. To support the release of this album, one that is sure to establish Gustaf’s voice in the genre. INTENTION is an exploration of complex soundscapes composed to evoke a mature and layered musical narrative evocative of the many layered emotional and rational components that create intent and purpose in each of our lives. In 2016 Gustaf began writing and recording the follow-up to INTENTION. BY the fall he had amassed enough material for more that two albums. As the material organized itself into two groupings, there were a few tracks that didn’t quite fit with either grouping, so he released those on the EP DIAMETRIC in the fall of 2016. Gustaf quick turned his focus back to finishing off the first grouping and in March of 2016 it was completed. THE PERIPHERAL ARC: VOLUME I is the first in what will eventually be a three-album cycle. It continues on the trajectory of some of the higher energy moments of INTENTION, while delving deeper into the realms of ambient bass guitar, analog synths, and lush, etherial textures (and of course, massive regular bass!). THE PERIPHERAL ARC: VOLUME I is due out in August of 2017 on Vinyl, Compact Disc, and Digital.The album is the latest in Gustaf’s journey of musical composition that blends sound and emotion to create fundamental audio narratives.", google_analytics: "")
  userpath19 = File.join(Rails.root, 'app', "assets", "images", "c8094323daebcd3771cc175cbc30c2ea_original.jpeg")
  user19.profile_url.attach(io: File.open(userpath19), filename: "c8094323daebcd3771cc175cbc30c2ea_original.jpeg")
  user19.save
  project19 = Project.new(duration: 0, limit: false, user_id: user19.id, country: "the United States", title: "Codex Aegis : Volume II of the Peripheral Arc : Vinyl + CD", description: "A new album of instrumental ambient rock. Vinyl + CD + Digital", pledge_amt: 0, eta: nil, shipping: "", city: "San Jose", state: "CA", funding_goal: 5000, category_id: categories[10].id, subcategory: "Rock", challenges: "")
  projectpath19 = File.join(Rails.root, 'app', "assets", "images", "f43129a6bed7173f407cc36eba69afe0_original.jpg")
  project19.image_url.attach(io: File.open(projectpath19), filename: "f43129a6bed7173f407cc36eba69afe0_original.jpg")
  project19.save
  user20 = User.new(name: "Electric Six", email: "electricsix@gmail.com", password: "starwars", biography: "We are a rock band from Detroit, Michigan. Much as we might like to, we can't take you to a gay bar.", google_analytics: "")
  userpath20 = File.join(Rails.root, 'app', "assets", "images", "c4955c206519123821aea85dc6813f2e_original.jpeg")
  user20.profile_url.attach(io: File.open(userpath20), filename: "c4955c206519123821aea85dc6813f2e_original.jpeg")
  user20.save
  project20 = Project.new(duration: 0, limit: false, user_id: user20.id, country: "the United States", title: "Electric Six - Live In Liverpool", description: "A filmed concert DVD/BluRay/Digital version of Electric Six Live In Liverpool, England", pledge_amt: 0, eta: nil, shipping: "", city: "Detroit", state: "MI", funding_goal: 30000, category_id: categories[10].id, subcategory: nil, challenges: "")
  projectpath20 = File.join(Rails.root, 'app', "assets", "images", "6b093b468c9c6adaf0756f19f6ae7746_original.jpg")
  project20.image_url.attach(io: File.open(projectpath20), filename: "6b093b468c9c6adaf0756f19f6ae7746_original.jpg")
  project20.save
  user21 = User.new(name: "Tiffany Topol", email: "tiffanytopol@gmail.com", password: "starwars", biography: "Tiffany is a musician, writer, artist, and performer based in New York and Chicago. She works as a personal songwriter and as a composer for the screen, most recently receiving an Outstanding Original Score nomination (Indie Series Awards) and win (LA Webfest) for her work on the series Best Thing You'll Ever Do, available on Amazon Prime. Follow her daily dance and movement experiment on Instagram @movethefurniture.", google_analytics: "")
  userpath21 = File.join(Rails.root, 'app', "assets", "images", "f85ba491e896c62d31debd4539fd6ecf_original.png")
  user21.profile_url.attach(io: File.open(userpath21), filename: "f85ba491e896c62d31debd4539fd6ecf_original.png")
  user21.save
  project21 = Project.new(duration: 0, limit: false, user_id: user21.id, country: "the United States", title: "A Regenerative Pop Album Made by Womxn", description: "Tiffany Topol wants to put more womxn behind the scenes with her debut album - nearly 34 years in the making.", pledge_amt: 0, eta: nil, shipping: "", city: "Queens", state: "NY", funding_goal: 8500, category_id: categories[10].id, subcategory: nil, challenges: "")
  projectpath21 = File.join(Rails.root, 'app', "assets", "images", "9826a13e7ee48be908f7e8e16f35bf2b_original.jpeg")
  project21.image_url.attach(io: File.open(projectpath21), filename: "9826a13e7ee48be908f7e8e16f35bf2b_original.jpeg")
  project21.save
  user22 = User.new(name: "The Teacups", email: "theteacups@gmail.com", password: "starwars", biography: "The Teacups are a 4-part close-harmony folk and traditional music outfit! Their repertoire incorporates traditional songs from all over the UK and beyond, self-penned material and lots of joking around.", google_analytics: "")
  userpath22 = File.join(Rails.root, 'app', "assets", "images", "de9f1edb30b0095a2a108b50af5a0b44_original.jpg")
  user22.profile_url.attach(io: File.open(userpath22), filename: "de9f1edb30b0095a2a108b50af5a0b44_original.jpg")
  user22.save
  project22 = Project.new(duration: 0, limit: false, user_id: user22.id, country: "the United Kingdom", title: "The Teacups Third Studio Album", description: "An album of traditional and contemporary a capella folk music from close-harmony quartet The Teacups", pledge_amt: 0, eta: nil, shipping: "", city: "Newcastle upon Tyne", state: "UK", funding_goal: 8279, category_id: categories[10].id, subcategory: "Country & Folk", challenges: "")
  projectpath22 = File.join(Rails.root, 'app', "assets", "images", "5d9e2e74dac8a3d0d8242e6032be89f0_original.jpg")
  project22.image_url.attach(io: File.open(projectpath22), filename: "5d9e2e74dac8a3d0d8242e6032be89f0_original.jpg")
  project22.save
  user23 = User.new(name: "Blues Funeral Recordings", email: "bluesfuneralrecordings@gmail.com", password: "starwars", biography: "Blues Funeral Recordings is an independent label created by the founders of MeteorCity and Lowrider, with heavy/doom/stoner/psych releases from Domkraft, Howling Giant (2019), Lowrider (2019), and the groundbreaking PostWax project, an exclusive subscription series featuring releases from phenomenal bands like Elder, Daxma, Spotlights, Besvärjelsen, and Lowrider with mindblowing art and design.", google_analytics: "")
  userpath23 = File.join(Rails.root, 'app', "assets", "images", "121275afbf83ebcc73d60f6a32293b56_original.jpg")
  user23.profile_url.attach(io: File.open(userpath23), filename: "121275afbf83ebcc73d60f6a32293b56_original.jpg")
  user23.save
  project23 = Project.new(duration: 0, limit: false, user_id: user23.id, country: "the United States", title: "POSTWAX - A Curated Heavy Music Vinyl Subscription Series", description: "PostWax is a curated series of limited edition records from some of the best stoner metal, doom and heavy psych bands on the planet.", pledge_amt: 0, eta: nil, shipping: "", city: "Albuquerque", state: "NM", funding_goal: 9000, category_id: categories[10].id, subcategory: nil, challenges: "")
  projectpath23 = File.join(Rails.root, 'app', "assets", "images", "ebf7241f6b39cdb11c7b9e4994bd01e8_original.jpg")
  project23.image_url.attach(io: File.open(projectpath23), filename: "ebf7241f6b39cdb11c7b9e4994bd01e8_original.jpg")
  project23.save
  user24 = User.new(name: "Fortuna Media", email: "fortunamedia@gmail.com", password: "starwars", biography: "Initially established for TABULA IDEM and chiefly operated out of Seattle, WA by Mia \"Hye\" Mardikian, Fortuna Media seeks to produce unique, magical publishing with a focus on highlighting independent creator visions, and showing the talent of the diverse side of sexual, gender, cultural, and racial experiences in varying medias. EDITORS FOR ALMOST REAL: Jay Eaton has been harassing worms and pillbugs, wondering how organisms work and why, and using science to twist existing creatures into troubling new forms since childhood. Student of ecology and evolutionary biology, denizen of the California Bay area, and habitual world-builder; Jay continues draw made up animals and harrass bugs, but professionally this time. Server by day and typesetter by night, Mia \"Hye\" Mardikian (@explodinghye) is a queer graphic designer, editor, and administrator in the PNW with a taste for tea, tarot, and replying to as many emails as possible in one day. EIC of Fortuna Media that began with TABULA IDEM, they seek to create cohesive, collaborative works that give worthy frames to the beauty found in the art that graces their micropress' pages. Find them in the aether at explodinghye.com.", google_analytics: "")
  userpath24 = File.join(Rails.root, 'app', "assets", "images", "fbc3a5f889240c4a23bd44ecf0580f92_original.png")
  user24.profile_url.attach(io: File.open(userpath24), filename: "fbc3a5f889240c4a23bd44ecf0580f92_original.png")
  user24.save
  project24 = Project.new(duration: 0, limit: false, user_id: user24.id, country: "the United States", title: "Almost Real: A Speculative Biology Zine (Vol. 2 • FLIGHT)", description: "Take off into the world of speculative biology with Almost Real's second volume focused on flight, powered by 15 amazing contributors.", pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: 16000, category_id: categories[12].id, subcategory: "Anthologies", challenges: "")
  projectpath24 = File.join(Rails.root, 'app', "assets", "images", "b7f7d1e91229f804bf3300200f312d7b_original.png")
  project24.image_url.attach(io: File.open(projectpath24), filename: "b7f7d1e91229f804bf3300200f312d7b_original.png")
  project24.save
  user25 = User.new(name: "Sven Sauer", email: "svensauer@gmail.com", password: "starwars", biography: "SVEN SAUER (Initiator Unseen Westeros) Sven Sauer lives in Berlin and has been working as a digital artist for international film productions for 15 years. Among others, he was involved in productions like Hugo Cabret, Atomic Blonde, Oblivion, and Lars von Triers’ Melancholia. His works were awarded several times, including an Emmy. Since the 2nd season he has been working for Game of Thrones. He is responsible for the development of Dragonstone, Harrenhal, and others.", google_analytics: "")
  userpath25 = File.join(Rails.root, 'app', "assets", "images", "dd8e3cc2a2276e9b923fb7029ce4bfe5_original.jpg")
  user25.profile_url.attach(io: File.open(userpath25), filename: "dd8e3cc2a2276e9b923fb7029ce4bfe5_original.jpg")
  user25.save
  project25 = Project.new(duration: 0, limit: false, user_id: user25.id, country: "Germany", title: "Unseen Westeros Artbook - authorized by George R.R. Martin", description: "40 original `Game of Thrones` artists teamed up for 3 years to create an artbook about the pre-story of `A Song of Ice and Fire`.", pledge_amt: 0, eta: nil, shipping: "", city: "Berlin", state: "Germany", funding_goal: 28239, category_id: categories[12].id, subcategory: "Art Books", challenges: "")
  projectpath25 = File.join(Rails.root, 'app', "assets", "images", "1c3ba14b03a3be3abc67e2c407326b24_original.jpg")
  project25.image_url.attach(io: File.open(projectpath25), filename: "1c3ba14b03a3be3abc67e2c407326b24_original.jpg")
  project25.save
  user27 = User.new(name: "Micheline Pitt", email: "michelinepitt@gmail.com", password: "starwars", biography: "Micheline Pitt is a designer, artist, and filmmaker, best known for her fashion lines Vixen by Micheline Pitt and La Femme en Noire.", google_analytics: nil)
  userpath27 = File.join(Rails.root, 'app', "assets", "images", "089b6c7d51de6f70724530a9eb51654e_original.jpg")
  user27.profile_url.attach(io: File.open(userpath27), filename: "089b6c7d51de6f70724530a9eb51654e_original.jpg")
  user27.save
  project27 = Project.new(duration: 0, limit: false, user_id: user27.id, country: "the United States", title: "GRUMMY", description: "A gothic fantasy film and children's book featuring legendary creature effects artist, KEVIN YAGHER.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: 95000, category_id: categories[6].id, subcategory: "Fantasy", challenges: "")
  projectpath27 = File.join(Rails.root, 'app', "assets", "images", "a6bea493e617e59dc755eafefa23cf9c_original.jpg")
  project27.image_url.attach(io: File.open(projectpath27), filename: "a6bea493e617e59dc755eafefa23cf9c_original.jpg")
  project27.save
  user28 = User.new(name: "Yasha Levine", email: "yashalevine@gmail.com", password: "starwars", biography: 'Yasha Levine is a Russian-born American author and investigative journalist. He came to the United States as a refugee and grew up in San Francisco. The New Yorker magazine praised his last book — Surveillance Valley: The Secret Military History of the Internet — as "forceful" and "salutary." He has reported extensively from both the United States and the former Soviet Union. His work has been published and profiled in The Baffler, Wired Magazine, The Nation, Slate, Penthouse, The New York Observer, Playboy, Not Safe For Work Corp, Alternet, Vanity Fair, The Verge, MSNBC and many others.', google_analytics: "")
  userpath28 = File.join(Rails.root, 'app', "assets", "images", "d88286e4ad9bf5eb2f083a8e79dc72ca_original.jpg")
  user28.profile_url.attach(io: File.open(userpath28), filename: "d88286e4ad9bf5eb2f083a8e79dc72ca_original.jpg")
  user28.save
  project28 = Project.new(duration: 0, limit: false, user_id: user28.id, country: "the United States", title: "Pistachio Wars: Killing California for a Snack Food", description: "A groundbreaking documentary about Beverly Hills billionaires, marketing madness, water privatization, and...war with Iran.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: 50000, category_id: categories[6].id, subcategory: "Documentary", challenges: "")
  projectpath28 = File.join(Rails.root, 'app', "assets", "images", "0fddc7258e9daf3116f5f225ddb4b690_original.jpg")
  project28.image_url.attach(io: File.open(projectpath28), filename: "0fddc7258e9daf3116f5f225ddb4b690_original.jpg")
  project28.save
  user29 = User.new(name: "WG Film", email: "wgfilm@gmail.com", password: "starwars", biography: "WG Film produces high quality documentaries for broadcast and cinema. The earlier films of WG Film were often local stories with global relevance. With time, the films have become more and more international and WG Film is today considered one of the most successful companies in the genre of author- driven documentary film in Sweden and internationally. Selected films: Becoming Zlatan, Bikes vs Cars, Big Boys Gone Bananas!*, Love Always, Carolyn, BANANAS!*, Burma VJ (co-production), I Bought A Rainforest.", google_analytics: "")
  userpath29 = File.join(Rails.root, 'app', "assets", "images", "5948fe741affee116595afeffeb0b9e5_original.jpeg")
  user29.profile_url.attach(io: File.open(userpath29), filename: "5948fe741affee116595afeffeb0b9e5_original.jpeg")
  user29.save
  project29 = Project.new(duration: 0, limit: false, user_id: user29.id, country: "Sweden", title: "PUSH - YOU CAN'T LIVE HERE ANYMORE", description: "Documentary exploring why it's become so expensive to live in our cities, feat Leilani Farha, UN Special Rapporteur to Adequate Housing", pledge_amt: 0, eta: nil, shipping: "", city: "Malmö", state: "Sweden", funding_goal: 50000, category_id: categories[6].id, subcategory: "Documentary", challenges: "")
  projectpath29 = File.join(Rails.root, 'app', "assets", "images", "37c6f5d10f6f8f01756ccf37c86fd357_original.jpg")
  project29.image_url.attach(io: File.open(projectpath29), filename: "37c6f5d10f6f8f01756ccf37c86fd357_original.jpg")
  project29.save
  user30 = User.new(name: "Shawn Pryor", email: "superflux@gmail.com", password: "starwars", biography: "Shawn Pryor is the creator and co-writer of the all-ages graphic novel mystery series CASH & CARRIE, writer of KENTUCKY KAIJU, and writer and co-creator of the football/drama series FORCE. He is one of the co-founders of Action Lab Entertainment and currently serves as their President of Creative Relations. In his free time, he enjoys reading, cooking, listening to streaming music playlists, and talking about why Zack from the Mighty Morphin Power Rangers is the greatest Black superhero of all-time.", google_analytics: nil)
  userpath30 = File.join(Rails.root, 'app', "assets", "images", "a07448b1b6343b523c291198cd026ccb_original.jpg")
  user30.profile_url.attach(io: File.open(userpath30), filename: "a07448b1b6343b523c291198cd026ccb_original.jpg")
  user30.save
  project30 = Project.new(duration: 0, limit: false, user_id: user30.id, country: "Ireland", title: "CASH & CARRIE - BOOK TWO: SUMMER SLEUTHS!", description: "Middle school detectives Dallas Cash & Inez Carrie attempt to do some summer sleuthing in their BRAND NEW graphic novel!", pledge_amt: 0, eta: nil, shipping: "", city: "Lexington", state: "KY", funding_goal: 8000, category_id: categories[1].id, subcategory: "Graphic Novels", challenges: "")
  projectpath30 = File.join(Rails.root, 'app', "assets", "images", "26353cd6cfb032a8239ca56388ccb303_original.png")
  project30.image_url.attach(io: File.open(projectpath30), filename: "26353cd6cfb032a8239ca56388ccb303_original.png")
  project30.save
  user31 = User.new(name: "Natalija Vekic", email: "natalijavekic@gmail.com", password: "starwars", biography: "Natalija Vekic is a screenwriter and director. She won a Golden Gate Award at the San Francisco International Film Festival for her short film Lost & Found, and was the recipient of a Princess Grace Award in film. Natalija is a graduate of the UCLA MFA screenwriting program where she was awarded the Executive Board Award Fellowship and was one of eight writers selected to work with Academy Award-winning screenwriter Dustin Lance Black in a feature screenwriting seminar. She researched and wrote Jane, which was subsequently invited to participate in the Film Independent Screenwriting Lab and selected as an honoree in the Writers Guild of America West's Feature Access Diversity Project. A short documentary she co-directed about Pauline Kael, Ed & Pauline, premièred at the Telluride Film Festival and a short portrait of Academy Award nominated filmmaker Sam Green is currently streaming on Adobe Create Magazine. Natalija is Bosnian and Serbian and immigrated to Chicago when she was six years old. She’s convinced that not being able to speak English didn’t just ostracize her from her classmates, but taught her to be a keen observer and sparked her love of storytelling. Dreaming up stories was a way to regain her voice and make sense of her new home. Natalija writes and adapts screenplays for film and television about true or historic events from the perspective of outsiders, misfits and women who shape history, but are often forgotten. She loves to tackle complex and gritty female characters. She is working on “Bop City,” a dramatic pilot about the smoky, sexy, seedy and vibrant Jazz scene of 1950s San Francisco Fillmore district, which was destroyed by redevelopment.", google_analytics: "")
  userpath31 = File.join(Rails.root, 'app', "assets", "images", "0057e043b034d9de868c7d89e18caf48_original.jpg")
  user31.profile_url.attach(io: File.open(userpath31), filename: "0057e043b034d9de868c7d89e18caf48_original.jpg")
  user31.save
  project31 = Project.new(duration: 0, limit: false, user_id: user31.id, country: "the United States", title: '"Jane" a short Film', description: "It's 1969. There is no Roe v. Wade. Teresa and Josie are part of an underground group who help women access safe abortions.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: 25000, category_id: categories[6].id, subcategory: "Drama", challenges: "")
  projectpath31 = File.join(Rails.root, 'app', "assets", "images", "44eda5a59396f69d225e3aff5130114e_original.png")
  project31.image_url.attach(io: File.open(projectpath31), filename: "44eda5a59396f69d225e3aff5130114e_original.png")
  project31.save
  user32 = User.new(name: "AlexHubbell", email: "alexhubbell@gmail.com", password: "starwars", biography: "Alex is an artist and educator, but most of all, an animal lover. Her work uses natural elements to showcase the beauty of creatures great and small.", google_analytics: "")
  userpath32 = File.join(Rails.root, 'app', "assets", "images", "72be69defe1aa41b21f98ee38427e345_original.jpg")
  user32.profile_url.attach(io: File.open(userpath32), filename: "72be69defe1aa41b21f98ee38427e345_original.jpg")
  user32.save
  project32 = Project.new(duration: 0, limit: false, user_id: user32.id, country: "the United States", title: "12 Months of Indigo Cats", description: "Bring twelve Watercolor Felines into your home, and get a bonus Mini Print for Christmas! Each calendar is handmade by the artist.", pledge_amt: 0, eta: nil, shipping: "", city: "Columbia", state: "MO", funding_goal: 2500, category_id: categories[0].id, subcategory: "Painting", challenges: "")
  projectpath32 = File.join(Rails.root, 'app', "assets", "images", "76b87493caab5f3ea34bc839b6e4ddef_original.jpg")
  project32.image_url.attach(io: File.open(projectpath32), filename: "76b87493caab5f3ea34bc839b6e4ddef_original.jpg")
  project32.save
  user33 = User.new(name: "April Soetarman", email: "aprilsoetarman@gmail.com", password: "starwars", biography: "Designer and artist based in Seattle and New York. Making architecture, art, objects, sounds, installations, trouble. Also behind WeirdSideProjects.com and the Museum of Almost Realities (AlmostRealities.org).", google_analytics: "")
  userpath33 = File.join(Rails.root, 'app', "assets", "images", "1c3929e4d6464331461593ee89436b96_original.jpg")
  user33.profile_url.attach(io: File.open(userpath33), filename: "1c3929e4d6464331461593ee89436b96_original.jpg")
  user33.save
  project33 = Project.new(duration: 0, limit: false, user_id: user33.id, country: "the United States", title: "ATTENTION: YOU ARE WONDERFUL and other street sign art", description: "A guerrilla art series of unexpected sayings on metal street signs, installed in public spaces. Now you can get a sign for yourself!", pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: 7200, category_id: categories[0].id, subcategory: "Installations", challenges: "")
  projectpath33 = File.join(Rails.root, 'app', "assets", "images", "a9edfcda4f8efed3d591b3a2e9fbb41a_original.jpg")
  project33.image_url.attach(io: File.open(projectpath33), filename: "a9edfcda4f8efed3d591b3a2e9fbb41a_original.jpg")
  project33.save
  user35 = User.new(name: "Marco Klahold", email: "marcoklahold@gmail.com", password: "starwars", biography: "My name is Marco Klahold, 23 years old and currently based in Cologne, Germany. I am passionate about two things. Traveling and capturing moments. This started 4 years ago when I began a trip around the world and continues to this day.", google_analytics: nil)
  userpath35 = File.join(Rails.root, 'app', "assets", "images", "53ae10e82c5ed7e2778cc4177b82efc4_original.jpg")
  user35.profile_url.attach(io: File.open(userpath35), filename: "53ae10e82c5ed7e2778cc4177b82efc4_original.jpg")
  user35.save
  project35 = Project.new(duration: 0, limit: false, user_id: user35.id, country: "Germany", title: "\"Tagebuch eines Streuners\" by Marco Klahold (Photobook)", description: "My second book. 240 pages filled with photographs and thoughts of the past two years.", pledge_amt: 0, eta: nil, shipping: "", city: "Cologne", state: "Germany", funding_goal: 10166, category_id: categories[11].id, subcategory: "Photobooks", challenges: "")
  projectpath35 = File.join(Rails.root, 'app', "assets", "images", "ce1368517f3801c614dad6ab235fd976_original.jpg")
  project35.image_url.attach(io: File.open(projectpath35), filename: "ce1368517f3801c614dad6ab235fd976_original.jpg")
  project35.save
  user36 = User.new(name: "Shannon Shird", email: "shannonshird@gmail.com", password: "starwars", biography: "Shannon Shird​ is an organizer, writer and filmmaker from Baltimore, MD living Brooklyn, NY. She has served as Impact Producer for award-winning documentary film, Black and Cuba since 2013. Shannon has curated and participated in artistic and activist programming that engages social justice movements in NYC, Cuba, South Africa and Japan, She is also a writer with several essays and blog posts published by a variety of outlets. In addition to writing and producing BodyMore Shannon is producing Bloom a documentary short currently in post-production. She holds a master of arts in international affairs from The New School and a bachelor of arts in history from Smith College.", google_analytics: "")
  userpath36 = File.join(Rails.root, 'app', "assets", "images", "320f89c54ef2add6e6852918e4846bc8_original.jpeg")
  user36.profile_url.attach(io: File.open(userpath36), filename: "320f89c54ef2add6e6852918e4846bc8_original.jpeg")
  user36.save
  project36 = Project.new(duration: 0, limit: false, user_id: user36.id, country: "the United States", title: "BodyMore at the Intersection of #BlackLivesMatter & #MeToo", description: "Carrie returns to Baltimore to protest police violence but a reunion at a party ignites a series of betrayals that complicate her fight", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: 20000, category_id: categories[6].id, subcategory: "Shorts", challenges: "")
  projectpath36 = File.join(Rails.root, 'app', "assets", "images", "b8a3e4255f4624d96c0dd34b8f9b9219_original.jpeg")
  project36.image_url.attach(io: File.open(projectpath36), filename: "b8a3e4255f4624d96c0dd34b8f9b9219_original.jpeg")
  project36.save
  user37 = User.new(name: "Jack Harries & Geordie Cargill", email: "jackharriesgeordiecargill@gmail.com", password: "starwars", biography: "Chief Directors and Editors.", google_analytics: "")
  userpath37 = File.join(Rails.root, 'app', "assets", "images", "1cf804fd3c2258150597e1c05fcaf532_original.jpg")
  user37.profile_url.attach(io: File.open(userpath37), filename: "1cf804fd3c2258150597e1c05fcaf532_original.jpg")
  user37.save
  project37 = Project.new(duration: 0, limit: false, user_id: user37.id, country: "Australia", title: "Heavy Volume III.", description: "The third instalment in our ongoing journal series 'Heavy'— A compendium of contemporary photography focusing on the conversation.", pledge_amt: 0, eta: nil, shipping: "", city: "Sydney", state: "AU", funding_goal: 12656, category_id: categories[11].id, subcategory: "Photobooks", challenges: "")
  projectpath37 = File.join(Rails.root, 'app', "assets", "images", "573346cf29d8556cf46d08f19da4e676_original.jpg")
  project37.image_url.attach(io: File.open(projectpath37), filename: "573346cf29d8556cf46d08f19da4e676_original.jpg")
  project37.save
  user38 = User.new(name: "Joseph Perez", email: "josephperez@gmail.com", password: "starwars", biography: "Born and raised in West phoenix, born 1986. Having my first experience with art as a child, being involved with a school mural project opened my mind to a whole new way of thinking about life. Throughout my childhood growing up never loosing the desire to create art, at times I just never had the opportunities before me. For me art became a voice and self identity. As an artist I strive to communicate to society, my community, and people with different backgrounds. I communicate through my visual art, performance, and conceptual art. Art is about creating the conversations visually and mentally with the subject matter I present. Art cannot deny the environment that it is in, so I continue to paint who I am, what I see and what my thoughts reside in. I continue to stay a student of life, push myself to be innovative and relevant with my art so it can have meaning to those that experience it. Everything to me is art, however you view life, can be seen as art, so I have no preference to which medium is used. Having my first small showing downtown Phoenix in 2007, since then I have progressed to doing solo shows at established galleries and museums. In 2010, I developed my “Sound in Color” art, where I showcased the art of B-Boying (Break Dancing), I orchestrated for a live DJ to play music while the dancers responded to beats. This concept was discovered by Independent Curators International to be showcased in a traveling exhibit “The Peoples Biennial”. The show traveled from Portland, Arizona, North Carolina, South Dakota and Pennsylvania. Being able to highlight my dance with my art expression was a great achievement for me. In 2011 I was recognized for my attributes to Phoenix by the Phoenix New Times magazine’s Big Brain Awards which are given out once a year to individuals adding to their city. As a child I was influenced by the art, so for me to give back was always a dream. In 2011 with the collaboration of Arizona State University and Phoenix Center for the Arts we developed “The Rise Project”, which was a vision I had developed and implanted with the two organizations. For me art is a voice to speak to the people and hopefully I can utilize the voice to inspire and motivate.", google_analytics: "")
  userpath38 = File.join(Rails.root, 'app', "assets", "images", "ace684374cbb57215a7459b71b4807ea_original.jpg")
  user38.profile_url.attach(io: File.open(userpath38), filename: "ace684374cbb57215a7459b71b4807ea_original.jpg")
  user38.save
  project38 = Project.new(duration: 0, limit: false, user_id: user38.id, country: "the United States", title: "Chicago Sentrock Studio & Creative Workshop Space", description: "Art studio, creative workspace & platform for open studios / workshops for student interns and creatives.", pledge_amt: 0, eta: nil, shipping: "", city: "Chicago", state: "IL", funding_goal: 7000, category_id: categories[0].id, subcategory: "Painting", challenges: "")
  projectpath38 = File.join(Rails.root, 'app', "assets", "images", "d6881893fca1a2807dc86574a4000bc5_original.jpeg")
  project38.image_url.attach(io: File.open(projectpath38), filename: "d6881893fca1a2807dc86574a4000bc5_original.jpeg")
  project38.save
  user39 = User.new(name: "Playeress", email: "playeress@gmail.com", password: "starwars", biography: "Women powered board games. Meaningful, inspiring and durable.", google_analytics: "")
  userpath39 = File.join(Rails.root, 'app', "assets", "images", "832ee7b21cf37feea778f4b80bf97f9a_original.png")
  user39.profile_url.attach(io: File.open(userpath39), filename: "832ee7b21cf37feea778f4b80bf97f9a_original.png")
  user39.save
  project39 = Project.new(duration: 0, limit: false, user_id: user39.id, country: "Austria", title: "WHO'S SHE? - a guessing game about extraordinary women!", description: "A wooden guessing game featuring strong, mighty women. It's all about their adventures not their looks! Made to inspire. Made to last.", pledge_amt: 0, eta: nil, shipping: "", city: "Warsaw", state: "Poland", funding_goal: 16943, category_id: categories[4].id, subcategory: "Product Design", challenges: "")
  projectpath39 = File.join(Rails.root, 'app', "assets", "images", "62047465f9d62694af3fb8896cb0c952_original.jpg")
  project39.image_url.attach(io: File.open(projectpath39), filename: "62047465f9d62694af3fb8896cb0c952_original.jpg")
  project39.save
  user40 = User.new(name: "Solgaard Design", email: "solgaarddesign@gmail.com", password: "starwars", biography: "We're a team of passionate people designing and developing products at the intersection of Fashion and Technology. Join us in igniting a revolution of smart and sustainable solutions. Using recycled ocean plastics and solar solutions to make everyday products that do good for planet and you.", google_analytics: "")
  userpath40 = File.join(Rails.root, 'app', "assets", "images", "b252b7227e96f49c0d75068969e61fd7_original.png")
  user40.profile_url.attach(io: File.open(userpath40), filename: "b252b7227e96f49c0d75068969e61fd7_original.png")
  user40.save
  project40 = Project.new(duration: 0, limit: false, user_id: user40.id, country: "the United States", title: "Ocean Plastics Daypack by Solgaard: The Upcycled Backpack", description: "A backpack made from recycled plastic recovered from the ocean. Designed for everyday carry, including laptop and other tech gear.", pledge_amt: 0, eta: nil, shipping: "", city: "New York", state: "NY", funding_goal: 25000, category_id: categories[4].id, subcategory: "Product Design", challenges: "")
  projectpath40 = File.join(Rails.root, 'app', "assets", "images", "eb78346a66642eff0ce1ea9b8ef7c60d_original.jpg")
  project40.image_url.attach(io: File.open(projectpath40), filename: "eb78346a66642eff0ce1ea9b8ef7c60d_original.jpg")
  project40.save
  user41 = User.new(name: "Andrew Sanderson", email: "andrewsanderson@gmail.com", password: "starwars", biography: "After 6 years working as an aircraft propulsion technician and 10 years running my own business as a gas turbine engineer, I have made the switch to product development after successfully taking my first product from idea to being stocked in shops world-wide. With my experience navigating everything from product design to prototyping, 3-D modeling, sourcing oversees manufacturing and overseeing quality control, my strong engineering background and technical eye bring valuable experience and entrepreneurial skills to product creation and production. When I'm not on Kickstarter, I continue to develop products for my brand Modern Fuel and collaborate with others to create new and inventive products and services.", google_analytics: "")
  userpath41 = File.join(Rails.root, 'app', "assets", "images", "9ce3607e194a0f4d6eaaae0cc2859208_original.jpg")
  user41.profile_url.attach(io: File.open(userpath41), filename: "9ce3607e194a0f4d6eaaae0cc2859208_original.jpg")
  user41.save
  project41 = Project.new(duration: 0, limit: false, user_id: user41.id, country: "the United States", title: "A Minimal Pen That Will Last You a Lifetime", description: "A sleek, minimal, solid metal, American-made retractable pen designed to last a lifetime", pledge_amt: 0, eta: nil, shipping: "", city: "Austin", state: "TX", funding_goal: 8000, category_id: categories[4].id, subcategory: "Product Design", challenges: "")
  projectpath41 = File.join(Rails.root, 'app', "assets", "images", "357b908922f2d8828b0c951d70dfbb28_original.jpeg")
  project41.image_url.attach(io: File.open(projectpath41), filename: "357b908922f2d8828b0c951d70dfbb28_original.jpeg")
  project41.save
  user42 = User.new(name: "Wyatt J Hesemeyer", email: "wyattjhesemeyer@gmail.com", password: "starwars", biography: "Wyatt J Hesemeyer is a visual artists based out of northern California. His primary mediums are tattoo art, and pen and ink.", google_analytics: "")
  userpath42 = File.join(Rails.root, 'app', "assets", "images", "c28b3647351aa685766eafb66f425455_original.jpg")
  user42.profile_url.attach(io: File.open(userpath42), filename: "c28b3647351aa685766eafb66f425455_original.jpg")
  user42.save
  project42 = Project.new(duration: 0, limit: false, user_id: user42.id, country: "the United States", title: "The Line Defined Tarot", description: "The Line Defined Tarot is a unique, black work rendition of the traditional 78 card deck. Drawing inspiration from alchemy & nature", pledge_amt: 0, eta: nil, shipping: "", city: "Santa Cruz", state: "CA", funding_goal: 12500, category_id: categories[12].id, subcategory: "Art Books", challenges: "")
  projectpath42 = File.join(Rails.root, 'app', "assets", "images", "18c9d33f5cf851cd4ced858c161de518_original.jpg")
  project42.image_url.attach(io: File.open(projectpath42), filename: "18c9d33f5cf851cd4ced858c161de518_original.jpg")
  project42.save
  user43 = User.new(name: "John Betancourt", email: "johnbetancourt@gmail.com", password: "starwars", biography: "John Betancourt runs Wildside Press, an independent publishing company. He is also a best-selling science fiction and fantasy writer, and an award-winning mystery writer.", google_analytics: "")
  userpath43 = File.join(Rails.root, 'app', "assets", "images", "bad800552efa4bd4d85f69f381e8a161_original.jpg")
  user43.profile_url.attach(io: File.open(userpath43), filename: "bad800552efa4bd4d85f69f381e8a161_original.jpg")
  user43.save
  project43 = Project.new(duration: 0, limit: false, user_id: user43.id, country: "the United States", title: "Frozen Hell: The Book That Inspired The Thing", description: 'A newly discovered, expanded version of the classic sci-fi story "Who Goes There?" (THE THING) by John W. Campbell, Jr.', pledge_amt: 0, eta: nil, shipping: "", city: "Rockville", state: "MD", funding_goal: 1000, category_id: categories[12].id, subcategory: "Fiction", challenges: "")
  projectpath43 = File.join(Rails.root, 'app', "assets", "images", "d8f48be82465ab2309bcbdeef5e303a6_original.jpg")
  project43.image_url.attach(io: File.open(projectpath43), filename: "d8f48be82465ab2309bcbdeef5e303a6_original.jpg")
  project43.save
  user44 = User.new(name: "Ben Tibbetts", email: "bentibbetts@gmail.com", password: "starwars", biography: "Ben Tibbetts is a professional adventure photographer, artist and IFMGA mountain guide. He specialises in working in remote and cold environments and has climbed and skied new routes in Antarctica, Greenland, Kyrgyzstan and the Alps.", google_analytics: "")
  userpath44 = File.join(Rails.root, 'app', "assets", "images", "916af299e76bc328aafc5810deaa4d96_original.jpg")
  user44.profile_url.attach(io: File.open(userpath44), filename: "916af299e76bc328aafc5810deaa4d96_original.jpg")
  user44.save
  project44 = Project.new(duration: 0, limit: false, user_id: user44.id, country: "the United Kingdom", title: "ALPENGLOW - A book of high Alpine inspiration", description: "ALPENGLOW is a beautiful and inspiring book of photographs, drawings and stories from the highest peaks of the European Alps", pledge_amt: 0, eta: nil, shipping: "", city: "London", state: "UK", funding_goal: 6000, category_id: categories[12].id, subcategory: nil, challenges: "")
  projectpath44 = File.join(Rails.root, 'app', "assets", "images", "4a1bec07816f66c5338274bc09e6a1df_original.jpg")
  project44.image_url.attach(io: File.open(projectpath44), filename: "4a1bec07816f66c5338274bc09e6a1df_original.jpg")
  project44.save
  user45 = User.new(name: "Paper Hat, Inc.", email: "paperhatinc@gmail.com", password: "starwars", biography: "Paper Hat is a print studio and gallery run by Chicago printers Elizabeth Kovach and Ryan Duggan.", google_analytics: "")
  userpath45 = File.join(Rails.root, 'app', "assets", "images", "33718439736dd20af4142d532902915d_original.jpg")
  user45.profile_url.attach(io: File.open(userpath45), filename: "33718439736dd20af4142d532902915d_original.jpg")
  user45.save
  project45 = Project.new(duration: 0, limit: false, user_id: user45.id, country: "the United States", title: "Paper Hat", description: "Opening a print studio and art gallery in Chicago's Logan Square neighborhood.", pledge_amt: 0, eta: nil, shipping: "", city: "Chicago", state: "IL", funding_goal: 10000, category_id: categories[0].id, subcategory: nil, challenges: "")
  projectpath45 = File.join(Rails.root, 'app', "assets", "images", "861ce10f634eac181e4a45f0e91c0665_original.jpg")
  project45.image_url.attach(io: File.open(projectpath45), filename: "861ce10f634eac181e4a45f0e91c0665_original.jpg")
  project45.save
  user46 = User.new(name: "Cowboy Cricket Farms", email: "cowboycricketfarms@gmail.com", password: "starwars", biography: 'Cowboy Cricket Farms is a small family business in Belgrade, MT. Started by Kathy Rolin in 2016, our farm grows crickets for human consumption. Kathy served as a Gunners Mate in the U.S. Coast Guard for 6 years at multiple small boat stations as well as MSST Los Angeles/Long Beach. Originally from Harrison, MI, Kathy enjoys spending time in the beautiful forests of Montana that she now calls home. She is a Dietetics student at Montana State University and first came up with the idea for Cowboy Cricket Farms after hearing Ian Towes speak about his film "Bugs on the Menu" at the annual MSU Bug Buffet. James is originally from Long Beach, CA and served in the US Coast Guard Reserves at multiple small boat stations and at MSST LA/LB with Kathy. He was also activated for Deep Water Horizon where he was assigned as an arial observer. James currently serves as a medical Sergeant in the Montana Army National Guard in Belgrade, MT with the 1-163rd CAB. James studied economics at MSU and now conducts research on crickets at the university as well as serving as the marketing manager for the farm. James and Kathy have 3 beautiful children, Elise, Olive, and Liam. The family lives in Bozeman, MT and is very active in the local business community.', google_analytics: "")
  userpath46 = File.join(Rails.root, 'app', "assets", "images", "1b92d9803ed55fb605c3cbab5ef74e16_original.jpg")
  user46.profile_url.attach(io: File.open(userpath46), filename: "1b92d9803ed55fb605c3cbab5ef74e16_original.jpg")
  user46.save
  project46 = Project.new(duration: 0, limit: false, user_id: user46.id, country: "the United States", title: "Cowboy Cricket Jumpers made with SuperCrickets", description: "SuperSustainable SuperCrickets for SuperHumans! Three brand new flavors of Jumpers - and we want you to get them first!", pledge_amt: 0, eta: nil, shipping: "", city: "Bozeman", state: "MT", funding_goal: 5000, category_id: categories[7].id, subcategory: nil, challenges: "")
  projectpath46 = File.join(Rails.root, 'app', "assets", "images", "982b484895c2608a08a9998d737acbcb_original.png")
  project46.image_url.attach(io: File.open(projectpath46), filename: "982b484895c2608a08a9998d737acbcb_original.png")
  project46.save
  user47 = User.new(name: "Brooklyn Ballet", email: "brooklynballet@gmail.com", password: "starwars", biography: 'Brooklyn Ballet Brooklyn Ballet is a not for profit dance company dedicated to artistic excellence and education, reflecting Brooklyn\'s diverse communities.', google_analytics: "")
  userpath47 = File.join(Rails.root, 'app', "assets", "images", "d9569f2433c1f3e7293dd4453dc178b6_original.gif")
  user47.profile_url.attach(io: File.open(userpath47), filename: "d9569f2433c1f3e7293dd4453dc178b6_original.gif")
  user47.save
  project47 = Project.new(duration: 0, limit: false, user_id: user47.id, country: "the United States", title: "The Brooklyn Nutcracker at Kings Theatre", description: "Be a part of historic firsts! The Brooklyn Nutcracker honors world-wide dance traditions, providing accessibility to the art of dance.", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: 30000, category_id: categories[3].id, subcategory: "Performances", challenges: "")
  projectpath47 = File.join(Rails.root, 'app', "assets", "images", "60c7d787a6a6d3e2ce49e3c6453a11d5_original.jpg")
  project47.image_url.attach(io: File.open(projectpath47), filename: "60c7d787a6a6d3e2ce49e3c6453a11d5_original.jpg")
  project47.save
  user48 = User.new(name: "Mistaya Hemingway", email: "mistayahemingway@gmail.com", password: "starwars", biography: 'Originally from Alberta, I received my training from the National Ballet School before moving to Europe to dance in Stuttgart, Germany. My classical dance career started with the Dutch National Ballet in Amsterdam where I danced roles in works by Georges Balanchine, Martha Graham, Twyla Tharp and Rudi van Dantzig. I returned to Canada a few years later to briefly dance with Alberta Ballet before finally separating from classical ballet to dance as a soloist for La La La Human Steps in Montreal. At La La La, I participated in both on stage and on screen production of Amelia, Les Boreades and Amjad. In between La La La Human Steps productions, I studied acting in New York City and danced with Hubbard Street Dance Chicago in works by Ohad Naharin, William Forsythe, Nacho Duato and Lar Lubovitch. I returned to Montreal to dance with LaLaLa and then, after the birth of my son in 2009, I completed at degree in Urban Planning at Concordia University. Currently, I am working in Montreal as a freelance dancer on creative collaborations and independent film projects. I\'ve had the chance to work on music videos, visuals and live performance for artists like Justin Timberlake, Karneef, Islands, Alice Glass and Patrick Watson. On the other hand, I am also developing urban projects that bring the city and arts together. It\'s an exciting, fertile time. All lights are green.', google_analytics: "")
  userpath48 = File.join(Rails.root, 'app', "assets", "images", "658daffb23f4d93a8ab444d4c5eb5848_original.jpg")
  user48.profile_url.attach(io: File.open(userpath48), filename: "658daffb23f4d93a8ab444d4c5eb5848_original.jpg")
  user48.save
  project48 = Project.new(duration: 0, limit: false, user_id: user48.id, country: "Canada", title: "ThroughMe", description: "ThroughMe is a dance film that reflects on the #MeToo movement. What do the past and future look like now that the gaze has shifted?", pledge_amt: 0, eta: nil, shipping: "", city: "Montreal", state: "Canada", funding_goal: 8968, category_id: categories[3].id, subcategory: nil, challenges: "")
  projectpath48 = File.join(Rails.root, 'app', "assets", "images", "cfce4b835094a978c32ec751caa9924e_original.jpg")
  project48.image_url.attach(io: File.open(projectpath48), filename: "cfce4b835094a978c32ec751caa9924e_original.jpg")
  project48.save
  user49 = User.new(name: "Sarah Council Dance Projects", email: "sarahcouncildanceprojects@gmail.com", password: "starwars", biography: 'Sarah Council is a choreographer and teacher based in New York City. She founded Sarah Council Dance Projects, a project-based dance company, in 2007 as a platform to explore her choreographic ideas. Her choreography has been showcased in NYC at the Riverside Theatre, The 92nd St. Y, The Flea Theater, The Secret Theater, The LABA Theater, Merce Cunningham Studio, Solar One, Dance Theater Workshop , Triskelion Arts, Topaz Arts, Times Square Arts Center, Green Space, Dance New Amsterdam, and Gowanus Arts. She also works in the New York City Public Schools as a teaching artist for Together in Dance, teaching creative movement and modern dance to children of all ages. Before relocating to New York City, Sarah resided in Washington DC where her choreography was presented at the Jack Guidone Theater and Dance Place and funded by a grant from the DC Commission on the Arts and Humanities. The Washington Post described her choreography as being "...uncommonly honest and expressive". While in DC she was also able to dance with DC choreographers/companies Citydance Ensemble, Deborah Riley Dance Projects, Sharon Mansur/Impact, Gesel Mason, Cynthia Word, and Helanius Wilkens, as well as teach in many studios and public schools throughout the region. Sarah holds a BFA in modern dance performance from the University of Oklahoma. While at OU she received several awards for excellence in performance and choreography and worked with teachers and choreographers, Denise Vale, Ko Yukihiro, Derrick Minter, and Earl Mosley performing nationally and internationally.', google_analytics: "")
  userpath49 = File.join(Rails.root, 'app', "assets", "images", "3f25cb513444a1c3f4f6c79eebf6a879_original.jpg")
  user49.profile_url.attach(io: File.open(userpath49), filename: "3f25cb513444a1c3f4f6c79eebf6a879_original.jpg")
  user49.save
  project49 = Project.new(duration: 0, limit: false, user_id: user49.id, country: "the United States", title: "A History of Dirt", description: "A new dance that considers how the past affects the present and investigates how our bodies hold our history.", pledge_amt: 0, eta: nil, shipping: "", city: "Charlotte", state: "NC", funding_goal: 2000, category_id: categories[3].id, subcategory: nil, challenges: "")
  projectpath49 = File.join(Rails.root, 'app', "assets", "images", "d90ab5b3f8efaffa45cf26356aac2f2a_original.jpg")
  project49.image_url.attach(io: File.open(projectpath49), filename: "d90ab5b3f8efaffa45cf26356aac2f2a_original.jpg")
  project49.save
  user50 = User.new(name: "Montserrat Rodríguez", email: "montserratrodriguez@gmail.com", password: "starwars", biography: 'Nacida en la Ciudad de México, Montserrat Rodríguez, comienza sus estudios de danza en 2007 en el Centro Cultural México Oriente de donde se gradúa en 2013 como bailarina de Danza Árabe, su formación estuvo a cargo de los maestros Fe Yarazeth y Maraia en danza árabe, Grisel Silva, Héctor Liceaga, Angélica Bazán, Jesús Alcántara, Rogelio Landa y Yolanda Barón en danza clásica y contemporánea, David Sánchez y Ricardo Cossío en danza jazz; yoga y contrología con Angélica Bazán, estudió además ritmología árabe con el músico Oswaldo “el Beryewe” Brandan, esta diversidad en su educación también la acredita como una de las mejores y más versátiles bailarinas de danza árabe de nuestro país. Ha cursado seminarios y clases especiales con las más importantes figuras del bellydance a nivel mundial: Saida Heloú, Maraia, Yousef Constantino, Amir Thaleb, Jillina, Sharon Kihara, Alla Kushnir, Munique Neith, entre muchos otros. Como bailarina ha sido solista de la compañía semiprofesional Marhaba al Najam; en 2102 fue la ganadora del concurso Alimoda en la categoría solista; En 2014 fue seleccionada para participar como bailarina en el espectáculo internacional Alice in Wonderland, de la compañía Bellydance Evolution de Jillina Carlano para la temporada en Ciudad de México, Berlín, Roma, Berna y Dornbirn. En 2014 es cofundadora de Balibbah Escuela de Danza, donde se desempeña como la investigadora principal del desarrollo de la Técnica Balibbah. Es además bailarina y Director Ejecutivo de la compañía Balibbah Dance-Theater de México.', google_analytics: "")
  userpath50 = File.join(Rails.root, 'app', "assets", "images", "8a314b8f79bf9d24fdbd7947860c36dd_original.jpg")
  user50.profile_url.attach(io: File.open(userpath50), filename: "8a314b8f79bf9d24fdbd7947860c36dd_original.jpg")
  user50.save
  project50 = Project.new(duration: 0, limit: false, user_id: user50.id, country: "Mexico", title: "Funciones didácticas: arte de la comunidad para la comunidad", description: "Buscamos apoyo para poder presentar nuestras obras en espacios alternativos de la Ciudad de México", pledge_amt: 0, eta: nil, shipping: "", city: "Mexico", state: "Mexico", funding_goal: 2735, category_id: categories[3].id, subcategory: "Spaces", challenges: "")
  projectpath50 = File.join(Rails.root, 'app', "assets", "images", "fce9f1e823cb8e33b68ab803abb153c8_original.jpeg")
  project50.image_url.attach(io: File.open(projectpath50), filename: "fce9f1e823cb8e33b68ab803abb153c8_original.jpeg")
  project50.save
  user51 = User.new(name: "Through the Eyes of Children", email: "throughtheeyesofchildren@gmail.com", password: "starwars", biography: 'Through the Eyes of Children\'s mission is to teach photography to vulnerable children and empower them to share their stories with the world.', google_analytics: "")
  userpath51 = File.join(Rails.root, 'app', "assets", "images", "726d10b3267f718d2242496608ad47e2_original.png")
  user51.profile_url.attach(io: File.open(userpath51), filename: "726d10b3267f718d2242496608ad47e2_original.png")
  user51.save
  project51 = Project.new(duration: 0, limit: false, user_id: user51.id, country: "the United States", title: "Through the Eyes of Children \"Camera Kids\"", description: "Through the Eyes of Children teaches photography to vulnerable children and empowers them to share their stories with the world.", pledge_amt: 0, eta: nil, shipping: "", city: "New York", state: "NY", funding_goal: 30000, category_id: categories[11].id, subcategory: "People", challenges: "")
  projectpath51 = File.join(Rails.root, 'app', "assets", "images", "7324f038e39b7d3f6e52c3a5fdab2295_original.jpg")
  project51.image_url.attach(io: File.open(projectpath51), filename: "7324f038e39b7d3f6e52c3a5fdab2295_original.jpg")
  project51.save
  user52 = User.new(name: "Laura Alvarez", email: "lauraalvarez@gmail.com", password: "starwars", biography: 'Mexican photographer, 27 years old.', google_analytics: "")
  userpath52 = File.join(Rails.root, 'app', "assets", "images", "24bea08aee7d47ed4066a1561a20aded_original.jpg")
  user52.profile_url.attach(io: File.open(userpath52), filename: "24bea08aee7d47ed4066a1561a20aded_original.jpg")
  user52.save
  project52 = Project.new(duration: 0, limit: false, user_id: user52.id, country: "Mexico", title: "ILLUSIONS EMPIRE", description: "Photographic exhibition on Mexican Drag Queen culture", pledge_amt: 0, eta: nil, shipping: "", city: "Monterrey", state: "Mexico", funding_goal: 1492, category_id: categories[11].id, subcategory: "People", challenges: "")
  projectpath52 = File.join(Rails.root, 'app', "assets", "images", "2caf28389e82cbbbc128f71832965179_original.jpg")
  project52.image_url.attach(io: File.open(projectpath52), filename: "2caf28389e82cbbbc128f71832965179_original.jpg")
  project52.save
  user53 = User.new(name: "Alternate History Comics Inc.", email: "alternatehistorycomicsinc@gmail.com", password: "starwars", biography: 'Alternate History Comics Inc. (AH Comics) is an award-winning small press publishing company in Toronto, Canada. Founded in 2011, AH Comics has produced comic books and graphic novels with some of the biggest names in the industry. AH Comics is owned and operated by Andy Stanleigh, an award-winning producer, director, designer and french toast enthusiast. For more information about the company and a full list of our titles please visit www.ahcomics.com', google_analytics: "")
  userpath53 = File.join(Rails.root, 'app', "assets", "images", "cc07f925f734bb1ed095206a03977e89_original.jpeg")
  user53.profile_url.attach(io: File.open(userpath53), filename: "cc07f925f734bb1ed095206a03977e89_original.jpeg")
  user53.save
  project53 = Project.new(duration: 0, limit: false, user_id: user53.id, country: "Canada", title: "MOONSHOT The Indigenous Comics Collection VOLUME 3!", description: "MOONSHOT Volume 3 awakens into realities unseen & unknown in this exciting follow up to the award-winning Indigenous Comics Collection!", pledge_amt: 0, eta: nil, shipping: "", city: "Oakville", state: "Canada", funding_goal: 44840, category_id: categories[1].id, subcategory: "Anthologies", challenges: "")
  projectpath53 = File.join(Rails.root, 'app', "assets", "images", "ad9042f6be4a44dc69a9e3410bfbffad_original.jpg")
  project53.image_url.attach(io: File.open(projectpath53), filename: "ad9042f6be4a44dc69a9e3410bfbffad_original.jpg")
  project53.save
  user54 = User.new(name: "Anadia", email: "anadia@gmail.com", password: "starwars", biography: 'Hello! I am a 24 year old artist in Southern Oregon. I\'m a bit of a nerd and I love fantasy, mythology, video games, books, and anime. After three years working as a personal support worker and working with a disabled child, I lost my client and thus lost my job in May. Somehow I have somehow managed to keep myself afloat as a full time artist since. I sell my art at comic cons all over the west coast and also publish a webcomic called Knights of Asherah. Art is my passion and my dream. It\'s what I do when I wake up in the morning and the last thing I do before I go to bed. Aside from art I read a lot of books, play violin and piano, and eating chocolate.', google_analytics: "")
  userpath54 = File.join(Rails.root, 'app', "assets", "images", "3024ea777bf2b7457d2d23995a4f7d92_original.jpg")
  user54.profile_url.attach(io: File.open(userpath54), filename: "3024ea777bf2b7457d2d23995a4f7d92_original.jpg")
  user54.save
  project54 = Project.new(duration: 0, limit: false, user_id: user54.id, country: "the United States", title: "Knights of Asherah Volume 1 Fantasy Graphic Novel", description: "Magic, romance, dark secrets and Gods that are supposed to be long dead... what could possibly go wrong?", pledge_amt: 0, eta: nil, shipping: "", city: "Klamath Falls", state: "OR", funding_goal: 3000, category_id: categories[1].id, subcategory: "Graphic Novels", challenges: "")
  projectpath54 = File.join(Rails.root, 'app', "assets", "images", "f469d024d65313f91c53afbf62b92c44_original.jpg")
  project54.image_url.attach(io: File.open(projectpath54), filename: "f469d024d65313f91c53afbf62b92c44_original.jpg")
  project54.save
  user55 = User.new(name: "Omar Morales", email: "omarmorales@gmail.com", password: "starwars", biography: 'Hopefully you will relate to this: I\'m just a kid from the 80s that grew up on comic books, video games and Star Wars, and I\'m trying to live the dream. I have a very young family and I want to make them proud, but also leave them a legacy that they can continue into the future. The beauty about published works of fiction is that they can live forever, and be adapted and re-adapted long after the original creator has died and gone to creator heaven. This is another chance to get my voice out into the world and leave a lasting impression and contribution. This is how I want to leave my mark, and you can help me do it.', google_analytics: "")
  userpath55 = File.join(Rails.root, 'app', "assets", "images", "05b6b2d43954072958dcda09b1e26c3a_original.jpeg")
  user55.profile_url.attach(io: File.open(userpath55), filename: "05b6b2d43954072958dcda09b1e26c3a_original.jpeg")
  user55.save
  project55 = Project.new(duration: 0, limit: false, user_id: user55.id, country: "the United States", title: "Moon Girl graphic novel - Retro futurism! Ray guns! PEW PEW!", description: "A rated-PG graphic novel based on the golden age, public domain character. This timeless Sci-Fi story is now reimagined by Omar Morales", pledge_amt: 0, eta: nil, shipping: "", city: "Oakland", state: "CA", funding_goal: 4000, category_id: categories[1].id, subcategory: "Graphic Novels", challenges: "")
  projectpath55 = File.join(Rails.root, 'app', "assets", "images", "3a3a89ae970e94ee8e9ae77689d4d5a8_original.png")
  project55.image_url.attach(io: File.open(projectpath55), filename: "3a3a89ae970e94ee8e9ae77689d4d5a8_original.png")
  project55.save
  user56 = User.new(name: "Paul du Coudray", email: "paulducoudray@gmail.com", password: "starwars", biography: 'Paul is the founder of Studio Mascot, a collective working at the crossroads of story and art.', google_analytics: "")
  userpath56 = File.join(Rails.root, 'app', "assets", "images", "448f311a4d1dffa6d57795d86e1ca777_original.png")
  user56.profile_url.attach(io: File.open(userpath56), filename: "448f311a4d1dffa6d57795d86e1ca777_original.png")
  user56.save
  project56 = Project.new(duration: 0, limit: false, user_id: user56.id, country: "the United States", title: "\"The Pipers\" Graphic Novel", description: "The Pipers is a graphic novel adaptation of a science fiction story by Philip K. Dick. The full-color, hardcover book will be 92 pages.", pledge_amt: 0, eta: nil, shipping: "", city: "Portland", state: "OR", funding_goal: 4800, category_id: categories[1].id, subcategory: "Graphic Novels", challenges: "")
  projectpath56 = File.join(Rails.root, 'app', "assets", "images", "ac525da3da11ed6dc91d2745f280c730_original.png")
  project56.image_url.attach(io: File.open(projectpath56), filename: "ac525da3da11ed6dc91d2745f280c730_original.png")
  project56.save
  user57 = User.new(name: "Kizer Nix", email: "kizernix@gmail.com", password: "starwars", biography: 'Writer.', google_analytics: "")
  userpath57 = File.join(Rails.root, 'app', "assets", "images", "bcd68581119e4147acb49d6042ce9797_original.jpeg")
  user57.profile_url.attach(io: File.open(userpath57), filename: "bcd68581119e4147acb49d6042ce9797_original.jpeg")
  user57.save
  project57 = Project.new(duration: 0, limit: false, user_id: user57.id, country: "the United States", title: "South Pole Santa Claus", description: "Get rid of the Shelf Elf! A New SANTA CLAUS is here to scare Naughty Children to be Nice... BE GOOD OR BEWARE!", pledge_amt: 0, eta: nil, shipping: "", city: "Houston", state: "TX", funding_goal: 5000, category_id: categories[1].id, subcategory: "Graphic Novels", challenges: "")
  projectpath57 = File.join(Rails.root, 'app', "assets", "images", "10c8143257f1e445f07e436a418c614a_original.png")
  project57.image_url.attach(io: File.open(projectpath57), filename: "10c8143257f1e445f07e436a418c614a_original.png")
  project57.save
  user58 = User.new(name: "Daniel Arroyo", email: "danielarroyo@gmail.com", password: "starwars", biography: 'Daniel Brook es un artista gráfico especializado en pintura digital y cómic. La mayor parte de su trabajo está influenciado por los escritos de H. P. Lovecraft y el trabajo de los artistas plásticos Zdzisław Beksiński y H. R. Giger. Dani ha trabajado en ilustración editorial y como artista conceptual para videojuegos independientes. http://danibrook.com/', google_analytics: "")
  userpath58 = File.join(Rails.root, 'app', "assets", "images", "bb385ef54fb98e776ec086e462df9620_original.jpg")
  user58.profile_url.attach(io: File.open(userpath58), filename: "bb385ef54fb98e776ec086e462df9620_original.jpg")
  user58.save
  project58 = Project.new(duration: 0, limit: false, user_id: user58.id, country: "Mexico", title: "Sangre sobre Innsmouth", description: "\"Blood over Innsmouth\" is a digital comic by Unusual Scripts, That narrates the events previous to \"Shadow over Innsmouth\"", pledge_amt: 0, eta: nil, shipping: "", city: "Mexico City", state: "Mexico", funding_goal: 509, category_id: categories[1].id, subcategory: "Graphic Novels", challenges: "")
  projectpath58 = File.join(Rails.root, 'app', "assets", "images", "5b850903047d50a3181abe56af034b6c_original.png")
  project58.image_url.attach(io: File.open(projectpath58), filename: "5b850903047d50a3181abe56af034b6c_original.png")
  project58.save
  user59 = User.new(name: "Christopher Hastings", email: "christopherhastings@gmail.com", password: "starwars", biography: 'Christopher Hastings is a comedian and comic book writer known for DR. MCNINJA, GWENPOOL, and ADVENTURE TIME.', google_analytics: "")
  userpath59 = File.join(Rails.root, 'app', "assets", "images", "93ffe70a9b837154a5b982b5a35131b0_original.jpg")
  user59.profile_url.attach(io: File.open(userpath59), filename: "93ffe70a9b837154a5b982b5a35131b0_original.jpg")
  user59.save
  project59 = Project.new(duration: 0, limit: false, user_id: user59.id, country: "the United States", title: "DRACULAGATE", description: "A graphic novel about diplomats and draculas from DR. MCNINJA's Christopher Hastings, and SWAN BOY's Branson Reese.", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: 40000, category_id: categories[1].id, subcategory: "Graphic Novels", challenges: "")
  projectpath59 = File.join(Rails.root, 'app', "assets", "images", "6fbf0c00ef7c21ea08e548c189c65c04_original.jpg")
  project59.image_url.attach(io: File.open(projectpath59), filename: "6fbf0c00ef7c21ea08e548c189c65c04_original.jpg")
  project59.save
  user60 = User.new(name: "Joey Donaldson", email: "joeydonaldson@gmail.com", password: "starwars", biography: 'Joey Donaldson is a comic book writer from Toronto, Ontario. He writes comics about people, and feelings, and people with feelings. Also sometimes robots and magic and stuff.', google_analytics: "")
  userpath60 = File.join(Rails.root, 'app', "assets", "images", "0a8d1ae29f5a2a206f68608dc2e2c541_original.jpg")
  user60.profile_url.attach(io: File.open(userpath60), filename: "0a8d1ae29f5a2a206f68608dc2e2c541_original.jpg")
  user60.save
  project60 = Project.new(duration: 0, limit: false, user_id: user60.id, country: "Canada", title: "Bea, Haunted", description: "A graphic novel about a young woman and the ghosts that haunt her.", pledge_amt: 0, eta: nil, shipping: "", city: "Toronto", state: "Canada", funding_goal: 20500, category_id: categories[1].id, subcategory: "Graphic Novels", challenges: "")
  projectpath60 = File.join(Rails.root, 'app', "assets", "images", "436d67b4117f7b7d937f34eac0203bb5_original.png")
  project60.image_url.attach(io: File.open(projectpath60), filename: "436d67b4117f7b7d937f34eac0203bb5_original.png")
  project60.save
  user61 = User.new(name: "Label BREED", email: "labelbreed@gmail.com", password: "starwars", biography: 'LABEL/BREED is an initiative focused on the development of sustainable and innovative interior objects by establishing collaborations between designers and manufacturers. Our mission is to create opportunities for designers and manufacturers to connect and get the most out of their combined efforts. A joint search for innovative designs that are technically makeable and economically feasible and can validate the entire chain from waste stream to unused technical capacity. Stijn Roodnat, director of the Label, has a passion for the way things are made and believes that the manufacturing industry has the ability to create beautiful things with the help of talented designers for a better world.', google_analytics: "")
  userpath61 = File.join(Rails.root, 'app', "assets", "images", "51e63a9735e0d18578da399a23888a4b_original.jpg")
  user61.profile_url.attach(io: File.open(userpath61), filename: "51e63a9735e0d18578da399a23888a4b_original.jpg")
  user61.save
  project61 = Project.new(duration: 0, limit: false, user_id: user61.id, country: "the Netherlands", title: "The Recycled Carbon Chair", description: "The first chair of its kind to be created from indestructible waste", pledge_amt: 0, eta: nil, shipping: "", city: "Ampsterdam", state: "Netherlands", funding_goal: 31667, category_id: categories[4].id, subcategory: "Product Design", challenges: "")
  projectpath61 = File.join(Rails.root, 'app', "assets", "images", "a803ecf73fca07b8b6f11b7061b02968_original.png")
  project61.image_url.attach(io: File.open(projectpath61), filename: "a803ecf73fca07b8b6f11b7061b02968_original.png")
  project61.save
  user62 = User.new(name: "Phrozen Make", email: "phrozenmake@gmail.com", password: "starwars", biography: '“Phrozen” is the combination of “Photon” and “Frozen”. Phrozen creates high quality DLP/LCD 3D printing solutions to enable everyone to make his or her creation come to life since 2013. We managed the largest resin 3D printing group in Asia where thousands of users connect and support each other in DLP/LCD 3D printing.', google_analytics: "")
  userpath62 = File.join(Rails.root, 'app', "assets", "images", "aa9889062f05225d878af0f0af1f2df2_original.png")
  user62.profile_url.attach(io: File.open(userpath62), filename: "aa9889062f05225d878af0f0af1f2df2_original.png")
  user62.save
  project62 = Project.new(duration: 0, limit: false, user_id: user62.id, country: "Singapore", title: "Phrozen Transform｜The LCD 3D Printer that Lets You Dream Big", description: "Versatile and precise, Phrozen Transform’s changeable 13.3” & dual 5.5\" panels and ultra-stable 40 cm Z-axis will let you PRINT BIG.", pledge_amt: 0, eta: nil, shipping: "", city: "Taipei City", state: "Taiwan", funding_goal: 30000, category_id: categories[13].id, subcategory: "3D Printing", challenges: "")
  projectpath62 = File.join(Rails.root, 'app', "assets", "images", "5ca7e14b1fb839eafb7d383a607ac687_original.jpg")
  project62.image_url.attach(io: File.open(projectpath62), filename: "5ca7e14b1fb839eafb7d383a607ac687_original.jpg")
  project62.save
  user63 = User.new(name: "Cerambot", email: "cerambot@gmail.com", password: "starwars", biography: 'Cerambot is a professional team focusing on Ceramic 3D printing and has years of experience in designing and manufacturing. They’re on a mission to create and bring more fun to people!', google_analytics: "")
  userpath63 = File.join(Rails.root, 'app', "assets", "images", "464b6d162500924e162d98eb9ee8280b_original.jpg")
  user63.profile_url.attach(io: File.open(userpath63), filename: "464b6d162500924e162d98eb9ee8280b_original.jpg")
  user63.save
  project63 = Project.new(duration: 0, limit: false, user_id: user63.id, country: "Hong Kong", title: "CERAMBOT, The Most Affordable Ceramic 3D Printer", description: "Fast, accurate and easy to use, CERAMBOT makes your ideas take shape", pledge_amt: 0, eta: nil, shipping: "", city: "Jinan", state: "China", funding_goal: 10000, category_id: categories[13].id, subcategory: "3D Printing", challenges: "")
  projectpath63 = File.join(Rails.root, 'app', "assets", "images", "232748927685d08cd644995f3cf1e965_original.jpg")
  project63.image_url.attach(io: File.open(projectpath63), filename: "232748927685d08cd644995f3cf1e965_original.jpg")
  project63.save
  user64 = User.new(name: "Panda3D", email: "panda3d@gmail.com", password: "starwars", biography: 'Panda 3D is a professional team focusing on SLA 3D printing and has years of experience in designing and manufacturing. They’re on a mission to create and bring more fun to people!', google_analytics: "")
  userpath64 = File.join(Rails.root, 'app', "assets", "images", "57b85d1386e6654ac5730007ff893611_original.jpg")
  user64.profile_url.attach(io: File.open(userpath64), filename: "57b85d1386e6654ac5730007ff893611_original.jpg")
  user64.save
  project64 = Project.new(duration: 0, limit: false, user_id: user64.id, country: "Hong Kong", title: "Paladin, The Most Affordable All-Metal SLA 3D Printer", description: "High-resolution, auto-leveling, auto resin pump, and intuitive control. Paladin brings a new standard for consumer SLA 3D printer", pledge_amt: 0, eta: nil, shipping: "", city: "Shenzhen", state: "China", funding_goal: 50000, category_id: categories[13].id, subcategory: "3D Printing", challenges: "")
  projectpath64 = File.join(Rails.root, 'app', "assets", "images", "0dd9aff2bf9e0926892fd373a3e5ab65_original.jpg")
  project64.image_url.attach(io: File.open(projectpath64), filename: "0dd9aff2bf9e0926892fd373a3e5ab65_original.jpg")
  project64.save
  user65 = User.new(name: "Takuma Hirayama", email: "takumahirayama@gmail.com", password: "starwars", biography: 'I\'m a one of Makers. I want to change the world by open source hardware.', google_analytics: "")
  userpath65 = File.join(Rails.root, 'app', "assets", "images", "2f638e0a76070e9ee0697a654a8b8b54_original.jpg")
  user65.profile_url.attach(io: File.open(userpath65), filename: "2f638e0a76070e9ee0697a654a8b8b54_original.jpg")
  user65.save
  project65 = Project.new(duration: 0, limit: false, user_id: user65.id, country: "Japan", title: "Picam360-SurfaceWalker : Open Source Aquatic Drone", description: "The aquatic drone will allow you to experience \"remote snorkeling\" over extremely long distances with real-time panoramic video.", pledge_amt: 0, eta: nil, shipping: "", city: "Tokyo", state: "Japan", funding_goal: 8811, category_id: categories[13].id, subcategory: "3D Printing", challenges: "")
  projectpath65 = File.join(Rails.root, 'app', "assets", "images", "74fcf17846f04a4d3cbcfebd125d22fd_original.png")
  project65.image_url.attach(io: File.open(projectpath65), filename: "74fcf17846f04a4d3cbcfebd125d22fd_original.png")
  project65.save
  user66 = User.new(name: "Doc Shop Productions", email: "docshopproductions@gmail.com", password: "starwars", biography: 'Doc Shop is a Los Angeles-based production company that creates premium, documentary content. The company is helmed by multiple Emmy Award Winning and Executive Producer, Dan Partland. Alongside Partland, is Nicole Zien who brings her network experience and relationships. Together they lead a veteran team, creating and selling content, and working collaboratively with a spectrum of partners and clients including Netflix, CNN, National Geographic, A&E, History, Discovery, AMC, Turner, and Travel Channel, among others. The Doc Shop team has created dozens of critically acclaimed entertainment properties and hundreds of hours of compelling content. Doc Shop strives to tell authentic, insightful, well-crafted stories that spark curiosity, incite conversation, and entertain viewers on any platform. With a focus on engaging non-fiction formats and dramatic topic-driven narratives, Doc Shop has an active development slate of documentary series and films. They have joined forces with accomplished producer Art Horan to produce #UNFIT.', google_analytics: "")
  userpath66 = File.join(Rails.root, 'app', "assets", "images", "75569c91c2c603cebb856e12e3c1e186_original.png")
  user66.profile_url.attach(io: File.open(userpath66), filename: "75569c91c2c603cebb856e12e3c1e186_original.png")
  user66.save
  project66 = Project.new(duration: 0, limit: false, user_id: user66.id, country: "the United States", title: "#UNFIT: Malignant Narcissism comes to Washington D.C.", description: "Definitive analysis of Trump by top US mental health experts. Science. Truth. Duty to Warn. We ALL have an interest in this discussion.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: 54500, category_id: categories[6].id, subcategory: "Documentary", challenges: "")
  projectpath66 = File.join(Rails.root, 'app', "assets", "images", "36c7c48b4b9b14d227837371ceb499e6_original.png")
  project66.image_url.attach(io: File.open(projectpath66), filename: "36c7c48b4b9b14d227837371ceb499e6_original.png")
  project66.save
  user67 = User.new(name: "Emmanuel Cappellin", email: "emmanuelcappellin@gmail.com", password: "starwars", biography: 'Emmanuel est producteur associé à Pulp Films où il travaille sans relâche à la réalisation de "Quand on sait", son premier long-métrage documentaire destiné au grand écran. Après avoir étudié les sciences de l’environnement et le développement international à l’Université McGill puis la réalisation et la production audiovisuelle au Berkeley Digital Film Institute, il choisit le mode d\'expression documentaire pour explorer la relation entre les humains et leur planète. Il débute avec Frédéric Back, militant écologiste des premiers jours et réalisateur de films d’animation oscarisés, réalise ensuite plusieurs court-métrages, monte le documentaire To the Tar Sands de Jodie Martinson (2007, sélectionné au DOXA à Vancouver et au Festival International du Film de Calgary) et part en Chine produire et réaliser Thoughts & Reflections (2010, commande privée). Aussi chef opérateur prise de vue pour la télévision (ARTE, France3) et collaborateur régulier de Yann Arthus-Bertrand, il a réalisé des centaines d’interviews pour les films Témoins du Climat (2009, France5), Human (2015, sélection Mostra de Venise, sortie internationale cinéma, France2) et Woman (en production).', google_analytics: "")
  userpath67 = File.join(Rails.root, 'app', "assets", "images", "fc80bf55f32e5d80b54724970556729f_original.jpg")
  user67.profile_url.attach(io: File.open(userpath67), filename: "fc80bf55f32e5d80b54724970556729f_original.jpg")
  user67.save
  project67 = Project.new(duration: 0, limit: false, user_id: user67.id, country: "France", title: "Once You Know | Quand on sait", description: "Documentary about collective resilience in the face of collapse | Documentaire sur la résilience collective face à l'effondrement", pledge_amt: 0, eta: nil, shipping: "", city: "Paris", state: "France", funding_goal: 45238, category_id: categories[6].id, subcategory: "Documentary", challenges: "")
  projectpath67 = File.join(Rails.root, 'app', "assets", "images", "1cb05d81900fcf7d32bdc28a82720337_original.jpg")
  project67.image_url.attach(io: File.open(projectpath67), filename: "1cb05d81900fcf7d32bdc28a82720337_original.jpg")
  project67.save
  user68 = User.new(name: "George Galloway MP", email: "georgegallowaymp@gmail.com", password: "starwars", biography: 'I was a Member of the British Parliament for nearly 30 years. In 2003 I was expelled from the Labour Party over my outspoken opposition to Bush and Blair\'s war in Iraq. I am an experienced broadcaster and presenter of more than a 1000 programs. Following my previous Kickstarter success where I raised a record breaking £163,893 to make ‘The Killing$ of Tony Blair’ (premiered 2016), I now attempt to make a film about the related subject of the Dr David Kelly affair. Please join me on this journey. Thank you George Galloway', google_analytics: "")
  userpath68 = File.join(Rails.root, 'app', "assets", "images", "5eb9752e3dae197edcb00a0c1b8a49bb_original.jpg")
  user68.profile_url.attach(io: File.open(userpath68), filename: "5eb9752e3dae197edcb00a0c1b8a49bb_original.jpg")
  user68.save
  project68 = Project.new(duration: 0, limit: false, user_id: user68.id, country: "the United Kingdom", title: "Killing Kelly", description: "“I will be found dead in the woods.... there are many dark actors milling around” Dr David Kelly CMG (2003)", pledge_amt: 0, eta: nil, shipping: "", city: "London", state: "UK", funding_goal: 62900, category_id: categories[6].id, subcategory: "Documentary", challenges: "")
  projectpath68 = File.join(Rails.root, 'app', "assets", "images", "5cb310c980e9d3189357f667b39b787e_original.jpg")
  project68.image_url.attach(io: File.open(projectpath68), filename: "5cb310c980e9d3189357f667b39b787e_original.jpg")
  project68.save
  user69 = User.new(name: "Amit Ashraf", email: "amitashraf@gmail.com", password: "starwars", biography: 'I\'m a graduate of NYU’s film school, TISCH, and am now an award-winning filmmaker. I made my first feature, RUNAWAY (UDHAO) in Bangladesh in 2013 which was released in theatres and received 7 awards from international film festivals. I live in Dhaka, Bangladesh but have lived in America too. I am a freelance film director and Project Ommi has been my passion project for a few years now. I can\'t wait to see it come to life!', google_analytics: "")
  userpath69 = File.join(Rails.root, 'app', "assets", "images", "7613bd25c5d252f9b303ccf0bf3fd81f_original.png")
  user69.profile_url.attach(io: File.open(userpath69), filename: "7613bd25c5d252f9b303ccf0bf3fd81f_original.png")
  user69.save
  project69 = Project.new(duration: 0, limit: false, user_id: user69.id, country: "the United Kingdom", title: "PROJECT OMMI: A Sci-Fi Thriller Feature Film", description: "Set in a future Bangladesh, a hacker creates an AI child to save real children.", pledge_amt: 0, eta: nil, shipping: "", city: "London", state: "UK", funding_goal: 31450, category_id: categories[6].id, subcategory: "Science Fiction", challenges: "")
  projectpath69 = File.join(Rails.root, 'app', "assets", "images", "4573e6fddeaab133feffc79fac62227f_original.png")
  project69.image_url.attach(io: File.open(projectpath69), filename: "4573e6fddeaab133feffc79fac62227f_original.png")
  project69.save
  user70 = User.new(name: "Grace Porter", email: "graceporter@gmail.com", password: "starwars", biography: 'BETWEEN YOU AND ME is Grace Porters directorial debut.', google_analytics: "")
  userpath70 = File.join(Rails.root, 'app', "assets", "images", "dc59315d4947c314d0b73421193ed5c4_original.jpg")
  user70.profile_url.attach(io: File.open(userpath70), filename: "dc59315d4947c314d0b73421193ed5c4_original.jpg")
  user70.save
  project70 = Project.new(duration: 0, limit: false, user_id: user70.id, country: "the United Kingdom", title: "BETWEEN YOU AND ME Drama/Comedy Feature Film", description: "Four city women, the \"wrong side of 25\", take a narrow boat out for a Hen Weekend...", pledge_amt: 0, eta: nil, shipping: "", city: "London", state: "UK", funding_goal: 9686, category_id: categories[6].id, subcategory: "Drama", challenges: "")
  projectpath70 = File.join(Rails.root, 'app', "assets", "images", "10f0aefd808ad613db146c9d15443269_original.jpg")
  project70.image_url.attach(io: File.open(projectpath70), filename: "10f0aefd808ad613db146c9d15443269_original.jpg")
  project70.save
  user71 = User.new(name: "Carla Fraser", email: "carlafraser@gmail.com", password: "starwars", biography: 'Actress / Writer / Producer 1st class BA (Hons) Acting - Guildford School of Acting. Represented by MMB Creative.', google_analytics: "")
  userpath71 = File.join(Rails.root, 'app', "assets", "images", "fd160d91e27e323ecd6906c5fb680244_original.jpeg")
  user71.profile_url.attach(io: File.open(userpath71), filename: "fd160d91e27e323ecd6906c5fb680244_original.jpeg")
  user71.save
  project71 = Project.new(duration: 0, limit: false, user_id: user71.id, country: "the United Kingdom", title: "WINGS", description: "Two Land Army girls fall in love, but when the war finishes, the men return, & so must ‘normality’. But maybe their story isn't over..", pledge_amt: 0, eta: nil, shipping: "", city: "Colchester", state: "UK", funding_goal: 6290, category_id: categories[6].id, subcategory: "Romance", challenges: "")
  projectpath71 = File.join(Rails.root, 'app', "assets", "images", "07fbc45c37c5464c2f1cd2f0d2779d33_original.jpg")
  project71.image_url.attach(io: File.open(projectpath71), filename: "07fbc45c37c5464c2f1cd2f0d2779d33_original.jpg")
  project71.save
  user72 = User.new(name: "Mariana Garte", email: "marianagarte@gmail.com", password: "starwars", biography: 'Tengo 24 años, nací en la Ciudad de México. Crecí en una familia de artistas que me inculcaron el amor por la creación. Actualmente me dedico a escribir y dirigir cine, así como a actuar.', google_analytics: "")
  userpath72 = File.join(Rails.root, 'app', "assets", "images", "a13f009d027cf7845095401970e0e8b7_original.jpeg")
  user72.profile_url.attach(io: File.open(userpath72), filename: "a13f009d027cf7845095401970e0e8b7_original.jpeg")
  user72.save
  project72 = Project.new(duration: 0, limit: false, user_id: user72.id, country: "Mexico", title: "La Última Escena.", description: "Daniela buscará romper con los paradigmas familiares para lograr su independencia y su sueño de ser actriz.", pledge_amt: 0, eta: nil, shipping: "", city: "Mexico", state: "Mexico", funding_goal: 2586, category_id: categories[6].id, subcategory: "Shorts", challenges: "")
  projectpath72 = File.join(Rails.root, 'app', "assets", "images", "4fe547ee14b2478ebde4d58198242bf5_original.jpg")
  project72.image_url.attach(io: File.open(projectpath72), filename: "4fe547ee14b2478ebde4d58198242bf5_original.jpg")
  project72.save
  user73 = User.new(name: "Michel Dulisch", email: "micheldulisch@gmail.com", password: "starwars", biography: 'Michel Dulisch has been studying directing at the Academy of Media Arts in Cologne since 2013. Many short films have been produced since then, which were represented at national and international film festivals. Before and during his studies, he worked as an assistant director for professional television and cinema productions.', google_analytics: "")
  userpath73 = File.join(Rails.root, 'app', "assets", "images", "ab9173f6207eb340debf6de6ed2fce75_original.jpg")
  user73.profile_url.attach(io: File.open(userpath73), filename: "ab9173f6207eb340debf6de6ed2fce75_original.jpg")
  user73.save
  project73 = Project.new(duration: 0, limit: false, user_id: user73.id, country: "Germany", title: "SOPHIE (AT) - A Short Film", description: "SOPHIE (AT) is a 20-minutes political thriller with macroeconomic content. It concerns the future of Europe.", pledge_amt: 0, eta: nil, shipping: "", city: "Cologne", state: "Germany", funding_goal: 5654, category_id: categories[6].id, subcategory: "Shorts", challenges: "")
  projectpath73 = File.join(Rails.root, 'app', "assets", "images", "e780161aa7e059d2f4533af31bc89c7f_original.jpg")
  project73.image_url.attach(io: File.open(projectpath73), filename: "e780161aa7e059d2f4533af31bc89c7f_original.jpg")
  project73.save
  user74 = User.new(name: "Sebastian Masso", email: "sebastianmasso@gmail.com", password: "starwars", biography: 'Comenzó en el mundo artístico con la música independiente para luego ligarse a la actuación y el cine. Como cineasta se ha enfocado en la producción y dirección de cortometrajes y videoclips en sus distintas áreas, siendo productor ejecutivo, gerente de producción, director, asistente de dirección y continuista sus principales pasiones. Como actor ha trabajado en cortometrajes independientes y comerciales, además de participar como extra en largometrajes como "Roma" de Alfonso Cuarón y "Esto No Es Berlín" de Hari Sama. Actualmente atiende varios proyectos como cineasta en distintas fases de la producción, y prepara un personaje protagónico para la ópera prima "Ensayo Sobre El Silencio".', google_analytics: "")
  userpath74 = File.join(Rails.root, 'app', "assets", "images", "57d0c2a5326002085e59fc63b3fffbbf_original.jpg")
  user74.profile_url.attach(io: File.open(userpath74), filename: "57d0c2a5326002085e59fc63b3fffbbf_original.jpg")
  user74.save
  project74 = Project.new(duration: 0, limit: false, user_id: user74.id, country: "Mexico", title: "MÍA - CORTOMETRAJE", description: "Un cortometraje de adaptación de \"El Híbrido\" de Franz Kafka.", pledge_amt: 0, eta: nil, shipping: "", city: "Mexico", state: "Mexico", funding_goal: 1243, category_id: categories[6].id, subcategory: "Shorts", challenges: "")
  projectpath74 = File.join(Rails.root, 'app', "assets", "images", "bf9cbf30a7998aedbdeac8b0afc42af5_original.png")
  project74.image_url.attach(io: File.open(projectpath74), filename: "bf9cbf30a7998aedbdeac8b0afc42af5_original.png")
  project74.save
  user75 = User.new(name: "Jared Morse", email: "jaredmorse@gmail.com", password: "starwars", biography: 'Originally from Lindon, Utah. I started my first business, Utah Valley Curb, at the age of 24 in 2008, installing decorative landscape curbing in residential and commercial properties. This business has grown every year since, and we are now a well known company throughout Utah County and South Salt Lake, and have an A rating through the Better Business Bureau. In 2010 I partnered with a friend to start a company called Leather Burned. Mainly an online business, we made custom scripture covers, journals, and other leather items, and focus on custom engravings. We sold that business in 2014. Soon after, my wife and I started Kodiak Leather. I\'ve always been an entrepreneur at heart and I\'m always looking for ways to make a difference through business.', google_analytics: "")
  userpath75 = File.join(Rails.root, 'app', "assets", "images", "93566e7bd740bb5624360f876267a440_original.jpg")
  user75.profile_url.attach(io: File.open(userpath75), filename: "93566e7bd740bb5624360f876267a440_original.jpg")
  user75.save
  project75 = Project.new(duration: 0, limit: false, user_id: user75.id, country: "the United States", title: "Kodiak Leather: Kobuk Leather Backpack", description: "Adventure Ready, Top Grain, Roll-Top Leather Backpack.", pledge_amt: 0, eta: nil, shipping: "", city: "Lehi", state: "UT", funding_goal: 10000, category_id: categories[5].id, subcategory: "Accessories", challenges: "")
  projectpath75 = File.join(Rails.root, 'app', "assets", "images", "33f8aa35a1d927b84fb6f7b2e34ebe1c_original.jpg")
  project75.image_url.attach(io: File.open(projectpath75), filename: "33f8aa35a1d927b84fb6f7b2e34ebe1c_original.jpg")
  project75.save
  user76 = User.new(name: "Superseche", email: "superseche@gmail.com", password: "starwars", biography: 'We\'ve been in the textile and apparel industry for over 2 decades. This is the first time we\'ve incorporated such innovative ideas into one of our products and we are so proud to present it to you here on Kickstarter.', google_analytics: "")
  userpath76 = File.join(Rails.root, 'app', "assets", "images", "9f4fc1bedd1049eec7f13acba733c04a_original.jpg")
  user76.profile_url.attach(io: File.open(userpath76), filename: "9f4fc1bedd1049eec7f13acba733c04a_original.jpg")
  user76.save
  project76 = Project.new(duration: 0, limit: false, user_id: user76.id, country: "Hong Kong", title: "Superseche - the T-shirt you can wear for 7 days", description: "The unbelievably quick dry garment that is also odor and stain repellent.", pledge_amt: 0, eta: nil, shipping: "", city: "Hong Kong", state: "Hong Kong", funding_goal: 1279, category_id: categories[5].id, subcategory: "Apparel", challenges: "")
  projectpath76 = File.join(Rails.root, 'app', "assets", "images", "11d405dd7b8474f19d1ea87f6c5c994e_original.jpg")
  project76.image_url.attach(io: File.open(projectpath76), filename: "11d405dd7b8474f19d1ea87f6c5c994e_original.jpg")
  project76.save
  user77 = User.new(name: "Woolly Clothing Co", email: "woollyclothingco@gmail.com", password: "starwars", biography: 'Merino wool living made possible. Born and raised in Seattle, WA.', google_analytics: "")
  userpath77 = File.join(Rails.root, 'app', "assets", "images", "8d5305c5b633b0fcf22641d86abcc406_original.jpg")
  user77.profile_url.attach(io: File.open(userpath77), filename: "8d5305c5b633b0fcf22641d86abcc406_original.jpg")
  user77.save
  project77 = Project.new(duration: 0, limit: false, user_id: user77.id, country: "the United States", title: "The Longhaul Pant - Merino performance in style by Woolly", description: "Creating the world's most stylish and versatile merino wool pants and shorts.", pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: 20000, category_id: categories[5].id, subcategory: "Apparel", challenges: "")
  projectpath77 = File.join(Rails.root, 'app', "assets", "images", "214a401b2c2dc0bcb3ae48824b5640e1_original.jpg")
  project77.image_url.attach(io: File.open(projectpath77), filename: "214a401b2c2dc0bcb3ae48824b5640e1_original.jpg")
  project77.save
  user78 = User.new(name: "Clare Campbell", email: "clarecampbell@gmail.com", password: "starwars", biography: 'Being a Highland lass born and bred, tartan exists in my very DNA you could say. Through a series of life changing experiences, my obsession with restoring the design, manufacture and product finishing of the finest tartan collections balances both side of me. On one side the unique personal legacy creation that comes with an official Scottish tartan resonates with how I have dealt with losing loved ones over the years. We all have a story tell, some sadly have a short story while others are fortunate to have many threads to theirs. This then balances with the Chartered Accountant in me, having spent over 13 years in commerce working in a whole range of sectors and company formants. I have galvanised skills and experiences related to many products, services, operational challenges, compliance and risk management, and the obvious financial implications of creating a business that has the ability to grow and create new jobs. Taking these two halves, I have founded Prickly Thistle. A brand born from passion, commitment and integrity - to fulfil an uprising, which is restoring tartan to its Highland home.', google_analytics: "")
  userpath78 = File.join(Rails.root, 'app', "assets", "images", "1509f96c57d75a2dfc1a11586592fde5_original.jpg")
  user78.profile_url.attach(io: File.open(userpath78), filename: "1509f96c57d75a2dfc1a11586592fde5_original.jpg")
  user78.save
  project78 = Project.new(duration: 0, limit: false, user_id: user78.id, country: "the United Kingdom", title: "#SEASON2#PLANB #BUILDTHEMILL - TARTAN UPRISING CONTINUES....", description: "Plan B continues, our next release of the exclusive Black House Mill tartan collection, passionately crafted in the Scottish Highlands", pledge_amt: 0, eta: nil, shipping: "", city: "Culbokie", state: "UK", funding_goal: 63122, category_id: categories[2].id, subcategory: "Weaving", challenges: "")
  projectpath78 = File.join(Rails.root, 'app', "assets", "images", "bc8db81fb40287f90e3b5af085d3fee2_original.png")
  project78.image_url.attach(io: File.open(projectpath78), filename: "bc8db81fb40287f90e3b5af085d3fee2_original.png")
  project78.save
  user79 = User.new(name: "Karen S. Lauger", email: "karenslauger@gmail.com", password: "starwars", biography: 'My name is Karen S. Lauger and I am also known as Lykkefanten online. I am an Danish economist by day and an avid knitter and knitwear designer by night (or at least in the evenings). My aim is to create a feeling of simple complexity in my designs, drawing heavily on my love of mathematics and my Nordic heritage. For a number of years I have worked with small indie dyers and small and large yarn companies alike. I’ve also published independent designs through Ravelry and have had a design featured in Knitty.com. Approximately a year ago I published my first knitting book, Sjaler Nordfra, with my friend Signe Strømgaard and her small indie company Rauna as the publisher and collaborator.', google_analytics: "")
  userpath79 = File.join(Rails.root, 'app', "assets", "images", "429dd1475f6280b6cb248de85719892f_original.jpg")
  user79.profile_url.attach(io: File.open(userpath79), filename: "429dd1475f6280b6cb248de85719892f_original.jpg")
  user79.save
  project79 = Project.new(duration: 0, limit: false, user_id: user79.id, country: "Denmark", title: "Nordic Shawls - a knitting book", description: "The English version of the original Danish knitting book Sjaler Nordfra by Karen Skriver Lauger", pledge_amt: 0, eta: nil, shipping: "", city: "Copenhagen", state: "Denmark", funding_goal: 9877, category_id: categories[2].id, subcategory: "Knitting", challenges: "")
  projectpath79 = File.join(Rails.root, 'app', "assets", "images", "47c462247dbcaa391836525a6c79e64a_original.jpg")
  project79.image_url.attach(io: File.open(projectpath79), filename: "47c462247dbcaa391836525a6c79e64a_original.jpg")
  project79.save
  user80 = User.new(name: "PlanetPlush", email: "planetplush@gmail.com", password: "starwars", biography: 'PlanetPlush is located in the beautiful hills of West Virginia. Our business began in a small appalachian town across the Guyandotte River. We specialize in plush toys and work with endless dedication to assure you receive the best we have to offer. Every character is designed by hand and made with high quality materials. Our goal is to spread happiness and we take pride in our commitment to make our toys easily available world wide.', google_analytics: "")
  userpath80 = File.join(Rails.root, 'app', "assets", "images", "05add61c44169142788bd16117ebbadc_original.jpg")
  user80.profile_url.attach(io: File.open(userpath80), filename: "05add61c44169142788bd16117ebbadc_original.jpg")
  user80.save
  project80 = Project.new(duration: 0, limit: false, user_id: user80.id, country: "the United States", title: "Spooky the Fox Plush Toy", description: "He may be dead but he's got spirit!", pledge_amt: 0, eta: nil, shipping: "", city: "Huntington", state: "WV", funding_goal: 3000, category_id: categories[2].id, subcategory: nil, challenges: "")
  projectpath80 = File.join(Rails.root, 'app', "assets", "images", "a0b70d92e3c1b21859790e8d85e3d30e_original.jpg")
  project80.image_url.attach(io: File.open(projectpath80), filename: "a0b70d92e3c1b21859790e8d85e3d30e_original.jpg")
  project80.save
  user81 = User.new(name: "Kai Lebrecht", email: "kailebrecht@gmail.com", password: "starwars", biography: 'I\'m 54 years old, married and have 3 children. After studying economics I worked as Managing Director for different companies. Since three years I`m running my own business. With my experience in developing new products I`m helping my 20 year old son Dennis to bring his own idea to life.', google_analytics: "")
  userpath81 = File.join(Rails.root, 'app', "assets", "images", "6930df31cb1c635b21b5a4ce8b1984c0_original.jpg")
  user81.profile_url.attach(io: File.open(userpath81), filename: "6930df31cb1c635b21b5a4ce8b1984c0_original.jpg")
  user81.save
  project81 = Project.new(duration: 0, limit: false, user_id: user81.id, country: "Germany", title: "Nihon4you - A Japanese characters workbook", description: "An innovative workbook to learn and understand japanese characters in an easy way no matter where you are", pledge_amt: 0, eta: nil, shipping: "", city: "Freiburg", state: "Germany", funding_goal: 11347, category_id: categories[2].id, subcategory: "Stationery", challenges: "")
  projectpath81 = File.join(Rails.root, 'app', "assets", "images", "4cde79bfffcf78720f5552295425ca2c_original.jpg")
  project81.image_url.attach(io: File.open(projectpath81), filename: "4cde79bfffcf78720f5552295425ca2c_original.jpg")
  project81.save
  user82 = User.new(name: "Renaud SAUZET", email: "renaudsauzet@gmail.com", password: "starwars", biography: 'Indie Game developer. Currently working on Koruldia, a merciful story-driven RPG made with a new take on HD pixel-art and various camera point of view.', google_analytics: "")
  userpath82 = File.join(Rails.root, 'app', "assets", "images", "107f4020864718e4f94538df24104362_original.png")
  user82.profile_url.attach(io: File.open(userpath82), filename: "107f4020864718e4f94538df24104362_original.png")
  user82.save
  project82 = Project.new(duration: 0, limit: false, user_id: user82.id, country: "the United Kingdom", title: "Koruldia Heritage, a pixel-painted adventure RPG", description: "Explore an alien world riddled with ominous wonders and puzzles. Dive into people's memories. Be ruthless or merciful.", pledge_amt: 0, eta: nil, shipping: "", city: "London", state: "UK", funding_goal: 12624, category_id: categories[8].id, subcategory: "Video Games", challenges: "")
  projectpath82 = File.join(Rails.root, 'app', "assets", "images", "b79667d597c560dcb0618281636721ee_original.jpg")
  project82.image_url.attach(io: File.open(projectpath82), filename: "b79667d597c560dcb0618281636721ee_original.jpg")
  project82.save
  user83 = User.new(name: "Shire Post Mint", email: "shirepostmint@gmail.com", password: "starwars", biography: 'Tom Maringer has been hand-crafting unique and beautiful metal objects since the late 1960s. In 1975 he started Maringer Custom Cutlery and made beautiful hand-crafted knives and swords. Beginning in 1987 he began making fantasy postage stamps, and in 2001 acquired his first press for the making of fantasy coins. Beginning strictly as a fan-art hobby project, fantasy coinmaking grew into a more serious project for Tom with the success his licensed A Game of Thrones™ series beginning in 2003. Today Shire Post Mint is a traditional fantasy coin making mint with four full time staff specializing in the fabrication of fully-licensed fantasy currency from fictional worlds, including George R.R. Martin\'s "A Game of Thrones" series, Robert E Howard’s "Conan™" series, "The Hobbit™" and "The Lord of the Rings™" trilogy by J.R.R. Tolkien, Robert Jordan’s "The Wheel of Time™" series, L.E. Modesitt’s "The Saga of Recluce™" series, Patrick Rothfuss’ "The Kingkiller Chronicle™" series, Peter V. Brett\'s "The Demon Cycle" series, and Edgar Rice Burroughs’ "John Carter of Mars™" series. Shire Post utilizes antique coin making processes to recreate the feel and look of ancient and medieval coins, from hand-carving dies, using solid metals (never cast or plated), stamping with antique machines, to tumbling and chemically or thermally treating the coins in order to bring about the weathered look of old coins. Our primary goal is to increase fans\' immersive experience in their favorite fantasies by creating simple tactile objects to enhance the sense-of-place and contribute to a state of "Suspension Of Disbelief" or "SOD" with respect to the beloved fantasy realm. Our goal was fully realized when a fan commented: "I thought those stories were made up... but these coins are REAL!" We hope that everybody may be enabled to experience such a SOD experience, even if it\'s only for a moment. To feel the world of Middle-earth take shape around you as you jingle some Hobbit coins in your hand... THAT is the best thing ever!', google_analytics: "")
  userpath83 = File.join(Rails.root, 'app', "assets", "images", "a78677b03caeabcbc4679f38d9dca715_original.png")
  user83.profile_url.attach(io: File.open(userpath83), filename: "a78677b03caeabcbc4679f38d9dca715_original.png")
  user83.save
  project83 = Project.new(duration: 0, limit: false, user_id: user83.id, country: "the United States", title: "A GAME OF THRONES, Fantasy Gaming Coins, by Shire Post Mint", description: "A Game of Thrones themed metal fantasy coins / tokens upgrade the experience of any card game, board game, LCG, LARP, or RPG.", pledge_amt: 0, eta: nil, shipping: "", city: "Fayetteville", state: "AR", funding_goal: 13500, category_id: categories[8].id, subcategory: "Gaming Hardware", challenges: "")
  projectpath83 = File.join(Rails.root, 'app', "assets", "images", "bb4eb9ec42152395144793ebddf4e033_original.jpg")
  project83.image_url.attach(io: File.open(projectpath83), filename: "bb4eb9ec42152395144793ebddf4e033_original.jpg")
  project83.save
  user84 = User.new(name: "Rich Stadler", email: "richstadler@gmail.com", password: "starwars", biography: 'Married to the greatest gal on the planet and have three wonderful kids! I wish I lived south where the weather is warmer but summer in Wisconsin in beautiful and we have the Packers!', google_analytics: "")
  userpath84 = File.join(Rails.root, 'app', "assets", "images", "9a4fc5c664032e90b46706f57151f069_original.jpg")
  user84.profile_url.attach(io: File.open(userpath84), filename: "9a4fc5c664032e90b46706f57151f069_original.jpg")
  user84.save
  project84 = Project.new(duration: 0, limit: false, user_id: user84.id, country: "the United States", title: "Billet Dice", description: "CNC Crafted out of billet aluminum. Unique, sophisticated yet practical.", pledge_amt: 0, eta: nil, shipping: "", city: "Oshkosh", state: "WI", funding_goal: 10000, category_id: categories[8].id, subcategory: "Gaming Hardware", challenges: "")
  projectpath84 = File.join(Rails.root, 'app', "assets", "images", "b5a59e81c66aecb3754f23ce6fbf0bf3_original.jpeg")
  project84.image_url.attach(io: File.open(projectpath84), filename: "b5a59e81c66aecb3754f23ce6fbf0bf3_original.jpeg")
  project84.save
  user85 = User.new(name: "Bree Arts", email: "breearts@gmail.com", password: "starwars", biography: 'Bree Arts is a small art and game development studio. Our current focus is in developing computer role playing games. Bree Arts is currently a husband and wife team of Jeremy (slowdive_fan) and Tamara. My wife is the lead artist and I am the lead programmer and writer.', google_analytics: "")
  userpath85 = File.join(Rails.root, 'app', "assets", "images", "6457e5b5b4d719d19f50a64ea5b3c361_original.jpeg")
  user85.profile_url.attach(io: File.open(userpath85), filename: "6457e5b5b4d719d19f50a64ea5b3c361_original.jpeg")
  user85.save
  project85 = Project.new(duration: 0, limit: false, user_id: user85.id, country: "the United States", title: "IceBlink Engine", description: "IceBlink is a story, party and turn-based computer RPG Engine and Toolset. Easily create your own adventures to share with anyone.", pledge_amt: 0, eta: nil, shipping: "", city: "Phoenix", state: "AZ", funding_goal: 500, category_id: categories[8].id, subcategory: "Gaming Hardware", challenges: "")
  projectpath85 = File.join(Rails.root, 'app', "assets", "images", "4bc510ae4c171cc86a1beef3cba9a9ea_original.jpg")
  project85.image_url.attach(io: File.open(projectpath85), filename: "4bc510ae4c171cc86a1beef3cba9a9ea_original.jpg")
  project85.save
  user86 = User.new(name: "Andy \"Cosmo-Joe\" Watkins", email: "andycosmojoewatkins@gmail.com", password: "starwars", biography: 'Andy "Cosmo-Joe" Watkins was born in Milwaukee in the late 70s. While living there he went to Roosevelt; a Milwaukee charter school that specializes in the arts. In his teens he moved to the Fox Cities where he worked several mid-level management jobs throughout his much of his twenties. When he was 28 he quit his job to pursue his life\'s dream of being a professional artist. Since then Watkins has spent his time painting, drawing, writing lyrics for a rock band, designing games andother game products, and performing his "action art" at schools. Cosmo has gained attention for his radical style of spray paint painting from the media. He can often be found on State Street painting for large crowds of passer-bys on most summer Saturdays. He says that the people inspire him to paint and that it is their energy that drives him. In 2007 Andy Watkins founded Cosmo-Joe Entertainment; a company dedicated to the promotion of artists and arts. In 2014 he opened Studio 6d6, a workshop and gallery for creative projects. Most of Studio 6d6\'s 2000 square feet are dedicated to creating designer game tables. Studio 6d6 has also produced several unique dice designs and is working on several tabletop games. In 2016 Studio 6d6 moved to a 8,700 sq ft building in Menasha WI where we continue to make great game tables and custom game products. Andy lives in a humble apartment with his 2 cats close to downtown Menasha. He is an active member of the local art community. He holds the copyright to over 5,000 works of art, several games, a few designs for dice, and dozens of songs.', google_analytics: "")
  userpath86 = File.join(Rails.root, 'app', "assets", "images", "9cdc777267cc967e53fd61137c78617c_original.jpg")
  user86.profile_url.attach(io: File.open(userpath86), filename: "9cdc777267cc967e53fd61137c78617c_original.jpg")
  user86.save
  project86 = Project.new(duration: 0, limit: false, user_id: user86.id, country: "the United States", title: "Double Dice Tower Ultimate GM Screen!", description: "This awesome GM screen looks like a cool castle! Features TWO dice towers and a dice dungeon. Run games like a MASTER.", pledge_amt: 0, eta: nil, shipping: "", city: "Menasha", state: "WI", funding_goal: 2000, category_id: categories[8].id, subcategory: "Gaming Hardware", challenges: "")
  projectpath86 = File.join(Rails.root, 'app', "assets", "images", "e374f89ee75e7a6252a9bfcaa774e066_original.png")
  project86.image_url.attach(io: File.open(projectpath86), filename: "e374f89ee75e7a6252a9bfcaa774e066_original.png")
  project86.save
  user87 = User.new(name: "Dized", email: "dized@gmail.com", password: "starwars", biography: 'Dized is a platform for everything digital that improves your board game experiences: tutorials, up-to-date rules, exclusive content, community interaction, game night planning, and more. Dized will be available for iOS and Android devices.', google_analytics: "")
  userpath87 = File.join(Rails.root, 'app', "assets", "images", "2396ab0241d969e2a9fbc0e984f036a9_original.png")
  user87.profile_url.attach(io: File.open(userpath87), filename: "2396ab0241d969e2a9fbc0e984f036a9_original.png")
  user87.save
  project87 = Project.new(duration: 0, limit: false, user_id: user87.id, country: "Belgium", title: "Dized: The Best Way To Learn Board Games", description: "Dized is the ultimate companion app: it adapts to your preferences, letting you skip the rulebook and play board games right away!", pledge_amt: 0, eta: nil, shipping: "", city: "Helsinki", state: "Finland", funding_goal: 75000, category_id: categories[8].id, subcategory: "Tabletop Games", challenges: "")
  projectpath87 = File.join(Rails.root, 'app', "assets", "images", "8fcad5000003d2498acaadba60fa530c_original.png")
  project87.image_url.attach(io: File.open(projectpath87), filename: "8fcad5000003d2498acaadba60fa530c_original.png")
  project87.save
  user88 = User.new(name: "itten", email: "itten@gmail.com", password: "starwars", biography: 'We are a tabletop designing and publishing company based in Tokyo.', google_analytics: "")
  userpath88 = File.join(Rails.root, 'app', "assets", "images", "cd5c28ec0348a54563034897bbfd35b9_original.jpg")
  user88.profile_url.attach(io: File.open(userpath88), filename: "cd5c28ec0348a54563034897bbfd35b9_original.jpg")
  user88.save
  project88 = Project.new(duration: 0, limit: false, user_id: user88.id, country: "Japan", title: "Stonehenge and the Sun", description: "A new gaming experiment which challenges and expands the scope of tabletop games.", pledge_amt: 0, eta: nil, shipping: "", city: "Tokyo", state: "Japan", funding_goal: 19546, category_id: categories[8].id, subcategory: "Tabletop Games", challenges: "")
  projectpath88 = File.join(Rails.root, 'app', "assets", "images", "3169c82345750d87d029dd254b390689_original.jpg")
  project88.image_url.attach(io: File.open(projectpath88), filename: "3169c82345750d87d029dd254b390689_original.jpg")
  project88.save
  user89 = User.new(name: "Draco Studios", email: "dracostudios@gmail.com", password: "starwars", biography: 'We love RPGs and miniatures. Creating new IPs for the world. Draco Studios was born in 2017 and incorporates 3 groups: Draco Gaming: Content creator and publisher Draco Forge: Resin miniatures manufacturer Draco Games: Distributor in Mexico Eldritch Century is our next release.', google_analytics: "")
  userpath89 = File.join(Rails.root, 'app', "assets", "images", "b93ccbd30d983c7263c7ef32d0eaf462_original.png")
  user89.profile_url.attach(io: File.open(userpath89), filename: "b93ccbd30d983c7263c7ef32d0eaf462_original.png")
  user89.save
  project89 = Project.new(duration: 0, limit: false, user_id: user89.id, country: "Mexico", title: "War for Chicken Island", description: "Chickens go to war on a tiny island to humiliate other clans. A gateway skirmish game with fun mechanics, art and miniatures.", pledge_amt: 0, eta: nil, shipping: "", city: "Mexico City", state: "Mexico", funding_goal: 18000, category_id: categories[8].id, subcategory: "Tabletop Games", challenges: "")
  projectpath89 = File.join(Rails.root, 'app', "assets", "images", "0a9b9e8b7b24fa65ed9b7c3581867369_original.jpg")
  project89.image_url.attach(io: File.open(projectpath89), filename: "0a9b9e8b7b24fa65ed9b7c3581867369_original.jpg")
  project89.save
  user90 = User.new(name: "Frank LoCrasto", email: "franklocrasto@gmail.com", password: "starwars", biography: 'Frank LoCrasto is a Texas born, Brooklyn-based musician, specializing in piano and synthesizers. He studied music at The New School and has toured and recorded  extensively as a side man and leader since arriving in New York City in 2001. He has also composed and recorded original scores for independent films. He has released three solo albums, "When You\'re There" (Maxjazz 2006), "El Dorado" (Hundred Pockets 2011), and "LoCrasto" (Storytime 2015). "When You\'re There" is a mostly acoustic jazz record featuring a small chamber orchestra on 4 out of the 9 tracks. "El Dorado" was recorded in his basement apartment in Brooklyn and utilizes tube amps, drum machines, tape echo, pianos and vintage synths to create an alchemy of psychedelic and ambient music. "LoCrasto" was recorded with a similar approach but with a live band  in a recording studio. “Lost Dispatch”, his fourth album is in the works for a April 2019  release. In addition to solo projects, LoCrasto has recorded and toured internationally with several established artist including Cass McCombs, Pat Martino, James Iha, Parquet Courts, Greg Osby, Okkervil River, and Wallace Roney. Other collaborators include: Lapland, Breastfist, Nightlands, and Julian Velard. He has appeared on over 40 records as a side man.', google_analytics: "")
  userpath90 = File.join(Rails.root, 'app', "assets", "images", "e7a8812335c11b5ecb36886718c81ad7_original.jpg")
  user90.profile_url.attach(io: File.open(userpath90), filename: "e7a8812335c11b5ecb36886718c81ad7_original.jpg")
  user90.save
  project90 = Project.new(duration: 0, limit: false, user_id: user90.id, country: "the United States", title: "Lost Dispatch : A psychedelic trip into synthesizer exotica", description: "A new album of tropicosmic sounds that take you on a journey thru the world of Frank LoCrasto.", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: 5000, category_id: categories[10].id, subcategory: nil, challenges: "")
  projectpath90 = File.join(Rails.root, 'app', "assets", "images", "77b636e302a357aa9fdaa119fecadc6b_original.jpg")
  project90.image_url.attach(io: File.open(projectpath90), filename: "77b636e302a357aa9fdaa119fecadc6b_original.jpg")
  project90.save
  user91 = User.new(name: "Sam Crawford", email: "samcrawford@gmail.com", password: "starwars", biography: 'Sam Crawford completed both his B.A. in English and A.S. in Audio Technology at Indiana University in 2003. A move to New York City led him to Looking Glass Studios where he worked as an assistant engineer on film projects with Philip Glass and Björk. These early experiences profoundly shaped his thoughts on music and music-making, inspiring a process that relies on instinct to generate raw material and method to refine that material into finished works. A multi-instrumentalist on electric guitar, lap steel, banjo, piano, organ, and trumpet and called one of “a fiercely intelligent, talented crew of players” by the New York Times, Crawford’s recent compositions and sound designs have included works for the Bill T. Jones/Arnie Zane Company (Another Evening: Venice for the Venice Biennale, 2010), Camille A. Brown and Dancers (BLACK GIRL: Linguistic Play, 2016),Yin Mei Dance (Scent of Time for the Beijing Dance Academy, 2010), Kyle Abraham / Abraham.In.Motion (Pavement for Harlem Stage, 2012), and David Dorfman Dance (Aroundtown for BAM’s Next Wave Festival, 2017), and Yara Travieso (La Medea at PS122’s Coil Festival, 2017). Crawford currently resides in Brooklyn where he works as a freelance composer, designer, and engineer. He also performs in various groups in NYC and abroad, including Bowery Boy Blue (Brooklyn) and the country and western trio Corpus Christi (Rome).', google_analytics: "")
  userpath91 = File.join(Rails.root, 'app', "assets", "images", "1bbb34cc0f7ae87b9e0647802db50822_original.jpg")
  user91.profile_url.attach(io: File.open(userpath91), filename: "1bbb34cc0f7ae87b9e0647802db50822_original.jpg")
  user91.save
  project91 = Project.new(duration: 0, limit: false, user_id: user91.id, country: "the United States", title: "La Medea: the soundtrack recording!", description: "Help Jason & the Argonauts make a soundtrack record of the genre-bending live film La Medea.", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: 4500, category_id: categories[10].id, subcategory: "Indie Rock", challenges: "")
  projectpath91 = File.join(Rails.root, 'app', "assets", "images", "6e064ae0f81ffd1d00389160252d1aab_original.jpg")
  project91.image_url.attach(io: File.open(projectpath91), filename: "6e064ae0f81ffd1d00389160252d1aab_original.jpg")
  project91.save
  user92 = User.new(name: "Yotam Silberstein", email: "yotamsilberstein@gmail.com", password: "starwars", biography: 'Tel-Aviv native Yotam Silberstein began playing guitar at age 10. This young prodigy was soon invited to perform with many of the nation’s top jazz musicians. By the age of 21, Silberstein has won the coveted “Israeli Jazz Player of The Year” title. Soon after, he performed at Italy’s renowned Umbria Jazz Festival, released a critically acclaimed debut album and set out on an extensive tour of Europe and the Middle East. Upon receiving a scholarship to the prestigious New School, Yotam Silberstein moved to New York in 2005. Praise continued to pour in as a finalist in the 2005 Thelonious Monk International Jazz Guitar Competition with one critic noting, “Yotam’s tones are exquisitely old school but his playing fresh, fiery and bursting with joyful exuberance, and musically he is one heavy cat.” Jazz Times noted, “Since his arrival in New York in 2005, Israeli guitarist Yotam Silberstein has made an impact on the scene with his precision bebop lines and fleet fingered improvisation. All About Jazz summed up his 2009 release, “Next Page” as “unadorned hollow-body guitar work freely invites comparison to releases from the heyday of Blue Note Records. He isn’t piggy backing on memories. He’s forging his own path with skills and style.” As artistically gifted as he is technically proficient, Silberstein is featured on a wide variety of critically acclaimed releases including “Resonance” and “Brasil” on the Jazz Legacy Productions label and Monty Alexander’s Grammy-nominated “Harlem-Kingston Express Live!” In just six years since arriving in the Big Apple, internationally acclaimed Yotam Silberstein has earned his place among the jazz elite by collaborating with such luminaries as James Moody, The Heath Brothers, Paquito D’ Rivera, Monty Alexander, Roy Hargrove, and the Dizzy Gillespie Alumni All-Stars. This versatile guitarist’s wheelhouse runs the sonic spectrum from the straight ahead to Brazilian, world music, blues and bebop. Silberstein’s showmanship wowed the Kennedy Center’s 2011 production, “Ella!” which featured Dee Dee Bridgewater, Al Jarreau, Dr. Billy Taylor and Janis Siegel. His performance earned him a return invitation for a special appearance at the KC Jazz Club. In addition, Yotam Silberstein has toured as a leader in major clubs in Europe, Japan, and Singapore while winning the Sundance Time Warner award for film music. Having performed with the world’s premier talent, he has honed his craft with precision, finesse and the innate artistic touch that others twice his age are still searching for to this day there is little doubt among critics that Yotam Silberstein’s musical stock is an arrow pointing straight up!', google_analytics: "")
  userpath92 = File.join(Rails.root, 'app', "assets", "images", "a70036bbadbea34edbfe686b1ca45443_original.jpeg")
  user92.profile_url.attach(io: File.open(userpath92), filename: "a70036bbadbea34edbfe686b1ca45443_original.jpeg")
  user92.save
  project92 = Project.new(duration: 0, limit: false, user_id: user92.id, country: "the United States", title: "Future Memories - A New Album by Yotam Silberstein", description: "Please join us today in making my new album “Future Memories” come to life. Featuring a stellar band. It’s my best work so far!", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: 17000, category_id: categories[10].id, subcategory: nil, challenges: "")
  projectpath92 = File.join(Rails.root, 'app', "assets", "images", "37525739a26fa4fa12fed5c0a76685d4_original.jpeg")
  project92.image_url.attach(io: File.open(projectpath92), filename: "37525739a26fa4fa12fed5c0a76685d4_original.jpeg")
  project92.save
  user93 = User.new(name: "L-P Anderson", email: "lpanderson@gmail.com", password: "starwars", biography: 'Deluxe NWOBHM reissues', google_analytics: "")
  userpath93 = File.join(Rails.root, 'app', "assets", "images", "cd7e4eea0db58844d22b9cb5db87c10a_original.jpg")
  user93.profile_url.attach(io: File.open(userpath93), filename: "cd7e4eea0db58844d22b9cb5db87c10a_original.jpg")
  user93.save
  project93 = Project.new(duration: 0, limit: false, user_id: user93.id, country: "Sweden", title: "Jobcentre Rejects - Ultra Rare NWOBHM 1978-1982 vinyl album", description: "Jobcentre Rejects - Ultra Rare NWOBHM 1978-1982 A super deluxe reissue of rare nwobhm singles", pledge_amt: 0, eta: nil, shipping: "", city: "Gothenburg", state: "Sweden", funding_goal: 110, category_id: categories[10].id, subcategory: "Metal", challenges: "")
  projectpath93 = File.join(Rails.root, 'app', "assets", "images", "9e414f5714e4e7df01f2946e5a70acba_original.jpeg")
  project93.image_url.attach(io: File.open(projectpath93), filename: "9e414f5714e4e7df01f2946e5a70acba_original.jpeg")
  project93.save
  user94 = User.new(name: "ANTAGONISM", email: "antagonism@gmail.com", password: "starwars", biography: 'Originaire de Toulon, ANTAGONISM est un groupe de Thrash Metal dont les sonorités old school se mélangent avec quelques passages plus moderne. Formé en Septembre 2016 par Raphael Gloaguen (Ex- Unrest Fatalist, batteur) et Dylan Hunger (vocals/guitars), ils sont très vite rejoints par Kevin Colin (Drop Your Pants/ bass), et Félix Cleyet-Marrel (lead guitar). Avec des influences telles que Metallica, Megadeth, Anthrax, Slayer, HAVOK, Coroner, Entombed, Sodom, Dark Angel ou encore Exmortus, la musique d’ANTAGONISM aborde toutes les facettes du Thrash avec modernité. Depuis leurs débuts et malgré l’absence de disque ANTAGONISM a eu la chance de pouvoir s’illustrer en live une fois par mois, leur permettant ainsi de composer petit à petit THRASHOCALYPSE, leur premier EP, enregistré au Homeless Records à Marseille été 2017. L’artwork de l’EP a été réalisé par Roberto TODERICO qui a notamment travaillé pour des groupes tels que SINISTER, ASPHYX, CUT UP, SOULBURN, TYGERS OF PAN TANG ou encore PESTILENCE. 1 an plus tard après une centaine de passage en RADIO FM et beaucoup de chroniques positives qui les ont amenés à donner des interviews en direct du HELLFEST 2018, Antagonism prépare la sortie de son premier album : World On Disease', google_analytics: "")
  userpath94 = File.join(Rails.root, 'app', "assets", "images", "62cf3b2e1575e3528ab5253bafb68f95_original.jpeg")
  user94.profile_url.attach(io: File.open(userpath94), filename: "62cf3b2e1575e3528ab5253bafb68f95_original.jpeg")
  user94.save
  project94 = Project.new(duration: 0, limit: false, user_id: user94.id, country: "France", title: "World On Disease - Antagonism's 1st Album", description: "Nous voulons créer un produit de qualité qui satisfera vos exigences autant que les nôtres ! Tous vos dons comptent alors lâchez-vous !", pledge_amt: 0, eta: nil, shipping: "", city: "France", state: "France", funding_goal: 11120, category_id: categories[10].id, subcategory: "Metal", challenges: "")
  projectpath94 = File.join(Rails.root, 'app', "assets", "images", "87507d579e8093dc4f1e1f68e2ce1f1e_original.jpg")
  project94.image_url.attach(io: File.open(projectpath94), filename: "87507d579e8093dc4f1e1f68e2ce1f1e_original.jpg")
  project94.save
  user95 = User.new(name: "Equidad Catacraneo", email: "equidadcatacraneo@gmail.com", password: "starwars", biography: 'Equidad Catacraneo, Banda de Metal que describe la potencia y energía que se vive en el escenario, nacida en las tierras de las montañas de Monterrey es considerada una banda de Groove Death Metal, ganadora del Tecate México Metal Fest II, en tan solo un año ha logrado superar las expectativas del publico, estrenando su primer album SANGRE Y PLOMO, así como 3 vídeos oficiales, Migra Sanguinaria (El asesinato de Pepe-Jose), Karma liryc video y Anticuerpo Asesino, siendo este ultimo parte de su primer sencillo tocado en diferentes medios de comunicación como d99, Unirock FM, DRS, El Norte, Milenio entro otros... Equidad Catacraneo: Bajo y voz: Abraham Paz Guitarra: Aldo Neri Guitarra: Daniel Villarreal Batería: Franco Neri Equidad Catacraneo,ha tenido la fortuna de pisar diferentes escenarios en diferentes estados de la república y alternar con bandas tanto nacionales como internacionales, han participado en diferentes festivales culturales como de talla internacional. Actualmente se encuentran de tour presentando su primer disco SANGRE Y PLOMO, así como la elaboración del primer DVD del disco en vivo de las diferentes presentaciones realizadas a lo largo del tour.', google_analytics: "")
  userpath95 = File.join(Rails.root, 'app', "assets", "images", "555680b5635fdca9eb47fb9c0b5ace54_original.png")
  user95.profile_url.attach(io: File.open(userpath95), filename: "555680b5635fdca9eb47fb9c0b5ace54_original.png")
  user95.save
  project95 = Project.new(duration: 0, limit: false, user_id: user95.id, country: "Mexico", title: "Equidad Catacraneo´s 2nd Studio Album", description: "Equidad Catacraneo´s 2nd Studio Album and Official Music Video for Polvo Masivo from our 1st Album Sangre y Plomo.", pledge_amt: 0, eta: nil, shipping: "", city: "Monterrey", state: "Mexico", funding_goal: 7462, category_id: categories[10].id, subcategory: "Metal", challenges: "")
  projectpath95 = File.join(Rails.root, 'app', "assets", "images", "25e01912ac6a7ccf9614df8690774a7d_original.jpg")
  project95.image_url.attach(io: File.open(projectpath95), filename: "25e01912ac6a7ccf9614df8690774a7d_original.jpg")
  project95.save
  user96 = User.new(name: "Alexey Usov", email: "alexeyusov@gmail.com", password: "starwars", biography: 'Hi, my name is Alexey Usov and I\'ve been working as a teacher and project manager for almost 20 years at Svefi Academy, a college in the very North of Sweden. One of the Svefi Academy courses is specially designed for visually impaired sound technicians. I have worked a lot with the developmental projects involving visually impaired from different countries. We have done adaptations for different recording and editing platforms and designed software solutions for visually impaired sound technicians. Apart from that within the Creative Force projects we have recorded two promotional CD\'s for the visually impaired musicians from the Ukraine and Belarus. My next project is to promote the Blind Rock project. Blind Rock plays a good oldschool Rock music. Technical guitar riffs, melody and composition structure are of high value for the band. It\'s not correct in the circles of artists to compare, but Megadeth, Dave Mustaine, Pantera, Judas Priest, Victor Smolski, Jason Richardson, Jeff Loomis are indisputable authorities for the musicians from Blind Rock. The music they play is their world\'s backbone, it makes them live different lives. They hope to have a possibility to share this feeling with you on stage.', google_analytics: "")
  userpath96 = File.join(Rails.root, 'app', "assets", "images", "e5942649b992242c3caa74998ac386b9_original.jpg")
  user96.profile_url.attach(io: File.open(userpath96), filename: "e5942649b992242c3caa74998ac386b9_original.jpg")
  user96.save
  project96 = Project.new(duration: 0, limit: false, user_id: user96.id, country: "Sweden", title: "The Blind Rock First Studio Album", description: "A record of an album of hard and melodic Rock by the band of visually impared musicians called Blind Rock", pledge_amt: 0, eta: nil, shipping: "", city: "Minsk", state: "Belarus", funding_goal: 49988, category_id: categories[10].id, subcategory: "Metal", challenges: "")
  projectpath96 = File.join(Rails.root, 'app', "assets", "images", "3a79fd3fb1daa62d8161121d799765e7_original.jpg")
  project96.image_url.attach(io: File.open(projectpath96), filename: "3a79fd3fb1daa62d8161121d799765e7_original.jpg")
  project96.save
  user97 = User.new(name: "S. Bear Bergman", email: "sbearbergman@gmail.com", password: "starwars", biography: 'S. Bear Bergman is an author, storyteller, and educator working to create positive, celebratory representations of trans lives. Recent or current projects include two fabulous children’s storybooks featuring trans-identified kid characters, a performance about loving and living in a queer/ed Jewish family titled Gathering Light, teaching pleasure-positive trans/genderqueer sex ed, and his sixth book Blood, Marriage, Wine & Glitter (Arsenal Pulp, 2013).', google_analytics: "")
  userpath97 = File.join(Rails.root, 'app', "assets", "images", "51c9a456eeb6037c5c685605c5501aa4_original.jpeg")
  user97.profile_url.attach(io: File.open(userpath97), filename: "51c9a456eeb6037c5c685605c5501aa4_original.jpeg")
  user97.save
  project97 = Project.new(duration: 0, limit: false, user_id: user97.id, country: "Canada", title: "Flamingo Rampant 2019: Discovery!", description: "LGBT2Q+, feminist, multi-ethnic children's books back for another season!", pledge_amt: 0, eta: nil, shipping: "", city: "Toronto", state: "Canada", funding_goal: 81000, category_id: categories[12].id, subcategory: "Children's Books", challenges: "")
  projectpath97 = File.join(Rails.root, 'app', "assets", "images", "bcd34c9712b299f50e023a129c058fc5_original.jpg")
  project97.image_url.attach(io: File.open(projectpath97), filename: "bcd34c9712b299f50e023a129c058fc5_original.jpg")
  project97.save
  user98 = User.new(name: "Nancy Xu", email: "nancyxu@gmail.com", password: "starwars", biography: 'Hi, I\'m Nancy! I\'m a high school senior who loves all things art and reading. I\'m interested in pursuing psychology in college and I hope to make a positive impact on immigrant communities across the world with my new children\'s book.', google_analytics: "")
  userpath98 = File.join(Rails.root, 'app', "assets", "images", "c5d542c9a1e460b217ed16ab0864b859_original.jpg")
  user98.profile_url.attach(io: File.open(userpath98), filename: "c5d542c9a1e460b217ed16ab0864b859_original.jpg")
  user98.save
  project98 = Project.new(duration: 0, limit: false, user_id: user98.id, country: "the United States", title: "Hana & Arnie - A Picture Book about Diversity & Compassion", description: "A colorful, hand-painted children's book about how a girl taught her town to embrace diversity. Written and illustrated by a student.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: 3000, category_id: categories[12].id, subcategory: "Children's Books", challenges: "")
  projectpath98 = File.join(Rails.root, 'app', "assets", "images", "abd6d40aabe4bf50ba473609e8daaaee_original.jpg")
  project98.image_url.attach(io: File.open(projectpath98), filename: "abd6d40aabe4bf50ba473609e8daaaee_original.jpg")
  project98.save
  user99 = User.new(name: "Georgie Badiel", email: "georgiebadiel@gmail.com", password: "starwars", biography: 'Georgie Badiel-Liberty is a high-fashion model, activist, and author from Burkina Faso.', google_analytics: "")
  userpath99 = File.join(Rails.root, 'app', "assets", "images", "333f9b22a40f2effcf194ed1bf26b49c_original.jpg")
  user99.profile_url.attach(io: File.open(userpath99), filename: "333f9b22a40f2effcf194ed1bf26b49c_original.jpg")
  user99.save
  project99 = Project.new(duration: 0, limit: false, user_id: user99.id, country: "the United States", title: "Princess GieGie - Water Is Here.", description: "Princess GieGie Publishing and Production is a literature and cartoon production company.", pledge_amt: 0, eta: nil, shipping: "", city: "Manhattan", state: "NY", funding_goal: 15000, category_id: categories[12].id, subcategory: "Children's Books", challenges: "")
  projectpath99 = File.join(Rails.root, 'app', "assets", "images", "6f0023de9c673a3189d0f7bc71683b34_original.jpg")
  project99.image_url.attach(io: File.open(projectpath99), filename: "6f0023de9c673a3189d0f7bc71683b34_original.jpg")
  project99.save
  user100 = User.new(name: "Brooke", email: "brooke@gmail.com", password: "starwars", biography: 'Hi! I’m Brooke, a self-taught artist from Columbus, Ohio. I specialize in the design of kawaii style cats and other cute critters!', google_analytics: "")
  userpath100 = File.join(Rails.root, 'app', "assets", "images", "4ffb8fcdce725cf09dbe42ca57f2cb54_original.png")
  user100.profile_url.attach(io: File.open(userpath100), filename: "4ffb8fcdce725cf09dbe42ca57f2cb54_original.png")
  user100.save
  project100 = Project.new(duration: 0, limit: false, user_id: user100.id, country: "the United States", title: "Color Me-ow", description: "Softbound coloring book for youth, adults, and lovers of cats!", pledge_amt: 0, eta: nil, shipping: "", city: "Columbus", state: "OH", funding_goal: 500, category_id: categories[12].id, subcategory: "Children's Books", challenges: "")
  projectpath100 = File.join(Rails.root, 'app', "assets", "images", "5976d66cc054960e31a16bcf2b34ef25_original.jpeg")
  project100.image_url.attach(io: File.open(projectpath100), filename: "5976d66cc054960e31a16bcf2b34ef25_original.jpeg")
  project100.save
  user101 = User.new(name: "Gizmo Films", email: "gizmofilms@gmail.com", password: "starwars", biography: 'Gizmo Films, founded in 1986, is a well established and award winning UK based film production company with a number of current projects in production and development as well as a fascinating and diverse back catalogue of completed productions. We started specialising in documentaries for TV working with the BBC, ITV, Channel 4 and Discovery. From 2012 we also moved into feature films for theatrical, VOD and TV release worldwide working with major distributors such as Entertainment One, IFC Sundance and Samuel Goldwyn.', google_analytics: "")
  userpath101 = File.join(Rails.root, 'app', "assets", "images", "cb4e5ae7455019c188ce37cfd34139f3_original.jpg")
  user101.profile_url.attach(io: File.open(userpath101), filename: "cb4e5ae7455019c188ce37cfd34139f3_original.jpg")
  user101.save
  project101 = Project.new(duration: 0, limit: false, user_id: user101.id, country: "the United Kingdom", title: "Second Skin - A short film", description: "Second Skin: A 15 min short film exploring issues of identity and self image across generations of women.", pledge_amt: 0, eta: nil, shipping: "", city: "London", state: "UK", funding_goal: 6316, category_id: categories[6].id, subcategory: "", challenges: "")
  projectpath101 = File.join(Rails.root, 'app', "assets", "images", "69c0698a645f7ecd4b71c7192c3d5451_original.jpg")
  project101.image_url.attach(io: File.open(projectpath101), filename: "69c0698a645f7ecd4b71c7192c3d5451_original.jpg")
  project101.save
  user102 = User.new(name: "One Year Lease Theater Company", email: "oneyearleasetheatercompany@gmail.com", password: "starwars", biography: 'One Year Lease Theater Company (OYL) is an ensemble-based company with a mission to premiere bold international works of theater in New York City; contribute to the advancement of international collaboration in the theater by commissioning new plays from playwrights based in the US and abroad; and provide training and education to young artists through student workshops in the USA and our annual Apprentice Program in Greece. OYL advocates for physically powerful, ensemble-based theater and believes in the importance of theater as a forum for community enrichment, connecting us to each other and our past.', google_analytics: "")
  userpath102 = File.join(Rails.root, 'app', "assets", "images", "d8eaeeb9cb8c0264cc13f0f3536b4e06_original.jpeg")
  user102.profile_url.attach(io: File.open(userpath102), filename: "d8eaeeb9cb8c0264cc13f0f3536b4e06_original.jpeg")
  user102.save
  project102 = Project.new(duration: 0, limit: false, user_id: user102.id, country: "the United States", title: "EAT THE DEVIL; a theater production.", description: "An alt-right fever dream about a terrifying virus gone viral in a post-fact America.", pledge_amt: 0, eta: nil, shipping: "", city: "New York", state: "NY", funding_goal: 7000, category_id: categories[14].id, subcategory: "", challenges: "")
  projectpath102 = File.join(Rails.root, 'app', "assets", "images", "a18288284147bc655ae5ccc559dad939_original.jpg")
  project102.image_url.attach(io: File.open(projectpath102), filename: "a18288284147bc655ae5ccc559dad939_original.jpg")
  project102.save
  user103 = User.new(name: "onlinetheater.live", email: "onlinetheaterlive@gmail.com", password: "starwars", biography: '// All the world wide web\'s a stage Das onlinetheater.live hat sich der Produktion von Stücken und Performances im digitalen Raum verschrieben. Nach Jahren gemeinsamer Zusammenarbeit in wechselnden Konstellationen eignen wir uns heute als erstes ausschließlich online existierendes Theater Social-Media-Plattformen, Webseiten und Livestream-Kanäle als Bühnenräume an. Unsere Abende finden online statt, sind stets live und für jede*n Interessierte*n frei und kostenlos zugänglich. Unsere Zuschauer*innen sollen im Netz diskutieren, interagieren, recherchieren. Während wir von außen zunächst häufig in Opposition zu Stadt- und Staatstheater gesehen werden, wollen wir, im Gegenteil, den Wirkraum des Theaters nicht beschneiden, sondern radikal erweitern - ins Netz hinein Wir wollen nicht unkritisch und unreflektiert unser Leben einem Medium unterwerfen, genauso wenig denen, die uns dies vorwerfen. Nur wollen wir weder die Gestaltung dieses Raumes noch seine Deutung restlos anderen überlassen - nicht den Konzernen, nicht den großen Medien, nicht der Politik, nicht dem wütenden Mob. Statt uns ohnmächtig einem einseitigen Kulturfatalismus anzuschließen, wollen wir mit theatralen Mitteln produktiv und spielerisch Räume erobern und schaffen, die dort herrschenden und etablierten Macht- und Meinungsstrukturen hinterfragen und mitgestalten, immer auf der Suche nach neuen und eigenständigen Formen, die dieser hybriden Lebensrealität gerecht werden können. Wir glauben an die kritische, politisch-emanzipatorische, schöpferische Kraft von Theater. Jede unserer Arbeiten strebt danach, das Theater und die theatralen Ausdrucksmittel und Sprachen konsequent und ohne falsche Kompromisse auf die digitalen Bühnen zu holen - nicht um des Experimentes Willen, sondern aus der Notwen- digkeit, der kybernetischen Welt und uns als ihren Bewohner*innen mit allen gebotenen Mitteln (ernsthaft, unnachgiebig, lustvoll) auf Augenhöhe zu begegnen und entgegenzutreten. Im onlinetheater.live versammeln sich mittlerweile über 10 Schauspieler*innen, Regisseur*innen, Dramaturg*innen, bildende Künstler*innen, Autor*innen, Performer*innen, technikaffine, kulturschaffende und experimentiertfreudige Menschen.', google_analytics: "")
  userpath103 = File.join(Rails.root, 'app', "assets", "images", "b6bdaef7046a133bcc6e5fb36e4c6188_original.png")
  user103.profile_url.attach(io: File.open(userpath103), filename: "b6bdaef7046a133bcc6e5fb36e4c6188_original.png")
  user103.save
  project103 = Project.new(duration: 0, limit: false, user_id: user103.id, country: "Germany", title: "Camshow Vol. I: Gary. Eine Produktion des onlinetheater.live", description: "Gary ist auf der Suche nach dem großen Geld auf einer Pornoplattform, ein Stück des weltweit ersten Internettheaters", pledge_amt: 0, eta: nil, shipping: "", city: "Magdeburg", state: "Germany", funding_goal: 909, category_id: categories[14].id, subcategory: "", challenges: "")
  projectpath103 = File.join(Rails.root, 'app', "assets", "images", "2d705edf209d182007d55fe31abe5586_original.png")
  project103.image_url.attach(io: File.open(projectpath103), filename: "2d705edf209d182007d55fe31abe5586_original.png")
  project103.save
  user104 = User.new(name: "Lidelab", email: "lidelab@gmail.com", password: "starwars", biography: 'LideLab, from Danish “Lab of pleasure and pain”, is a female collective of independent artists deriving from different backgrounds with the aim of creating performances that play with paradoxes and spark wonder. The group was born around a table, sharing food with people we love - first for the human qualities and later for the professional. The dream is to create our performances like a dinner invite; each bringing different ingredients and each proposing their unique recipes, for then to cook together and once more gather around the table, sharing new flavours. The day after whilst washing the dishes left to soak out of tiredness, a feeling of happiness lingers thinking about the most beautiful evening. ------- LideLab, dal danese “laboratorio del piacere e del dolore” è un collettivo al feminile di artiste indipendenti provenienti da diversi background che si riuniscono per creare performance che corteggiano i paradossi e suscitano meraviglia. Il gruppo è nato a tavola, condividendo del cibo con persone amate prima dal lato umano e poi da quello professionale. Il nostro sogno è creare performance che siano come un invito a cena, ognuno porta ingredienti diversi, ognuno propone i suoi piatti forti, si cucina insieme e poi ci si ritrova intorno a un tavola, condividendo sapori nuovi. Il giorno dopo mentre si lavano i piatti lasciati a mollo per la stanchezza ci si sente felici e si pensa di aver passato la serata più bella di sempre.', google_analytics: "")
  userpath104 = File.join(Rails.root, 'app', "assets", "images", "84ffa59108e6afc9a7eccdba8ee046bf_original.jpg")
  user104.profile_url.attach(io: File.open(userpath104), filename: "84ffa59108e6afc9a7eccdba8ee046bf_original.jpg")
  user104.save
  project104 = Project.new(duration: 0, limit: false, user_id: user104.id, country: "Italy", title: "Theatre Project: Wunderkammer - Le mille e una notte", description: "About seduction, sensuality and the erotic games found in the stories of \"Arabian Nights\"", pledge_amt: 0, eta: nil, shipping: "", city: "Milan", state: "Italy", funding_goal: 2842, category_id: categories[14].id, subcategory: "", challenges: "")
  projectpath104 = File.join(Rails.root, 'app', "assets", "images", "d5fe9dcbf4f0847bf298e2aab541f216_original.jpg")
  project104.image_url.attach(io: File.open(projectpath104), filename: "d5fe9dcbf4f0847bf298e2aab541f216_original.jpg")
  project104.save
  user105 = User.new(name: "DeseoTeatro365", email: "deseoteatro@gmail.com", password: "starwars", biography: 'La compañía Deseo Teatro 365 surge como un espacio para dignificar el teatro mexicano a través de la creación y montaje de obras que sean una alquimia entre lo reflexivo y lo entretenido, lo profundo y lo ligero, lo novedoso y lo clásico. Deseo Teatro 365 busca hacer de la experiencia teatral algo deseable para una audiencia mayor y así competir con los grandes espacios de entretenimiento. Así mismo esta compañía está convencida de que a través del arte se puede sanar el tejido social y contribuir, de alguna manera, a la discusión de ideas para el beneficio político, económico y humano.', google_analytics: "")
  userpath105 = File.join(Rails.root, 'app', "assets", "images", "b0ceca4f3ec87af949aede3461aa2cd3_original.jpeg")
  user105.profile_url.attach(io: File.open(userpath105), filename: "b0ceca4f3ec87af949aede3461aa2cd3_original.jpeg")
  user105.save
  project105 = Project.new(duration: 0, limit: false, user_id: user105.id, country: "Mexico", title: "ANTES DEL ÚLTIMO BAILE - Trío de Monólogos de Maruxa Vilalta", description: "Obra de teatro sobre la relación que las personas tenemos con el tiempo, la muerte y la insatisfacción personal.", pledge_amt: 0, eta: nil, shipping: "", city: "Mexico", state: "Mexico", funding_goal: 15044, category_id: categories[14].id, subcategory: "", challenges: "")
  projectpath105 = File.join(Rails.root, 'app', "assets", "images", "f9ca624bf4fb81b42043e6f9e0058645_original.jpg")
  project105.image_url.attach(io: File.open(projectpath105), filename: "f9ca624bf4fb81b42043e6f9e0058645_original.jpg")
  project105.save
  user106 = User.new(name: "Pivo", email: "pivo@gmail.com", password: "starwars", biography: 'Pivo is brought to you by YouVR, a company dedicated to developing everyday use VR technologies. For the last few years, we\'ve been developing and manufacturing our latest product Pivo, and we\'re excited to share it with the world.', google_analytics: "")
  userpath106 = File.join(Rails.root, 'app', "assets", "images", "dace54c612856c36fdc5c3ef29d87c3e_original.png")
  user106.profile_url.attach(io: File.open(userpath106), filename: "dace54c612856c36fdc5c3ef29d87c3e_original.png")
  user106.save
  project106 = Project.new(duration: 0, limit: false, user_id: user106.id, country: "the United States", title: "Pivo. Get Insanely Creative GIFs, Photos & Videos.", description: "Sensationalize your smartphone photography with a genius little pod ⚡️ 360° | Auto-Tracking | ManyMe | DoubleTake | Tiny Planet | &More", pledge_amt: 0, eta: nil, shipping: "", city: "San Jose", state: "CA", funding_goal: 25000, category_id: categories[13].id, subcategory: "Gadgets", challenges: "")
  projectpath106 = File.join(Rails.root, 'app', "assets", "images", "75d01f538a648b95f04c9173a8039561_original.jpg")
  project106.image_url.attach(io: File.open(projectpath106), filename: "75d01f538a648b95f04c9173a8039561_original.jpg")
  project106.save
  user107 = User.new(name: "Primo Toys", email: "primotoys@gmail.com", password: "starwars", biography: 'Our mission is to inspire young girls and boys to explore the digital world around them. We make toys that are loved by children and trusted by parents and educators. Learning time should be playtime too. Our smart, intuitive toys are built with friendly technologies, providing fun learning experiences for curious little minds with big imaginations.', google_analytics: "")
  userpath107 = File.join(Rails.root, 'app', "assets", "images", "a0337cf2cf19e3415ed8eea1b6e044c9_original.jpg")
  user107.profile_url.attach(io: File.open(userpath107), filename: "a0337cf2cf19e3415ed8eea1b6e044c9_original.jpg")
  user107.save
  project107 = Project.new(duration: 0, limit: false, user_id: user107.id, country: "the United States", title: "Pigzbe: Helps Kids 6+ Develop Great Money Habits", description: "Teach children how to save, earn and budget in the 21st-century and give them financial superpowers! By PrimoToys, a five-time creator!", pledge_amt: 0, eta: nil, shipping: "", city: "San Francisco", state: "CA", funding_goal: 50000, category_id: categories[13].id, subcategory: "Gadgets", challenges: "")
  projectpath107 = File.join(Rails.root, 'app', "assets", "images", "39239e561c07d4cfa32ba55289666035_original.jpg")
  project107.image_url.attach(io: File.open(projectpath107), filename: "39239e561c07d4cfa32ba55289666035_original.jpg")
  project107.save
  user108 = User.new(name: "Dust London", email: "dustlondon@gmail.com", password: "starwars", biography: 'Dust London is a design company creating homeware from natural materials. It is a collaboration between Michael McManus and Matthew Grant. We met over 10 years ago. Whilst studying art and architecture, we developed similar interests and had talked about collaborating on a project for some time. We then began living together in Camberwell and started our search for local studio space that could accommodate our needs.', google_analytics: "")
  userpath108 = File.join(Rails.root, 'app', "assets", "images", "b043de815c037f74aa85a2ccd97afd0b_original.jpg")
  user108.profile_url.attach(io: File.open(userpath108), filename: "b043de815c037f74aa85a2ccd97afd0b_original.jpg")
  user108.save
  project108 = Project.new(duration: 0, limit: false, user_id: user108.id, country: "the United Kingdom", title: "Transforming Tea Waste Into Beautiful Homeware", description: "Changing how we recycle. Bringing the organic into design. This collection transforms tea into beautiful homeware.", pledge_amt: 0, eta: nil, shipping: "", city: "London", state: "UK", funding_goal: 3789, category_id: categories[4].id, subcategory: "", challenges: "")
  projectpath108 = File.join(Rails.root, 'app', "assets", "images", "680eb9d8c69117e643254e1564d6d808_original.jpg")
  project108.image_url.attach(io: File.open(projectpath108), filename: "680eb9d8c69117e643254e1564d6d808_original.jpg")
  project108.save
  user109 = User.new(name: "Sol 66", email: "sol66@gmail.com", password: "starwars", biography: 'Sol 66 is a newly established organisation (registered LLC in 2018) with an optimistic, pro-active, and pragmatic outlook. It has been set up with the goal of helping shape a more sustainable, brighter, and more unified future for one of America\'s most loved & recognisable highways!', google_analytics: "")
  userpath109 = File.join(Rails.root, 'app', "assets", "images", "f4871e31880fe3369c0a22b249651745_original.jpg")
  user109.profile_url.attach(io: File.open(userpath109), filename: "f4871e31880fe3369c0a22b249651745_original.jpg")
  user109.save
  project109 = Project.new(duration: 0, limit: false, user_id: user109.id, country: "the United States", title: "A Solar Powered EV Charge Station for the Route 66!!", description: "Make this concept a reality, choose from a great selection of rewards, and in so doing, help towards a number of worthy causes!", pledge_amt: 0, eta: nil, shipping: "", city: "Albuquerque", state: "NM", funding_goal: 15790, category_id: categories[4].id, subcategory: "Architecture", challenges: "")
  projectpath109 = File.join(Rails.root, 'app', "assets", "images", "aedbbb5e9204a9fc2b7b47949f36ca01_original.jpg")
  project109.image_url.attach(io: File.open(projectpath109), filename: "aedbbb5e9204a9fc2b7b47949f36ca01_original.jpg")
  project109.save
  user110 = User.new(name: "Pia C Jensen", email: "piacjensen@gmail.com", password: "starwars", biography: 'Disabled and living in Salto, Uruguay - creating a safe place for travelers passing through Uruguay on their way to Argentina, Brazil, Paraguay and beyond. There are no Hostels in this region. I\'m creating the first one here, but, I need some help with construction materials. Donors get free stay.', google_analytics: "")
  userpath110 = File.join(Rails.root, 'app', "assets", "images", "47ca1084cfb99b6e206c5898bf21e74a_original.jpeg")
  user110.profile_url.attach(io: File.open(userpath110), filename: "47ca1084cfb99b6e206c5898bf21e74a_original.jpeg")
  user110.save
  project110 = Project.new(duration: 0, limit: false, user_id: user110.id, country: "", title: "Traveling through South America & need a safe place to stay?", description: "A hostel and chef's creations to serve travelers visiting South America for extraordinary experiences, affordably. Tourism Guru.", pledge_amt: 0, eta: nil, shipping: "", city: "Salto", state: "Uruguay", funding_goal: 2000, category_id: categories[4].id, subcategory: "Architecture", challenges: "")
  projectpath110 = File.join(Rails.root, 'app', "assets", "images", "7d0a664f78bf1930cb1eab9e60ec2dc2_original.jpeg")
  project110.image_url.attach(io: File.open(projectpath110), filename: "7d0a664f78bf1930cb1eab9e60ec2dc2_original.jpeg")
  project110.save
  user111 = User.new(name: "PAX Monographs", email: "paxmonographs@gmail.com", password: "starwars", biography: 'PAX Monographs was established in 2017 by Ali Karimi, Daniela Leon, Paul Matevosyan, and Raffy Mardirossian.', google_analytics: "")
  userpath111 = File.join(Rails.root, 'app', "assets", "images", "3c32dc62f41c0237188ea8681c633aa9_original.png")
  user111.profile_url.attach(io: File.open(userpath111), filename: "3c32dc62f41c0237188ea8681c633aa9_original.png")
  user111.save
  project111 = Project.new(duration: 0, limit: false, user_id: user111.id, country: "the United States", title: "\"Andrea Palladio in Los Angeles\"", description: "\"Andrea Palladio in Los Angeles\" is a monograph of Palladio's work in Los Angeles. It is the world's first projective monograph.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: 6000, category_id: categories[4].id, subcategory: "Architecture", challenges: "")
  projectpath111 = File.join(Rails.root, 'app', "assets", "images", "7982ee271846efa08303b317c8bdb56f_original.jpg")
  project111.image_url.attach(io: File.open(projectpath111), filename: "7982ee271846efa08303b317c8bdb56f_original.jpg")
  project111.save
  user112 = User.new(name: "CH MAKER Ed", email: "chmakered@gmail.com", password: "starwars", biography: 'CH MakerEd is short for Chaihuo Maker Education. We are based in Shenzhen, China. We help users gain knowledge and master skills in design, electronics, mechanics, programming and other STEM areas by creating high-quality, affordable products that integrate fun into learning. These products unleash creativity and imagination while empowering users to innovate, craft and achieve. CH MakerEd was spun off from Seeed in 2015, to better develop educational services. An independent team was founded to develop STEM education products and promote business cooperation within the education sector. After three years of development, CH MakerEd is now cooperating with over two-hundred schools, making it the leading STEM education brand in China.', google_analytics: "")
  userpath112 = File.join(Rails.root, 'app', "assets", "images", "a1c302df0bf2b04554cde3db3e974ab0_original.jpg")
  user112.profile_url.attach(io: File.open(userpath112), filename: "a1c302df0bf2b04554cde3db3e974ab0_original.jpg")
  user112.save
  project112 = Project.new(duration: 0, limit: false, user_id: user112.id, country: "the United States", title: "Grove Junior: Snap-and-Play programmable modules $29", description: "Compatible With LEGO®| Versatile Magnetic Connection | Scratch 3.0 | Graphical Programming", pledge_amt: 0, eta: nil, shipping: "", city: "Santa Clara", state: "CA", funding_goal: 5000, category_id: categories[13].id, subcategory: "DIY Electronics", challenges: "")
  projectpath112 = File.join(Rails.root, 'app', "assets", "images", "dcf2543c5c87c847dc5bef6e5d1199cb_original.jpg")
  project112.image_url.attach(io: File.open(projectpath112), filename: "dcf2543c5c87c847dc5bef6e5d1199cb_original.jpg")
  project112.save
  user113 = User.new(name: "PowerChest", email: "powerchest@gmail.com", password: "starwars", biography: 'Team of local engineers gather to form a company that will manage batteries extending their life to the maximum potential.', google_analytics: "")
  userpath113 = File.join(Rails.root, 'app', "assets", "images", "a67eea9b3cbef1bb7f70dd8cf67a64d6_original.jpg")
  user113.profile_url.attach(io: File.open(userpath113), filename: "a67eea9b3cbef1bb7f70dd8cf67a64d6_original.jpg")
  user113.save
  project113 = Project.new(duration: 0, limit: false, user_id: user113.id, country: "the United States", title: "PowerChest: a DIY Home Power System", description: "Build your own AC power system", pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: 80000, category_id: categories[13].id, subcategory: "DIY Electronics", challenges: "")
  projectpath113 = File.join(Rails.root, 'app', "assets", "images", "5a82260463fd026fe672fe05e6b08bcc_original.png")
  project113.image_url.attach(io: File.open(projectpath113), filename: "5a82260463fd026fe672fe05e6b08bcc_original.png")
  project113.save
  user114 = User.new(name: "Dimitri Synodinos", email: "dimitrisynodinos@gmail.com", password: "starwars", biography: 'Bachelor degree from the University of Akron, in Ohio. The last few years I been designing embedded PCB boards and working with firmware.', google_analytics: "")
  userpath114 = File.join(Rails.root, 'app', "assets", "images", "bcb37eafc52f345924761ac0292e16b8_original.jpg")
  user114.profile_url.attach(io: File.open(userpath114), filename: "bcb37eafc52f345924761ac0292e16b8_original.jpg")
  user114.save
  project114 = Project.new(duration: 0, limit: false, user_id: user114.id, country: "the United States", title: "Zero BZ1, (Arduino-Compatible) with SD and LiPo charger.", description: "48MHz ARM Cortex M0+ micro-controller , zero bootloader with LiPo battery charger and SD card socket.", pledge_amt: 0, eta: nil, shipping: "", city: "Canton", state: "OH", funding_goal: 2345, category_id: categories[13].id, subcategory: "DIY Electronics", challenges: "")
  projectpath114 = File.join(Rails.root, 'app', "assets", "images", "942f0ec0b48d8ffee31134162a89f590_original.png")
  project114.image_url.attach(io: File.open(projectpath114), filename: "942f0ec0b48d8ffee31134162a89f590_original.png")
  project114.save
  user115 = User.new(name: "Vera Greentea", email: "veragreentea@gmail.com", password: "starwars", biography: 'Vera Greentea is a hopeful idealist who loves baking cookies and writing creepy stories. She is the author of GRIMOIRE NOIR (Spring 2019, First Second/Macmillan), the Recipes for the Dead series; Nenetl of the Forgotten Spirits; PAPA and the founder of Greentea Publishing, an independent comic book publishing company. Contact her at vera@greenteapublishing.com', google_analytics: "")
  userpath115 = File.join(Rails.root, 'app', "assets", "images", "0117efcb39528da8812e908fd41b39cd_original.jpg")
  user115.profile_url.attach(io: File.open(userpath115), filename: "0117efcb39528da8812e908fd41b39cd_original.jpg")
  user115.save
  project115 = Project.new(duration: 0, limit: false, user_id: user115.id, country: "the United States", title: "Wraith: The Psychic and the Poet", description: "Support WRAITH, a nightmarish tale about forest animals and the haunted house they live in. Story by Vera Greentea and art by ELK.", pledge_amt: 0, eta: nil, shipping: "", city: "New York", state: "NY", funding_goal: 9500, category_id: categories[1].id, subcategory: "Comic Books", challenges: "")
  projectpath115 = File.join(Rails.root, 'app', "assets", "images", "7634fb6f5369bf5b87a483f146f08e98_original.jpg")
  project115.image_url.attach(io: File.open(projectpath115), filename: "7634fb6f5369bf5b87a483f146f08e98_original.jpg")
  project115.save
  user116 = User.new(name: "Benjamin Combes", email: "benjamincombes@gmail.com", password: "starwars", biography: 'Video director for Ubisoft Entertainement, YouTube Film Maker. www.benjamincombes.com', google_analytics: "")
  userpath116 = File.join(Rails.root, 'app', "assets", "images", "2fd53596c7681727393fca43970583ff_original.jpg")
  user116.profile_url.attach(io: File.open(userpath116), filename: "2fd53596c7681727393fca43970583ff_original.jpg")
  user116.save
  project116 = Project.new(duration: 0, limit: false, user_id: user116.id, country: "France", title: "Commando Ninja: Back in 'Nam - The Comic Book", description: "The prequel of \"COMMANDO NINJA: The Movie\"! Follow our heroes through the jungles of Vietnam, full of Ninjas, Dinosaurs and Communists!", pledge_amt: 0, eta: nil, shipping: "", city: "Montpellier", state: "France", funding_goal: 1137, category_id: categories[1].id, subcategory: "", challenges: "")
  projectpath116 = File.join(Rails.root, 'app', "assets", "images", "bc64eb9fa32a04375be3d798565eeddc_original.jpg")
  project116.image_url.attach(io: File.open(projectpath116), filename: "bc64eb9fa32a04375be3d798565eeddc_original.jpg")
  project116.save
  user117 = User.new(name: "Sterling Clinton Hundley", email: "sterlingclintonhundley@gmail.com", password: "starwars", biography: '(b. 1976, United States) Sterling Hundley is an acclaimed illustrator, educator and artist, as well as the Founder of Legendeer (www.legendeer.org). Sterling currently serves as a Professor within the Department of Communication Arts at Virginia Commonwealth University, in Richmond, Virginia, where he teaches the Capstone Experience course for students graduating in industries related to illustration, animation, graphic design, concept art, entertainment and painting. In addition, Sterling has created post graduate mentorship programs in illustration and story-telling, which focus on personal voice and content development. Sterling is highly sought after for his creative solutions and skills related to the commercial illustration, fine art, corporate and creative educational industries.', google_analytics: "")
  userpath117 = File.join(Rails.root, 'app', "assets", "images", "d5faa12ed98e2bcc9441ab5726632562_original.jpg")
  user117.profile_url.attach(io: File.open(userpath117), filename: "d5faa12ed98e2bcc9441ab5726632562_original.jpg")
  user117.save
  project117 = Project.new(duration: 0, limit: false, user_id: user117.id, country: "the United States", title: "Curating Chaos: The personal sketchbooks of Sterling Hundley", description: "I'm printing a collection of drawings from my personal journals, which depict time through careful observation of my habits & routines.", pledge_amt: 0, eta: nil, shipping: "", city: "Richmond", state: "VA", funding_goal: 14250, category_id: categories[0].id, subcategory: "Illustration", challenges: "")
  projectpath117 = File.join(Rails.root, 'app', "assets", "images", "d0990d2f4228a45a1c360001228b4e04_original.jpg")
  project117.image_url.attach(io: File.open(projectpath117), filename: "d0990d2f4228a45a1c360001228b4e04_original.jpg")
  project117.save
  user118 = User.new(name: "Cthulhuscape", email: "cthulhuscape@gmail.com", password: "starwars", biography: 'Cthulhuscape was founded in 2017', google_analytics: "")
  userpath118 = File.join(Rails.root, 'app', "assets", "images", "5f59460a4b672ee829d5ebf2393cf12c_original.png")
  user118.profile_url.attach(io: File.open(userpath118), filename: "5f59460a4b672ee829d5ebf2393cf12c_original.png")
  user118.save
  project118 = Project.new(duration: 0, limit: false, user_id: user118.id, country: "Germany", title: "Cthulhuscape - The artworks! H.P. Lovecrafts perilous places", description: "A collection of six different artworks showing some of the most exciting places of the Cthulhu mythos, illustrated by Nele Diel!", pledge_amt: 0, eta: nil, shipping: "", city: "Remscheid", state: "Germany", funding_goal: 2274, category_id: categories[0].id, subcategory: "Illustration", challenges: "")
  projectpath118 = File.join(Rails.root, 'app', "assets", "images", "e8652147c7ea3e247c67d7f8d4b73b4c_original.jpg")
  project118.image_url.attach(io: File.open(projectpath118), filename: "e8652147c7ea3e247c67d7f8d4b73b4c_original.jpg")
  project118.save
  user119 = User.new(name: "Noel Arthur Heimpel", email: "noelarthurheimpel@gmail.com", password: "starwars", biography: 'Queer, nonbinary comics creator, writer, illustrator and Tarot reader living in Seattle, WA. I make magical stories with deep thoughts and happy endings for under-represented groups. Recent projects include the webcomic Ignition Zero and the Numinous Tarot deck.', google_analytics: "")
  userpath119 = File.join(Rails.root, 'app', "assets", "images", "b5814588f6fda7dfe2f14429dac44c10_original.jpg")
  user119.profile_url.attach(io: File.open(userpath119), filename: "b5814588f6fda7dfe2f14429dac44c10_original.jpg")
  user119.save
  project119 = Project.new(duration: 0, limit: false, user_id: user119.id, country: "the United States", title: "The Numinous Tarot 2nd Printing", description: "Second print run of an intersectional, queer, feminist Tarot deck and guidebook with gender neutral language.", pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: 18000, category_id: categories[0].id, subcategory: "Illustration", challenges: "")
  projectpath119 = File.join(Rails.root, 'app', "assets", "images", "6783260c97730858a1cf7e225698b6e8_original.jpg")
  project119.image_url.attach(io: File.open(projectpath119), filename: "6783260c97730858a1cf7e225698b6e8_original.jpg")
  project119.save
  user120 = User.new(name: "MazM", email: "mazm@gmail.com", password: "starwars", biography: 'The Best Influential Story Game Creator to help the younger generation experience, awaken, and grow up', google_analytics: "")
  userpath120 = File.join(Rails.root, 'app', "assets", "images", "c43c97e117d9be3d3a20f2278de4df22_original.jpg")
  user120.profile_url.attach(io: File.open(userpath120), filename: "c43c97e117d9be3d3a20f2278de4df22_original.jpg")
  user120.save
  project120 = Project.new(duration: 0, limit: false, user_id: user120.id, country: "the United States", title: "The Phantom of the Opera | Story-driven adventure for Mobile", description: "MazM presents ‘The Phantom of the Opera’ | Bringing Classical Literature to Life", pledge_amt: 0, eta: nil, shipping: "", city: "San Jose", state: "CA", funding_goal: 20000, category_id: categories[8].id, subcategory: "Mobile Games", challenges: "")
  projectpath120 = File.join(Rails.root, 'app', "assets", "images", "287821a68814b3fe65a4843056a88a16_original.png")
  project120.image_url.attach(io: File.open(projectpath120), filename: "287821a68814b3fe65a4843056a88a16_original.png")
  project120.save
  user121 = User.new(name: "Dante", email: "dante@gmail.com", password: "starwars", biography: 'I spent my teenager years programming and building my own computer and have never lost the passion for gaming. I want to bring a quality of game that I would not only be proud of, but would want to play myself. I am endeavouring to create a game with aspects that stops it from getting boring or repetitive, and something you can escape to when you like.', google_analytics: "")
  userpath121 = File.join(Rails.root, 'app', "assets", "images", "a8cb4dd9fc7372e30d1ffeac91e9cde5_original.jpg")
  user121.profile_url.attach(io: File.open(userpath121), filename: "a8cb4dd9fc7372e30d1ffeac91e9cde5_original.jpg")
  user121.save
  project121 = Project.new(duration: 0, limit: false, user_id: user121.id, country: "Australia", title: "Zombiescape: Survival in a post zombie apocalypse", description: "A zombie survival game. You will be able to interact with the world almost realistically while creating your own fort to survive in", pledge_amt: 0, eta: nil, shipping: "", city: "Sydney", state: "AU", funding_goal: 14076, category_id: categories[8].id, subcategory: "Mobile Games", challenges: "")
  projectpath121 = File.join(Rails.root, 'app', "assets", "images", "f180387e58d6ca72c58096f96d034867_original.jpg")
  project121.image_url.attach(io: File.open(projectpath121), filename: "f180387e58d6ca72c58096f96d034867_original.jpg")
  project121.save
  user122 = User.new(name: "George Herrera", email: "georgeherrera@gmail.com", password: "starwars", biography: 'Christian youth worker & minister in Manchester, England.', google_analytics: "")
  userpath122 = File.join(Rails.root, 'app', "assets", "images", "b1296d1a54f256bf432e9dae68cfbd64_original.jpg")
  user122.profile_url.attach(io: File.open(userpath122), filename: "b1296d1a54f256bf432e9dae68cfbd64_original.jpg")
  user122.save
  project122 = Project.new(duration: 0, limit: false, user_id: user122.id, country: "the United Kingdom", title: "Virtual Reality Encounter with Jesus Christ", description: "Virtual Reality app for young people to Encounter Jesus Christ and get excited about the Gospel.", pledge_amt: 0, eta: nil, shipping: "", city: "Manchester", state: "UK", funding_goal: 107375, category_id: categories[8].id, subcategory: "Mobile Games", challenges: "")
  projectpath122 = File.join(Rails.root, 'app', "assets", "images", "d8ce11d30a21ffcf68e3b5f6da710830_original.jpg")
  project122.image_url.attach(io: File.open(projectpath122), filename: "d8ce11d30a21ffcf68e3b5f6da710830_original.jpg")
  project122.save
  user123 = User.new(name: "Myss Tic", email: "mysstic@gmail.com", password: "starwars", biography: 'Myss Tic is an immersive theatrical Escape Room experience. We strive to offer unique experiences and we mix our two passions: Escape Rooms and immersive theatre.', google_analytics: "")
  userpath123 = File.join(Rails.root, 'app', "assets", "images", "fc31ddb6d50310cc2197856360bd32f0_original.jpg")
  user123.profile_url.attach(io: File.open(userpath123), filename: "fc31ddb6d50310cc2197856360bd32f0_original.jpg")
  user123.save
  project123 = Project.new(duration: 0, limit: false, user_id: user123.id, country: "the United States", title: "Myss Tic - Immersive Escape Rooms", description: "A fully immersive live experience, where you create your own adventure - a story only you can tell.", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: 7940, category_id: categories[8].id, subcategory: "Live Games", challenges: "")
  projectpath123 = File.join(Rails.root, 'app', "assets", "images", "13dbf2b998cf6cdb6dd1a499c0abb862_original.png")
  project123.image_url.attach(io: File.open(projectpath123), filename: "13dbf2b998cf6cdb6dd1a499c0abb862_original.png")
  project123.save
  user124 = User.new(name: "Kymbr Mundstock", email: "kymbrmundstock@gmail.com", password: "starwars", biography: 'When I was a kid I played role-playing games. Sitting at a table, rolling dice while the game master lead us in a tale of adventure and intrigue. I enjoyed the escape into that fantasy world for even a few hours per week. But real life, family and school didn\'t allow that escape to go on as long as I would have liked. I went to camps occasionally, and I had fun, but they usually had a focus that wasn\'t exactly mine. I didn\'t enjoy exercise for its own sake. I didn\'t make friends easily with the ultra-religious delighting in the wonders of God\'s creation or the adrenaline junkies who conquered mountains for bragging rights. Why struggle so hard to get up just to waste nearly as much time and effort to get back down. Fighting my way up to save a prisoner, defeat a villain or even just get information seemed a better motivation. As I grew older I got into costuming and visited renaissance fairs. I ran children\'s at a reigonal science fiction convention for many years. I taught kids of all ages in many subjects in childcare centers, afterschool care and homeschool co-ops. I was a scout leader and a tutor before I got my BA in Education. I write fantasy and light sci-fi books for young adults and sell crafts at local shows and conventions.', google_analytics: "")
  userpath124 = File.join(Rails.root, 'app', "assets", "images", "42b6ce8beaaf37191421c6f3bbd5ee16_original.jpg")
  user124.profile_url.attach(io: File.open(userpath124), filename: "42b6ce8beaaf37191421c6f3bbd5ee16_original.jpg")
  user124.save
  project124 = Project.new(duration: 0, limit: false, user_id: user124.id, country: "the United States", title: "Freehold Village", description: "Live Action Role Playing event space in Southern California", pledge_amt: 0, eta: nil, shipping: "", city: "Bakersfield", state: "CA", funding_goal: 25000, category_id: categories[8].id, subcategory: "Live Games", challenges: "")
  projectpath124 = File.join(Rails.root, 'app', "assets", "images", "86f92c6dee5b3f13d654f98950dde48e_original.jpg")
  project124.image_url.attach(io: File.open(projectpath124), filename: "86f92c6dee5b3f13d654f98950dde48e_original.jpg")
  project124.save
  user125 = User.new(name: "Gareth Rigby", email: "garethrigby@gmail.com", password: "starwars", biography: 'Ex bar, film and financial industry worker looking to realise a long-term dream of bringing an innovative social concept to Geneva.', google_analytics: "")
  userpath125 = File.join(Rails.root, 'app', "assets", "images", "8acf0242a6205173df985bbb2badb404_original.png")
  user125.profile_url.attach(io: File.open(userpath125), filename: "8acf0242a6205173df985bbb2badb404_original.png")
  user125.save
  project125 = Project.new(duration: 0, limit: false, user_id: user125.id, country: "Switzerland", title: "Rollers - Switzerland's first mini-golf bar", description: "Whack and roll through your favourite cinematic moments. A new concept for Geneva - a mini golf cocktail bar!", pledge_amt: 0, eta: nil, shipping: "", city: "Geneva", state: "Switzerland", funding_goal: 12561, category_id: categories[8].id, subcategory: "Live Games", challenges: "")
  projectpath125 = File.join(Rails.root, 'app', "assets", "images", "e0355f6faa18a1ce0ad947ad42d75923_original.jpg")
  project125.image_url.attach(io: File.open(projectpath125), filename: "e0355f6faa18a1ce0ad947ad42d75923_original.jpg")
  project125.save
  user126 = User.new(name: "Kevin", email: "kevin@gmail.com", password: "starwars", biography: 'Born and raised in Winona Ontario. Joined the military as a combat engineer and was posted in New Brunswick. After four years of service, I moved to the west coast of Canada to work in special effects and pyrotechnics in film and live events, My injury from the military took a bad turn, now back in Ontario, trying to make something of myself.', google_analytics: "")
  userpath126 = File.join(Rails.root, 'app', "assets", "images", "58865ab26b72fedf0cbb33326669e95d_original.jpg")
  user126.profile_url.attach(io: File.open(userpath126), filename: "58865ab26b72fedf0cbb33326669e95d_original.jpg")
  user126.save
  project126 = Project.new(duration: 0, limit: false, user_id: user126.id, country: "Canada", title: "Veteran operated paintball and airsoft field", description: "We need help getting our project off the ground to help other veterans in trouble", pledge_amt: 0, eta: nil, shipping: "", city: "Durham", state: "Canada", funding_goal: 3675, category_id: categories[8].id, subcategory: "Live Games", challenges: "")
  projectpath126 = File.join(Rails.root, 'app', "assets", "images", "d5b2b99ea2518a2e4d8c326ffca246c5_original.jpg")
  project126.image_url.attach(io: File.open(projectpath126), filename: "d5b2b99ea2518a2e4d8c326ffca246c5_original.jpg")
  project126.save
  user127 = User.new(name: "Hayde Bluegrass Orchestra", email: "haydebluegrassorchestra@gmail.com", password: "starwars", biography: 'A cold december morning they bought themselves a Upright Bass and held their first rehearsal in an apartment in Oslo. 5 years and 7 instruments later the eight member strong bluegrass orchestra still only has one song out on digital platforms, but over 450.000 views on their Youtube channel. Now it\'s time to make some more music available to the listeners.', google_analytics: "")
  userpath127 = File.join(Rails.root, 'app', "assets", "images", "7fc8c9bc09c60fb12abe9b750f2f6c6c_original.jpg")
  user127.profile_url.attach(io: File.open(userpath127), filename: "7fc8c9bc09c60fb12abe9b750f2f6c6c_original.jpg")
  user127.save
  project127 = Project.new(duration: 0, limit: false, user_id: user127.id, country: "Norway", title: "HAYDE BLUEGRASS ORCHESTRA: The First Album", description: "Support HAYDE BLUEGRASS ORCHESTRA in the making of their first Bluegrass/Folk/Americana album!", pledge_amt: 0, eta: nil, shipping: "", city: "Oslo", state: "Norway", funding_goal: 5706, category_id: categories[10].id, subcategory: "Country & Folk", challenges: "")
  projectpath127 = File.join(Rails.root, 'app', "assets", "images", "3647fbb8ab22b689ae8aab3ca22ae816_original.jpg")
  project127.image_url.attach(io: File.open(projectpath127), filename: "3647fbb8ab22b689ae8aab3ca22ae816_original.jpg")
  project127.save
  user128 = User.new(name: "Caitlin Cannon Eddins", email: "caitlincannoneddins@gmail.com", password: "starwars", biography: 'After beginning her songwriting career in Brooklyn, Caitlin Cannon (former NYC-based actor) moved to Colorado to learn everything she could about the well-crafted song. She released self-titled EP "Caitlin Cannon and the Artillery" with producer Tim "Randolph" Edgar (Imagine Dragons) off of which songs were recognized by the Rocky Mountain Folks Festival, featured on Democracy Now. She has since toured nationally with projects "Caitlin Cannon and the Artillery" and "The Cannondolls (& Balls)" sharing and/or warming stages for the likes of Lydia Loveless, Whitey Morgan, The Revered Horton Heat, We Dream Dawn, Julia Haltigan, Eleanore Whitmore, Eilen Jewel, Ned Ledoux, Farewell Angelina, Sundance Head, Tony Furtado and more.', google_analytics: "")
  userpath128 = File.join(Rails.root, 'app', "assets", "images", "f5cafd1e1d31c7734a1c094866c8142b_original.jpg")
  user128.profile_url.attach(io: File.open(userpath128), filename: "f5cafd1e1d31c7734a1c094866c8142b_original.jpg")
  user128.save
  project128 = Project.new(duration: 0, limit: false, user_id: user128.id, country: "the United States", title: "TrashCannon: A Satirical Reformist Ratchet-Country Album", description: "Caitlin Cannon repurposes her inner-garbage with TrashCannon, while paying homage to iconic female voices in country music.", pledge_amt: 0, eta: nil, shipping: "", city: "Denver", state: "CO", funding_goal: 10000, category_id: categories[10].id, subcategory: "Country & Folk", challenges: "")
  projectpath128 = File.join(Rails.root, 'app', "assets", "images", "d58951e7fae233285e2d63f9a5cb0fa0_original.png")
  project128.image_url.attach(io: File.open(projectpath128), filename: "d58951e7fae233285e2d63f9a5cb0fa0_original.png")
  project128.save
  user129 = User.new(name: "Sian Baker", email: "sianbaker@gmail.com", password: "starwars", biography: 'Portal is collaborative. We create a platform for DJs and live acts from Porto and beyond to share their talents with the world via our live stream. Electronic music is the heart of Portal, with no limits upon what you create and how you do it, we invite likeminded people to share our experience.', google_analytics: "")
  userpath129 = File.join(Rails.root, 'app', "assets", "images", "402797f4a35cf86ee03487dd568f8956_original.png")
  user129.profile_url.attach(io: File.open(userpath129), filename: "402797f4a35cf86ee03487dd568f8956_original.png")
  user129.save
  project129 = Project.new(duration: 0, limit: false, user_id: user129.id, country: "", title: "Portal: Arts and Music Space", description: "Portal will be a unique community space encompassing live music, artistic performances, installations and food.", pledge_amt: 0, eta: nil, shipping: "", city: "Porto", state: "Portugal", funding_goal: 12632, category_id: categories[10].id, subcategory: "Electronic Music", challenges: "")
  projectpath129 = File.join(Rails.root, 'app', "assets", "images", "dfacd6a7f685b0f36510a5c6aad99b68_original.jpg")
  project129.image_url.attach(io: File.open(projectpath129), filename: "dfacd6a7f685b0f36510a5c6aad99b68_original.jpg")
  project129.save
  user130 = User.new(name: "HAPE Collective", email: "hapecollective@gmail.com", password: "starwars", biography: 'HAPE Collective, born in Havana in 2016 at the time of a historic moment for Cuba, is committed to advancing content from the antipodes of the world, by connecting the dots between the musical industries, musical talents and institutions on the ground. Today, the collective has spread to more than 10 countries and multiplying collaborations with artists from Cuba, Chad, Mexico, United States, Italy, Belgium, the United Kingdom, etc… Formed by a group of deejays, musicians, music lovers and cultural promoters from different countries, HAPE Collective creates a unique space for experimentation, spanning various arts and facilitating international collaborations. MISSION STATEMENT We are a platform that promotes cultural exchange through barrier-breaking encounters. We celebrate diversity, creativity and cultural heritage, focusing on the discovery of music, people, and places. By putting at the center the cultural mix, the unquenchable thirst for modernizing roots, we strive to feed content from diverse parts of the world in a circular way to promote cross-fertilisation. The quest to bring us closer begins with music. We strengthen the interaction between musical actors of the center and periphery of the musical industry to improve skills and mutual understanding. We want and need people to be the main fuel of this melting pot: open-minded people who are willing to engage in unexpected cultural journeys and discoveries, and to become engine for creation.', google_analytics: "")
  userpath130 = File.join(Rails.root, 'app', "assets", "images", "bbf723f4a1a29479319fa35e568f2a01_original.png")
  user130.profile_url.attach(io: File.open(userpath130), filename: "bbf723f4a1a29479319fa35e568f2a01_original.png")
  user130.save
  project130 = Project.new(duration: 0, limit: false, user_id: user130.id, country: "", title: "Pulo NDJ's debut album: 'Desert to Douala' (Wonderwheel Rec)", description: "Pulo NDJ is an encounter between talented artists from Chad & Cameroon, globe-trotting Nickodemus and HAPE Collective's own DJ Buosis", pledge_amt: 0, eta: nil, shipping: "", city: "N'Djamena", state: "Chad", funding_goal: 3183, category_id: categories[10].id, subcategory: "World Music", challenges: "")
  projectpath130 = File.join(Rails.root, 'app', "assets", "images", "722376da803b9cf21fd2f7ed1226c941_original.jpeg")
  project130.image_url.attach(io: File.open(projectpath130), filename: "722376da803b9cf21fd2f7ed1226c941_original.jpeg")
  project130.save
  user131 = User.new(name: "Popula", email: "popula@gmail.com", password: "starwars", biography: 'News and culture, local to the world, since June 2018.', google_analytics: "")
  userpath131 = File.join(Rails.root, 'app', "assets", "images", "4faab3bb1c6c28724c6d6d2f066562a4_original.jpeg")
  user131.profile_url.attach(io: File.open(userpath131), filename: "4faab3bb1c6c28724c6d6d2f066562a4_original.jpeg")
  user131.save
  project131 = Project.new(duration: 0, limit: false, user_id: user131.id, country: "the United States", title: "Popula: the Alt-Global Magazine of News and Culture", description: "Journalist-owned, reader-supported, ad-free, permanently archived, high-quality independent art and information from planet Earth.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: 25000, category_id: categories[9].id, subcategory: "", challenges: "")
  projectpath131 = File.join(Rails.root, 'app', "assets", "images", "3b68ab225e49dcf7b27ac7f800f68998_original.jpg")
  project131.image_url.attach(io: File.open(projectpath131), filename: "3b68ab225e49dcf7b27ac7f800f68998_original.jpg")
  project131.save
  user132 = User.new(name: "Media Diversified", email: "mediadiversified@gmail.com", password: "starwars", biography: 'Media Diversified was established in 2013 to help change the conversation in the media and foreground the voices of writers of colour. Since then we’ve made a considerable impact for a small non-profit organisation - we’ve been challenging and shaping the regular news agenda in our own way, diversifying the media landscape and platforming voices you wouldn’t necessarily hear in mainstream outlets. We’ve been focused in our mission to open authentic narratives of marginalised experience to the mainstream and become a well-known brand in media circles.', google_analytics: "")
  userpath132 = File.join(Rails.root, 'app', "assets", "images", "9c82979f256e1e570beb28f7acd3d031_original.png")
  user132.profile_url.attach(io: File.open(userpath132), filename: "9c82979f256e1e570beb28f7acd3d031_original.png")
  user132.save
  project132 = Project.new(duration: 0, limit: false, user_id: user132.id, country: "the United Kingdom", title: "Media Diversified: funding a new era of writers of colour", description: "Media Diversified is here to help change the conversation in the media and foreground the voices of writers of colour.", pledge_amt: 0, eta: nil, shipping: "", city: "London", state: "UK", funding_goal: 7579, category_id: categories[9].id, subcategory: "Web", challenges: "")
  projectpath132 = File.join(Rails.root, 'app', "assets", "images", "d919009c39057c0b560eef9d4c05b88e_original.png")
  project132.image_url.attach(io: File.open(projectpath132), filename: "d919009c39057c0b560eef9d4c05b88e_original.png")
  project132.save
  user133 = User.new(name: "For Truth Media Group", email: "fortruthmediagroup@gmail.com", password: "starwars", biography: 'Chris Grisby is back with an all new show: Community Pulse. He will be visiting your communities to tell your stories, search for truth, and unite us in the pursuit of the answers we are all seeking. Chris is here to be the voice for Florida’s environment and you! Community Pulse with Chris Grisby will have new episodes weekly.', google_analytics: "")
  userpath133 = File.join(Rails.root, 'app', "assets", "images", "4450d33e0a5021ae77a50c5cee23ff33_original.png")
  user133.profile_url.attach(io: File.open(userpath133), filename: "4450d33e0a5021ae77a50c5cee23ff33_original.png")
  user133.save
  project133 = Project.new(duration: 0, limit: false, user_id: user133.id, country: "the United States", title: "Help For Truth Media Produce Its Next Investigative Report", description: "Community-backed, justice-driven & solution-oriented press coverage of red tide, climate change & other environmental concerns in FL.", pledge_amt: 0, eta: nil, shipping: "", city: "Fort Meyers", state: "FL", funding_goal: 5000, category_id: categories[9].id, subcategory: "Video", challenges: "")
  projectpath133 = File.join(Rails.root, 'app', "assets", "images", "a40a9a70a42bc2ca5e271fe34fadde7a_original.jpg")
  project133.image_url.attach(io: File.open(projectpath133), filename: "a40a9a70a42bc2ca5e271fe34fadde7a_original.jpg")
  project133.save
  user134 = User.new(name: "lawrence donegan", email: "lawrencedonegan@gmail.com", password: "starwars", biography: 'McKellar was founded jointly by Lawrence Donegan and Thomas Dunne, two long-established figures in the world of golf journalist. Lawrence was the long-time golf correspondent of the Guardian newspaper. Thomas was deputy editor of Travel and Leisure Golf and currently works for Golfweek magazine.', google_analytics: "")
  userpath134 = File.join(Rails.root, 'app', "assets", "images", "b6a98d9c28e081c4618fc92b294109de_original.png")
  user134.profile_url.attach(io: File.open(userpath134), filename: "b6a98d9c28e081c4618fc92b294109de_original.png")
  user134.save
  project134 = Project.new(duration: 0, limit: false, user_id: user134.id, country: "the United States", title: "McKellar Magazine", description: "McKellar is a literary golf journal showcasing world-class writing and illustration. Issue #2 will be published in February", pledge_amt: 0, eta: nil, shipping: "", city: "Rye", state: "NY", funding_goal: 4000, category_id: categories[9].id, subcategory: "Print", challenges: "")
  projectpath134 = File.join(Rails.root, 'app', "assets", "images", "6a5dd7ca267894c283d9eb28432ad45a_original.jpg")
  project134.image_url.attach(io: File.open(projectpath134), filename: "6a5dd7ca267894c283d9eb28432ad45a_original.jpg")
  project134.save
  user135 = User.new(name: "Mouse Books", email: "mousebooks@gmail.com", password: "starwars", biography: 'Mouse Books is 4 people: Brian Chappell: Ph.D, Teacher, Spiritual Philosopher David Dewane: Architect, Journalist, Social Entrepreneur Courtney Garvin: Graphic Designer, Runner, Epoch B All-Star Chris Motley: Architect, Snowboarder, Smooth Operator', google_analytics: "")
  userpath135 = File.join(Rails.root, 'app', "assets", "images", "224d52646396decb4a07139a5b7a6c57_original.jpg")
  user135.profile_url.attach(io: File.open(userpath135), filename: "224d52646396decb4a07139a5b7a6c57_original.jpg")
  user135.save
  project135 = Project.new(duration: 0, limit: false, user_id: user135.id, country: "the United States", title: "MOUSE BOOKS: SEASON 2", description: "Great Literature for a Mobile Life", pledge_amt: 0, eta: nil, shipping: "", city: "Chicago", state: "IL", funding_goal: 10000, category_id: categories[12].id, subcategory: "", challenges: "")
  projectpath135 = File.join(Rails.root, 'app', "assets", "images", "55cce6a4b06e8b145e7c80e6e9e45c38_original.jpg")
  project135.image_url.attach(io: File.open(projectpath135), filename: "55cce6a4b06e8b145e7c80e6e9e45c38_original.jpg")
  project135.save
  user136 = User.new(name: "Lucy Saunders", email: "lucysaunders@gmail.com", password: "starwars", biography: 'I am a British freelance photographer and designer based in Bath, England and the founder of Flourish. I initially trained at University studying Photography giving me a wealth of other talents such as graphic design, magazine creating and book binding. It was then I started to create magazine publications. After graduating I worked upon my own project \'Flourish\' with its key focus on photography - based around lifestyle and travel. I have a major passion for all arts including illustration, graphics, fine art and textiles which is why I want to build an artistic community not just a magazine. I want to encourage artistic collaborations, which I hope kickstarter will start. My other personal work has been set in other publications such as \'Boots, Tracks & Biscuits\' and freelance travel writing for other magazines. I enjoy the outdoors more than anything and thats why I wanted to share outdoors thriving with the world. Whether it is in the UK or abroad the most important thing is to capture and embrace what is around you. Thank you everyone!', google_analytics: "")
  userpath136 = File.join(Rails.root, 'app', "assets", "images", "b905f19d85091559c300b644e6b3b449_original.jpg")
  user136.profile_url.attach(io: File.open(userpath136), filename: "b905f19d85091559c300b644e6b3b449_original.jpg")
  user136.save
  project136 = Project.new(duration: 0, limit: false, user_id: user136.id, country: "the United Kingdom", title: "Flourish Vol. 2: A Travel & Lifestyle Magazine", description: "Vol. 2 - The British Isles is all about how we thrive in a particular place, community, or culture, and flourishing in the outdoors.", pledge_amt: 0, eta: nil, shipping: "", city: "Bath", state: "UK", funding_goal: 3158, category_id: categories[12].id, subcategory: "Periodicals", challenges: "")
  projectpath136 = File.join(Rails.root, 'app', "assets", "images", "2797f9c8ca2fa62b281fdaffc0b5a813_original.jpg")
  project136.image_url.attach(io: File.open(projectpath136), filename: "2797f9c8ca2fa62b281fdaffc0b5a813_original.jpg")
  project136.save
  user137 = User.new(name: "Microcosm Publishing", email: "microcosmpublishing@gmail.com", password: "starwars", biography: 'A small and innovative publishing house, Microcosm Publishing specializes in work designed to empower readers to improve their lives and communities. Microcosm fosters creativity by challenging conventional publishing wisdom, and tries to always have the most fun. Originally a zine distro and record label, Microcosm was founded in Cleveland, OH in 1996 and is now based in Portland, OR (you can read all about our history in our Kickstarter-funded book Good Trouble!). Our books are printed in the USA.', google_analytics: "")
  userpath137 = File.join(Rails.root, 'app', "assets", "images", "9b5299e059ae0b61697427349866a2c3_original.jpeg")
  user137.profile_url.attach(io: File.open(userpath137), filename: "9b5299e059ae0b61697427349866a2c3_original.jpeg")
  user137.save
  project137 = Project.new(duration: 0, limit: false, user_id: user137.id, country: "the United States", title: "Unf*ck Your Intimacy: Relationships, Sex & Dating", description: "Dr. Faith's inclusive, wise, funny guide to getting your love and sex lives on track. From the author of Unf*ck Your Brain.", pledge_amt: 0, eta: nil, shipping: "", city: "Portland", state: "OR", funding_goal: 10000, category_id: categories[12].id, subcategory: "Nonfiction", challenges: "")
  projectpath137 = File.join(Rails.root, 'app', "assets", "images", "d2c6d78a2bf4df32c89c36fedeca5d3c_original.jpg")
  project137.image_url.attach(io: File.open(projectpath137), filename: "d2c6d78a2bf4df32c89c36fedeca5d3c_original.jpg")
  project137.save
  user138 = User.new(name: "POW! Pots On Wheels!", email: "powpotsonwheels@gmail.com", password: "starwars", biography: 'POW! (Pots On Wheels!) is a collaborative group of functional potters who seek to connect our love of pots with all kinds of people by bringing shows, projects, and collaborations directly to communities in our mobile gallery. We’re six working artists, and a board of experienced professionals with many years of teaching and exhibition experience between us. We partner with museums, art centers, schools, and community centers to bring POW! to communities. With the support of organizations like our fiscal sponsor the Society of Arts and Crafts (A+C), we bring the joys of clay to a broader audience.', google_analytics: "")
  userpath138 = File.join(Rails.root, 'app', "assets", "images", "ad77ed0e8f83bbfa3be8d7c403593495_original.jpg")
  user138.profile_url.attach(io: File.open(userpath138), filename: "ad77ed0e8f83bbfa3be8d7c403593495_original.jpg")
  user138.save
  project138 = Project.new(duration: 0, limit: false, user_id: user138.id, country: "the United States", title: "Pots On Wheels", description: "We're creating a mobile outreach gallery of beautiful handmade pottery: an art and education collaboration with over 100", pledge_amt: 0, eta: nil, shipping: "", city: "Boston", state: "MA", funding_goal: 20000, category_id: categories[0].id, subcategory: "Ceramics", challenges: "")
  projectpath138 = File.join(Rails.root, 'app', "assets", "images", "689cd043f4f5d5b8eea95260bd0a5a2a_original.jpg")
  project138.image_url.attach(io: File.open(projectpath138), filename: "689cd043f4f5d5b8eea95260bd0a5a2a_original.jpg")
  project138.save
  user139 = User.new(name: "Marina Villa Pardinas", email: "marinavillapardinas@gmail.com", password: "starwars", biography: '¡Hola!, me llamo Marina y soy la creadora de Matope Cerámica. Considero la cerámica como un medio de expresión infinita, como una forma de encontrarse a uno mismo y como un vehículo de creación impredecible y sorpresivo. A través de mi trabajo con este material, busco rescatar el valor de las cosas simples, de los detalles; de la tarea manual, encontrar belleza en la imperfección y en lo auténtico.', google_analytics: "")
  userpath139 = File.join(Rails.root, 'app', "assets", "images", "ce4d3325c091b2b6f254af3cc8b3873d_original.jpg")
  user139.profile_url.attach(io: File.open(userpath139), filename: "ce4d3325c091b2b6f254af3cc8b3873d_original.jpg")
  user139.save
  project139 = Project.new(duration: 0, limit: false, user_id: user139.id, country: "Mexico", title: "Handmade ceramic pieces - Matope Cerámica", description: "Ayúdame a crecer mi marca y a cumplir mi sueño. Desarrollaré una nueva línea de productos de cerámica hechos en torno.", pledge_amt: 0, eta: nil, shipping: "", city: "Mexico City", state: "Mexico", funding_goal: 110000, category_id: categories[0].id, subcategory: "Ceramics", challenges: "")
  projectpath139 = File.join(Rails.root, 'app', "assets", "images", "5aebebe1d6d3f951fae114b17891cd69_original.jpg")
  project139.image_url.attach(io: File.open(projectpath139), filename: "5aebebe1d6d3f951fae114b17891cd69_original.jpg")
  project139.save
  user140 = User.new(name: "Sarah Kersten Handmade", email: "sarahkerstenhandmade@gmail.com", password: "starwars", biography: 'Sarah Kersten is a ceramic artist working in Berkeley, CA. Inspired by what she loves and uses in her kitchen, her work is functional, durable, and beautiful. Her first project as a professional ceramicist has been the Vegetable Fermentation Jar, a piece that combines her lifelong pursuit of ceramics with her passion for the health benefits of fermentation and whole foods.', google_analytics: "")
  userpath140 = File.join(Rails.root, 'app', "assets", "images", "dc376d40b842088ff81a04e771b6b117_original.jpg")
  user140.profile_url.attach(io: File.open(userpath140), filename: "dc376d40b842088ff81a04e771b6b117_original.jpg")
  user140.save
  project140 = Project.new(duration: 0, limit: false, user_id: user140.id, country: "the United States", title: "Sarah Kersten Handmade Studio", description: "Help build a studio space for Sarah Kersten Handmade, a small ceramic production company in Berkeley, California.", pledge_amt: 0, eta: nil, shipping: "", city: "Berkeley", state: "CA", funding_goal: 30000, category_id: categories[0].id, subcategory: "Ceramics", challenges: "")
  projectpath140 = File.join(Rails.root, 'app', "assets", "images", "0d3a7a147373577a6810226c93a62090_original.jpg")
  project140.image_url.attach(io: File.open(projectpath140), filename: "0d3a7a147373577a6810226c93a62090_original.jpg")
  project140.save
  user141 = User.new(name: "Susannah Tisue", email: "susannahtisue@gmail.com", password: "starwars", biography: 'Cincinnati based artist Susannah Tisue has a degree in fine art from New York University and developed her pottery knowledge as a resident artist and faculty member at the historic Greenwich House Pottery in Manhattan. It was there that she discovered porcelain, and the beautiful effects of reduction gas firing. She lives and works in Cincinnati, Ohio, currently in a studio at Queen City Clay, alongside her furniture-maker husband (www.michaelmiritello.com) and four year old son, Theo.', google_analytics: "")
  userpath141 = File.join(Rails.root, 'app', "assets", "images", "c36345ce521d31f776528f2f6b664205_original.jpg")
  user141.profile_url.attach(io: File.open(userpath141), filename: "c36345ce521d31f776528f2f6b664205_original.jpg")
  user141.save
  project141 = Project.new(duration: 0, limit: false, user_id: user141.id, country: "the United States", title: "The Potter and the RAM", description: "I make sturdy, high-fired porcelain tableware with fine illustrations in my Brooklyn studio-- I'm looking to launch the RAM line!", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: 16000, category_id: categories[0].id, subcategory: "Ceramics", challenges: "")
  projectpath141 = File.join(Rails.root, 'app', "assets", "images", "de0dfd83205f88addd0b9b38cad4ab79_original.jpg")
  project141.image_url.attach(io: File.open(projectpath141), filename: "de0dfd83205f88addd0b9b38cad4ab79_original.jpg")
  project141.save
  user142 = User.new(name: "Simone Bodmer-Turner", email: "simonebodmerturner@gmail.com", password: "starwars", biography: 'SIMONE BODMER - TURNER is a ceramic artist and sculptor living and working in Brooklyn, NY. She travels annually to study with traditional clay communities in Mexico and Japan, and the styles and building methods of each places have greatly influenced her technique. She is inspired by both ancient form and method as well as midcentury design and architecture, which translates into her neutrally hued collection of handbuilt vessels and sculpture. She sells her work in a selection of New York-based interior design and fashion retailers, and is expanding within the US and internationally in 2019.', google_analytics: "")
  userpath142 = File.join(Rails.root, 'app', "assets", "images", "12af99888ca126ffe3b22cdaef32aa2d_original.jpg")
  user142.profile_url.attach(io: File.open(userpath142), filename: "12af99888ca126ffe3b22cdaef32aa2d_original.jpg")
  user142.save
  project142 = Project.new(duration: 0, limit: false, user_id: user142.id, country: "the United States", title: "Simone Bodmer-Turner : Clay Studio Buildout", description: "Building a studio space to expand production, hire extra hands, host workshops and dinner series, and allow space for sculptural work.", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: 25000, category_id: categories[0].id, subcategory: "Ceramics", challenges: "")
  projectpath142 = File.join(Rails.root, 'app', "assets", "images", "2fad12393a5baff57e61c935e27817a4_original.jpg")
  project142.image_url.attach(io: File.open(projectpath142), filename: "2fad12393a5baff57e61c935e27817a4_original.jpg")
  project142.save
  user143 = User.new(name: "Swoon / The Heliotrope Foundation", email: "swoontheheliotropefoundation@gmail.com", password: "starwars", biography: 'Caledonia Curry is a classically trained visual artist and printmaker who has spent the last 15 years exploring the relationship between people and their built environment. In 2015, she founded the Heliotrope Foundation, a 501(c)(3) non-profit organization, to build on the values and vision of her community-based projects. Callie’s work has been collected and shown internationally, including the Los Angeles Museum of Contemporary Art, the Museum of Modern Art in New York, the Brooklyn Museum, the Institute of Contemporary Art Boston, and the Sao Paolo Museum of Art.', google_analytics: "")
  userpath143 = File.join(Rails.root, 'app', "assets", "images", "b1806f3f53e33cf9edfa52d734cc182e_original.jpg")
  user143.profile_url.attach(io: File.open(userpath143), filename: "b1806f3f53e33cf9edfa52d734cc182e_original.jpg")
  user143.save
  project143 = Project.new(duration: 0, limit: false, user_id: user143.id, country: "the United States", title: "Braddock Tiles", description: "Join Swoon in transforming a building into a work of art, a center for creativity, and a place for new beginnings.", pledge_amt: 0, eta: nil, shipping: "", city: "North Braddock", state: "PA", funding_goal: 50000, category_id: categories[0].id, subcategory: "Ceramics", challenges: "")
  projectpath143 = File.join(Rails.root, 'app', "assets", "images", "6fda1bea143f803c0554042da9b9a19d_original.jpg")
  project143.image_url.attach(io: File.open(projectpath143), filename: "6fda1bea143f803c0554042da9b9a19d_original.jpg")
  project143.save
  user144 = User.new(name: "Henry Crissman", email: "henrycrissman@gmail.com", password: "starwars", biography: 'Henry James Haver Crissman was born August 31st 1990 in Midland, MI, the son of two veterinarians and youngest of three children. He earned a BFA in Craft/Ceramics from the College for Creative Studies in Detroit, MI in 2012, graduating with Honors and as “Senior Select”. While there he was a resident artist at Fortress Studios LLC, where he built "The Salty Dog" Detroit Noborigama wood fired kiln with the help of a successfully funded Kickstarter campaign. He was an Oxbow fellow in 2010, a summer intern at Greenwich House Pottery in 2011, received a NCECA Regina Brown Undergraduate Student Fellowship in 2012 and a 2014 NCECA Graduate Student Fellowship to conduct this very project. He now lives in Alfred, NY with his two cats, Bob and Mona, and girlfriend Virginia Rose Torrence. He is currently a Ceramics MFA candidate at Alfred University expected to graduate in 2015. Building on a background of vessel making, he is actively exploring ceramic objects and processes as a catalyst for progressive interactions in a larger public sphere. For more information please visit: http://www.HenryCrissman.com', google_analytics: "")
  userpath144 = File.join(Rails.root, 'app', "assets", "images", "23012c2d4ed6855f9f920ca6057f8db0_original.jpg")
  user144.profile_url.attach(io: File.open(userpath144), filename: "23012c2d4ed6855f9f920ca6057f8db0_original.jpg")
  user144.save
  project144 = Project.new(duration: 0, limit: false, user_id: user144.id, country: "the United States", title: "The Mobile Anagama", description: "\"The Mobile Anagama\" wood fired kiln on a trailer will embark on a national tour exploring ceramics as community activism!", pledge_amt: 0, eta: nil, shipping: "", city: "Alfred", state: "NY", funding_goal: 3000, category_id: categories[0].id, subcategory: "Ceramics", challenges: "")
  projectpath144 = File.join(Rails.root, 'app', "assets", "images", "2beee1f65e5deaf336d99d02e53ff611_original.jpg")
  project144.image_url.attach(io: File.open(projectpath144), filename: "2beee1f65e5deaf336d99d02e53ff611_original.jpg")
  project144.save
end
