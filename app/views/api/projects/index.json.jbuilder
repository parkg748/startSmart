@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description, :duration, :pledge_amt, :eta, :shipping, :limit, :city, :state, :country, :funding_goal, :category_id, :user_id
  end
end
