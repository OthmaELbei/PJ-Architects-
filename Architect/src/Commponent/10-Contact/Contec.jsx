import emailjs from "@emailjs/browser";
// import Places from "./Places";7
import "./Stiyle.css";
import { useRef } from "react";

export default function Contec() {
  const form = useRef();
  // const [value, setValue] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tlf0vrj", "template_x2gjizh", form.current, {
        publicKey: "OEhSsSbNkqq7JmYfS",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section className="col-lg-6 flex-grow-1 col-md-6 col-12">
        <form
          className=" inputs d-flex flex-column"
          onSubmit={sendEmail}
          ref={form}
          action=""
        >
          <input type="text" name="user_name" placeholder="Name" id="" />
          <input
            type="email"
            name="user_Email"
            placeholder="Sen Your Email"
            id=""
          />
          <input type="text" name="user_text" placeholder="Message" id="" />

          <button type="submit" className="">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
