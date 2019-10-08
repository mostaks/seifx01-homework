landing_vector = [99, 97, true, 68, '-', 49, 50, 10, 9, '|', 2, 1]

cleaned = landing_vector.select{|ele| ele.is_a?(Integer)}

cleaned_kms = cleaned.map{|ele| ele * 1.6}

sum_kms = cleaned_kms.reduce{|acc, ele| acc + ele}

p sum_kms

# One line

sum = landing_vector
        .select{|ele| ele.is_a?(Integer)}
        .map{|ele| ele * 1.6}
        .reduce{|acc, ele| acc + ele}

        p sum