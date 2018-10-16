json.item do
  json.set! @item.id do
    json.extract! @item, :id, :name, :digital, :reward_id
  end
end
