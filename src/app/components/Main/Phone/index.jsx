import Image from "next/image";

export default function Phone() {
    return (
        <>
            <div className="relative flex justify-center w-full">
                <Image
                    src="/assets/main/iphone.png"
                    alt="mobile"
                    className="w-[1238px] h-[922px] mt-32 z-10"
                    width={1440}
                    height={810}
                />
                <div className="absolute flex flex-col items-center text-white mt-[137px] mr-3 w-[664px] h-[126px]">
                    <p className="text-sm mb-4">400,000 ACCOUNTS & COUNTING</p>
                    <div className="w-[636px] h-[93px]">
                        <p className="text-4xl text-center mr-2 ml-2">
                            <b>No hidden fees. No credit checks.</b>
                        </p>
                        <p className="text-4xl text-center">
                            No more barriers to building credit.
                        </p>
                    </div>
                </div>
                <section className="absolute grid grid-cols-2 w-[1238px] h-[718px] mt-24">
                    <div className="flex flex-col z-50 mt-[250px] w-[261px] h-[183px] items-start">
                        <div className="flex justify-start">
                            <Image
                                src="/assets/main/icon1.svg"
                                alt="icon1"
                                width={8}
                                height={8}
                                //className="w-8 h-8"
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="flex w-[250px] h-[77px] mt-4 text-left text-xl leading-6 text-white font-semibold tracking-[0.32px]">
                                Get a secured credit card and bank account in 5 minutes.
                            </p>

                            <p className="flex w-[228px] h-[38px] mt-2 text-left text-sm text-[#A1A6A8]">
                                No credit history, credit check, or minimum deposit
                                required.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col z-50 mt-[250px] items-end">
                        <div className="flex justify-end">
                            <Image
                                src="/assets/main/icon3.svg"
                                alt="icon3"
                                width={8}
                                height={8}
                                //className="w-8 h-8"
                            />
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="flex h-[26px] mt-4 text-right text-lg leading-6 text-white font-semibold tracking-[0.32px]">
                                Build your U.S. credit
                            </p>

                            <p className="flex mt-2 w-[260px] h-[38px] text-right text-sm text-[#A1A6A8]">
                                We believe in forming positive habits. Build your U.S.
                                credit with Sable
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col z-50 mt-[120px] items-start">
                        <div className="flex justify-start">
                            <Image
                                src="/assets/main/icon2.svg"
                                alt="icon2"
                                width={8}
                                height={8}
                                //className="w-8 h-8"
                            />
                        </div>
                        <div className="flex flex-col w-[260px] h-[126px] items-start">
                            <p className="flex w-[250px] h-[77px] mt-4 text-left text-xl leading-6 text-white font-semibold tracking-[0.32px]">
                                The only premium card for building credit.
                            </p>

                            <p className="flex mt-2 text-left text-sm text-[#A1A6A8]">
                                2% unlimited cash back on your favorite brands, 2X first
                                year cash back match, premium benefits and more!
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col z-50 mt-[120px] items-end">
                        <div className="flex justify-end">
                            <Image
                                src="/assets/main/icon4.svg"
                                alt="icon4"
                                width={8}
                                height={8}
                                //className="w-8 h-8"
                            />
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="flex w-[246px] h-[51px] mt-4 text-right text-xl leading-6 text-white font-semibold tracking-[0.32px]">
                                Bank like a global citizen with Sable.
                            </p>

                            <p className="flex mt-2 w-[255px] h-[75px] text-right text-sm text-[#A1A6A8]">
                                Start building credit before you even enter the country.
                                Non-U.S. citizens can apply with their passport and visa.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="flex justify-center items-center">
                <hr className="flex justify-center size-1 w-5/6 mt-10 mr-14 bg-[#484747]" />
            </div>
        </>
    );
}
