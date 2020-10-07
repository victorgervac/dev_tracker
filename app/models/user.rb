# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :jobs
  extend Devise::Models

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self.findjobs(ids)
    ids = ids.empty? ? [0] : ids
    Job.where("id IN (?)", ids)
  end
end
