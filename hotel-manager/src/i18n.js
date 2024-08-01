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
      "languages": "Languages"
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
      "languages": "Ngôn ngữ"
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
      "languages": "Idiomas"
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
      "languages": "Langues"
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
