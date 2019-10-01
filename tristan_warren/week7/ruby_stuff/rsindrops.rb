
def take_number num
  ret = ''
  if num % 3 == 0
  ret = ret + 'Pling'
  else if num % 5 == 0
  ret = ret + 'Plang'
  else if num % 7 == 0
    ret = ret + 'Plong'
  
  end
  ret
end

# def take_number num
#   puts 'hello world'
#   puts num
# end

take_number(1)

