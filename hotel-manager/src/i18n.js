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
