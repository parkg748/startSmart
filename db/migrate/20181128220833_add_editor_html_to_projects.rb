class AddEditorHtmlToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :editor_html, :string
  end
end
