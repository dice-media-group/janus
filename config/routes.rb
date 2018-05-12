Rails.application.routes.draw do
  resources :profiles
  devise_for :users
  mount RailsAdmin::Engine => '/backstage', as: 'rails_admin'
end
