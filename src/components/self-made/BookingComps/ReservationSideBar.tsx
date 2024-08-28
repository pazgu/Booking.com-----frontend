import { useSearch } from "@/context/SearchContext";
import { differenceInDays, format } from "date-fns";
import {
  Banknote,
  CircleParking,
  ShieldAlert,
  Waves,
  Wifi,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

interface PropsTypes {
  hotelId: string | undefined;
  dateSevenDaysBefore: Date | null;
  type: "bookingPage" | "paymentPage";
}

function ReservationSideBar({
  hotelId,
  dateSevenDaysBefore,
  type,
}: PropsTypes) {
  const [promoCode, setPromoCode] = useState("");
  const [detailsShow, setDetailsShow] = useState<boolean>(false);
  const { date1, options1 } = useSearch();

  function handleCodeSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    console.log(promoCode);
    setPromoCode("");
  }

  return (
    <div className="flex flex-col gap-4">
      {/*hotel*/}
      <div className="border-[1px] rounded-md flex p-3 gap-2 items-center">
        <div className="flex flex-col gap-1">
          <div>
            <p className="text-[0.7rem] font-normal">Hotel</p>
          </div>
          <p className="text-md font-bold">
            Crowne Plaza Tel Aviv City Center, an IHG Hotel
          </p>
          <div className="flex flex-col gap-1 mt-1">
            <p className="text-sm">
              136 Menachem Begin Road, Tel Aviv, 67011, Israel
            </p>
            <p className="text-[0.7rem] text-green">Excellent Location — 9.0</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-blue_1 p-1 rounded-tl-md rounded-tr-md rounded-br-md">
              <p className="text-[0.8rem] text-white">8.6</p>
            </div>
            <p className="text-[0.7rem]">Excellent · 3,233 reviews</p>
          </div>
          <div className="flex gap-1 flex-wrap mt-2">
            <span className="flex items-center rounded-sm px-1 gap-1">
              <Wifi color="#000000" strokeWidth={1.5} size={"16px"} />
              <p className="text-[0.75rem]">Free Wifi</p>
            </span>
            <span className="flex items-center rounded-sm px-1 gap-1">
              <CircleParking color="#000000" strokeWidth={1.5} size={"16px"} />
              <p className="text-[0.75rem]">Parking</p>
            </span>
            <span className="flex items-center rounded-sm px-1 gap-1">
              <Waves color="#000000" strokeWidth={1.5} size={"16px"} />
              <p className="text-[0.75rem]">Swimming pool</p>
            </span>
          </div>
        </div>
      </div>
      {/*Your booking details*/}
      <div className="border-[1px] rounded-md flex p-3 gap-2 items-center">
        <div>
          <div className="flex flex-col gap-4 border-b pb-4">
            <h2 className="text-md font-bold">Your booking details</h2>
            <section className="flex">
              {/*left*/}
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">Check-in</p>
                <div className="border-r pr-4">
                  <p className="text-md font-bold">
                    {date1?.from && format(date1.from, "EEE, MMM d, yyyy")}
                  </p>
                  <p className="text-sm text-gray-600">From 3:00 PM</p>
                </div>
              </div>
              {/*right*/}
              <div className="flex flex-col gap-1 pl-4">
                <p className="text-sm font-semibold">Check-out</p>
                <div className="">
                  <p className="text-md font-bold">
                    {date1?.to && format(date1.to, "EEE, MMM d, yyyy")}
                  </p>
                  <p className="text-sm text-gray-600">Until 11:00 AM</p>
                </div>
              </div>
            </section>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">Total length of stay:</p>
              <p className="text-sm font-bold">
                {date1?.to &&
                  date1?.from &&
                  differenceInDays(date1.to, date1.from)}{" "}
                night
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="pt-4">
              <p className="text-sm font-semibold">You selected</p>
              <p className="text-md font-bold">
                {`${options1 && options1.rooms} room for ${
                  options1 && options1.adults
                } adult`}
              </p>
            </div>
            <Link
              to={`/hotel/${hotelId}`}
              className="text-sm text-nav_btn_text font-semibold"
            >
              Change your selection
            </Link>
          </div>
        </div>
      </div>
      {/*Your price summary*/}
      <div className="border-[1px] rounded-md">
        <div>
          <div className="p-3">
            <h2 className="text-md font-bold">Your price summary</h2>
          </div>
          <div className="bg-purple flex flex-col p-3">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold">Price</p>
              <p className="text-2xl font-bold">₪ 840.06</p>
            </div>
            <p className="text-sm text-end text-gray-600">
              Additional charges may apply
            </p>
          </div>
          <div className="p-3 flex flex-col gap-4">
            <h2 className="text-md font-bold">Price information</h2>
            <div className="flex gap-3">
              <Banknote size={"20px"} />
              <div className="flex flex-col gap-2">
                <p className="text-sm ">Includes ₪ 122.06 in taxes and fees</p>
                {detailsShow && (
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">17 % VAT</p>
                    <p className="text-sm text-gray-600">₪ 122.06</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <ShieldAlert size={"40px"} />
              <p className="text-sm">
                Note: The price shown above includes 17% VAT. If you're a
                tourist, you may be eligible for a VAT refund.
              </p>
            </div>
            <p
              onClick={() => setDetailsShow(!detailsShow)}
              className="cursor-pointer text-sm text-nav_btn_text font-semibold"
            >
              {detailsShow ? "Hide details" : "Show details"}
            </p>
          </div>
        </div>
      </div>
      {/*How much will it cost to cancel?*/}
      <div className="border-[1px] rounded-md p-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-md font-bold">
            How much will it cost to cancel?
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-green text-sm">
              {`Free cancellation before ${
                dateSevenDaysBefore
                  ? format(dateSevenDaysBefore, "MMM d") // This will format as "Sep 15"
                  : "N/A"
              }`}
            </p>
            <div className="flex justify-between">
              <p className="text-sm">{`After 12:00 AM on ${
                dateSevenDaysBefore
                  ? format(dateSevenDaysBefore, "MMM d") // This will format as "Sep 15"
                  : "N/A"
              }`}</p>
              <p className="text-sm">₪ 718</p>
            </div>
          </div>
        </div>
      </div>
      {/*This booking counts!*/}
      {type === "bookingPage" && (
        <div className="border-[1px] rounded-md p-3">
          <div className="border-b pb-3">
            <h2 className="text-md font-bold">This booking counts!</h2>
            <p className="text-sm">
              Stays, flights, rental cars, taxis, and attractions - every
              booking you complete counts toward your progress in Genius.
            </p>
          </div>
          <div className="pt-3 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Booking.com's loyalty program
            </p>
            <img
              src="/src/images//genius-booking-logo-e1593011246996.png"
              alt=""
              className="h-4"
            />
          </div>
        </div>
      )}
      {/*Your payment details*/}
      {type === "paymentPage" && (
        <div className="border-[1px] rounded-md p-3 flex flex-col gap-4">
          <h2 className="text-md font-bold">Your payment details</h2>
          <div className="flex justify-between">
            <p className="text-sm">The property will charge you</p>
            <p className="text-sm">₪ 840.06</p>
          </div>
        </div>
      )}
      {/*Do you have a promo code?*/}
      {type === "paymentPage" && (
        <form
          onSubmit={(ev) => handleCodeSubmit(ev)}
          className="border-[1px] rounded-md p-3 flex flex-col gap-3"
        >
          <h2 className="text-md font-bold">Do you have a promo code?</h2>
          <div>
            <Label>Enter your promo code</Label>
            <Input
              name="promoCode"
              className="border-black"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="ghost"
              className="border-[1px] border-nav_btn_text text-nav_btn_text"
            >
              Apply
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ReservationSideBar;