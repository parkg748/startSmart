class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end

  def create
    @category = Category.new(categories_params)
    if @category.save
      render '/api/categories/show'
    else
      render json: @category.errors.full_messages, status: 401
    end
  end

  def show
    @category = Category.find(params[:id])
  end

  private
  def categories_params
    params.require(:category).permit(:name)
  end
end
