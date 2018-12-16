class AddWebsitesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :websites, :string, array: true, default: []
  end
end
