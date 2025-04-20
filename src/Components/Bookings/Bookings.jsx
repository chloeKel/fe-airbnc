import { useState, useEffect } from "react";
import { useUserContext } from "../../Contexts/Contexts";
import AmendBooking from "./AmendBooking";
import DefaultContent from "../DefaultContent";
import Loader from "../Loader";
import { formatDateString, getBookingDuration } from "../../Utils/utils";
import { StyledBookingsImg, StyledBookingsLi, StyledBookingsUl, StyledInfo, StyledManageBooking, StyledPanelContainer, StyledPanelAsset } from "../../Styling/BookingsStyles";
import { StyledLink } from "../../Styling/NavigationStyles";
import { useBookingRequests } from "../../CustomHooks/useBookingRequests";
import { useReviews } from "../../CustomHooks/useReviews";
import useScreenSize from "../../CustomHooks/useScreenSize";
import ShowReview from "../Reviews/ShowReview";

export default function Bookings({ height }) {
  const { userId } = useUserContext();
  const { fetchBookings } = useBookingRequests(userId);
  const { fetchReviews } = useReviews();
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [reviewStatus, setReviewStatus] = useState({});
  const screenSize = useScreenSize();
  const bookingHeight = (screenSize.height - height) / 3;
  const childHeight = bookingHeight / 3;

  useEffect(() => {
    (async () => {
      const fetchedBookings = await fetchBookings(userId);
      setBookings(fetchedBookings);

      const status = {};
      for (const booking of fetchedBookings) {
        const { reviews } = await fetchReviews(booking.property_id);
        const isReviewed = reviews.some((review) => review.guest_id === userId && review.property_id === booking.property_id);
        status[booking.property_id] = isReviewed;
      }

      setReviewStatus(status);
      setLoading(false);
    })();
  }, [fetchBookings, fetchReviews, userId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {bookings.length === 0 ? (
            <DefaultContent component="bookings" />
          ) : (
            <StyledBookingsUl>
              {bookings.map((booking) => {
                const { booking_id, image, check_in_date, check_out_date, property_id, property_name } = booking;
                const checkIn = formatDateString(check_in_date);
                const checkOut = formatDateString(check_out_date);
                return (
                  <StyledManageBooking key={booking_id}>
                    <StyledBookingsLi $height={`${bookingHeight}px`}>
                      <StyledBookingsImg src={image} alt={property_name} />
                      <StyledInfo $height={`${childHeight}px`}>
                        <StyledLink to={`/property/${property_id}`}>{property_name}</StyledLink>
                        <p>{getBookingDuration(checkIn, checkOut)}</p>
                        <p>Booking reference: {booking_id}</p>
                      </StyledInfo>
                    </StyledBookingsLi>
                    {reviewStatus[property_id] ? <ShowReview propId={property_id} userId={userId} height={childHeight * 2} /> : <AmendBooking prevCheckIn={checkIn} prevCheckOut={checkOut} bookingId={booking_id} setBookings={setBookings} userId={userId} propId={property_id} height={childHeight} />}
                    <StyledPanelContainer>
                      <StyledPanelAsset src={"/assets/bluePlantPanel.svg"} alt="Airbnc Logo" />
                    </StyledPanelContainer>
                  </StyledManageBooking>
                );
              })}
            </StyledBookingsUl>
          )}
        </>
      )}
    </>
  );
}
