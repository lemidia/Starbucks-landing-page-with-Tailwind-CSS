import React from "react";

function BoxF() {
  return (
    <section className="max-w-[1240px] mx-auto text-white my-8  grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="space-y-2">
        <img className="" src="/img/box-f1.jpg" alt="" />
        <div className="text-main-color bg-green-100 py-12 px-10 text-center space-y-7">
          <h3 className="text-2xl font-bold">
            Let the holiday cheer come to you
          </h3>

          <p>
            Make the moment merry. Order Starbucks holiday favorites on Uber
            Eats.*
          </p>
          <button className="text-black border border-1 border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-150">
            Order Now
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <img src="/img/box-f2.jpg" alt="" />

        <div className="text-white bg-main-color py-12 px-10 text-center space-y-7">
          <h3 className="text-2xl font-bold">Loved Passing on Netflix?</h3>

          <p>
            Our new social series about film adaptations kicks off with the
            actors and directors who brought the book to life.
          </p>
          <button className="text-white border border-1 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-150">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default BoxF;
