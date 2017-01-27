class CreateMetrics < ActiveRecord::Migration[5.0]
  def change
    create_table :metrics do |t|
      t.string :metric_name
      t.integer :value
      t.decimal :lat
      t.decimal :lng
      t.timestamp :timestamp
      t.belongs_to :driver, foreign_key: true

      t.timestamps
    end
  end
end
