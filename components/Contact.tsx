import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. Whats Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Thankyou for taking a look through my introductory website, i would like to work onto new oppotunities and learn more about the emerging tech.
        Lets join our hand and provide better solution with advanced tech.
      </p>

      <a href="mailto:dagamadhav1@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Lets Connect
        </button>
      </a>
    </section>
  );
};

export default Contact;
