days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', "Friday", "Saturday", "Sunday"]
p 'Q2 is '
p days_of_the_week.unshift(days_of_the_week.pop)

p 'Q 3 is ' 
split_array = [[days_of_the_week.shift, days_of_the_week.pop], days_of_the_week]
p split_array

p 'Q 4 is'
p split_array.shift

p 'Q5 is '
p split_array[0].sort