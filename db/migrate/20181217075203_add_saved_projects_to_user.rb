class AddSavedProjectsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :saved_projects, :integer, array: true, default: []
  end
end
