Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create] do
      resources :projects, only: [:create, :show, :edit, :delete] do
        resources :rewards, only: [:index, :create, :show] do
          resources :items, only: [:index, :create, :show]
        end
      end
    end
    resources :projects, only: [:index]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:show, :index] do
      resources :projects, only: [:index]
    end
    resources :rewards, only: [:edit, :delete]
  end
end
