class Job < ApplicationRecord
  belongs_to :user 
  has_many :notes 
  has_many :contacts,
  dependent: :destroy
end
