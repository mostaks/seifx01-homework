$mta = {
    :N => [
        'Times Square',
        '34th',
        '28th',
        '23rd',
        'Union Square',
        '8th'
    ],
    :L => [
        '8th',
        '6th',
        'Union Square',
        '3rd',
        '1st'
    ],
    :SIX => [
        'Grand Central',
        '33rd',
        '28th',
        '23rd',
        'Union Square',
        'Astor Place'
    ]
}

def line_stops (current_line, s_station, e_station)
    line = $mta[current_line.to_sym]
    s_index = line.index(s_station)
    e_index = line.index(e_station)
    movement_array = []
    #go backwards
    if s_index > e_index
        line.reverse.each do |stations|
            if line.index(stations) >= e_index && line.index(stations) <= s_index
                movement_array.push(stations)
            end
        end
    #go forwards
    else
        line.each do |stations|
            if line.index(stations) >= s_index && line.index(stations) <= e_index
                movement_array.push(stations)
            end
        end
    end
    movement_array.drop(1)
end
    
def plan_trip (start_line, start_station, end_line, end_station)
    # Same line travel
    if start_line == end_line
        puts "You must travel through the following stops on the #{start_line} line: #{line_stops(start_line, start_station, end_station).join(', ')}."
        puts "#{line_stops(start_line, start_station, end_station).length} stops in total."
    # Diff line travel
    else
        puts "You must travel through the following stops on the #{start_line} line: #{line_stops(start_line, start_station, "Union Square").join(', ')}."
        puts "Change at Union Square."
        puts "Your journey continues through the following stops: #{line_stops(end_line, "Union Square", end_station).join(', ')}."
        puts "#{line_stops(start_line, start_station, "Union Square").length + line_stops(end_line, "Union Square", end_station).length} stops in total."
    end
end

plan_trip('N', 'Times Square', 'SIX', '33rd')