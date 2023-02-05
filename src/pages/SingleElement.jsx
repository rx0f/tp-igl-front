import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import MessageModal from "../components/shared/MessageModal";

export default function SingleElement() {
  const [offer, setOffer] = useState({});
  const [contact, setContact] = useState({});
  const { oid } = useParams();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    api
      .get(`/annonces/${oid}`)
      .then((res) => {
        setOffer(res.data.data.annonce);
        setContact(res.data.data.contact);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section-layout grid grid-cols-3 gap-8 min-h-screen">
      <h2 className="title-lg col-span-3">{offer.titre}</h2>
      <div className="col-span-3 md:col-span-2 space-y-8">
        <img
          src="https://myfancyhouse.com/wp-content/uploads/2015/03/Exquisite-Private-Home-In-Florida-By-Harwick-Homes-14.jpg"
          className="h-56 md:h-72 lg:h-80 xl:h-112 mx-auto w-full object-cover rounded-md"
          alt="current preview image"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1189.53895892105!2d3.1716998634103923!3d36.705746532380864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdz!4v1675610742331!5m2!1sen!2sdz"
          className="w-full h-72 rounded-md border-gray-500"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="col-span-3 md:col-span-1 bg-white-blue rounded-md p-2 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="title-sm">More details</h3>
            <div>Type: {offer.type}</div>
            <div>Category: {offer.categorie}</div>
            <div>Area: {offer.surface}</div>
            <div>Description: {offer.description}</div>
          </div>
          <div className="space-y-2">
            <h3 className="title-sm">More details</h3>
            <div>
              Full name: {contact.prenom} {contact.nom}
            </div>
            <div>Email: {contact.email}</div>
            <div>Phone number: {contact.telephone}</div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button onClick={() => setVisible(true)} className="primary-btn-sm">
            Contact
          </button>
        </div>
      </div>
      <MessageModal
        visible={visible}
        setVisible={setVisible}
        userId={offer.contact_id}
      />
    </section>
  );
}
