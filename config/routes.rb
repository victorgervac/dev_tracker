Rails.application.routes.draw do
  namespace :api do
    get 'contacts/index'
  end
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :users do
      resources :jobs
    end 
    resources :jobs do 
      resources :notes 
      resources :contacts
    end
  end
  get '*other', to: 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
