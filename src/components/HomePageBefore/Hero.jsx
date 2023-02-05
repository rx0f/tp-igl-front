export default function Hero() {
  return (
    <section className="section-layout grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="col-span-1 my-auto">
        <h1 className="title-xl">Dream habitat, Ideal home</h1>
        <p className="title-description-lg my-4">
          Our real estate website offers a wide selection of properties to meet
          all needs and budgets. Trust our expertise to find your ideal home
          easily. Browse our online selection now!
        </p>
      </div>
      <img
        src=" https://res.klook.com/image/upload/c_fill,w_720,h_500,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ctkjmd3fsgssxztsu5aq.webp"
        alt="Building"
        className="col-span-1 order-first md:order-last my-auto rounded-xl"
      />
    </section>
  );
}
