# A

a = ["Anil", "Erik", "Jonathan"]

# A1. How would you return the string "Erik"?
p a[1]

# A2. How would you add your name to the array?
p a.push('Patrick')

# B
p h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# B1. How would you return the string "One"?
p h[1]

# B2. How would you return the string "Two"?
p h[:two]

# B3. How would you return the number 2?
p h['two']

# B4. How would you add {3 => "Three"} to the hash?
p h[3] = 'Three'

# B5. How would you add {:four => 4} to the hash?
h[:four] = 4

# C
is = {true => "It's true!", false => "It's false"}

# C1. What is the return value of is[2 + 2 == 4]?
"It's true!"

# C2. What is the return value of is["Erik" == "Jonathan"]?
"It's false"

# C3. What is the return value of is[9 > 10]?
"It's false"

# C4. What is the return value of is[0]?
"It's false"

# C5. What is the return value of is["Erik"]?
"It's false"

# D
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathon"][:twitter]

# D1. How would you add the number 7 to Erik's favorite numbers?
users["Jonathon"][:favorite_numbers].push(7)

# D2. How would you add yourself to the users hash?
users["Patrick"] = {
  :twitter => "idk",
  :favorite_numbers => [1, 2, 3]
}

# D3. How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]

# D4. How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].sort[0]

# D5. How would you return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].select { |num| num.even?}

# D6. How would you return an array of the favorite numbers common to all users?
users["Jonathon"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]

# D7. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
new_array = users["Jonathon"][:favorite_numbers] | users["Erik"][:favorite_numbers] | users["Anil"][:favorite_numbers]
new_array.sort
