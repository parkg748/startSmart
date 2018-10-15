class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.string :title
      t.string :description
      t.integer :pledge_amt
      t.date :eta
      t.string :shipping
      t.integer :project_id
      t.boolean :limit, default: false
      t.timestamps
    end
  end
end
