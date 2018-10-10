json.user do
  json.set! @user.id do
    json.extract! @user, :id, :name, :email
  end
end
