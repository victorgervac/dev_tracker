class RemoveDateAppliedFromJob < ActiveRecord::Migration[6.0]
  def change
    remove_column :jobs, :date_applied, :datetime
  end
end
