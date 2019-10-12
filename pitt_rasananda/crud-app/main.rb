require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'

get "/tools" do 
    db = get_db
    @tools = db.execute('SELECT * FROM tools')
    db.close
    erb :tools
end

get '/tools/add' do
    erb :add_tool    
end

get '/tools/:tool_name' do
    db = get_db
    @tool = db.execute("SELECT * FROM tools WHERE tool_name = '#{params['tool_name']}'").first
    db.close
    erb :tool
end

get '/tools/edit/:tool_name' do
    db = get_db
    @tool = db.execute("SELECT * FROM tools WHERE tool_name = '#{params['tool_name']}'").first
    db.close
    erb :edit_tool
end

post '/add' do
    name = params['tool_name']
    url = params['website']
    img = params['img']
    des = params['tool_des']
    db = get_db
    db.execute("INSERT into tools(id,tool_name, website, img, tool_des) VALUES( #{id}, '#{name}', '#{url}', '#{img}', '#{des}')")
    db.close
    redirect '/tools'
end

post '/delete/:tool_name' do
    db = get_db
    db.execute("DELETE from tools WHERE tool_name = '#{params['tool_name']}'")
    db.close
    redirect '/tools'
end

def get_db
    db = SQLite3::Database.new('data.db')
    db.results_as_hash = true
    db
end