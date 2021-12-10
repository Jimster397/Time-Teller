class UsersController < ApplicationController
skip_before_action :is_authenticated, only: [:create, :show]
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found


def index
    users = User.all
    render json: users, each_serializer: UserSerializer
end

def show
    user = User.find(params[:id])
    render json: user
end

def create
    user = User.create(user_params)
    if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
    else
        render json: user.errors.full_messages, status: :unproccessable_entity
    end
end

def update

    user = User.find_by(id: params[:id])
    user.update!(user_params)
    render json: user, status: :ok

end

def destroy
    user = User.find(id: params[:id])
    if user
        user.destroy
        head :no_content
    else
        render json: "User does not exist", status: :not_found
    end
end

private

def render_not_found
end


def user_params
    params.permit(:username, :password, :first_name, :last_name, :password_confirmation)
end

def render_invalid(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
end

end