# json.user do
#   json.set! @user.id do
#     json.extract! @user, :id, :name, :email, :biography, :websites, :google_analytics
#     json.profileUrl (@user.profile_url.attached? ? url_for(@user.profile_url) : "")
#   end
# end


json.set! @user.id do
  json.extract! @user, :id, :name, :email, :biography, :websites, :google_analytics, :created_at, :updated_at
  json.projects @projects
  json.backed_projects @backed_projects
  json.profileUrl (@user.profile_url.attached? ? url_for(@user.profile_url) : "")
end

json.session do
  json.extract! @user, :id
end
