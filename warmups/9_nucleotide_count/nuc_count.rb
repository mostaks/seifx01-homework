@bases = {
	:A => 0,
	:C => 0,
	:G => 0,
	:T => 0,
	:Unknown => 0
}

def count input 

  input.each_char do |letter|
    if @bases.key? letter
      @bases[letter] += 1
    else 
      @bases["Unknown"] += 1
		end
  end
  puts @bases
end

count "ACGTCGATCAGTCAGGCAGCATTATCATCAGCAVGCATAC"