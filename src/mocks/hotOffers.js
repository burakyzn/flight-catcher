import MasterCardLogo from '../components/svg/MasterCardLogo';
import VisaLogo from '../components/svg/VisaLogo';
import AmericanExpressLogo from '../components/svg/AmericanExpressLogo';

export default [
  {
    id: 1,
    rate: "15% OFF",
    title: "15% discount with Mastercard",
    description: "Lorem ipsum dolor sit amet",
    logo: <MasterCardLogo width={"70%"} height={"70%"}/>
  },
  {
    id: 2,
    rate: "23% OFF",
    title: "23% discount with Visa",
    description: "Lorem ipsum dolor sit amet",
    logo: <VisaLogo width={"70%"} height={"70%"}/>
  },
  {
    id: 3,
    rate: "28% OFF",
    title: "28% discount with American Express",
    description: "Lorem ipsum dolor sit amet",
    logo: <AmericanExpressLogo width={"70%"} height={"70%"}/>
  },
]