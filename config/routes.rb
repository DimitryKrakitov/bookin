Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'bookings/index'
      post 'bookings/search', to: 'bookings#search'
      post 'bookings/create', to: 'bookings#create'
      # resources :bookings, controller: 'bookings', only: %i[create index destroy]

      get 'spaces/index'
    end
  end
  root 'homepage#index'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations' }

  get '/*path' => 'homepage#index'
end
