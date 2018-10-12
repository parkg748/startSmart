json.project do
  json.set! @project.id do
    json.extract! @project, :id
  end
end
