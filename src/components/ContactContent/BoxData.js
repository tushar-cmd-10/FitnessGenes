import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { LuMails } from "react-icons/lu";

const boxData = [
  {
    id: 1,
    link: "https://maps.app.goo.gl/jKPN2oKWiUrcJuuD9",
    icon: <FaMapLocationDot />,
    boxTitle: "Our Location",
    details: "Latur, Maharashtra, India",
    target: "_blank",
  },
  {
    id: 2,
    link: "tel:+7058209269",
    icon: <FaPhoneVolume />,
    boxTitle: "Contact Us",
    details: "+91 7058209269",
  },
  {
    id: 3,
    link: "mailto:tushardeshmukhh96k@gmail.com",
    icon: <LuMails />,
    boxTitle: "Email Us",
    details: "tushardeshmukhhk@gmail.com",
  },
];

export default boxData;
