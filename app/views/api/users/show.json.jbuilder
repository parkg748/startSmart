json.user do
  json.set! @user.id do
    json.extract! @user, :id, :name, :email, :biography, :websites, :google_analytics
  end
end

json.session do
  json.id do
    json.extract! @user, :id
  end
end
