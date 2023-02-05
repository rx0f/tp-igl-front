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
    <section className="section-layout grid grid-cols-3 gap-8">
      <h2 className="title-lg col-span-3">{offer.titre}</h2>
      <div className="col-span-3 md:col-span-2">
        <img
          src="https://myfancyhouse.com/wp-content/uploads/2015/03/Exquisite-Private-Home-In-Florida-By-Harwick-Homes-14.jpg"
          className="h-56 md:h-72 lg:h-80 xl:h-112 mx-auto w-full object-cover rounded-md"
          alt="current preview image"
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
