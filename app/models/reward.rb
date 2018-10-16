class Reward < ApplicationRecord
  belongs_to :project,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: 'Project'

  has_many :items,
    primary_key: :id,
    foreign_key: :reward_id,
    class_name: 'Item'
end
