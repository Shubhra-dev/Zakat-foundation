import contact from "../assets/contact.jpg";
function ContactHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-[70px] font-pally w-4/5 m-auto leading-tight">
          Get In Touch
        </h2>
      </div>
    </div>
  );
}

export default ContactHero;
