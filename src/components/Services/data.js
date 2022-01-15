import React from "react";
import { MdSecurity } from "react-icons/md";
import { RiExchangeDollarFill } from "react-icons/ri";
import { GiFastArrow } from "react-icons/gi";
import { FcComboChart } from "react-icons/fc";
import secureImage from "../../assets/svg/secure.svg";
export const data = [
  {
    icon: secureImage,
    title: "Secure",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
              voluptas`,
  },
  {
    icon: `<GiFastArrow/>`,
    title: "Swap",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
              voluptas`,
  },
  {
    icon: `<RiExchangeDollarFill/>`,
    title: "P2P",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
              voluptas`,
  },
  {
    icon: `<FcComboChart/>`,
    title: "Market Data",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
              voluptas`,
  },
];
