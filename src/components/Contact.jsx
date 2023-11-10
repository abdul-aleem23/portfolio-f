import { useRef } from "react";
import Maps from "./Maps";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const emailServiceId = import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID;
      const emailTemplateId = import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE_ID;
      const emailPublicKey = import.meta.env.VITE_REACT_APP_EMAIL_PUBLIC_KEY;

      const result = await emailjs.sendForm(
        emailServiceId, //"YOUR_SERVICE_ID"
        emailTemplateId, //"YOUR_TEMPLATE_ID"
        form.current,
        emailPublicKey //"YOUR_PUBLIC_KEY"
      );
      // Show a success toast message
      toast.success("Message sent successfully", { duration: 4000 });

      //resets the input fields.
      form.current.reset();
    } catch (error) {
      console.log(error);
      // Show an error toast message
      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
      });
    }
  };
  return (
    <div id="contact" className="w-full h-screen text-white flex flex-row">
      <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl bg-clip-text font-bold tracking-tighter m-10">
          Contact me
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full md:max-w-[650px] mx-auto p-6"
        >
          <input
            className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-fuchsia-300 text-black"
            type="text"
            name="name"
            id="name"
            placeholder="Name/Company"
          />
          <input
            className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:fuchsia-300 text-black"
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:fuchsia-300 text-black"
            name="message"
            placeholder="Message"
            rows="4"
          />
          <button id="button" className="" type="submit" value="Send">
            Send
          </button>
        </form>
      </div>

      <div className="w-1/2 hidden md:block lg:block text-white">
        <Maps />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;
