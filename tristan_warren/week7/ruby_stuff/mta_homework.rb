@train_lines = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" =>  ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def plan_trip(start_line, start_station, end_line, end_station)
    if start_line == end_line
       start = @train_lines[start_line]
        if start.index(start_station) > start.index(end_station)
            start = start.reverse
        end
        
        travel = start[start.index(start_station)..start.index(end_station)]
        travel.shift
        puts "You must travel through the following stops on the #{start_line} line : #{travel.join(' ')}"
        puts "#{travel.count} stops in total"
    
    else 
        start = @train_lines[start_line]
        if start.index(start_station) > start.index("Union Square")
            start = start.reverse
        end
        travel = start[start.index(start_station)..start.index("Union Square")]
        travel.shift
        puts "You must travel through the following stops on the #{start_line} line : #{travel.join(' ')}"

        stop = @train_lines[end_line]
        if  stop.index("Union Square") > stop.index(end_station)
            stop = stop.reverse
        end
        cont_travel = stop[stop.index("Union Square")..stop.index(end_station)]
        cont_travel.shift
        puts "Change at Union Square."
        puts "Your journey continues through the following stops: #{cont_travel.join(' ')}"
        puts "#{travel.count + cont_travel.count} stops in total"
    end
end
# plan_trip('N', "8th", '6', '33rd')
plan_trip('N', '34th', '6', '33rd')
# plan_trip('6', 'Astor Place', 'N', '34th')
# plan_trip('N', 'Times Square', 'N', '8th')
# plan_trip('N', "Union Square", 'L', '1st')