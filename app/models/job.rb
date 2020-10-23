class Job < ApplicationRecord
  belongs_to :user 
  has_many :notes, 
  dependent: :destroy
  has_many :contacts,
  dependent: :destroy
end
