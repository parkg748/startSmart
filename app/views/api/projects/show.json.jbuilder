# json.set! @project.id do
#   json.extract! @project, :id, :title, :description, :duration, :pledge_amt, :eta, :shipping, :limit, :city, :state, :country, :funding_goal, :category_id, :user_id, :category, :subcategory, :challenges
#   json.imageUrl (@project.image_url.attached? ? url_for(@project.image_url) : "")
# end
json.project do
  json.set! @project.id do
    json.extract! @category, :id, :title, :description, :duration, :pledge_amt, :eta, :shipping, :limit, :city, :state, :country, :funding_goal, :category_id, :user_id, :category, :subcategory, :challenges
    json.imageUrl (@project.image_url.attached? ? url_for(@project.image_url) : "")
  end
end
