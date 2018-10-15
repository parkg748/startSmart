class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :websites, :string
    add_column :users, :google_analytics, :string
  end
end
