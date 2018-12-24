class CreateCommentsTAble < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :comment
      t.integer :user_id
      t.integer :project_id
      t.timestamps
    end
  end
end
