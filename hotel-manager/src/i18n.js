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
