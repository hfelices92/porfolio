import { GradientText } from "../ui/shadcn-io/gradient-text";
import ContactForm from "./ContactForm";


export default function Contact() {
  return (
    <section id="contact" className="flex flex-col py-10 backdrop-blur-xs w-fit mx-auto px-4 md:px-40 rounded-lg
    bg-[linear-gradient(to_right,rgba(36,37,61,0)_0%,rgba(36,37,61,0.4)_25%,rgba(36,37,61,0.5)_50%,rgba(36,37,61,0.4)_75%,rgba(36,37,61,0)_100%)]
    
    ">
       <GradientText
          text="Ponte en contacto"
          className="text-4xl font-bold text-center mb-10"
        />
      <ContactForm />
    </section>
  );
}
