class AddColumnToCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :subcategories, :string, array: true, default: []
  end
end
