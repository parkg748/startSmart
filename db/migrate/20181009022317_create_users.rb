class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :biography
      t.timestamps
    end
    add_index :users, :email
    add_index :users, :session_token
  end
end
