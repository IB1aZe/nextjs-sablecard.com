import Image from "next/image";
import background from "@/public/assets/header/background.jpg";
import logo from "@/public/assets/header/logo.svg";

export default function Home() {
    return (
        <div>
            <header className="relative">
                <Image
                    src={background}
                    alt="background"
                    layout="responsive"
                    className="absolute"
                />
                <div className="relative ml-12 mt-0 mr-12">
                    <form action="text" className="flex justify-end">
                        <input
                            type="search"
                            name="input"
                            id="input"
                            className="rounded-xl w-48 h-12 mt-4"
                        />
                    </form>
                </div>
                <div className="relative mt-20 ml-12 mr-[32rem] grid grid-cols-2">
                    <Image src={logo} alt="logo" />
                    <div className="relative grid-cols-7 grid items-center">
                        <div className="text-white font-light">CREDIT</div>
                        <div className="text-white font-light">DEBIT</div>
                        <div className="text-white font-light">APP</div>
                        <div className="text-white font-light">LEARN</div>
                    </div>
                </div>
                <div className="relative">asdasdas</div>
            </header>
            <main className="">
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
            </main>
            <footer className="">
                <section></section>
                <section></section>
            </footer>
        </div>
    );
}
