class Api::SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['The email address and password you entered do not match'], status: 404
    end
  end

  def destroy
    logout
  end
end
