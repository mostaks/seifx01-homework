# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Populating the solar system..."
Planet.destroy_all # Remove every row from the planets table 
Planet.create name: 'Earth', orbit: 1, mass: 1, diameter: 1, moons: 1
Planet.create name: 'Mars', orbit: 687, mass: 2, diameter: 0.2, moons: 2
Planet.create name: 'Venus', orbit: 0.7, mass: 0.7, diameter: 0.1, moons: 3
Planet.create name: 'Jupiter', orbit: 800, mass: 10000, diameter: 500, moons: 79

puts "Created #{Planet.all.length} planets."

puts "Done!"