class CreateTimeinProject < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :time, :string
  end
end
