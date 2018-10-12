class DeleteSubcategory < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :subcategory
  end
end
