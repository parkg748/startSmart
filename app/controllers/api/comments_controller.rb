class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(categories_params)
    if @comment.save
      render '/api/comment/show'
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  private
  def categories_params
    params.require(:comment).permit(:comment)
  end
end
