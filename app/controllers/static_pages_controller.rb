class StaticPagesController < ApplicationController
  layout 'application'
  def root
    render :root
  end
end
