import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import MessageCard from "./MessageCard";

export default function MyMessages() {
  const [messages, setMessages] = useState([]);
  const id = parseInt(localStorage.getItem("user"));

  useEffect(() => {
    api
      .get(`/user/${id}/messages`)
      .then((res) => setMessages(res.data.data))
      .catch(() => {});
  }, []);

  return (
    <section className="section-layout bg-white-blue space-y-8">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="title-lg">My messages</h2>
        <p className="title-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages &&
          messages.map((message, index) => (
            <MessageCard key={index} content={message.content} />
          ))}
      </div>
    </section>
  );
}
