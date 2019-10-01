# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10

scores = { }
scores['1'] = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
scores['2'] = ['D', 'G']
scores['3'] = ['B', 'C', 'M', 'P']
scores['4'] = ['F', 'H', 'V', 'W', 'Y']
scores['5'] = ['K']
scores['8'] = ['J', 'X']
scores['10'] = ['Q', 'Z']


# p scores['1']

def get_score(word, table)
  split_word = word.upcase().chars()
  
  points = 0

  split_word.each { |l| 
    table.each {|key, value| 
      value.each { |pl|
        if l == pl
          points = points + key.to_i
        end
      }
    }
  }
  return points
end

p get_score 'cabbage', scores
