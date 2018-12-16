class RemoveColumnWebsitesFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :websites
  end
end
