import React from "react";

function BoxB() {
  return (
    <section className="bg-color-secondary max-w-[1240px] mx-auto  text-white flex flex-col lg:flex-row my-8">
      <div className="flex-1">
        <img className="h-auto" src="/img/box-b.png" alt="" />
      </div>
      <div className="flex flex-1 flex-col items-center space-y-10 text-center px-10 py-10 justify-center ">
        <h2 className="uppercase text-4xl font-medium tracking-[0.2em] leading-snug">
          new to the nice list
        </h2>
        <p className="text-lg leading-[1.9]">
          For a nondairy twist on a holiday cookie classic, try the new Iced
          Sugar Cookie Almondmilk Latte.
        </p>
        <button className="border border-white rounded-full py-2 px-4">
          Order Now
        </button>
      </div>
    </section>
  );
}

export default BoxB;
