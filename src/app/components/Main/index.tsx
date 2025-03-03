import { EmblaOptionsType } from "embla-carousel";
import Phone from "./Phone";
import Partners from "./Partners";
import Brands from "./Brands";
import Compare from "./Compare";
import Image from "next/image";

export default function Main() {
    const OPTIONS: EmblaOptionsType = { direction: "rtl", loop: true, duration: 1000 };
    const SLIDE_COUNT = 4;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    return (
        <div className="bg-[#2f2f2f]">
            <Phone />
            <Partners slides={SLIDES} options={OPTIONS} />

            <section className="mt-10">
                <div className="flex justify-end bg-black pt-20 pr-5">
                    <Image
                        src="/assets/main/card1.svg"
                        width={433}
                        height={533}
                        alt="card1"
                    />
                </div>
                <div className="grid grid-cols-3 bg-white">
                    <div className="flex items-end pt-20 pl-28">
                        <Image
                            src="assets/main/card2.svg"
                            width={433}
                            height={533}
                            alt="card2"
                        />
                    </div>
                    <div className="flex pt-40">
                        <p className="text-[28.62px] w-[360px] leading-[36.3px]">
                            Get a bank account & debit card{" "}
                            <span className="text-[#1FC6BB]">in five minutes.</span>
                        </p>
                    </div>
                </div>
            </section>
            <Brands />
            <Compare />
            <section></section>
        </div>
    );
}
