import Image from "next/image";

export default function Brands() {
    return (
        <section>
            <div className="grid grid-cols-2">
                <div className="grid grid-rows-3 mt-24 ml-24 mr-24">
                    <div className="border-t-2 border-[#A0A1A8]">
                        <p className="pt-14 text-white">
                            Earn 2% cash back on favorite brands
                        </p>
                        <p className="pt-6 pb-14 text-white">
                            Earn 2%<span1 className="text-xs">1</span1> cash back on
                            favorite brands, 1%<span1 className="text-xs">1</span1>{" "}
                            cashback on all purchases, and a 2x cashback match in your
                            first year! Get premium benefits and much more.
                        </p>
                    </div>
                    <div className="border-t-2 border-[#73757B]">
                        <p className="pt-14 text-[#73757B]">
                            Moving to the U.S.? No SSN required
                        </p>
                        <p className="pt-6 pb-14 text-[#73757B]">
                            Start building credit before you even enter the country. Sign
                            up with your international address, passport & visa instead**.
                        </p>
                    </div>
                    <div className="border-t-2 border-[#73757B]">
                        <p className="pt-14 text-[#73757B]">
                            Get help from a real person
                        </p>
                        <p className="pt-6 pb-14 text-[#73757B]">
                            When you’ve got questions about your finances, get
                            multilingual customer support anytime you need from direct
                            in-app chat, email, phone, and our site FAQs.
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        src="/assets/main/brands.png"
                        width={720}
                        height={810}
                        alt="brands"
                    />
                </div>
            </div>
        </section>
    );
}
