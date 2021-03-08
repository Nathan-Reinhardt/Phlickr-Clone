Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :new, :update, :edit]
    resource :session, only: [:create, :destroy]
    resources :photos
  end
  root to: 'static_pages#root'

  # not sure about nesting photos under a user..
end
