import { useState, useEffect, useCallback, Fragment } from "react";
import { useUserContext } from "../../Contexts/Contexts";
import AmendBooking from "./AmendBooking";
import DefaultContent from "../DefaultContent";
import Loader from "../Loader";
import { formatDateString, getBookingDuration } from "../../Utils/utils";
import { StyledButtonContainer, StyledBookingsImg, StyledBookingsLi, StyledBookingsUl, StyledInfo } from "../../Styling/BookingsStyles";
import { StyledLink } from "../../Styling/NavigationStyles";
import { useBookingRequests } from "../../CustomHooks/useBookingRequests";
import { useReviews } from "../../CustomHooks/useReviews";
import ShowReview from "../Reviews/ShowReview";

// export default function Bookings() {
//   const { userId } = useUserContext();
//   const { fetchBookings } = useBookingRequests(userId);
//    const { reviews } = useFetchReviews(propertyId);
//   const [loading, setLoading] = useState(true);
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetchBookings(userId).then((res) => setBookings(res));
//     setLoading(false);
//   }, [fetchBookings, userId]);

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           {bookings.length === 0 ? (
//             <DefaultContent component="bookings" />
//           ) : (
//             <StyledBookingsUl>
//               {bookings.map((booking) => {
//                 const { booking_id, image, check_in_date, check_out_date, property_id, property_name } = booking;
//                 const checkIn = formatDateString(check_in_date);
//                 const checkOut = formatDateString(check_out_date);
//                 return (
//                   <Fragment key={booking_id}>
//                     <StyledBookingsLi key={booking_id}>
//                       <StyledBookingsImg src={image} alt={property_name} />
//                       <StyledInfo>
//                         <StyledLink to={`/property/${property_id}`}>
//                           <span>{property_name}</span>
//                         </StyledLink>
//                         <p>{getBookingDuration(checkIn, checkOut)}</p>
//                         <p>Booking reference: {booking_id}</p>
//                       </StyledInfo>
//                     </StyledBookingsLi>
//                     <StyledButtonContainer>
//                       <AmendBooking prevCheckIn={checkIn} prevCheckOut={checkOut} bookingId={booking_id} setBookings={setBookings} userId={userId} propId={property_id} />
//                     </StyledButtonContainer>
//                   </Fragment>
//                 );
//               })}
//             </StyledBookingsUl>
//           )}
//         </>
//       )}
//     </>
//   );
// }

export default function Bookings() {
  const { userId } = useUserContext();
  const { fetchBookings } = useBookingRequests(userId);
  const { fetchReviews } = useReviews();
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings(userId).then((res) => setBookings(res));
    setLoading(false);
  }, [fetchBookings, userId]);

  const isReviewed = useCallback(
    async (propId) => {
      const { reviews } = await fetchReviews(propId);
      return reviews.some((review) => review.guest_id === userId && review.property_id === propId);
    },
    [fetchReviews, userId]
  );

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
                  <Fragment key={booking_id}>
                    <StyledBookingsLi key={booking_id}>
                      <StyledBookingsImg src={image} alt={property_name} />
                      <StyledInfo>
                        <StyledLink to={`/property/${property_id}`}>
                          <span>{property_name}</span>
                        </StyledLink>
                        <p>{getBookingDuration(checkIn, checkOut)}</p>
                        <p>Booking reference: {booking_id}</p>
                      </StyledInfo>
                    </StyledBookingsLi>
                    {isReviewed(property_id) ? (
                      <ShowReview propId={property_id} userId={userId} />
                    ) : (
                      <StyledButtonContainer>
                        <AmendBooking prevCheckIn={checkIn} prevCheckOut={checkOut} bookingId={booking_id} setBookings={setBookings} userId={userId} propId={property_id} />
                      </StyledButtonContainer>
                    )}
                  </Fragment>
                );
              })}
            </StyledBookingsUl>
          )}
        </>
      )}
    </>
  );
}
