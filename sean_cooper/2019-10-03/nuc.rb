def count_nuc (input)
    array = input.split(//)
    array.uniq.each{ |let| let = 0 }
    array.each do |letter| 
        letter = letter + 1
    end
    array.uniq.each{ |let| puts let}
end

count_nuc("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")

# https://github.com/Yiannimoustakas/sei31-homework/tree/master/warmups/week04/day04_nucleotide_count