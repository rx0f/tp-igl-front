import Input from "../shared/Input";
import { useState } from "react";
import Select from "../shared/Select";
import { wilayas, types, caetgories } from "../../utils/values";
import TextArea from "../shared/TextArea";
import { api } from "../../utils/api";

export default function AddAnnonce({ getAnnonces }) {
  const [titre, setTitre] = useState("");
  const [surface, setSurface] = useState(0);
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState(0);
  const [commune, setCommune] = useState("");
  const [adresse, setAdresse] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [categorie, setCategorie] = useState("");
  const [type, setType] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const id = localStorage.getItem("user");

    const annonce = {
      wilaya,
      categorie,
      type,
      titre,
      surface,
      description,
      prix,
      commune,
      adresse,
    };

    api
      .post(`/user/${id}/depot_annonce`, annonce)
      .then(() => {
        getAnnonces();
        alert("Offer added succesfully");
      })
      .catch(() => alert("Error while adding offer"));
  };

  return (
    <section className="section-layout">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="title-lg">Add offer</h2>
        <p className="title-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <form className="my-4 w-full space-y-2" onSubmit={submit}>
        <div className="flex flex-col md:flex-row gap-x-8 w-full">
          <div className="w-full">
            <Input label="Title" setValue={setTitre} type="text" />
            <Select label="Type" values={types} setValue={setType} />
            <Select
              label="Category"
              values={caetgories}
              setValue={setCategorie}
            />
            <Select label="Wilaya" values={wilayas} setValue={setWilaya} />
            <Input label="City" setValue={setCommune} type="text" />
          </div>
          <div className="w-full">
            <Input label="Price" setValue={setPrix} type="number" />
            <Input label="Area" setValue={setSurface} type="number" />
            <TextArea label="Description" setValue={setDescription} rows={2} />
            <TextArea rows={2} label="Address" setValue={setAdresse} />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button className="primary-btn-sm" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
