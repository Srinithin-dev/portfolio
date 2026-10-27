export const NAME = "Srinithin Thangadurai";
export const ROLE = "Full Stack Developer";
export const LOCATION = "Coimbatore, Tamil Nadu";

export const EMAIL = "Srinithin.in@gmail.com";
export const PHONE = "+91 94889 57785";
export const WHATSAPP_URL = "https://wa.me/919488957785";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/srinithin-thangadurai-1b237a23b/";
export const GITHUB_URL = "https://github.com/Srinithin-dev";
export const MAPS_URL = "https://maps.app.goo.gl/gcsCo4mXR64AKsHE8";
export const SITE_URL = "https://srinithin-portfolio.vercel.app";

const CAREER_START = new Date("2022-05-01");
export function getYearsOfExperience(now = new Date()) {
  const years = now.getFullYear() - CAREER_START.getFullYear();
  const beforeAnniversary =
    now.getMonth() < CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() &&
      now.getDate() < CAREER_START.getDate());
  return beforeAnniversary ? years - 1 : years;
}
