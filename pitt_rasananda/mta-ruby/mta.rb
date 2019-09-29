
def plan_trip(hop_on_line, hop_on_stop, hop_off_line, hop_off_stop)

    trains = {
        "N" => {
          :stops => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
        },
        "L" => {
            :stops => ["8th", "6th", "Union Square", "3rd", "1st"]
        }, 
        "6" => {
            :stops => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
        }
    }

total = 0
hop_on_index =  trains[hop_on_line][:stops].index(hop_on_stop)
hop_off_index = trains[hop_off_line][:stops].index(hop_off_stop)
index_union_hop_on = trains[hop_on_line][:stops].index("Union Square")
index_union_hop_off = trains[hop_off_line][:stops].index("Union Square")


if hop_on_line == hop_off_line
    if hop_on_index < hop_off_index
        total = hop_off_index - hop_on_index
        stop_to_travel = trains[hop_on_line][:stops].slice(hop_on_index+1..hop_off_index).join(", ")
    elsif hop_on_index > hop_off_index
        total = hop_on_index - hop_off_index
        stop_to_travel = trains[hop_on_line][:stops].slice(hop_off_index+1.. hop_on_index).reverse().join(", ")
    end
else
    if hop_on_index < index_union_hop_on
        total += index_union_hop_on - hop_on_index
        stop_to_travel = trains[hop_on_line][:stops].slice(hop_on_index+1..index_union_hop_on).join(", ")
        if hop_off_index > index_union_hop_off
            total += (hop_off_index - index_union_hop_off)
            more_stop_to_travel = trains[hop_off_line][:stops].slice(index_union_hop_off+1..hop_off_index).join(", ")
        elsif index_union_hop_off > hop_off_index
            total += (index_union_hop_off - hop_off_index)
            more_stop_to_travel = trains[hop_off_line][:stops].slice(hop_off_index.. index_union_hop_off-1).reverse().join(", ")
        end
    elsif hop_on_index > index_union_hop_on 
        total += (index_union_hop_on - hop_on_index)
        stop_to_travel = trains[hop_on_line][:stops].slice(index_union_hop_on+1.. hop_on_index).reverse().join(", ")   
    end
end

p "You must travel through the following stops on the #{hop_on_line}: #{stop_to_travel}"

if hop_on_line != hop_off_line
    p "Change at Union Square."
    p "Your journey continues through the following stops: #{more_stop_to_travel}"
end

p "#{total} stops in total."

end

plan_trip 'N', '34th', 'N', '8th'
plan_trip 'N', '8th', 'N', '34th'
plan_trip 'N', '34th', 'L', '1st'
plan_trip 'N', 'Times Square', '6', '33rd'