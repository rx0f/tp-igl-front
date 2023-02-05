import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { api } from "../../utils/api";
import { useState } from "react";
import TextArea from "../shared/TextArea";

export default function MessageModal({ visible, setVisible, userId }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [content, setContent] = useState("");
  const senderId = parseInt(localStorage.getItem("user"));

  const sendMessage = (event) => {
    event.preventDefault();

    api
      .post(`/user/${userId}/message`, {
        sender_id: senderId,
        content,
      })
      .then(() => {
        alert("Message sent successfully");
        setVisible(false);
      })
      .catch(() => alert("Error while sending message"));
  };

  return (
    <ReactModal isOpen={visible} style={customStyles} ariaHideApp={false}>
      <div className="w-60 md:w-96 space-y-4">
        <div className="flex justify-between">
          <h3 className="title-sm">Message content</h3>
          <button onClick={() => setVisible(false)}>
            <AiOutlineClose className="text-xl" />
          </button>
        </div>
        <form onSubmit={sendMessage} className="space-y-4">
          <TextArea rows={6} setValue={setContent} />
          <div className="w-full flex justify-center">
            <button type="submit" className="primary-btn-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
}
