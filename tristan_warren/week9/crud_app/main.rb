require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'


get '/employees' do
  db = SQLite3::Database.new('employees.db')
  db.results_as_hash = true
  employees = db.execute('SELECT * FROM employee')

  db.close

  @employees = employees

  erb :employees
end