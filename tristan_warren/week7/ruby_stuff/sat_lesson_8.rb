users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75]
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24]
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85]
  }
}

p "q1"
# - How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users['Jonathan'][:twitter]

p "q2"
# - How would you add the number 7 to Erik's favorite numbers?
p users['Erik'][:favorite_numbers].push(7)

p "q3"
# - How would you add yourself to the users hash?

users["tristan"] = {
  :twitter => 'tristanw3',
  :favorite_numbers => [5,16,18,24]
}

p users

p  "q4"
# - How would you return the array of Erik's favorite numbers?
p users['Erik'][:favorite_numbers]

p "q5"
# - How would you return the smallest of Erik's favorite numbers?
p users['Erik'][:favorite_numbers].sort[0]

p "q6"
# - How would you return an array of Anil's favorite numbers that are also even?
p users["Anil"][:favorite_numbers].select{ |num| num % 2 == 0}

p "q7"
# - How would you return an array of the favorite numbers common to all users? 


test = users.reduce { |acc, user|
  p user[:favorite_numbers].to_i
  acc[:favorite_numbers].push(user[:favorite_numbers])
}


p test

# - How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
