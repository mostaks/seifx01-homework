test = 'GAGCCTACTAACGGGAT'
test2 = 'CATCGTAATGACGGCCT'

# 7

def hamming(strand1, strand2)
  $spl = strand1.split('')
  $splx = strand2.split('')

  $cnt = 0

  $spl.each.with_index do |element, ind|
    if element != $splx[ind]
      $cnt = $cnt + 1
    end
  end

  return $cnt

end




answer = hamming(test, test2)

p answer