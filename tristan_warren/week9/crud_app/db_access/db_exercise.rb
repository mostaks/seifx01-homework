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

get '/employees/:id' do
  id = params['id']

  db = SQLite3::Database.new('employees.db')
  db.results_as_hash = true

  @employee = db.execute("SELECT * FROM employee WHERE id= #{id}").first

  db.close

  erb :employee
end

get '/employees/edit/:id' do
  id = params['id']

  db = SQLite3::Database.new('employees.db')
  db.results_as_hash = true

  @employee = db.execute("SELECT * FROM employee WHERE id= #{id}").first
  db.close
  erb :employee_edit
end

post '/employees/:id' do
  id = params['id']
  business_title = params['business_title']
  salary = params['salary']

  db = SQLite3::Database.new('employees.db')
  db.results_as_hash = true

  db.execute("UPDATE employee SET business_title='#{business_title}', salary='#{salary}' WHERE id = #{id} ")
  db.close

  redirect "employees/#{id}"
end

get '/employees_add' do

  erb :employee_add
end

post '/employees_add_person' do
  id = params['id']
  first_name = params['first_name']
  business_title = params['business_title']
  salary = params['salary']

  db = SQLite3::Database.new('employees.db')
  db.results_as_hash = true

  sql = "INSERT INTO employee VALUES(#{id}, '#{first_name}', '#{business_title}', #{salary})"
  db.execute(sql)
  db.close

  redirect "/employees"
end

post '/employees/delete/:id' do
    id = params['id']
    db = SQLite3::Database.new('employees.db')
    db.results_as_hash = true

    sql = "delete from employee where id=#{id}"
    db.execute(sql)
    db.close

    redirect "/employees"

end