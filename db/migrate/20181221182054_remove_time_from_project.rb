class RemoveTimeFromProject < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :time
  end
end
