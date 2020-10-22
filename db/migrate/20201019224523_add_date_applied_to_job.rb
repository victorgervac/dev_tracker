class AddDateAppliedToJob < ActiveRecord::Migration[6.0]
  def change
    add_column :jobs, :date_applied, :date
  end
end
