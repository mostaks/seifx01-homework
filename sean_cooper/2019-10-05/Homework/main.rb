require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'

get '/marketplace' do
    db = SQLite3::Database.new('market.db')
    db.results_as_hash = true
    @market = db.execute("SELECT * FROM market")
    db.close
    erb :marketplace
end

get '/marketplace/:id' do
    id = params['id']
    db = SQLite3::Database.new('market.db')
    db.results_as_hash = true
    @item = db.execute("SELECT * FROM market WHERE id = #{id}").first
    db.close
    erb :item
end

post '/marketplace/:id/bid' do
    id = params['id']
    current_bid = params['current_bid']
    db = SQLite3::Database.new('market.db')
    db.results_as_hash = true
    db.execute("UPDATE market SET current_bid = #{current_bid} where id = #{id}")
    db.close
    redirect "/marketplace/#{id}"
end