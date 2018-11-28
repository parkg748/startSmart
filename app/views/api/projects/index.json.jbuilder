@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description, :duration, :pledge_amt, :eta, :shipping, :limit, :city, :state, :country, :funding_goal, :category_id, :user_id, :subcategory, :challenges, :editor_html
    json.imageUrl (project.image_url.attached? ? url_for(project.image_url) : "")
  end
end

# json.array! @projects do |project|
#   json.extract! project, :id, :title, :description, :duration, :pledge_amt, :eta, :shipping, :limit, :city, :state, :country, :funding_goal, :category_id, :user_id, :category, :subcategory, :challenges
#   json.imageUrl (project.image_url.attached? ? url_for(project.image_url) : "")
# end
