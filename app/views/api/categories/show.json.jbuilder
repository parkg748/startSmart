json.category do
  json.set! @category.id do
    json.extract! @category, :id, :name
  end
end
