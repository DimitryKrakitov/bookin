module BookingsHelper
  def display_bookings(bookings = Booking.all)
    bookings.map do |bookin|
      {
        user: bookin.user.name,
        space: bookin.space.name,
        start: bookin.start.strftime('%a, %d %b %Y - %H:%M'),
        finish: bookin.finish.strftime('%a, %d %b %Y - %H:%M')
      }
    end
  end

  def search_bookings(name)
    spaces = Space.where('lower(name) LIKE ?', "%#{name.downcase}%")
    spaces.present? ? bookings_from_spaces(spaces) : []
  end

  private

  def bookings_from_spaces(spaces)
    spaces.map { |space| display_bookings(space.bookings) }.flatten
  end
end
