class Space < ApplicationRecord
  has_many :bookings

  validates :name, presence: true, uniqueness: true
  validates :capacity, presence: true

  validates_numericality_of :capacity, greater_than: 0

end
