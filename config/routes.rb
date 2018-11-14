Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :edit] do
      resources :projects, only: [:index, :create, :show, :edit, :destroy] do
        resources :rewards, only: [:index, :create, :show] do
          resources :items, only: [:index, :create, :show]
        end
      end
    end
    resources :users, only: [:update]
    resources :projects, only: [:index, :update, :show, :destroy]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:show, :index] do
      resources :projects, only: [:index]
    end
    resources :rewards, only: [:edit, :delete]
  end
end
