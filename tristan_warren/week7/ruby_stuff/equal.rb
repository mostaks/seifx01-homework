credit_card_type_1 = :amex
credit_card_type_2 = :amex

# puts credit_card_type_1.object_id
# puts credit_card_type_2.object_id

movies = ['The Terminator', 'The Running Man', 'The Predator']

puts movies[0]
puts movies[1]
puts movies[2]

puts movies.first
puts movies.last

sentence = %w[Interesting question and sentence]

p sentence

my_array = Array.new(10)

p my_array

a = ['Anil', 'Erik', 'Jonathan']

puts a[1]

a.push('Tristan')

p a

a.each do |ele| 
  puts ele
end

x = a.map {|test| test + test }

p x