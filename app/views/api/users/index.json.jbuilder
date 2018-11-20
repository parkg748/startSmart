@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :name, :email, :biography
    json.profileUrl (user.profile_url.attached? ? url_for(user.profile_url) : "")
  end
end
