Rails.application.routes.draw do
  get root :to => 'mountains#index'

  get '/index' => 'mountains#index'
  get '/:id' => 'mountains#show'
  get '/:id/edit' => 'mountains#edit'
  post '/:id/edit' => 'mountains#edit'
  delete '/:id/delete' => 'mountains#delete'
  get '/new' => 'mountains#new'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
