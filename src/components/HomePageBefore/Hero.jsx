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
        src="https://2.bp.blogspot.com/-ZAVZnl1Fti4/ULbIZJ0lwTI/AAAAAAAAD64/4nuYnCl_nOE/s1600/Kuala_Lumpur_Petronas_Twin_Towers_Malaysia.jpg"
        alt="Building"
        className="col-span-1 order-first md:order-last my-auto rounded-xl"
      />
    </section>
  );
}
