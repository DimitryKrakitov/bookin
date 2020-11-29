class CreateSpaces < ActiveRecord::Migration[5.2]
  def change
    create_table :spaces do |t|
      t.string :name, null: false

      t.integer :capacity, null: false, default: 1

      t.timestamps
    end
  end
end
