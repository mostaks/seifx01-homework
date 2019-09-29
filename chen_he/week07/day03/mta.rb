@train_lines = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
    # p "You will travel in one line or two lines?"
    
    p "Please enter your first line:"
    first_line = gets.chomp
    p "Please enter your first stop:"
    first_stop = gets.chomp
    p "Please enter your second line:"
    second_line = gets.chomp
    p "Please enter your second stop:"
    finial_stop = gets.chomp
def plan_trip(first_line, first_stop, second_line, finial_stop)
    
    # if only one line
    if first_line.eql? second_line
    select_line = @train_lines[first_line]
    start_index = select_line.index(first_stop)
    stop_index = select_line.index(finial_stop)
    # if only one line and forth direction
      if start_index <= stop_index
        forth_travel_stops = select_line[start_index..stop_index]
        total_stops = forth_travel_stops.count - 1 
        travel_stops = forth_travel_stops.join(', ')
        p "You must travel through the following stops on the #{first_line} line: #{travel_stops}."
        "#{total_stops} stops in total." 
    # if only one line and back direction
      else 
        back_travel_stops = select_line[stop_index..start_index].reverse
        total_stops = back_travel_stops.count - 1
        travel_stops = back_travel_stops.join(', ')
        puts "You must travel through the following stops on the #{first_line} line: #{travel_stops}."
        "#{total_stops} stops in total."  
    # one line end
      end
    # if two lines
    else 
        select_first_line = @train_lines[first_line]
        start_index = select_first_line.index(first_stop)
        start_interchange_index = select_first_line.index("Union Square")

        select_second_line = @train_lines[second_line]
        stop_index = select_second_line.index(finial_stop)
        stop_interchange_index = select_second_line.index("Union Square")
    # if two lines, first line forth direction  
      if start_index <= start_interchange_index
        forth_travel_stops = select_first_line[start_index..start_interchange_index]
        first_line_total_stops = forth_travel_stops.count - 1
        first_travel_stops = forth_travel_stops.join(', ')
        # if two lines, first line forth direction and second line forth direction
        if stop_interchange_index <= stop_index
            second_line_forth_travel_stops = select_second_line[stop_interchange_index..stop_index] - forth_travel_stops
            second_line_total_stops = second_line_forth_travel_stops.count
            second_travel_stops = second_line_forth_travel_stops.join(', ')
            puts "You must travel through the following stops on the #{first_line} line: #{first_travel_stops}."
            p "Change at Union Square."
            puts "Your journey continues through the following stops: #{second_travel_stops}."
        # if two lines, first line forth direction and second line back direction
        else
            second_line_back_travel_stops = select_second_line[stop_index..stop_interchange_index].reverse - forth_travel_stops
            second_line_total_stops = second_line_back_travel_stops.count
            second_travel_stops = second_line_back_travel_stops.join(', ')
            puts "You must travel through the following stops on the #{first_line} line: #{first_travel_stops}."
            p "Change at Union Square."
            puts "Your journey continues through the following stops: #{second_travel_stops}."
        # if two lines, first line forth direction   end
        end
        total_stops = first_line_total_stops + second_line_total_stops
        "#{total_stops} stops in total." 
        # if two lines, first line back direction   
      else  
        back_travel_stops = select_first_line[start_interchange_index..start_index].reverse
        first_line_total_stops = back_travel_stops.count - 1
        first_travel_stops = back_travel_stops.join(', ')
        # if two lines, first line forth direction and second line forth direction
        if stop_interchange_index <= stop_index
            second_line_forth_travel_stops = select_second_line[stop_interchange_index..stop_index] - back_travel_stops
            second_line_total_stops = second_line_forth_travel_stops.count
            second_travel_stops = second_line_forth_travel_stops.join(', ')
            puts "You must travel through the following stops on the #{first_line} line: #{first_travel_stops}."
            p "Change at Union Square."
            puts "Your journey continues through the following stops: #{second_travel_stops}."
        # if two lines, first line forth direction and second line back direction
        else
            second_line_back_travel_stops = select_second_line[stop_index..stop_interchange_index].reverse - back_travel_stops
            second_line_total_stops = second_line_back_travel_stops.count
            second_travel_stops = second_line_back_travel_stops.join(', ')
            puts "You must travel through the following stops on the #{first_line} line: #{first_travel_stops}."
            p "Change at Union Square."
            puts "Your journey continues through the following stops: #{second_travel_stops}."
        # if two lines, first line forth direction   end
        end
        total_stops = first_line_total_stops + second_line_total_stops
        "#{total_stops} stops in total." 
        # if two lines, first line back direction    end
      end
    # two lines end
    end
    # function end
end

    
p plan_trip(first_line, first_stop, second_line, finial_stop)


# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."