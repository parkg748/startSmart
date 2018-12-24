class Project < ApplicationRecord

  belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: 'Category'

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  has_many :rewards,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: 'Reward'

  has_many :backings,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Backing'

  has_many :backers,
    through: :backings,
    source: :user

  # has_many :comments
  #   primary_key: :id,
  #   foreign_key: :project_id,
  #   class_name: 'Comment'

  has_one_attached :image_url
end
