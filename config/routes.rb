Rails.application.routes.draw do
  devise_for :users
  resources :tutors, only: [:show, :index]
  resources :profiles
  mount RailsAdmin::Engine => '/backstage', as: 'rails_admin'
end
