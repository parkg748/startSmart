class AddColumnToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :reward_id, :integer
  end
end
