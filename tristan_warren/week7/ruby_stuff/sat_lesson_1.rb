greater_than_2 = [1,2,3,4,5,6,7,8].select {|num| num > 2}
greater_than_3 = [1,2,3,4,5,6,7,8].select {|num| num > 3}
greater_than_4 = [1,2,3,4,5,6,7,8].select {|num| num > 4}

less_than_2 = [1,2,3,4,5,6,7,8].reject {|num| num > 2}
less_than_3 = [1,2,3,4,5,6,7,8].reject {|num| num > 3}
less_than_4 = [1,2,3,4,5,6,7,8].reject {|num| num > 4}


p less_than_2
p less_than_3
p less_than_4

 
