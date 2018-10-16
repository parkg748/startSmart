@items.each do |item|
  json.set! item.id do
    json.extract! category, :id, :name, :digital, :reward_id
  end
end
