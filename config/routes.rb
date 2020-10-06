Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :jobs do 
      resources :notes 
      resources :contacts
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
