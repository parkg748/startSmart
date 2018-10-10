class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :duration, null: false, default: 0
      t.integer :starting_bid, null: false
      t.date :eta, null: false
      t.string :shipping, null: false
      t.boolean :limit, default: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :category_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :projects, :category_id
    add_index :projects, :user_id
  end
end
