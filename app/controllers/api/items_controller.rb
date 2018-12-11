class ItemsController < ApplicationController
  def create
    @item = Item.new(item_params)
    if @item.save
      render 'api/items/show'
    else
      render json: @item.errors.full_messages, status: 401
    end
  end

  def show
    @item = Item.find(params[:id])
    render 'api/items/show'
  end

  def index
    @items = Item.all
  end

  private
  def item_params
    params.require(:item).permit(:name, :digital)
  end
end
