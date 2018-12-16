class CreateBackings < ActiveRecord::Migration[5.2]
  def change
    create_table :backings do |t|
      t.integer :project_id
      t.integer :user_id
      t.timestamps
    end
    add_index :backings, :project_id
    add_index :backings, :user_id
  end
end
