class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    if @project.save
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def show
    @project = Project.find(params[:id])
    @rewards = @project.rewards
    render 'api/projects/show'
  end

  def index
    @projects = Project.all
    render 'api/projects/index'
  end

  def update
    @project = Project.find(params[:id])

    if @project.update_attributes(project_params)
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
  end

  private
  def project_params
    params.require(:project).permit(:id, :title, :description, :duration, :pledge_amt, :eta, :shipping, :limit, :city, :state, :country, :category_id, :image_url, :challenges, :subcategory, :funding_goal, :editor_html)
  end
end
