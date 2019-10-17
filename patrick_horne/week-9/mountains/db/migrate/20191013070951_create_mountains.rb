class CreateMountains < ActiveRecord::Migration[6.0]
  def change
    create_table :mountains do |t|
      t.text :name
      t.integer :height_metres
      t.text :country
      t.integer :first_ascent

      t.timestamps
    end
  end
end
