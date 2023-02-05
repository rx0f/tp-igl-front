import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../utils/api";
import AddAnnonce from "./AddAnnonce";
import MyMessages from "./MyMessages";
import MyOffers from "./MyOffers";
import SearchOffer from "./SearchOffer";

export default function HomePageAfter() {
  const [annonces, setAnnonces] = useState([]);
  const [userAnnonces, setUserAnnonces] = useState([]);
  const id = parseInt(localStorage.getItem("user"));

  const getAnnonces = () => {
    api
      .get("/annonces")
      .then((res) => setAnnonces(res.data.data))
      .catch(() => {});

    api
      .get(`user/${id}/annonces`)
      .then((res) => setUserAnnonces(res.data.data))
      .catch(() => {});
  };

  useEffect(() => {
    getAnnonces();
  }, []);

  return (
    <>
      <AddAnnonce getAnnonces={getAnnonces} />
      <MyOffers annonces={userAnnonces} />
      <MyMessages />
      <SearchOffer annonces={annonces} />
    </>
  );
}
