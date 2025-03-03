import Image from "next/image";

export default function Compare() {
    return (
        <section>
            <div className="grid grid-rows-2 bg-black h-[757px]">
                <div className="pr-4 pl-4 pt-10 pb-2 flex justify-between items-center text-white">
                    <p className="text-[84.5px]">Compare Sable</p>
                    <span className="size-0 rounded-full border-[8px] border-solid"></span>
                    <p className="text-[84.5px]">Compare Sable</p>
                </div>
                <div className="pl-24 pr-24 pb-24">
                    <table className="w-full">
                        <thead>
                            <tr className="border-collapse">
                                <th></th>
                                <th className="pb-5">
                                    <div>
                                        <Image
                                            src="/assets/main/card3.svg"
                                            width={266}
                                            height={123}
                                            alt="card3"
                                        />
                                        <div className="flex justify-start w-[238px]">
                                            <p className="mt-3 text-2xl text-[#10ACA2] text-left font-normal">
                                                Sable Secured Credit & Debit Card
                                            </p>
                                        </div>
                                    </div>
                                </th>
                                <th className="pb-5">
                                    <div>
                                        <Image
                                            src="/assets/main/card4.svg"
                                            width={196}
                                            height={123}
                                            alt="card4"
                                        />

                                        <div className="flex justify-start w-[130px]">
                                            <p className="mt-3 text-2xl text-[#10ACA2] text-left font-normal">
                                                Sable Debit Card
                                            </p>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            <tr className="border-y border-[#2f2f2f]">
                                <td className="pt-4 pb-4">
                                    No monthly fees or minimum balance
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                            </tr>
                            <tr className="border-y border-[#2f2f2f]">
                                <td className="pt-4 pb-4">
                                    Deposits FDIC insured up to $250,000
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                            </tr>
                            <tr className="border-y border-[#2f2f2f]">
                                <td className="pt-4 pb-4">
                                    Rewards, cash back & card perks
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                            </tr>
                            <tr className="border-y border-[#2f2f2f]">
                                <td className="pt-4 pb-4">
                                    Send checks & transfer money for free
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                            </tr>
                            <tr className="border-y border-[#2f2f2f]">
                                <td className="pt-4 pb-4">
                                    Build credit history from Day 1
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                            </tr>
                            <tr className="border-y border-[#2f2f2f]">
                                <td className="pt-4 pb-4">
                                    No credit check required for sign up
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                                <td>
                                    <Image
                                        src="/assets/main/check.png"
                                        width={19}
                                        height={19}
                                        alt="check"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-start items-center pt-4">
                                    Cost per year
                                </td>
                                <td className="pt-4 pb-4 leading-[55.6px] text-[41.34px] font-normal">
                                    $0{" "}
                                    <span className="text-[8px] font-normal text-[#A0A1A8]">
                                        /year
                                    </span>
                                </td>
                                <td className="text-[41.34px] font-normal leading-[55.6px]">
                                    $0{" "}
                                    <span className="text-[8px] font-normal text-[#A0A1A8]">
                                        /year
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="pt-10 pb-10"></td>
                                <td>
                                    <button
                                        type="button"
                                        className="bg-[#6FDBD4] w-48 h-12 rounded-full text-black font-semibold text-xs"
                                        onClick="#"
                                    >
                                        GET CREDIT & DEBIT
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="bg-[#6FDBD4] w-32 h-12 rounded-full text-black font-semibold text-xs"
                                        onClick="#"
                                    >
                                        GET DEBIT
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
