# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Watch.destroy_all


justinchit = User.create(username: "papacitoJC", password: "henny", password_confirmation: "henny", first_name: "Justin", last_name: "Chittarath")
garretd = User.create(username: "Garbear", password: "applesuxs", password_confirmation: "applesuxs", first_name: "Garret", last_name: "Dick")

Watch.create(
    user_id: User.all.sample.id,
    name: "GMT-Master-II",
    price: 14800, 
    description: "This model features a black dial and a two-colour Cerachrom bezel insert in brown and black ceramic. Designed to show the time in two different time zones simultaneously during intercontinental flights, the GMT-Master II has come to be recognized for its robustness and versatile appearance.",
    imageurl: "https://m.media-amazon.com/images/I/71i7t0JLkyL._AC_UL1500_.jpg"
    )

Watch.create(
    user_id: User.all.sample.id,
    name: "Men's Swiss Chronograph Chrono XL Classic Two-Tone Stainless Steel Bracelet Watch 45mm",
    price: 450, 
    description: "Tissot's luxurious Swiss timepiece from the XL Classic collection makes a memorable impression in silver-tone and gold-tone with a jewel-green dial.",
    imageurl: "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/18166341_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1"
    )

Watch.create(
    user_id: User.all.sample.id,
    name: "Sentry Chrono Watch",
    price: 350, 
    description: "A timeless 42 mm design with the modern Nixon twist of faceted applied hour indices",
    imageurl: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw8fc97eb5/products/A386-1041-view1.jpg?sfrm=png"
    )

Watch.create(
    user_id: User.all.sample.id,
    name: "RONDE SOLO DE CARTIER WATCH",
    price: 4050, 
    description: "Ronde Solo de Cartier watch, 42 mm, mechanical movement with automatic winding. Steel case, beaded crown set with a synthetic cabochon-shaped spinel, silvered opaline dial, blued-steel sword-shaped hands, sapphire crystal, steel bracelet, calendar aperture at 3 o'clock. Thickness: 8.53 mm. Water-resistant to 3 bar (approx. 30 meters/100 feet).",
    imageurl: "https://www.cartier.com/variants/images/44733502651435015/img1/w400.jpg"
    )

Watch.create(
    user_id: User.all.sample.id,
    name: "Richard Mille RM 25-01 Sylvester Stallone",
    price: 1352000, 
    description: "A luxury timepiece that celebrates the 9th edition of Les Voiles de St. Barth Regatta, in which the brand has been the titled sponsor since 2010. Respected as the perfect companion for sailors to allow easy navigation at sea, the RM wristwatch features a 50mm case and comes with an array of complications and navigational features. It includes a flyback chronograph, an annual calendar with oversized date, running seconds and UTC function. Sailors can use the UTC hand to position it with the sun, while the bezel is used to align the UTC hand with local time. It is extremely light-weight and equipped with the RMAC2 automatic calibre with a rotor that can be adjusted to the weather, water resistant up to 100 meters, 50 hours of power reserve and finished with a yellow rubber bracelet.",
    imageurl: "https://cdn.shopify.com/s/files/1/0266/7141/5373/products/TheLab-94_1024x1024.png?v=1620337772"
    )