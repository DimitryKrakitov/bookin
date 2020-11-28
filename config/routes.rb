Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'calendar/index'
      post 'calendar/next_page', to: 'calendar#next_page'
      post 'calendar/previous_page', to: 'calendar#previous_page'

      post 'slots/interviewer', to: 'slots#create_meeting'
      post 'slots/candidate', to: 'slots#create_interview'
    end
  end
  root 'homepage#index'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations' }

  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
