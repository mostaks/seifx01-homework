hash = {}

person = {
  :name => "Serge",
  :nationality => "French"
}

# Use symbols

person2 = {
  :name => "John",
  :nationality => "German"
}

person3 = {
  name: "Fred",
  nationality: "Australian"
}

p person[:name]
p person2[:name]
p person3[:name]