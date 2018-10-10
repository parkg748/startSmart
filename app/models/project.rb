class Project < ApplicationRecord
  validates :title, :description, :category_id, :subcategory_id, :city, :state, :user_id, presence: true

  belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: 'Category'

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'
end
