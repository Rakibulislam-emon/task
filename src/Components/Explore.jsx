"use client";

import Slider from "./Slider";

export default function Explore() {
    return (
        <div className="max-w-screen-2xl mx-auto lg:flex lg:justify-between border p-4">
            <div className="text-black w-full flex flex-col justify-center items-center gap-y-10 lg:w-1/2 border lg:border-r">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Welcome to Explore Page</h1>
                    <p className="mt-2">This is the Explore page where you can explore various destinations around the world.</p>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at blanditiis temporibus similique, sapiente excepturi, ullam nemo recusandae voluptatum animi facere corrupti quasi aut expedita labore quam in? Aspernatur, eveniet.
                    </p>
                </div>
                <div>
                    <button className="border border-[#2D0399] h-12 w-40 rounded-2xl">Explore now</button>
                </div>
            </div>
            <div className="flex justify-center mt-10 lg:mt-0 lg:w-1/2">
                <div className=" w-full max-w-[395px] h-[395px] flex items-center justify-center text-black  ">
                 <Slider/>
                </div>
            </div>
        </div>
    );
}
