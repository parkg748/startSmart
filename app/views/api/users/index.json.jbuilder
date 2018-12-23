# @users.each do |user|
#   json.set! user.id do
#     json.extract! user, :id, :name, :email, :biography, :google_analytics
#     json.profileUrl (user.profile_url.attached? ? url_for(user.profile_url) : "")
#   end
# end

json.array! @users do |user|
  json.extract! user, :id, :name, :email, :biography, :websites, :google_analytics, :saved_projects, :projects, :backed_projects, :created_at, :updated_at
  json.profileUrl (user.profile_url.attached? ? url_for(user.profile_url) : "")
end
