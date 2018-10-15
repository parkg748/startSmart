class RewardsController < ApplicationController
  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      render 'api/rewards/show'
    else
      render json: @reward.errors.full_messages, status: 401
    end
  end

  private
  def reward_params
    params.require(:reward).permit(:title, :description, :pledge_amt, :eta, :shipping, :project_id, :limit)
  end
end
