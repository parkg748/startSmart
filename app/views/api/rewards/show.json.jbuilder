json.set! @reward.id do
  json.extract! @reward, :title, :description, :pledge_amt, :eta, :shipping, :project_id, :limit
  json.items @items
end
