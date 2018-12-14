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
  user2 = User.new(name: "Wynd Technologies, Inc.", email: "wyndtechnologiesinc@gmail.com", password: "starwars", biography: "We're a startup that wants to enable clean air for everyone. Wynd was founded in 2014, and since then, the team has been hard at work engineering a solution that can bring healthy air to those in unhealthy environments.", websites: "", google_analytics: "")
  userpath2 = File.join(Rails.root, 'app', "assets", "images", "26441e13bbd6229c41392b247987ed53_original.png")
  user2.profile_url.attach(io: File.open(userpath2), filename: "26441e13bbd6229c41392b247987ed53_original.png")
  user2.save
  project2 = Project.new(duration: 0, limit: false, user_id: user2.id, country: "the United States", title: "Wynd Halo + Home Purifier: Keep your home’s air healthy", description: "The world's smartest air monitor meets the most powerful purifier in its class.", pledge_amt: 0, eta: nil, shipping: "", city: "Redwood City", state: "CA", funding_goal: "$50,000", category_id: categories[13].id, subcategory: "Hardware", challenges: "")
  projectpath2 = File.join(Rails.root, 'app', "assets", "images", "d60844185a965dbb862faef51950e637_original.png")
  project2.image_url.attach(io: File.open(projectpath2), filename: "d60844185a965dbb862faef51950e637_original.png")
  project2.save
  user3 = User.new(name: "Maurice Ribble", email: "mauriceribble@gmail.com", password: "starwars", biography: "Maurice is an inventor and engineer. He enjoys understanding fragments of the universe and solving problems he encounters.", websites: "", google_analytics: "")
  userpath3 = File.join(Rails.root, 'app', "assets", "images", "ed91c4b4f5971395e1d338eb5c4e61dd_original.jpg")
  user3.profile_url.attach(io: File.open(userpath3), filename: "ed91c4b4f5971395e1d338eb5c4e61dd_original.jpg")
  user3.save
  project3 = Project.new(duration: 0, limit: false, user_id: user3.id, country: "the United States", title: "Electric Eel Wheel Mini 2", description: "The hand-sized fully functioning electric spinning wheel that spins wool and other fibers into yarn.", pledge_amt: 0, eta: nil, shipping: "", city: "Worcester", state: "MA", funding_goal: "$15,000", category_id: categories[13].id, subcategory: nil, challenges: "")
  projectpath3 = File.join(Rails.root, 'app', "assets", "images", "b5ef915e27ebecfd5c2cef12b8eff881_original.jpg")
  project3.image_url.attach(io: File.open(projectpath3), filename: "b5ef915e27ebecfd5c2cef12b8eff881_original.jpg")
  project3.save
  user4 = User.new(name: "Mira Ong Chua", email: "miraongchua@gmail.com", password: "starwars", biography: "comic artist", websites: "", google_analytics: "")
  userpath4 = File.join(Rails.root, 'app', "assets", "images", "f969b4f6b2151164ea07b9dd655a554d_original.png")
  user4.profile_url.attach(io: File.open(userpath4), filename: "f969b4f6b2151164ea07b9dd655a554d_original.png")
  user4.save
  project4 = Project.new(duration: 0, limit: false, user_id: user4.id, country: "the United States", title: "ROADQUEEN: ETERNAL ROADTRIP TO LOVE", description: "Help us print the first book of Cut Time, a fantasy comic inspired by astrology for teen readers and up!", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: "$5,500", category_id: categories[1].id, subcategory: "Graphic Novels", challenges: "")
  projectpath4 = File.join(Rails.root, 'app', "assets", "images", "e7e9eceb13789f84a65dee211a99c645_original.jpg")
  project4.image_url.attach(io: File.open(projectpath4), filename: "e7e9eceb13789f84a65dee211a99c645_original.jpg")
  project4.save
  user5 = User.new(name: "Hiveworks Comics", email: "hiveworkscomics@gmail.com", password: "starwars", biography: "Hiveworks Comics is a creator-owned published and studio dedicated to distributing and promoting wonderful stories to an online audience.", websites: "", google_analytics: "")
  userpath5 = File.join(Rails.root, 'app', "assets", "images", "379a5196027eb91b651314d19c66f005_original.png")
  user5.profile_url.attach(io: File.open(userpath5), filename: "379a5196027eb91b651314d19c66f005_original.png")
  user5.save
  project5 = Project.new(duration: 0, limit: false, user_id: user5.id, country: "the United States", title: "Cut Time - Book 1", description: "Help us print the first book of Cut Time, a fantasy comic inspired by astrology for teen readers and up!", pledge_amt: 0, eta: nil, shipping: "", city: "Austin", state: "TX", funding_goal: "$15,000", category_id: categories[1].id, subcategory: "Webcomics", challenges: "")
  projectpath5 = File.join(Rails.root, 'app', "assets", "images", "97ca269b2421afae3577441e10e51a66_original.png")
  project5.image_url.attach(io: File.open(projectpath5), filename: "97ca269b2421afae3577441e10e51a66_original.png")
  project5.save
  user6 = User.new(name: "TO Comix Press", email: "tocomixpress@gmail.com", password: "starwars", biography: "The TO Comix Press publishes comic work celebrating upcoming creators and diverse voices. Founded in 2014, we've sold over 5,000 books and raised over $75,000 on Kickstarter. We've been nominated for the Gene Day Award for excellence in self-publishing in 2015, 2016, and 2017.", websites: "", google_analytics: "")
  userpath6 = File.join(Rails.root, 'app', "assets", "images", "a66fc34972e18b43886b9bf6807030d1_original.jpg")
  user6.profile_url.attach(io: File.open(userpath6), filename: "a66fc34972e18b43886b9bf6807030d1_original.jpg")
  user6.save
  project6 = Project.new(duration: 0, limit: false, user_id: user6.id, country: "Canada", title: "Shout Out Anthology", description: "A bold new anthology of queer comics for teen readers, from an award-winning queer creative team.", pledge_amt: 0, eta: nil, shipping: "", city: "Toronto", state: "Canada", funding_goal: "$22,547", category_id: categories[1].id, subcategory: "Anthologies", challenges: "")
  projectpath6 = File.join(Rails.root, 'app', "assets", "images", "d31b76e30dd1707f27dbca6bb0e3856f_original.jpg")
  project6.image_url.attach(io: File.open(projectpath6), filename: "d31b76e30dd1707f27dbca6bb0e3856f_original.jpg")
  project6.save
  user7 = User.new(name: "Lyfe Illustration", email: "lyfeillustration@gmail.com", password: "starwars", biography: "Hello there! My name is Lydia Fenwick, but the internet knows me as Lyfe Illustration. I am a California native professional illustrator focussing on portraying the harmony between femininity and nature. I graduated summa cum laude from Laguna College of Art and Design in 2016 and am now back teaching my own class: Artist as Entrepreneur. In addition to being an illustrator, I am a \"Mother of Tree Dragons,\" aka: panther chameleons.", websites: "", google_analytics: "")
  userpath7 = File.join(Rails.root, 'app', "assets", "images", "eda10c4a6d87deac69415dbe0f447363_original.jpg")
  user7.profile_url.attach(io: File.open(userpath7), filename: "eda10c4a6d87deac69415dbe0f447363_original.jpg")
  user7.save
  project7 = Project.new(duration: 0, limit: false, user_id: user7.id, country: "the United States", title: "Galaxy Girls: Illustrated Constellations", description: "A beautifully detailed art book filled with 31 astrology and constellation based art work by Lyfe Illustration", pledge_amt: 0, eta: nil, shipping: "", city: "Ventura", state: "CA", funding_goal: "$7,500", category_id: categories[0].id, subcategory: "Illustration", challenges: "")
  projectpath7 = File.join(Rails.root, 'app', "assets", "images", "05afadadeb0222c204e4dccd80bf31c5_original.png")
  project7.image_url.attach(io: File.open(projectpath7), filename: "05afadadeb0222c204e4dccd80bf31c5_original.png")
  project7.save
  user8 = User.new(name: "PvP Online", email: "pvponline@gmail.com", password: "starwars", biography: "PvP Online is an Eisner and Harvey award winning comic created by cartoonist Scott Kurtz. First appearing online May 4th, 1998 it has become one of the most prominent and longest running pop-culture related webcomics on the internet.", websites: "", google_analytics: "")
  userpath8 = File.join(Rails.root, 'app', "assets", "images", "fe3c47da90bb8f71bc1e6c6bb6966ec5_original.jpg")
  user8.profile_url.attach(io: File.open(userpath8), filename: "fe3c47da90bb8f71bc1e6c6bb6966ec5_original.jpg")
  user8.save
  project8 = Project.new(duration: 0, limit: false, user_id: user8.id, country: "the United States", title: "PvP Definitive Edition 20th Anniversary Collection", description: '9 volumes with over 2,500 pages in deluxe 12"x10" oversized hardcover format collecting all 20 Years of PvP comics.', pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: "$75,000", category_id: categories[1].id, subcategory: "Webcomics", challenges: "")
  projectpath8 = File.join(Rails.root, 'app', "assets", "images", "e4e7bbd041416787ffc9dc010460b2ec_original.jpg")
  project8.image_url.attach(io: File.open(projectpath8), filename: "e4e7bbd041416787ffc9dc010460b2ec_original.jpg")
  project8.save
  user9 = User.new(name: "Mythic Games, Inc.", email: "mythicgamesinc@gmail.com", password: "starwars", biography: "We are a relatively new company, though one with almost a century of games industry experience among our staff. This is the first Kickstarter campaign we have done on our own - the previous one was one of our designs: Mythic Battles: Pantheon, Kickstarted in collaboration with Monolith. This proved very popular, with 13,635 happy backers. At Mythic Games, we aim to make games that are so attractive that you don’t want to leave them on the shelf, and so much fun to play that you don’t want to put them back. This process starts with brilliant designers, artists, and sculptors, goes through intense public testing, and arrives here, on Kickstarter. And even this is not the end of the development process. We see a Kickstarter campaign as a collaborative event, not just a shop window. We want you to give your feedback, and we are happy to listen. That is the route to the best games in the world!", websites: "", google_analytics: "")
  userpath9 = File.join(Rails.root, 'app', "assets", "images", "659d6858b1f5fb59d53c05aa3cf42769_original.png")
  user9.profile_url.attach(io: File.open(userpath9), filename: "659d6858b1f5fb59d53c05aa3cf42769_original.png")
  user9.save
  project9 = Project.new(duration: 0, limit: false, user_id: user9.id, country: "the United States", title: "Reichbusters: Projekt Vril", description: "Aliens! Mutants! Weird science! Gather your Heroes to smash the Nazis in this cooperative action-adventure board game for 1-4 players.", pledge_amt: 0, eta: nil, shipping: "", city: "Newark", state: "DE", funding_goal: "$100,000", category_id: categories[8].id, subcategory: nil, challenges: "")
  projectpath9 = File.join(Rails.root, 'app', "assets", "images", "1c67faa6a069410393fd6a289b82aff9_original.jpg")
  project9.image_url.attach(io: File.open(projectpath9), filename: "1c67faa6a069410393fd6a289b82aff9_original.jpg")
  project9.save
  user10 = User.new(name: "Labyrinth", email: "labyrinth@gmail.com", password: "starwars", biography: "A boy with a dream to make video games.", websites: "", google_analytics: "")
  userpath10 = File.join(Rails.root, 'app', "assets", "images", "6fcd624d088bdd668f919ce6ef538cd9_original.png")
  user10.profile_url.attach(io: File.open(userpath10), filename: "6fcd624d088bdd668f919ce6ef538cd9_original.png")
  user10.save
  project10 = Project.new(duration: 0, limit: false, user_id: user10.id, country: "New Zealand", title: "Aethyr", description: "Aethyr is an Open World 2D Action Adventure game set in a world ruined by an arcane apocalypse inspired by the golden age of RPGs.", pledge_amt: 0, eta: nil, shipping: "", city: "Prague", state: "Czech Republic", funding_goal: "$15,000", category_id: categories[8].id, subcategory: "Video Games", challenges: "")
  projectpath10 = File.join(Rails.root, 'app', "assets", "images", "81c149b136b579ad58e721ba14392b63_original.png")
  project10.image_url.attach(io: File.open(projectpath10), filename: "81c149b136b579ad58e721ba14392b63_original.png")
  project10.save
  user11 = User.new(name: "Triton Noir", email: "tritonnoir@gmail.com", password: "starwars", biography: "Triton Noir is an independent studio creating and publishing board games. Founded in 2014, we are located in Montréal.", websites: "", google_analytics: "")
  userpath11 = File.join(Rails.root, 'app', "assets", "images", "b6d2a438f01bf4167f12a3fe7898c7fe_original.png")
  user11.profile_url.attach(io: File.open(userpath11), filename: "b6d2a438f01bf4167f12a3fe7898c7fe_original.png")
  user11.save
  project11 = Project.new(duration: 0, limit: false, user_id: user11.id, country: "Canada", title: "Assassin's Creed®: Brotherhood of Venice", description: "The story driven cooperative miniatures board game in the Assassin's Creed® universe", pledge_amt: 0, eta: nil, shipping: "", city: "Montreal", state: "Canada", funding_goal: "$97,704", category_id: categories[8].id, subcategory: "Tabletop Games", challenges: "")
  projectpath11 = File.join(Rails.root, 'app', "assets", "images", "9db8ced04389262d3e9d2ca1d2f66517_original.jpg")
  project11.image_url.attach(io: File.open(projectpath11), filename: "9db8ced04389262d3e9d2ca1d2f66517_original.jpg")
  project11.save
  user12 = User.new(name: "Aloft Studio", email: "aloftstudio@gmail.com", password: "starwars", biography: "Dennis Varvaro, age 31, does Art, Design, Writing, and Community media and Marketing for Aloft. He is a long-time student of Game Design Theory, and a life-long gamer with high reverence for the great productions of the early 90's.He has been involved in the indie game development and protoyping scene for around 7 years. He is the holder of a Professional-Bachelor's degree in Architecture from the University of Notre Dame with an emphasis on historic and traditional design. He has done work in classically-oriented architecture and landscape architecture firms on the US east coast and in Belgium, and has contributed to historic architectural survey work for the Prince's Foundation. He is also an adept at several commercial game engines and computer modeling suites, and an amateur musician and composer. Mark Harbaugh, age 31, does Code, Prototyping, Scripting, and Design for Aloft. He has been writing code for over 13 years now, and is fluent in C\#, C++, Javascript, HTML, PHP, Actionscript, GML, and Clojure, as well as Assembly and Machine language. For almost as long, he has been putting those skills to work prototyping around a dozen of his own game concepts. Mark pursues game development as a way of balancing his interest and proficiency in computer science with his strong creative impulse. He has a great love for the idea of games as a vehicle for storytelling and world building, as well as a careful hand for the minutia of a functional game structure. Mark is a long-time student of the mechanics of classic-era game engines, and their common solutions, and brings this knowledge to bear in invoking the feel of these great titles by learning from their solutions. Shannon Mason, (AKA \"Pongball\"), age 35, is joining us as a composer for Hazelnut Bastille. She is a lifelong composer who has worked on indie and casual mobile games for around 7 years. Shannon writes in a wide range of musical styles, but has found a particular niche in the romanticism of the 16 bit era. Through her close understanding of the writing techniques and character of the time, she has managed to create a sound which is a direct continuation of the lineage of the great 16 bit soundtracks, rather than merely an imitation of them. Samples of past work can be found at: https://soundcloud.com/pongball", websites: "", google_analytics: "")
  userpath12 = File.join(Rails.root, 'app', "assets", "images", "5b6769c9e418a90c10c20751c870e6d9_original.png")
  user12.profile_url.attach(io: File.open(userpath12), filename: "5b6769c9e418a90c10c20751c870e6d9_original.png")
  user12.save
  project12 = Project.new(duration: 0, limit: false, user_id: user12.id, country: "the United States", title: "Hazelnut Bastille, a 16bit Indie Adventure", description: "Hazelnut Bastille is a topdown, Zelda-like ARPG, presented in a rigorously-period 16 bit style.", pledge_amt: 0, eta: nil, shipping: "", city: "Virginia Beach", state: "VA", funding_goal: "$65,000", category_id: categories[8].id, subcategory: "Video Games", challenges: "")
  projectpath12 = File.join(Rails.root, 'app', "assets", "images", "9b810a43a612858ddbc3c26304034874_original.png")
  project12.image_url.attach(io: File.open(projectpath12), filename: "9b810a43a612858ddbc3c26304034874_original.png")
  project12.save
  user13 = User.new(name: "Jonas Manke", email: "jonasmanke@gmail.com", password: "starwars", biography: "I am a 33 year old professional freelance character animator and work in the games- and filmindustry for more than a decade, raising 3 kids in a small city in Germany. Art, traditional or digital, plays a huge role in my life, I enjoy playing instruments and have a nerdy passion for science stuff like astronomy.", websites: "", google_analytics: "")
  userpath13 = File.join(Rails.root, 'app', "assets", "images", "3aa20a27333fab69b104d7e57bf07b08_original.jpg")
  user13.profile_url.attach(io: File.open(userpath13), filename: "3aa20a27333fab69b104d7e57bf07b08_original.jpg")
  user13.save
  project13 = Project.new(duration: 0, limit: false, user_id: user13.id, country: "Germany", title: "OMNO - an atmospheric exploration and puzzle adventure", description: "A journey of discovery through an ancient world of wonders", pledge_amt: 0, eta: nil, shipping: "", city: "Bielefeld", state: "Germany", funding_goal: "$36,145", category_id: categories[8].id, subcategory: "Video Games", challenges: "")
  projectpath13 = File.join(Rails.root, 'app', "assets", "images", "88bb96ca3ab257a919755df3d24875ff_original.jpg")
  project13.image_url.attach(io: File.open(projectpath13), filename: "88bb96ca3ab257a919755df3d24875ff_original.jpg")
  project13.save
  user14 = User.new(name: "Andrea Donadio & Lisa Predko", email: "andreadonadiolisapredko@gmail.com", password: "starwars", biography: "Lisa Food is a gluten free cookbook that celebrates the shared aesthetic and best friendship shared by photographer Lisa Predko and artist representative Andrea Donadio. This project is a love story about food, photography, and 2 best friends.", websites: "", google_analytics: "")
  userpath14 = File.join(Rails.root, 'app', "assets", "images", "7e025ed0ae018a800264b9a82c620513_original.jpg")
  user14.profile_url.attach(io: File.open(userpath14), filename: "7e025ed0ae018a800264b9a82c620513_original.jpg")
  user14.save
  project14 = Project.new(duration: 0, limit: false, user_id: user14.id, country: "the United States", title: "Lisa Food Vol. 1 - a gluten free vegetarian cookbook", description: "A collaboration between BFF's Lisa & Andy - Lisa Food is a collection of delicious GF recipes and incredible conceptual photography! :)", pledge_amt: 0, eta: nil, shipping: "", city: "Chicago", state: "IL", funding_goal: "$8,000", category_id: categories[7].id, subcategory: "Cookbooks", challenges: "")
  projectpath14 = File.join(Rails.root, 'app', "assets", "images", "00d2bf95a707475dc3df944f8612cb4d_original.jpg")
  project14.image_url.attach(io: File.open(projectpath14), filename: "00d2bf95a707475dc3df944f8612cb4d_original.jpg")
  project14.save
  user15 = User.new(name: "Kosan Travel Co.", email: "kosantravelco@gmail.com", password: "starwars", biography: "We are Kosan Travel Co., we design and produce the best clothing, gear and accessories for world travel. We believe that travel can effect positive change by inspiring new perspectives about the world you live in, and that the more you travel, the better off the world will be. We also know that the better prepared you are, the more you will be able to enjoy the experience. So, we’ve set out to build the best products for those who travel the world, and our mission is to help our travellers prepare for their journey.", websites: "", google_analytics: "")
  userpath15 = File.join(Rails.root, 'app', "assets", "images", "8a0bc6d2f0152f9656ed340b42e03588_original.png")
  user15.profile_url.attach(io: File.open(userpath15), filename: "8a0bc6d2f0152f9656ed340b42e03588_original.png")
  user15.save
  project15 = Project.new(duration: 0, limit: false, user_id: user15.id, country: "Canada", title: "The Kosan Go Travel Dress", description: "Lightweight, odour blocking, wrinkle resistant and adjustable, the Go Travel Dress is packed with 14 travel-friendly features!", pledge_amt: 0, eta: nil, shipping: "", city: "Vancouver", state: "Canada", funding_goal: "$11,273", category_id: categories[5].id, subcategory: "Apparel", challenges: "")
  projectpath15 = File.join(Rails.root, 'app', "assets", "images", "e05d0215fb76bdad3ff957733f5112ba_original.jpg")
  project15.image_url.attach(io: File.open(projectpath15), filename: "e05d0215fb76bdad3ff957733f5112ba_original.jpg")
  project15.save
  user16 = User.new(name: "Crowd Cookware", email: "crowdcookware@gmail.com", password: "starwars", biography: "Cooking is love made edible. For the love of cooking, we have come up with a brand name that brings us together: Crowd Cookware. With this, we can kick-start Crowd Cookware like traditional pirates. We are sailing a new trade route that doesn’t stop at the big brands’ route. This campaign is just the beginning of a bigger adventure for us: if we sail on the right course, then we can take things even further. Together we can do everything. For example, a multifunctional cast-iron frying pan for slow-cooked casseroles. Premium quality stainless steel blades that are comfortable to use. And kitchen electronics that make cooking a lot easier.", websites: "", google_analytics: "")
  userpath16 = File.join(Rails.root, 'app', "assets", "images", "39a9fc0024ea26c0abb2a12f25b83245_original.png")
  user16.profile_url.attach(io: File.open(userpath16), filename: "39a9fc0024ea26c0abb2a12f25b83245_original.png")
  user16.save
  project16 = Project.new(duration: 0, limit: false, user_id: user16.id, country: "Luxembourg", title: "Blackbeard cookware set: chef-grade, nonstick and nonscratch", description: "A new hack. A complete cookware set of the chef’s essentials. Based on our crowd’s wishes. For a fair price.", pledge_amt: 0, eta: nil, shipping: "", city: "Tilburg", state: "Netherlands", funding_goal: "$45,182", category_id: categories[7].id, subcategory: nil, challenges: "")
  projectpath16 = File.join(Rails.root, 'app', "assets", "images", "3f6e8771ed6448290eea8382192a7766_original.jpg")
  project16.image_url.attach(io: File.open(projectpath16), filename: "3f6e8771ed6448290eea8382192a7766_original.jpg")
  project16.save
  user17 = User.new(name: "Amy Nazer", email: "amynazer@gmail.com", password: "starwars", biography: "Aspiring mad scientist making flavor extracts for cooking, baking, and cocktails", websites: "", google_analytics: "")
  userpath17 = File.join(Rails.root, 'app', "assets", "images", "5ce61e93e85f95c482c5ac81a1ede208_original.jpg")
  user17.profile_url.attach(io: File.open(userpath17), filename: "5ce61e93e85f95c482c5ac81a1ede208_original.jpg")
  user17.save
  project17 = Project.new(duration: 0, limit: false, user_id: user17.id, country: "the United States", title: "A Holiday Cocktail Kit from Woodward Extract Co.", description: "Spice up your home bar with new winter flavors from Woodward Extract Co.", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: "$2,000", category_id: categories[7].id, subcategory: "Drinks", challenges: "")
  projectpath17 = File.join(Rails.root, 'app', "assets", "images", "0a979dea7d2229cd87c2503b761165e8_original.jpg")
  project17.image_url.attach(io: File.open(projectpath17), filename: "0a979dea7d2229cd87c2503b761165e8_original.jpg")
  project17.save
  user18 = User.new(name: "Joyce Zhu", email: "joycezhu@gmail.com", password: "starwars", biography: "My mother and I make all-natural milk chews, milk-based chewy snacks influenced by an Asian treat my mother grew up eating. We love traveling, discovering good food, and hiking.", websites: "", google_analytics: "")
  userpath18 = File.join(Rails.root, 'app', "assets", "images", "fcd159c55045a764cb4e4a48cf72ce04_original.png")
  user18.profile_url.attach(io: File.open(userpath18), filename: "fcd159c55045a764cb4e4a48cf72ce04_original.png")
  user18.save
  project18 = Project.new(duration: 0, limit: false, user_id: user18.id, country: "the United States", title: "Natural Milk Chews: tastes like candy, performs like a bar.", description: "Healthy, snack-able candy exists! Subtly sweet with more than 10 essential vitamins, 4g protein per serving, and just 6 ingredients.", pledge_amt: 0, eta: nil, shipping: "", city: "Lansdale", state: "PA", funding_goal: "$2,500", category_id: categories[7].id, subcategory: "Small Batch", challenges: "")
  projectpath18 = File.join(Rails.root, 'app', "assets", "images", "a7f86ad6b26a394c6a4b92409295186e_original.png")
  project18.image_url.attach(io: File.open(projectpath18), filename: "a7f86ad6b26a394c6a4b92409295186e_original.png")
  project18.save
  user19 = User.new(name: "Gustaf Fjelstrom", email: "gustaffjelstrom@gmail.com", password: "starwars", biography: "Gustaf Fjelstrom is a San Francisco Bay Area bassist, composer and producer. As an independent artist focused on instrumental works, Gustaf composes, records and performs ambient, looping, electronic post-rock. As a founding member of the power-trio Maximum Indifference in the late ’90’s, Gustaf composed and performed a unique body of cinematic instrumental rock music. By 2009, Gustaf had completed his inaugural solo release, METAMESMERIC, which featured his live-looping approach on the bass cello. In 2015, Gustaf released INTENTION, a collection of ambient, down tempo, post-rock pieces. The music composed for INTENTION represents a full-spectrum approach, incorporating ambient textures, nostalgic washes of analog synth, layers of live drums and programmed rhythms, etherial vocals, and rich, luxurious bass guitar. To support the release of this album, one that is sure to establish Gustaf’s voice in the genre. INTENTION is an exploration of complex soundscapes composed to evoke a mature and layered musical narrative evocative of the many layered emotional and rational components that create intent and purpose in each of our lives. In 2016 Gustaf began writing and recording the follow-up to INTENTION. BY the fall he had amassed enough material for more that two albums. As the material organized itself into two groupings, there were a few tracks that didn’t quite fit with either grouping, so he released those on the EP DIAMETRIC in the fall of 2016. Gustaf quick turned his focus back to finishing off the first grouping and in March of 2016 it was completed. THE PERIPHERAL ARC: VOLUME I is the first in what will eventually be a three-album cycle. It continues on the trajectory of some of the higher energy moments of INTENTION, while delving deeper into the realms of ambient bass guitar, analog synths, and lush, etherial textures (and of course, massive regular bass!). THE PERIPHERAL ARC: VOLUME I is due out in August of 2017 on Vinyl, Compact Disc, and Digital.The album is the latest in Gustaf’s journey of musical composition that blends sound and emotion to create fundamental audio narratives.", websites: "", google_analytics: "")
  userpath19 = File.join(Rails.root, 'app', "assets", "images", "c8094323daebcd3771cc175cbc30c2ea_original.jpeg")
  user19.profile_url.attach(io: File.open(userpath19), filename: "c8094323daebcd3771cc175cbc30c2ea_original.jpeg")
  user19.save
  project19 = Project.new(duration: 0, limit: false, user_id: user19.id, country: "the United States", title: "Codex Aegis : Volume II of the Peripheral Arc : Vinyl + CD", description: "A new album of instrumental ambient rock. Vinyl + CD + Digital", pledge_amt: 0, eta: nil, shipping: "", city: "San Jose", state: "CA", funding_goal: "$5,000", category_id: categories[10].id, subcategory: "Rock", challenges: "")
  projectpath19 = File.join(Rails.root, 'app', "assets", "images", "f43129a6bed7173f407cc36eba69afe0_original.jpg")
  project19.image_url.attach(io: File.open(projectpath19), filename: "f43129a6bed7173f407cc36eba69afe0_original.jpg")
  project19.save
  user20 = User.new(name: "Electric Six", email: "electricsix@gmail.com", password: "starwars", biography: "We are a rock band from Detroit, Michigan. Much as we might like to, we can't take you to a gay bar.", websites: "", google_analytics: "")
  userpath20 = File.join(Rails.root, 'app', "assets", "images", "c4955c206519123821aea85dc6813f2e_original.jpeg")
  user20.profile_url.attach(io: File.open(userpath20), filename: "c4955c206519123821aea85dc6813f2e_original.jpeg")
  user20.save
  project20 = Project.new(duration: 0, limit: false, user_id: user20.id, country: "the United States", title: "Electric Six - Live In Liverpool", description: "A filmed concert DVD/BluRay/Digital version of Electric Six Live In Liverpool, England", pledge_amt: 0, eta: nil, shipping: "", city: "Detroit", state: "MI", funding_goal: "$30,000", category_id: categories[10].id, subcategory: nil, challenges: "")
  projectpath20 = File.join(Rails.root, 'app', "assets", "images", "6b093b468c9c6adaf0756f19f6ae7746_original.jpg")
  project20.image_url.attach(io: File.open(projectpath20), filename: "6b093b468c9c6adaf0756f19f6ae7746_original.jpg")
  project20.save
  user21 = User.new(name: "Tiffany Topol", email: "tiffanytopol@gmail.com", password: "starwars", biography: "Tiffany is a musician, writer, artist, and performer based in New York and Chicago. She works as a personal songwriter and as a composer for the screen, most recently receiving an Outstanding Original Score nomination (Indie Series Awards) and win (LA Webfest) for her work on the series Best Thing You'll Ever Do, available on Amazon Prime. Follow her daily dance and movement experiment on Instagram @movethefurniture.", websites: "", google_analytics: "")
  userpath21 = File.join(Rails.root, 'app', "assets", "images", "f85ba491e896c62d31debd4539fd6ecf_original.png")
  user21.profile_url.attach(io: File.open(userpath21), filename: "f85ba491e896c62d31debd4539fd6ecf_original.png")
  user21.save
  project21 = Project.new(duration: 0, limit: false, user_id: user21.id, country: "the United States", title: "A Regenerative Pop Album Made by Womxn", description: "Tiffany Topol wants to put more womxn behind the scenes with her debut album - nearly 34 years in the making.", pledge_amt: 0, eta: nil, shipping: "", city: "Queens", state: "NY", funding_goal: "$8,500", category_id: categories[10].id, subcategory: nil, challenges: "")
  projectpath21 = File.join(Rails.root, 'app', "assets", "images", "9826a13e7ee48be908f7e8e16f35bf2b_original.jpeg")
  project21.image_url.attach(io: File.open(projectpath21), filename: "9826a13e7ee48be908f7e8e16f35bf2b_original.jpeg")
  project21.save
  user22 = User.new(name: "The Teacups", email: "theteacups@gmail.com", password: "starwars", biography: "The Teacups are a 4-part close-harmony folk and traditional music outfit! Their repertoire incorporates traditional songs from all over the UK and beyond, self-penned material and lots of joking around.", websites: "", google_analytics: "")
  userpath22 = File.join(Rails.root, 'app', "assets", "images", "de9f1edb30b0095a2a108b50af5a0b44_original.jpg")
  user22.profile_url.attach(io: File.open(userpath22), filename: "de9f1edb30b0095a2a108b50af5a0b44_original.jpg")
  user22.save
  project22 = Project.new(duration: 0, limit: false, user_id: user22.id, country: "the United Kingdom", title: "The Teacups Third Studio Album", description: "An album of traditional and contemporary a capella folk music from close-harmony quartet The Teacups", pledge_amt: 0, eta: nil, shipping: "", city: "Newcastle upon Tyne", state: "UK", funding_goal: "$8,279", category_id: categories[10].id, subcategory: "Country & Folk", challenges: "")
  projectpath22 = File.join(Rails.root, 'app', "assets", "images", "5d9e2e74dac8a3d0d8242e6032be89f0_original.jpg")
  project22.image_url.attach(io: File.open(projectpath22), filename: "5d9e2e74dac8a3d0d8242e6032be89f0_original.jpg")
  project22.save
  user23 = User.new(name: "Blues Funeral Recordings", email: "bluesfuneralrecordings@gmail.com", password: "starwars", biography: "Blues Funeral Recordings is an independent label created by the founders of MeteorCity and Lowrider, with heavy/doom/stoner/psych releases from Domkraft, Howling Giant (2019), Lowrider (2019), and the groundbreaking PostWax project, an exclusive subscription series featuring releases from phenomenal bands like Elder, Daxma, Spotlights, Besvärjelsen, and Lowrider with mindblowing art and design.", websites: "", google_analytics: "")
  userpath23 = File.join(Rails.root, 'app', "assets", "images", "121275afbf83ebcc73d60f6a32293b56_original.jpg")
  user23.profile_url.attach(io: File.open(userpath23), filename: "121275afbf83ebcc73d60f6a32293b56_original.jpg")
  user23.save
  project23 = Project.new(duration: 0, limit: false, user_id: user23.id, country: "the United States", title: "POSTWAX - A Curated Heavy Music Vinyl Subscription Series", description: "PostWax is a curated series of limited edition records from some of the best stoner metal, doom and heavy psych bands on the planet.", pledge_amt: 0, eta: nil, shipping: "", city: "Albuquerque", state: "NM", funding_goal: "$9,000", category_id: categories[10].id, subcategory: nil, challenges: "")
  projectpath23 = File.join(Rails.root, 'app', "assets", "images", "ebf7241f6b39cdb11c7b9e4994bd01e8_original.jpg")
  project23.image_url.attach(io: File.open(projectpath23), filename: "ebf7241f6b39cdb11c7b9e4994bd01e8_original.jpg")
  project23.save
  user24 = User.new(name: "Fortuna Media", email: "fortunamedia@gmail.com", password: "starwars", biography: "Initially established for TABULA IDEM and chiefly operated out of Seattle, WA by Mia \"Hye\" Mardikian, Fortuna Media seeks to produce unique, magical publishing with a focus on highlighting independent creator visions, and showing the talent of the diverse side of sexual, gender, cultural, and racial experiences in varying medias. EDITORS FOR ALMOST REAL: Jay Eaton has been harassing worms and pillbugs, wondering how organisms work and why, and using science to twist existing creatures into troubling new forms since childhood. Student of ecology and evolutionary biology, denizen of the California Bay area, and habitual world-builder; Jay continues draw made up animals and harrass bugs, but professionally this time. Server by day and typesetter by night, Mia \"Hye\" Mardikian (@explodinghye) is a queer graphic designer, editor, and administrator in the PNW with a taste for tea, tarot, and replying to as many emails as possible in one day. EIC of Fortuna Media that began with TABULA IDEM, they seek to create cohesive, collaborative works that give worthy frames to the beauty found in the art that graces their micropress' pages. Find them in the aether at explodinghye.com.", websites: "", google_analytics: "")
  userpath24 = File.join(Rails.root, 'app', "assets", "images", "fbc3a5f889240c4a23bd44ecf0580f92_original.png")
  user24.profile_url.attach(io: File.open(userpath24), filename: "fbc3a5f889240c4a23bd44ecf0580f92_original.png")
  user24.save
  project24 = Project.new(duration: 0, limit: false, user_id: user24.id, country: "the United States", title: "Almost Real: A Speculative Biology Zine (Vol. 2 • FLIGHT)", description: "Take off into the world of speculative biology with Almost Real's second volume focused on flight, powered by 15 amazing contributors.", pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: "$16,000", category_id: categories[12].id, subcategory: "Anthologies", challenges: "")
  projectpath24 = File.join(Rails.root, 'app', "assets", "images", "b7f7d1e91229f804bf3300200f312d7b_original.png")
  project24.image_url.attach(io: File.open(projectpath24), filename: "b7f7d1e91229f804bf3300200f312d7b_original.png")
  project24.save
  user25 = User.new(name: "Sven Sauer", email: "svensauer@gmail.com", password: "starwars", biography: "SVEN SAUER (Initiator Unseen Westeros) Sven Sauer lives in Berlin and has been working as a digital artist for international film productions for 15 years. Among others, he was involved in productions like Hugo Cabret, Atomic Blonde, Oblivion, and Lars von Triers’ Melancholia. His works were awarded several times, including an Emmy. Since the 2nd season he has been working for Game of Thrones. He is responsible for the development of Dragonstone, Harrenhal, and others.", websites: "", google_analytics: "")
  userpath25 = File.join(Rails.root, 'app', "assets", "images", "dd8e3cc2a2276e9b923fb7029ce4bfe5_original.jpg")
  user25.profile_url.attach(io: File.open(userpath25), filename: "dd8e3cc2a2276e9b923fb7029ce4bfe5_original.jpg")
  user25.save
  project25 = Project.new(duration: 0, limit: false, user_id: user25.id, country: "Germany", title: "Unseen Westeros Artbook - authorized by George R.R. Martin", description: "40 original `Game of Thrones` artists teamed up for 3 years to create an artbook about the pre-story of `A Song of Ice and Fire`.", pledge_amt: 0, eta: nil, shipping: "", city: "Berlin", state: "Germany", funding_goal: "$28,239", category_id: categories[12].id, subcategory: "Art Books", challenges: "")
  projectpath25 = File.join(Rails.root, 'app', "assets", "images", "1c3ba14b03a3be3abc67e2c407326b24_original.jpg")
  project25.image_url.attach(io: File.open(projectpath25), filename: "1c3ba14b03a3be3abc67e2c407326b24_original.jpg")
  project25.save
  user27 = User.new(name: "Micheline Pitt", email: "michelinepitt@gmail.com", password: "starwars", biography: "Micheline Pitt is a designer, artist, and filmmaker, best known for her fashion lines Vixen by Micheline Pitt and La Femme en Noire.", websites: "", google_analytics: nil)
  userpath27 = File.join(Rails.root, 'app', "assets", "images", "089b6c7d51de6f70724530a9eb51654e_original.jpg")
  user27.profile_url.attach(io: File.open(userpath27), filename: "089b6c7d51de6f70724530a9eb51654e_original.jpg")
  user27.save
  project27 = Project.new(duration: 0, limit: false, user_id: user27.id, country: "the United States", title: "GRUMMY", description: "A gothic fantasy film and children's book featuring legendary creature effects artist, KEVIN YAGHER.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: "$95,000", category_id: categories[6].id, subcategory: "Fantasy", challenges: "")
  projectpath27 = File.join(Rails.root, 'app', "assets", "images", "a6bea493e617e59dc755eafefa23cf9c_original.jpg")
  project27.image_url.attach(io: File.open(projectpath27), filename: "a6bea493e617e59dc755eafefa23cf9c_original.jpg")
  project27.save
  user28 = User.new(name: "Yasha Levine", email: "yashalevine@gmail.com", password: "starwars", biography: 'Yasha Levine is a Russian-born American author and investigative journalist. He came to the United States as a refugee and grew up in San Francisco. The New Yorker magazine praised his last book — Surveillance Valley: The Secret Military History of the Internet — as "forceful" and "salutary." He has reported extensively from both the United States and the former Soviet Union. His work has been published and profiled in The Baffler, Wired Magazine, The Nation, Slate, Penthouse, The New York Observer, Playboy, Not Safe For Work Corp, Alternet, Vanity Fair, The Verge, MSNBC and many others.', websites: "", google_analytics: "")
  userpath28 = File.join(Rails.root, 'app', "assets", "images", "d88286e4ad9bf5eb2f083a8e79dc72ca_original.jpg")
  user28.profile_url.attach(io: File.open(userpath28), filename: "d88286e4ad9bf5eb2f083a8e79dc72ca_original.jpg")
  user28.save
  project28 = Project.new(duration: 0, limit: false, user_id: user28.id, country: "the United States", title: "Pistachio Wars: Killing California for a Snack Food", description: "A groundbreaking documentary about Beverly Hills billionaires, marketing madness, water privatization, and...war with Iran.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: "$50,000", category_id: categories[6].id, subcategory: "Documentary", challenges: "")
  projectpath28 = File.join(Rails.root, 'app', "assets", "images", "0fddc7258e9daf3116f5f225ddb4b690_original.jpg")
  project28.image_url.attach(io: File.open(projectpath28), filename: "0fddc7258e9daf3116f5f225ddb4b690_original.jpg")
  project28.save
  user29 = User.new(name: "WG Film", email: "wgfilm@gmail.com", password: "starwars", biography: "WG Film produces high quality documentaries for broadcast and cinema. The earlier films of WG Film were often local stories with global relevance. With time, the films have become more and more international and WG Film is today considered one of the most successful companies in the genre of author- driven documentary film in Sweden and internationally. Selected films: Becoming Zlatan, Bikes vs Cars, Big Boys Gone Bananas!*, Love Always, Carolyn, BANANAS!*, Burma VJ (co-production), I Bought A Rainforest.", websites: "", google_analytics: "")
  userpath29 = File.join(Rails.root, 'app', "assets", "images", "5948fe741affee116595afeffeb0b9e5_original.jpeg")
  user29.profile_url.attach(io: File.open(userpath29), filename: "5948fe741affee116595afeffeb0b9e5_original.jpeg")
  user29.save
  project29 = Project.new(duration: 0, limit: false, user_id: user29.id, country: "Sweden", title: "PUSH - YOU CAN'T LIVE HERE ANYMORE", description: "Documentary exploring why it's become so expensive to live in our cities, feat Leilani Farha, UN Special Rapporteur to Adequate Housing", pledge_amt: 0, eta: nil, shipping: "", city: "Malmö", state: "Sweden", funding_goal: "$50,000", category_id: categories[6].id, subcategory: "Documentary", challenges: "")
  projectpath29 = File.join(Rails.root, 'app', "assets", "images", "37c6f5d10f6f8f01756ccf37c86fd357_original.jpg")
  project29.image_url.attach(io: File.open(projectpath29), filename: "37c6f5d10f6f8f01756ccf37c86fd357_original.jpg")
  project29.save
  user30 = User.new(name: "Shawn Pryor", email: "superflux@gmail.com", password: "starwars", biography: "Shawn Pryor is the creator and co-writer of the all-ages graphic novel mystery series CASH & CARRIE, writer of KENTUCKY KAIJU, and writer and co-creator of the football/drama series FORCE. He is one of the co-founders of Action Lab Entertainment and currently serves as their President of Creative Relations. In his free time, he enjoys reading, cooking, listening to streaming music playlists, and talking about why Zack from the Mighty Morphin Power Rangers is the greatest Black superhero of all-time.", websites: "", google_analytics: nil)
  userpath30 = File.join(Rails.root, 'app', "assets", "images", "a07448b1b6343b523c291198cd026ccb_original.jpg")
  user30.profile_url.attach(io: File.open(userpath30), filename: "a07448b1b6343b523c291198cd026ccb_original.jpg")
  user30.save
  project30 = Project.new(duration: 0, limit: false, user_id: user30.id, country: "Ireland", title: "CASH & CARRIE - BOOK TWO: SUMMER SLEUTHS!", description: "Middle school detectives Dallas Cash & Inez Carrie attempt to do some summer sleuthing in their BRAND NEW graphic novel!", pledge_amt: 0, eta: nil, shipping: "", city: "Lexington", state: "KY", funding_goal: "$8,000", category_id: categories[1].id, subcategory: "Graphic Novels", challenges: "")
  projectpath30 = File.join(Rails.root, 'app', "assets", "images", "26353cd6cfb032a8239ca56388ccb303_original.png")
  project30.image_url.attach(io: File.open(projectpath30), filename: "26353cd6cfb032a8239ca56388ccb303_original.png")
  project30.save
  user31 = User.new(name: "Natalija Vekic", email: "natalijavekic@gmail.com", password: "starwars", biography: "Natalija Vekic is a screenwriter and director. She won a Golden Gate Award at the San Francisco International Film Festival for her short film Lost & Found, and was the recipient of a Princess Grace Award in film. Natalija is a graduate of the UCLA MFA screenwriting program where she was awarded the Executive Board Award Fellowship and was one of eight writers selected to work with Academy Award-winning screenwriter Dustin Lance Black in a feature screenwriting seminar. She researched and wrote Jane, which was subsequently invited to participate in the Film Independent Screenwriting Lab and selected as an honoree in the Writers Guild of America West's Feature Access Diversity Project. A short documentary she co-directed about Pauline Kael, Ed & Pauline, premièred at the Telluride Film Festival and a short portrait of Academy Award nominated filmmaker Sam Green is currently streaming on Adobe Create Magazine. Natalija is Bosnian and Serbian and immigrated to Chicago when she was six years old. She’s convinced that not being able to speak English didn’t just ostracize her from her classmates, but taught her to be a keen observer and sparked her love of storytelling. Dreaming up stories was a way to regain her voice and make sense of her new home. Natalija writes and adapts screenplays for film and television about true or historic events from the perspective of outsiders, misfits and women who shape history, but are often forgotten. She loves to tackle complex and gritty female characters. She is working on “Bop City,” a dramatic pilot about the smoky, sexy, seedy and vibrant Jazz scene of 1950s San Francisco Fillmore district, which was destroyed by redevelopment.", websites: "", google_analytics: "")
  userpath31 = File.join(Rails.root, 'app', "assets", "images", "0057e043b034d9de868c7d89e18caf48_original.jpg")
  user31.profile_url.attach(io: File.open(userpath31), filename: "0057e043b034d9de868c7d89e18caf48_original.jpg")
  user31.save
  project31 = Project.new(duration: 0, limit: false, user_id: user31.id, country: "the United States", title: '"Jane" a short Film', description: "It's 1969. There is no Roe v. Wade. Teresa and Josie are part of an underground group who help women access safe abortions.", pledge_amt: 0, eta: nil, shipping: "", city: "Los Angeles", state: "CA", funding_goal: "$25,000", category_id: categories[6].id, subcategory: "Drama", challenges: "")
  projectpath31 = File.join(Rails.root, 'app', "assets", "images", "44eda5a59396f69d225e3aff5130114e_original.png")
  project31.image_url.attach(io: File.open(projectpath31), filename: "44eda5a59396f69d225e3aff5130114e_original.png")
  project31.save
  user32 = User.new(name: "AlexHubbell", email: "alexhubbell@gmail.com", password: "starwars", biography: "Alex is an artist and educator, but most of all, an animal lover. Her work uses natural elements to showcase the beauty of creatures great and small.", websites: "", google_analytics: "")
  userpath32 = File.join(Rails.root, 'app', "assets", "images", "72be69defe1aa41b21f98ee38427e345_original.jpg")
  user32.profile_url.attach(io: File.open(userpath32), filename: "72be69defe1aa41b21f98ee38427e345_original.jpg")
  user32.save
  project32 = Project.new(duration: 0, limit: false, user_id: user32.id, country: "the United States", title: "12 Months of Indigo Cats", description: "Bring twelve Watercolor Felines into your home, and get a bonus Mini Print for Christmas! Each calendar is handmade by the artist.", pledge_amt: 0, eta: nil, shipping: "", city: "Columbia", state: "MO", funding_goal: "$2,500", category_id: categories[0].id, subcategory: "Painting", challenges: "")
  projectpath32 = File.join(Rails.root, 'app', "assets", "images", "76b87493caab5f3ea34bc839b6e4ddef_original.jpg")
  project32.image_url.attach(io: File.open(projectpath32), filename: "76b87493caab5f3ea34bc839b6e4ddef_original.jpg")
  project32.save
  user33 = User.new(name: "April Soetarman", email: "aprilsoetarman@gmail.com", password: "starwars", biography: "Designer and artist based in Seattle and New York. Making architecture, art, objects, sounds, installations, trouble. Also behind WeirdSideProjects.com and the Museum of Almost Realities (AlmostRealities.org).", websites: "", google_analytics: "")
  userpath33 = File.join(Rails.root, 'app', "assets", "images", "1c3929e4d6464331461593ee89436b96_original.jpg")
  user33.profile_url.attach(io: File.open(userpath33), filename: "1c3929e4d6464331461593ee89436b96_original.jpg")
  user33.save
  project33 = Project.new(duration: 0, limit: false, user_id: user33.id, country: "the United States", title: "ATTENTION: YOU ARE WONDERFUL and other street sign art", description: "A guerrilla art series of unexpected sayings on metal street signs, installed in public spaces. Now you can get a sign for yourself!", pledge_amt: 0, eta: nil, shipping: "", city: "Seattle", state: "WA", funding_goal: "$7,200", category_id: categories[0].id, subcategory: "Installations", challenges: "")
  projectpath33 = File.join(Rails.root, 'app', "assets", "images", "a9edfcda4f8efed3d591b3a2e9fbb41a_original.jpg")
  project33.image_url.attach(io: File.open(projectpath33), filename: "a9edfcda4f8efed3d591b3a2e9fbb41a_original.jpg")
  project33.save
  user35 = User.new(name: "Marco Klahold", email: "marcoklahold@gmail.com", password: "starwars", biography: "My name is Marco Klahold, 23 years old and currently based in Cologne, Germany. I am passionate about two things. Traveling and capturing moments. This started 4 years ago when I began a trip around the world and continues to this day.", websites: "", google_analytics: nil)
  userpath35 = File.join(Rails.root, 'app', "assets", "images", "53ae10e82c5ed7e2778cc4177b82efc4_original.jpg")
  user35.profile_url.attach(io: File.open(userpath35), filename: "53ae10e82c5ed7e2778cc4177b82efc4_original.jpg")
  user35.save
  project35 = Project.new(duration: 0, limit: false, user_id: user35.id, country: "Germany", title: "\"Tagebuch eines Streuners\" by Marco Klahold (Photobook)", description: "My second book. 240 pages filled with photographs and thoughts of the past two years.", pledge_amt: 0, eta: nil, shipping: "", city: "Cologne", state: "Germany", funding_goal: "$10,166", category_id: categories[11].id, subcategory: "Photobooks", challenges: "")
  projectpath35 = File.join(Rails.root, 'app', "assets", "images", "ce1368517f3801c614dad6ab235fd976_original.jpg")
  project35.image_url.attach(io: File.open(projectpath35), filename: "ce1368517f3801c614dad6ab235fd976_original.jpg")
  project35.save
  user36 = User.new(name: "Shannon Shird", email: "shannonshird@gmail.com", password: "starwars", biography: "Shannon Shird​ is an organizer, writer and filmmaker from Baltimore, MD living Brooklyn, NY. She has served as Impact Producer for award-winning documentary film, Black and Cuba since 2013. Shannon has curated and participated in artistic and activist programming that engages social justice movements in NYC, Cuba, South Africa and Japan, She is also a writer with several essays and blog posts published by a variety of outlets. In addition to writing and producing BodyMore Shannon is producing Bloom a documentary short currently in post-production. She holds a master of arts in international affairs from The New School and a bachelor of arts in history from Smith College.", websites: "", google_analytics: "")
  userpath36 = File.join(Rails.root, 'app', "assets", "images", "320f89c54ef2add6e6852918e4846bc8_original.jpeg")
  user36.profile_url.attach(io: File.open(userpath36), filename: "320f89c54ef2add6e6852918e4846bc8_original.jpeg")
  user36.save
  project36 = Project.new(duration: 0, limit: false, user_id: user36.id, country: "the United States", title: "BodyMore at the Intersection of #BlackLivesMatter & #MeToo", description: "Carrie returns to Baltimore to protest police violence but a reunion at a party ignites a series of betrayals that complicate her fight", pledge_amt: 0, eta: nil, shipping: "", city: "Brooklyn", state: "NY", funding_goal: "$20,000", category_id: categories[6].id, subcategory: "Shorts", challenges: "")
  projectpath36 = File.join(Rails.root, 'app', "assets", "images", "b8a3e4255f4624d96c0dd34b8f9b9219_original.jpeg")
  project36.image_url.attach(io: File.open(projectpath36), filename: "b8a3e4255f4624d96c0dd34b8f9b9219_original.jpeg")
  project36.save
  user37 = User.new(name: "Jack Harries & Geordie Cargill", email: "jackharriesgeordiecargill@gmail.com", password: "starwars", biography: "Chief Directors and Editors.", websites: "", google_analytics: "")
  userpath37 = File.join(Rails.root, 'app', "assets", "images", "1cf804fd3c2258150597e1c05fcaf532_original.jpg")
  user37.profile_url.attach(io: File.open(userpath37), filename: "1cf804fd3c2258150597e1c05fcaf532_original.jpg")
  user37.save
  project37 = Project.new(duration: 0, limit: false, user_id: user37.id, country: "Australia", title: "Heavy Volume III.", description: "The third instalment in our ongoing journal series 'Heavy'— A compendium of contemporary photography focusing on the conversation.", pledge_amt: 0, eta: nil, shipping: "", city: "Sydney", state: "AU", funding_goal: "$12,656", category_id: categories[11].id, subcategory: "Photobooks", challenges: "")
  projectpath37 = File.join(Rails.root, 'app', "assets", "images", "573346cf29d8556cf46d08f19da4e676_original.jpg")
  project37.image_url.attach(io: File.open(projectpath37), filename: "573346cf29d8556cf46d08f19da4e676_original.jpg")
  project37.save
  user38 = User.new(name: "Joseph Perez", email: "josephperez@gmail.com", password: "starwars", biography: "Born and raised in West phoenix, born 1986. Having my first experience with art as a child, being involved with a school mural project opened my mind to a whole new way of thinking about life. Throughout my childhood growing up never loosing the desire to create art, at times I just never had the opportunities before me. For me art became a voice and self identity. As an artist I strive to communicate to society, my community, and people with different backgrounds. I communicate through my visual art, performance, and conceptual art. Art is about creating the conversations visually and mentally with the subject matter I present. Art cannot deny the environment that it is in, so I continue to paint who I am, what I see and what my thoughts reside in. I continue to stay a student of life, push myself to be innovative and relevant with my art so it can have meaning to those that experience it. Everything to me is art, however you view life, can be seen as art, so I have no preference to which medium is used. Having my first small showing downtown Phoenix in 2007, since then I have progressed to doing solo shows at established galleries and museums. In 2010, I developed my “Sound in Color” art, where I showcased the art of B-Boying (Break Dancing), I orchestrated for a live DJ to play music while the dancers responded to beats. This concept was discovered by Independent Curators International to be showcased in a traveling exhibit “The Peoples Biennial”. The show traveled from Portland, Arizona, North Carolina, South Dakota and Pennsylvania. Being able to highlight my dance with my art expression was a great achievement for me. In 2011 I was recognized for my attributes to Phoenix by the Phoenix New Times magazine’s Big Brain Awards which are given out once a year to individuals adding to their city. As a child I was influenced by the art, so for me to give back was always a dream. In 2011 with the collaboration of Arizona State University and Phoenix Center for the Arts we developed “The Rise Project”, which was a vision I had developed and implanted with the two organizations. For me art is a voice to speak to the people and hopefully I can utilize the voice to inspire and motivate.", websites: "", google_analytics: "")
  userpath38 = File.join(Rails.root, 'app', "assets", "images", "ace684374cbb57215a7459b71b4807ea_original.jpg")
  user38.profile_url.attach(io: File.open(userpath38), filename: "ace684374cbb57215a7459b71b4807ea_original.jpg")
  user38.save
  project38 = Project.new(duration: 0, limit: false, user_id: user38.id, country: "the United States", title: "Chicago Sentrock Studio & Creative Workshop Space", description: "Art studio, creative workspace & platform for open studios / workshops for student interns and creatives.", pledge_amt: 0, eta: nil, shipping: "", city: "Chicago", state: "IL", funding_goal: "$7,000", category_id: categories[0].id, subcategory: "Painting", challenges: "")
  projectpath38 = File.join(Rails.root, 'app', "assets", "images", "d6881893fca1a2807dc86574a4000bc5_original.jpeg")
  project38.image_url.attach(io: File.open(projectpath38), filename: "d6881893fca1a2807dc86574a4000bc5_original.jpeg")
  project38.save
  user39 = User.new(name: "Playeress", email: "playeress@gmail.com", password: "starwars", biography: "Women powered board games. Meaningful, inspiring and durable.", websites: "", google_analytics: "")
  userpath39 = File.join(Rails.root, 'app', "assets", "images", "832ee7b21cf37feea778f4b80bf97f9a_original.png")
  user39.profile_url.attach(io: File.open(userpath39), filename: "832ee7b21cf37feea778f4b80bf97f9a_original.png")
  user39.save
  project39 = Project.new(duration: 0, limit: false, user_id: user39.id, country: "Austria", title: "WHO'S SHE? - a guessing game about extraordinary women!", description: "A wooden guessing game featuring strong, mighty women. It's all about their adventures not their looks! Made to inspire. Made to last.", pledge_amt: 0, eta: nil, shipping: "", city: "Warsaw", state: "Poland", funding_goal: "$16,943", category_id: categories[4].id, subcategory: "Product Design", challenges: "")
  projectpath39 = File.join(Rails.root, 'app', "assets", "images", "62047465f9d62694af3fb8896cb0c952_original.jpg")
  project39.image_url.attach(io: File.open(projectpath39), filename: "62047465f9d62694af3fb8896cb0c952_original.jpg")
  project39.save
  user40 = User.new(name: "Solgaard Design", email: "solgaarddesign@gmail.com", password: "starwars", biography: "We're a team of passionate people designing and developing products at the intersection of Fashion and Technology. Join us in igniting a revolution of smart and sustainable solutions. Using recycled ocean plastics and solar solutions to make everyday products that do good for planet and you.", websites: "", google_analytics: "")
  userpath40 = File.join(Rails.root, 'app', "assets", "images", "b252b7227e96f49c0d75068969e61fd7_original.png")
  user40.profile_url.attach(io: File.open(userpath40), filename: "b252b7227e96f49c0d75068969e61fd7_original.png")
  user40.save
  project40 = Project.new(duration: 0, limit: false, user_id: user40.id, country: "the United States", title: "Ocean Plastics Daypack by Solgaard: The Upcycled Backpack", description: "A backpack made from recycled plastic recovered from the ocean. Designed for everyday carry, including laptop and other tech gear.", pledge_amt: 0, eta: nil, shipping: "", city: "New York", state: "NY", funding_goal: "$25,000", category_id: categories[4].id, subcategory: "Product Design", challenges: "")
  projectpath40 = File.join(Rails.root, 'app', "assets", "images", "eb78346a66642eff0ce1ea9b8ef7c60d_original.jpg")
  project40.image_url.attach(io: File.open(projectpath40), filename: "eb78346a66642eff0ce1ea9b8ef7c60d_original.jpg")
  project40.save
  user41 = User.new(name: "Andrew Sanderson", email: "andrewsanderson@gmail.com", password: "starwars", biography: "After 6 years working as an aircraft propulsion technician and 10 years running my own business as a gas turbine engineer, I have made the switch to product development after successfully taking my first product from idea to being stocked in shops world-wide. With my experience navigating everything from product design to prototyping, 3-D modeling, sourcing oversees manufacturing and overseeing quality control, my strong engineering background and technical eye bring valuable experience and entrepreneurial skills to product creation and production. When I'm not on Kickstarter, I continue to develop products for my brand Modern Fuel and collaborate with others to create new and inventive products and services.", websites: "", google_analytics: "")
  userpath41 = File.join(Rails.root, 'app', "assets", "images", "9ce3607e194a0f4d6eaaae0cc2859208_original.jpg")
  user41.profile_url.attach(io: File.open(userpath41), filename: "9ce3607e194a0f4d6eaaae0cc2859208_original.jpg")
  user41.save
  project41 = Project.new(duration: 0, limit: false, user_id: user41.id, country: "the United States", title: "A Minimal Pen That Will Last You a Lifetime", description: "A sleek, minimal, solid metal, American-made retractable pen designed to last a lifetime", pledge_amt: 0, eta: nil, shipping: "", city: "Austin", state: "TX", funding_goal: "$8,000", category_id: categories[4].id, subcategory: "Product Design", challenges: "")
  projectpath41 = File.join(Rails.root, 'app', "assets", "images", "357b908922f2d8828b0c951d70dfbb28_original.jpeg")
  project41.image_url.attach(io: File.open(projectpath41), filename: "357b908922f2d8828b0c951d70dfbb28_original.jpeg")
  project41.save
  user42 = User.new(name: "Wyatt J Hesemeyer", email: "wyattjhesemeyer@gmail.com", password: "starwars", biography: "Wyatt J Hesemeyer is a visual artists based out of northern California. His primary mediums are tattoo art, and pen and ink.", websites: "", google_analytics: "")
  userpath42 = File.join(Rails.root, 'app', "assets", "images", "c28b3647351aa685766eafb66f425455_original.jpg")
  user42.profile_url.attach(io: File.open(userpath42), filename: "c28b3647351aa685766eafb66f425455_original.jpg")
  user42.save
  project42 = Project.new(duration: 0, limit: false, user_id: user42.id, country: "the United States", title: "The Line Defined Tarot", description: "The Line Defined Tarot is a unique, black work rendition of the traditional 78 card deck. Drawing inspiration from alchemy & nature", pledge_amt: 0, eta: nil, shipping: "", city: "Santa Cruz", state: "CA", funding_goal: "$12,500", category_id: categories[12].id, subcategory: "Art Books", challenges: "")
  projectpath42 = File.join(Rails.root, 'app', "assets", "images", "18c9d33f5cf851cd4ced858c161de518_original.jpg")
  project42.image_url.attach(io: File.open(projectpath42), filename: "18c9d33f5cf851cd4ced858c161de518_original.jpg")
  project42.save
  user43 = User.new(name: "John Betancourt", email: "johnbetancourt@gmail.com", password: "starwars", biography: "John Betancourt runs Wildside Press, an independent publishing company. He is also a best-selling science fiction and fantasy writer, and an award-winning mystery writer.", websites: "", google_analytics: "")
  userpath43 = File.join(Rails.root, 'app', "assets", "images", "bad800552efa4bd4d85f69f381e8a161_original.jpg")
  user43.profile_url.attach(io: File.open(userpath43), filename: "bad800552efa4bd4d85f69f381e8a161_original.jpg")
  user43.save
  project43 = Project.new(duration: 0, limit: false, user_id: user43.id, country: "the United States", title: "Frozen Hell: The Book That Inspired The Thing", description: 'A newly discovered, expanded version of the classic sci-fi story "Who Goes There?" (THE THING) by John W. Campbell, Jr.', pledge_amt: 0, eta: nil, shipping: "", city: "Rockville", state: "MD", funding_goal: "$1,000", category_id: categories[12].id, subcategory: "Fiction", challenges: "")
  projectpath43 = File.join(Rails.root, 'app', "assets", "images", "d8f48be82465ab2309bcbdeef5e303a6_original.jpg")
  project43.image_url.attach(io: File.open(projectpath43), filename: "d8f48be82465ab2309bcbdeef5e303a6_original.jpg")
  project43.save
  user44 = User.new(name: "Ben Tibbetts", email: "bentibbetts@gmail.com", password: "starwars", biography: "Ben Tibbetts is a professional adventure photographer, artist and IFMGA mountain guide. He specialises in working in remote and cold environments and has climbed and skied new routes in Antarctica, Greenland, Kyrgyzstan and the Alps.", websites: "", google_analytics: "")
  userpath44 = File.join(Rails.root, 'app', "assets", "images", "916af299e76bc328aafc5810deaa4d96_original.jpg")
  user44.profile_url.attach(io: File.open(userpath44), filename: "916af299e76bc328aafc5810deaa4d96_original.jpg")
  user44.save
  project44 = Project.new(duration: 0, limit: false, user_id: user44.id, country: "the United Kingdom", title: "ALPENGLOW - A book of high Alpine inspiration", description: "ALPENGLOW is a beautiful and inspiring book of photographs, drawings and stories from the highest peaks of the European Alps", pledge_amt: 0, eta: nil, shipping: "", city: "London", state: "UK", funding_goal: "£6,000", category_id: categories[12].id, subcategory: nil, challenges: "")
  projectpath44 = File.join(Rails.root, 'app', "assets", "images", "4a1bec07816f66c5338274bc09e6a1df_original.jpg")
  project44.image_url.attach(io: File.open(projectpath44), filename: "4a1bec07816f66c5338274bc09e6a1df_original.jpg")
  project44.save
  user45 = User.new(name: "Paper Hat, Inc.", email: "paperhatinc@gmail.com", password: "starwars", biography: "Paper Hat is a print studio and gallery run by Chicago printers Elizabeth Kovach and Ryan Duggan.", websites: "", google_analytics: "")
  userpath45 = File.join(Rails.root, 'app', "assets", "images", "33718439736dd20af4142d532902915d_original.jpg")
  user45.profile_url.attach(io: File.open(userpath45), filename: "33718439736dd20af4142d532902915d_original.jpg")
  user45.save
  project45 = Project.new(duration: 0, limit: false, user_id: user45.id, country: "the United States", title: "Paper Hat", description: "Opening a print studio and art gallery in Chicago's Logan Square neighborhood.", pledge_amt: 0, eta: nil, shipping: "", city: "Chicago", state: "IL", funding_goal: "$10,000", category_id: categories[0].id, subcategory: nil, challenges: "")
  projectpath45 = File.join(Rails.root, 'app', "assets", "images", "861ce10f634eac181e4a45f0e91c0665_original.jpg")
  project45.image_url.attach(io: File.open(projectpath45), filename: "861ce10f634eac181e4a45f0e91c0665_original.jpg")
  project45.save
  user46 = User.new(name: "Cowboy Cricket Farms", email: "cowboycricketfarms@gmail.com", password: "starwars", biography: 'Cowboy Cricket Farms is a small family business in Belgrade, MT. Started by Kathy Rolin in 2016, our farm grows crickets for human consumption. Kathy served as a Gunners Mate in the U.S. Coast Guard for 6 years at multiple small boat stations as well as MSST Los Angeles/Long Beach. Originally from Harrison, MI, Kathy enjoys spending time in the beautiful forests of Montana that she now calls home. She is a Dietetics student at Montana State University and first came up with the idea for Cowboy Cricket Farms after hearing Ian Towes speak about his film "Bugs on the Menu" at the annual MSU Bug Buffet. James is originally from Long Beach, CA and served in the US Coast Guard Reserves at multiple small boat stations and at MSST LA/LB with Kathy. He was also activated for Deep Water Horizon where he was assigned as an arial observer. James currently serves as a medical Sergeant in the Montana Army National Guard in Belgrade, MT with the 1-163rd CAB. James studied economics at MSU and now conducts research on crickets at the university as well as serving as the marketing manager for the farm. James and Kathy have 3 beautiful children, Elise, Olive, and Liam. The family lives in Bozeman, MT and is very active in the local business community.', websites: "", google_analytics: "")
  userpath46 = File.join(Rails.root, 'app', "assets", "images", "1b92d9803ed55fb605c3cbab5ef74e16_original.jpg")
  user46.profile_url.attach(io: File.open(userpath46), filename: "1b92d9803ed55fb605c3cbab5ef74e16_original.jpg")
  user46.save
  project46 = Project.new(duration: 0, limit: false, user_id: user46.id, country: "the United States", title: "Cowboy Cricket Jumpers made with SuperCrickets", description: "SuperSustainable SuperCrickets for SuperHumans! Three brand new flavors of Jumpers - and we want you to get them first!", pledge_amt: 0, eta: nil, shipping: "", city: "Bozeman", state: "MT", funding_goal: "$5,000", category_id: categories[7].id, subcategory: nil, challenges: "")
  projectpath46 = File.join(Rails.root, 'app', "assets", "images", "982b484895c2608a08a9998d737acbcb_original.png")
  project46.image_url.attach(io: File.open(projectpath46), filename: "982b484895c2608a08a9998d737acbcb_original.png")
  project46.save
end
