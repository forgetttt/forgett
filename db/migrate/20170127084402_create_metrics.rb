class CreateMetrics < ActiveRecord::Migration[5.0]
  def change
    create_table :metrics do |t|
      t.string :metric_name
      t.integer :value
      t.decimal :lat
      t.decimal :lng
      t.datetime :timestamp
      t.integer :driver_id

      t.timestamps
    end
  end
end
