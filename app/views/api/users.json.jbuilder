json.user do
  json.set! @user.id do
    json.extract! @user, :email, :password_digest, :session_token
  end
end
