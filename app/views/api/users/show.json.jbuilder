# json.user do
#   json.set! @user.id do
#     json.extract! @user, :id, :name, :email, :biography, :websites, :google_analytics
#     json.profileUrl (@user.profile_url.attached? ? url_for(@user.profile_url) : "")
#   end
# end

json.set! @user.id do
  json.extract! @user, :id, :name, :email, :biography, :websites, :google_analytics
  # json.profileUrl (@user.profile_url.attached? ? url_for(@user.profile_url) : "")
end

json.session do
  json.id do
    json.extract! @user, :id
  end
end
