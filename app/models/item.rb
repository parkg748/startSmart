class Item < ApplicationRecord
  belongs_to :reward,
    primary_key: :id,
    foreign_key: :reward_id,
    class_name: 'Reward'
end
