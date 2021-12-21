import React from "react";

function BoxD() {
  return (
    <section className="bg-main-color max-w-[1240px] mx-auto  text-white flex flex-col lg:flex-row my-8">
      <div className="flex-1">
        <img className="h-auto" src="/img/box-d.png" alt="" />
      </div>
      <div className="flex flex-1 flex-col items-center space-y-10 text-center px-10 py-10 justify-center ">
        <h2 className="uppercase text-4xl font-medium tracking-[0.2em] leading-snug">
          Startbucks thanksgiving blend
        </h2>
        <p className="text-lg leading-[1.9]">
          this elegant dark roast returns, showcasing flavors from some of the
          world's major coffee-growing regions.
        </p>
        <button className="border border-white rounded-full py-2 px-4">
          Order Now
        </button>
      </div>
    </section>
  );
}

export default BoxD;
