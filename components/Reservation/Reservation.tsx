import ReservationForm from "./Form";
import Container from "@/shared/Container";
import Text from "./Text";

const Reservation = () => {
  return (
    <div className="bg-green-600 py-8  flex flex-col md:flex-row justify-between items-center">
      <Container className="flex flex-col md:flex-row">
        <Text />
        <div className="w-full md:w-1/2 p-4">
          <ReservationForm />
        </div>
      </Container>
    </div>
  );
};

export default Reservation;
