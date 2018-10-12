class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
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
    params.require(:project).permit(:title, :description, :duration, :starting_bid, :eta, :shipping, :limit, :city, :state)
  end
end
