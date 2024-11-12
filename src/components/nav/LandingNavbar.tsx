import { Link } from "react-router-dom";
import Buttons from "../common/Buttons";
import BrilliantLogoSvg from '../../assets/svgs/logo.svg?react';

export default function LandingNavbar() {
  return (
    <div className="flex justify-between px-4 sm:px-8 md:px-16 lg:px-36 py-6">
      <div className="w-24 sm:w-32 self-center">
        <BrilliantLogoSvg className="w-full" />
      </div>
      <div className="self-center">
        <Buttons btnType="type1" className="w-24 self-center">
          <Link className=" text-base sm:text-lg" to="/signin">Log in</Link>
        </Buttons>
      </div>
    </div>
  );
}