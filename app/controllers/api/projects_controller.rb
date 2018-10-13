class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    @project.title = 'hello'
    @project.city = 'san francisc'
    @project.state = 'ca'
    @project.category_id = 7
    if @project.save!
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  private
  def project_params
    params.require(:project).permit(:title, :description, :duration, :pledge_amt, :eta, :shipping, :limit, :city, :state, :country)
  end
end
