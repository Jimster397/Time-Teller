class CreateWatches < ActiveRecord::Migration[6.1]
  def change
    create_table :watches do |t|
      t.string :name
      t.float :price
      t.string :description
      t.string :imageurl
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
