class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|

      t.references :user, foreign_key: true, null: false
      t.references :space, foreign_key: true, null: false

      t.datetime :start, null: false
      t.datetime :finish, null: false

      t.timestamps
    end
  end
end
