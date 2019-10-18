# create a robot name using 2 letters and 3 numbers
# create a reset method to reset the name of the robot

class Robot

  attr_reader :instruction_count

  # The initialize method will run as soon as an instance of the class has been created. it will store the variables that have been defined.
  def initialize
    @name = make_name
    @instruction_count = 0

    # we capture the current time with Time class.
    @created_at = Time.now.to_i
    @reset_at = Time.now.to_i
  end

  # This function will create the random name for the robot.
  def make_name
    # creating an array with an alphabetical range from A to Z then 'samples' a random letter
    # If select multiple letters, `sample` will select them without repeating
    letters = ("A".."Z").to_a.sample(2)
    # we need repetitive numbers i.e. 777, so the range should be from "000" to "999" and they have to be strings
    numbers = ("000".."999").to_a.sample
    # convert the letters to string and concatenate the letters and numbers
    name_pool = letters.join.concat(numbers)
  end

  # This is a getter, it returns the name
  def name
    # incrementing the count for each action the robot makes
    @instruction_count += 1
    @name
  end

  def reset
    @instruction_count += 1
    @name = make_name
    # resetting the @reset_at variable
    @reset_at = Time.now.to_i
  end

  # shorter way - attr_reader :instruction_count
  # def instruction_count
  #   @instruction_count
  # end

  def timers
    puts "#{Time.now.to_i - @reset_at} seconds since last boot, #{Time.now.to_i - @created_at} seconds since creation"
  end
end

puts "Test 1" 
puts "=" * 10 

robot1 = Robot.new
puts robot1.name

puts "Test 2" 
puts "=" * 10 

robot2 = Robot.new
puts robot2.name
puts robot2.name

puts "Test 3" 
puts "=" * 10 

robot3 = Robot.new
puts robot3.name
puts robot3.name
sleep 3
robot3.reset
puts robot3.name
puts robot3.name
sleep 5
puts robot3.instruction_count

puts robot3.timers
