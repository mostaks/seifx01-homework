# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21

@letters = {
  'A' => 0,
  'C' => 0,
  'G' => 0,
  'T' => 0
}

def count_nucleotides(nukes)
nukes.each_char { |x|
  if x == 'A' 
    @letters['A'] = @letters['A'] + 1
   elsif x == 'C' 
    puts 'c'
   elsif x == 'G' 
    puts 'g'
   elsif x == 'T' 
    puts 't'
  end
} 

puts @letters
end

n = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"

count_nucleotides(n)


