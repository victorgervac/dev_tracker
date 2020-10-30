Rails.application.routes.draw do
  namespace :api do
    get 'contacts/index'
  end
  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for "User", at: "auth",
        controllers: {
          sessions: 'api/v1/devise_token_auth/sessions'
        }
    end
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
