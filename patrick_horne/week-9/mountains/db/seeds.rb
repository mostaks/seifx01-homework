# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

Mountain.destroy_all

mountains = Mountain.create([
  {
    name: 'Mount Everest',
    height_metres: 8848,
    country: 'Nepal',
    first_ascent: 1953
  }, {
    name: 'K2',
    height_metres: 8611,
    country: 'Pakistan',
    first_ascent: 1953
  }, {
    name: 'Kangchenjunga',
    height_metres: 8568,
    country: 'Nepal',
    first_ascent: 1955
  }, {
    name: 'Lhotse',
    height_metres: 8516,
    country: 'Nepal',
    first_ascent: 1956
  }, {
    name: 'Makalu',
    height_metres: 8485,
    country: 'Nepal',
    first_ascent: 1955
  }, {
    name: 'Cho Oyu',
    height_metres: 8188,
    country: 'Nepal',
    first_ascent: 1954
  }, {
    name: 'Dhaulagiri I',
    height_metres: 8167,
    country: 'Nepal',
    first_ascent: 1960
  }, {
    name: 'Manaslu',
    height_metres: 8163,
    country: 'Nepal',
    first_ascent: 1956,
  }, {
    name: 'Naga Parbat',
    height_metres: 8126,
    country: 'Pakistan',
    first_ascent: 1953
  }, {
    name: 'Annapurna I',
    height_metres: 8091,
    country: 'Nepal',
    first_ascent: 1950
  }
])
