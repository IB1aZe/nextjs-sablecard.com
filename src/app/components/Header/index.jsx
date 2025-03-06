import Image from "next/image";
import background from "@/public/assets/header/background.svg";
import logo from "@/public/assets/header/logo.svg";
import greenCircle from "@/public/assets/header/green-circle.svg";
import member from "@/public/assets/header/member.svg";

export default function Header() {
    return (
        <div className="relative">
            <Image
                src={background}
                alt="background"
                className="absolute"
                width={1440}
                height={810}
            />
            <div className="relative ml-12 mt-0 mr-12">
                <form action="text" className="flex justify-end">
                    <input
                        type="search"
                        name="input"
                        id="input"
                        className="rounded-full w-48 h-12 mt-4"
                    />
                </form>
            </div>
            <div className="relative mt-4 ml-12 mr-[27rem] grid grid-cols-2">
                <Image src={logo} alt="logo" />
                <nav className="relative grid-cols-4 grid items-center justify-between">
                    <a href="#" className="flex text-white font-light ">
                        CREDIT
                        <p>&nbsp;</p>
                        <Image src={greenCircle} alt="green-circle" />
                    </a>
                    <a href="#" className="flex text-white font-light">
                        DEBIT
                    </a>
                    <a href="#" className="flex text-white font-light">
                        APP
                    </a>
                    <a href="#" className="flex text-white font-light">
                        LEARN
                        <p>&nbsp;</p>
                        <Image src={greenCircle} alt="green-circle" />
                    </a>
                </nav>
            </div>
            <div className="relative flex justify-center ml-auto">
                <p className="text-center text-white text-6xl font-light w-[634px] h-56">
                    The fastest, most premium path to{" "}
                    <b className="font-medium">financial freedom</b>
                </p>
            </div>
            <div className="relative flex justify-center mt-3">
                <button
                    type="button"
                    className="rounded-full border-2 border-none w-40 h-20 bg-[#6FDBD4]"
                >
                    Exploler
                </button>
            </div>
            <div className="relative flex items-center w-[410px] h-6 mt-[197px] mb-14 ml-12">
                <div className="flex items-center">
                    <Image src={member} alt="logo" />
                </div>
                <p className="flex w-[325px] ml-6 font-light text-[#A0A1A8] text-[10px]">
                    Banking services provided by Coastal Community Bank, Member FDIC,
                    pursuant to license by Mastercard International Inc.
                </p>
            </div>
        </div>
    );
}
