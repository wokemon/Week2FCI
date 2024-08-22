import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about_us" : "About Us",
      "services" : "Services",
      "sign_in": "Sign In",
      "sign_up": "Sign Up",
      "reset_password": "Reset Password",
      "languages": "Languages",
      "email": "Email address",
      "password": "Password",
      "remember_me" : "Remember me",
      "forgot_password": "Forgot password?",
      "no_account": "Don't have an account? Sign up!",
      "winston": "Winston Scott is the current owner and manager of the New York Continental Hotel, an establishment that functions as a neutral territory and safe zone for criminals and hired killers. No business is allowed to be conducted on Continental grounds, and those who violate this important rule are given severe penalties: which are often ordered and overseen by Winston himself.",
      "charon": "Charon was the concierge of the Continental Hotel in New York City, employed by Winston Scott as his right-hand man. Charon often interacted with John Wick in his position as the concierge of the hotel, offering John various services, such as taking care of his dog. As concierge of the New York Continental, Charon is both the face of the hotel and the guard at its gates.",
      "fb_name": "Food & Beverage service",
      "tailor_name": "Tailoring service",
      "cleaning_name": "Cleaning service",
      "laundry_name": "Laundry service",
      "valet_name": "Valet service",
      "room": "Room",
      "news": "News",
      "cleaning": "Elevate your stay with our exceptional hotel cleaning service! Our dedicated team ensures every room shines, providing a spotless and inviting environment for your comfort. Experience the luxury of a perfectly clean space—book your stay with us today!",
      "fb": "Enhance your stay with our exceptional food and beverage service! From gourmet meals to refreshing drinks, our team is dedicated to delivering a delightful culinary experience right to your door. Savor the taste of luxury—book your stay with us and indulge in the finest flavors!",
      "tailor": "Perfect your look with our in-hotel tailor service! Expert adjustments and custom creations, tailored just for you. Enjoy personalized style without leaving your room!",
      "laundry": "Freshen up with our in-hotel laundry service! Quick, reliable, and hassle-free. Enjoy clean clothes without lifting a finger!",
      "valet": "Enjoy seamless convenience with our valet service! We’ll park and retrieve your car, so you can relax and focus on your stay.",
    }
  },
  vi: {
    translation: {
      "home": "Trang chủ",
      "about_us" : "Về chúng tôi",
      "services" : "Dịch vụ",
      "sign_in": "Đăng nhập",
      "sign_up": "Đăng ký",
      "reset_password": "Đặt lại mật khẩu",
      "languages": "Ngôn ngữ",
      "email": "Email",
      "password": "Mật khẩu",
      "remember_me" : "Nhớ mật khẩu",
      "forgot_password": "Quên mật khẩu?",
      "no_account": "Không có tài khoản? Đăng ký bây giờ!",
      "winston": "Winston Scott là chủ sở hữu và người quản lý hiện tại của Khách sạn New York Continental, một cơ sở hoạt động như một lãnh thổ trung lập và khu vực an toàn cho tội phạm và những kẻ giết thuê. Không hoạt động kinh doanh nào được phép tiến hành trên lãnh thổ Continental và những người vi phạm quy tắc quan trọng này sẽ phải chịu những hình phạt nghiêm khắc: thường do chính Winston ra lệnh và giám sát.",
      "charon": "Charon là nhân viên hướng dẫn khách sạn Continental ở thành phố New York, được Winston Scott thuê làm cánh tay phải của ông. Charon thường tiếp xúc với John Wick trong vai trò là người hướng dẫn khách sạn, cung cấp cho John nhiều dịch vụ khác nhau, chẳng hạn như chăm sóc con chó của anh ấy. Là người hướng dẫn khách của New York Continental, Charon vừa là bộ mặt của khách sạn vừa là người bảo vệ cổng khách sạn.",
      "fb_name": "Dịch vụ đồ ăn thức uống",
      "tailor_name": "Dịch vụ thêu may",
      "cleaning_name": "Dịch vụ dọn dẹp",
      "laundry_name": "Dịch vụ dọn dẹp",
      "valet_name": "Dịch vụ cất/gửi phương tiện",
      "room": "Phòng",
      "news": "Tin tức",
      "cleaning" : "Nâng cao kỳ nghỉ của bạn với dịch vụ vệ sinh khách sạn đặc biệt của chúng tôi! Đội ngũ tận tâm của chúng tôi đảm bảo mọi căn phòng đều tỏa sáng, mang đến một môi trường sạch sẽ và hấp dẫn để bạn thoải mái. Trải nghiệm sự sang trọng của một không gian hoàn toàn sạch sẽ—hãy đặt kỳ nghỉ của bạn với chúng tôi ngay hôm nay!",
      "fb": "Nâng cao kỳ nghỉ của bạn với dịch vụ ăn uống đặc biệt của chúng tôi! Từ những bữa ăn ngon đến đồ uống giải khát, đội ngũ của chúng tôi luôn tận tâm mang đến trải nghiệm ẩm thực thú vị ngay trước cửa nhà bạn. Hãy tận hưởng hương vị sang trọng—hãy đặt kỳ nghỉ của bạn với chúng tôi và tận hưởng những gì tuyệt vời nhất hương vị!",
      "tailor": "Hoàn thiện diện mạo của bạn với dịch vụ may đo ngay tại khách sạn của chúng tôi! Những điều chỉnh của chuyên gia và những sáng tạo tùy chỉnh, được thiết kế riêng cho bạn. Tận hưởng phong cách cá nhân mà không cần rời khỏi phòng!",
      "laundry": "Làm mới với dịch vụ giặt là tại khách sạn của chúng tôi! Nhanh chóng, đáng tin cậy và không rắc rối. Tận hưởng quần áo sạch sẽ mà không cần động tay!",
      "valet": "Tận hưởng sự tiện lợi với dịch vụ người giúp việc của chúng tôi! Chúng tôi sẽ đỗ xe và lấy xe cho bạn, để bạn có thể thư giãn và tập trung vào kỳ nghỉ của mình."
    }
  },
  es: {
    translation: {
      "home": "Hogar",
      "about_us": "Sobre nosotros",
      "services": "Servicios",
      "sign_in": "Iniciar sesión",
      "sign_up": "Inscribirse",
      "reset_password": "Restablecer la contraseña",
      "languages": "Idiomas",
      "email": "Dirección de correo electrónico",
      "password": "Contraseña",
      "remember_me" : "Acuérdate de mí",
      "forgot_password": "¿Has olvidado tu contraseña?",
      "no_account": "¿No tienes una cuenta? ¡Inscribirse!",
      "winston": "Winston Scott es el actual propietario y gerente del Hotel Continental de Nueva York, un establecimiento que funciona como territorio neutral y zona segura para delincuentes y sicarios. No se permite realizar ningún negocio en terrenos continentales, y quienes violan esta importante regla reciben sanciones severas, que a menudo son ordenadas y supervisadas por el propio Winston.",
      "charon": "Charon era el conserje del Hotel Continental en la ciudad de Nueva York, empleado por Winston Scott como su mano derecha. Charon interactuaba a menudo con John Wick en su puesto de conserje del hotel, ofreciéndole a John diversos servicios, como cuidar a su perro. Como conserje del New York Continental, Charon es a la vez la cara del hotel y el guardia en sus puertas.",
      "fb_name": "Servicio de alimentos y bebidas",
      "tailor_name": "Servicio de sastrería",
      "cleaning_name": "Servicio de limpieza",
      "laundry_name": "Servicio de lavandería",
      "valet_name": "Servicio de valet",
      "room": "Noticias",
      "cleaning": "¡Mejore su estadía con nuestro excepcional servicio de limpieza de hotel! Nuestro equipo dedicado se asegura de que cada habitación brille, brindando un ambiente impecable y acogedor para su comodidad. Experimente el lujo de un espacio perfectamente limpio: ¡reserve su estadía con nosotros hoy!",
      "fb": "¡Mejore su estadía con nuestro excepcional servicio de alimentos y bebidas! Desde comidas gourmet hasta bebidas refrescantes, nuestro equipo está dedicado a brindarle una experiencia culinaria deliciosa directamente a su puerta. Saboree el sabor del lujo: reserve su estadía con nosotros y disfrute de los mejores sabores.",
      "tailor": "¡Perfecciona tu look con nuestro servicio de sastrería en el hotel! Ajustes expertos y creaciones personalizadas, diseñadas solo para usted. ¡Disfruta de un estilo personalizado sin salir de tu habitación!",
      "laundry": "¡Renuevate con nuestro servicio de lavandería en el hotel! Rápido, confiable y sin complicaciones. ¡Disfruta de ropa limpia sin mover un dedo!",
      "valet": "¡Disfrute de una comodidad perfecta con nuestro servicio de valet! ¡Estacionaremos y recuperaremos su automóvil para que pueda relajarse y concentrarse en su estadía!",
    }
  },
  fr: {
    translation: {
      "home": "Maison",
      "about_us": "À propos de nous",
      "services": "Service",
      "sign_in": "Se connecter",
      "sign_up": "S'inscrire",
      "reset_password": "Réinitialiser les mots de passe",
      "languages": "Langues",
      "email": "Adresse e-mail",
      "password": "Mot de passe",
      "remember_me" : "Souviens-toi de moi",
      "forgot_password": "Mot de passe oublié?",
      "no_account": "Vous n'avez pas de compte ? S'inscrire!",
      "winston": "Winston Scott est l'actuel propriétaire et gérant du New York Continental Hotel, un établissement qui fonctionne comme un territoire neutre et une zone de sécurité pour les criminels et les tueurs à gages. Aucune activité commerciale n'est autorisée sur les terrains continentaux, et ceux qui enfreignent cette règle importante se voient infliger des sanctions sévères : qui sont souvent ordonnées et supervisées par Winston lui-même.",
      "charon": "Charon était le concierge de l'hôtel Continental à New York, employé par Winston Scott comme bras droit. Charon interagissait souvent avec John Wick en tant que concierge de l'hôtel, offrant à John divers services, comme prendre soin de son chien. Concierge du New York Continental, Charon est à la fois le visage de l'hôtel et le gardien à ses portes.",
      "fb_name": "Service de restauration et de boissons",
      "tailor_name": "Service de couture",
      "cleaning_name": "Service de nettoyage",
      "laundry_name": "Blanchisserie",
      "valet_name": "Service de voiturier",
      "room": "Chambre",
      "news": "Nouvelles",
      "cleaning": "Améliorez votre séjour avec notre service de nettoyage d’hôtel exceptionnel ! Notre équipe dévouée veille à ce que chaque pièce brille, offrant un environnement impeccable et accueillant pour votre confort. Découvrez le luxe d'un espace parfaitement propre : réservez votre séjour avec nous dès aujourd'hui!",
      "fb": "Améliorez votre séjour avec notre service de restauration et de boissons exceptionnel ! Des repas gastronomiques aux boissons rafraîchissantes, notre équipe se consacre à vous offrir une délicieuse expérience culinaire directement à votre porte. Savourez le goût du luxe : réservez votre séjour chez nous et offrez-vous les meilleures saveurs!",
      "tailor": "Perfectionnez votre look avec notre service de couture à l'hôtel ! Ajustements experts et créations personnalisées, sur mesure juste pour vous. Profitez d'un style personnalisé sans quitter votre chambre!",
      "laundry": "Rafraîchissez-vous avec notre service de blanchisserie à l'hôtel ! Rapide, fiable et sans tracas. Profitez de vêtements propres sans lever le petit doigt!",
      "valet": "Profitez d’une commodité sans faille avec notre service de voiturier ! Nous garerons et récupérerons votre voiture pour que vous puissiez vous détendre et vous concentrer sur votre séjour!",
    }
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
