class AddProjectColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :title, :string
    add_column :projects, :description, :string
    add_column :projects, :pledge_amt, :integer
    add_column :projects, :eta, :date
    add_column :projects, :shipping, :string
    add_column :projects, :city, :string
    add_column :projects, :state, :string
  end
end
