json.set! @project.id do
  json.extract! @project, :id, :title, :description, :duration, :pledge_amt, :eta, :shipping, :limit, :city, :state, :country, :category_id, :user_id
end
