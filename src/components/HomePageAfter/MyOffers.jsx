import HousesGrid from "./HousesGrid";

export default function MyOffers({annonces}) {
  return (
    <section className="section-layout space-y-8 bg-white-blue">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="title-lg">My offers</h2>
        <p className="title-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <HousesGrid houses={annonces} />
    </section>
  );
}
