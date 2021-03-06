Rails.application.routes.draw do
  
  resources :watches, only: [:index, :show]
  resources :users, only: [:index, :create, :show, :update, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "/update/:id", to: "users#update"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
