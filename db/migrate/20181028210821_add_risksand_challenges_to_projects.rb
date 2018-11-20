class AddRisksandChallengesToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :challenges, :string
  end
end
