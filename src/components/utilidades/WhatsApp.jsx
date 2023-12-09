import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatar from "../../assets/img/Logos/LOGOPOLI.jpg";
import "react-whatsapp-widget/dist/index.css";

export const WhatsApp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+5493816208837"
        placeholder="escriba su mensaje"
        accountName="Polirubro"
        statusMessage="¡En breve te responderemos!"
        chatMessage="¡Hola! ¿en que puedo ayudarte?"
        avatar={avatar}
      />
    </div>
  );
};
