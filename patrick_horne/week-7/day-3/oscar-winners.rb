latest_oscar_winners = [
    'Green Book (2018)',
    'The Shape of Water (2017)',
    '12 Years a Slave (2013)',
    'Moonlight (2016)',
    'Birdman or (The Unexpected Virtue of Ignorance) (2014)',
    'Spotlight (2015)',
    'Argo (2012)',
    'The Artist (2011)'
]

movie_directors = [
    'Moonlight, Barry Jenkins',
    'Green Book, Peter Farrelly',
    'The Artist, Michel Hazanavicius',
    'Spotlight, Tom McCarthy',
    'Birdman or (The Unexpected Virtue of Ignorance), Alejandro G. Iñárritu',
    'The Shape of Water, Guillermo del Toro',
    '12 Years a Slave, Steve McQueen',
    'Argo, Ben Affleck',
]

# My code works outside of REPL.it, but won't run inside it :'(
# PS, code doesn't create the correct output yet.

def clean_input(latest_oscar_winners, movie_directors)
  
  oscar_winners = []
  
  cleaned_directors = movie_directors.sort
  cleaned_directors.each do |entry|
    data = entry.split(', ')
    oscar_winners.push({
      :movie => data[0],
      :director => data[1],
    })
  end
  
  latest_oscar_winners.sort!
  latest_oscar_winners.each_index do |entry|
    length = latest_oscar_winners[entry].size
    year = latest_oscar_winners[entry][length - 5, 4]
    title = latest_oscar_winners[entry][0, length - 7]
    oscar_winners[entry][:year] = year
  end

  p oscar_winners
end

clean_input(latest_oscar_winners, movie_directors)
