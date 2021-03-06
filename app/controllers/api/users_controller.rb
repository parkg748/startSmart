class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    @projects = @user.projects
    @backed_projects = @user.backed_projects
    render 'api/users/show'
  end

  def index
    @users = User.all
  end

  private
  def user_params
    params.require(:user).permit(:id, :name, :email, :password, :biography, :websites, :google_analytics, :projects, :profile_url, :backed_projects)
  end
end
