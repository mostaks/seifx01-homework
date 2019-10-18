
class Roman
def initialize number
  @number = number.to_i
    @roman_map = {
      1000 => "M",
      900 => "CM",
      500 => "D",
      400 => "CD",
      100 => "C",
      90 => "XC",
      50 => "L",
      40 => "XL",
      10 => "X",
      9 => "IX",
      5 => "V",
      4 => "IV",
      1 => "I"
    }
end

  def to_roman
    result = ""
    @roman_map.each do |key, value|
      while @number >= key
        result += value
        puts "number : #{@number} >= #{key}"
        puts "roman number: #{result}"
        @number -= key
        puts "new number: #{@number}"
      end
  end
  result
  end
end

puts "Provide a number your majesty: "
caesars_number = gets.chomp
caesar = Roman.new caesars_number
puts caesar.to_roman
