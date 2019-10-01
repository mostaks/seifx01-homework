# current_age = gets

# current_age.to_i

# if current_age.to_i > 18
#   puts 'Let\'s get crunk'
# else
#   puts 'No'
# end

num = rand 10

guess = gets

while guess.to_i != num
  guess = gets
end

puts 'well done'
