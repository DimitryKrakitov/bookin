Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'bookings/index'
      post 'bookings/search', to: 'bookings#search'
      # resources :bookings, controller: 'bookings', only: %i[create index destroy]
    end
  end
  root 'homepage#index'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations' }

  get '/*path' => 'homepage#index'
end
