class SimpleSums
  def initialize num
    @num = num
  end

  def s1
    @num % 2
  end

  def s2
    (1..@num).sum
  end

end

sum = SimpleSums(4)

p sum.s1 
p sum.s2