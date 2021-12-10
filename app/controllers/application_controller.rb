class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :is_authenticated
def current_user
  user = User.find_by(id: session[:user_id])
end
  private
def is_authenticated 
    render json: "Not logged in", status: :unauthorized unless logged_in?
end

def logged_in?
  !!current_user 
end
end
