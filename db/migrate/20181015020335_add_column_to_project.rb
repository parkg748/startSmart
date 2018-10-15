class AddColumnToProject < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :funding_goal, :integer
  end
end
