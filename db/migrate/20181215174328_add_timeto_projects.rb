class AddTimetoProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :time, :integer
  end
end
