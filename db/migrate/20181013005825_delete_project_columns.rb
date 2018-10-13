class DeleteProjectColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :title
    remove_column :projects, :description
    remove_column :projects, :starting_bid
    remove_column :projects, :eta
    remove_column :projects, :shipping
    remove_column :projects, :city
    remove_column :projects, :state
  end
end
