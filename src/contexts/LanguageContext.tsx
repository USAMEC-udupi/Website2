import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'kn';
  setLanguage: (lang: 'en' | 'kn') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.institutions': 'Institutions',
    'nav.contact': 'Contact',
    'nav.search': 'Search...',
    
    // Hero Section
    'hero.title': 'Udupi Shree Adamaru Matha',
    'hero.subtitle': 'Education Council',
    'hero.description': 'Empowering minds through quality education across 24 institutions and 32 colleges',
    'hero.institutions': 'Institutions',
    'hero.colleges': 'Colleges',
    'hero.students': 'Students',
    
    // Mission
    'mission.title': 'Our Mission & Vision',
    'mission.description': 'Dedicated to providing holistic education that nurtures intellectual, spiritual, and moral development',
    'mission.mission': 'Mission',
    'mission.mission.text': 'To provide quality education rooted in traditional values while embracing modern learning methodologies.',
    'mission.values': 'Values',
    'mission.values.text': 'Fostering character development, ethical leadership, and social responsibility among our students.',
    'mission.vision': 'Vision',
    'mission.vision.text': 'To be a leading educational council that shapes future leaders and contributes to societal progress.',
    
    // Gallery
    'gallery.title': 'Campus Gallery',
    'gallery.description': 'Discover our beautiful campuses and vibrant student life through our ever-changing gallery',
    
    // About
    'about.title': 'About USAMEC',
    'about.subtitle': 'A legacy of educational excellence spanning four decades, nurturing minds and building futures',
    'about.president.title': 'Message from Our President',
    'about.history.title': 'Our Rich History & Legacy',
    'about.management.title': 'Our Management Team',
    'about.impact.title': 'Our Impact',
    
    // Institutions
    'institutions.title': 'Our Institutions',
    'institutions.subtitle': 'Explore our 24 premier institutions through our interactive wheel and discover excellence in education',
    'institutions.explorer.title': 'Interactive Institution Explorer',
    'institutions.explorer.description': 'Click or hover over any segment to learn more about our institutions',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us for any inquiries about our institutions and programs',
    'contact.form.title': 'Send us a Message',
    'contact.info.title': 'Get in Touch',
    
    // Footer
    'footer.description': 'Udupi Shree Adamaru Matha Education Council - Committed to excellence in education since our inception.',
    'footer.rights': 'All rights reserved.',
  },
  kn: {
    // Navigation
    'nav.home': 'ಮುಖ್ಯ',
    'nav.about': 'ನಮ್ಮ ಬಗ್ಗೆ',
    'nav.institutions': 'ಸಂಸ್ಥೆಗಳು',
    'nav.contact': 'ಸಂಪರ್ಕ',
    'nav.search': 'ಹುಡುಕಿ...',
    
    // Hero Section
    'hero.title': 'ಉಡುಪಿ ಶ್ರೀ ಅದಮಾರು ಮಠ',
    'hero.subtitle': 'ಶಿಕ್ಷಣ ಮಂಡಳಿ',
    'hero.description': '24 ಸಂಸ್ಥೆಗಳು ಮತ್ತು 32 ಕಾಲೇಜುಗಳಲ್ಲಿ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣದ ಮೂಲಕ ಮನಸ್ಸುಗಳನ್ನು ಶಕ್ತಿಗೊಳಿಸುವುದು',
    'hero.institutions': 'ಸಂಸ್ಥೆಗಳು',
    'hero.colleges': 'ಕಾಲೇಜುಗಳು',
    'hero.students': 'ವಿದ್ಯಾರ್ಥಿಗಳು',
    
    // Mission
    'mission.title': 'ನಮ್ಮ ಧ್ಯೇಯ ಮತ್ತು ದೃಷ್ಟಿ',
    'mission.description': 'ಬೌದ್ಧಿಕ, ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ನೈತಿಕ ಅಭಿವೃದ್ಧಿಯನ್ನು ಪೋಷಿಸುವ ಸಮಗ್ರ ಶಿಕ್ಷಣವನ್ನು ಒದಗಿಸಲು ಸಮರ್ಪಿತ',
    'mission.mission': 'ಧ್ಯೇಯ',
    'mission.mission.text': 'ಆಧುನಿಕ ಕಲಿಕೆಯ ವಿಧಾನಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳುವಾಗ ಸಾಂಪ್ರದಾಯಿಕ ಮೌಲ್ಯಗಳಲ್ಲಿ ಬೇರೂರಿರುವ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ಒದಗಿಸುವುದು.',
    'mission.values': 'ಮೌಲ್ಯಗಳು',
    'mission.values.text': 'ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಪಾತ್ರ ಅಭಿವೃದ್ಧಿ, ನೈತಿಕ ನಾಯಕತ್ವ ಮತ್ತು ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿಯನ್ನು ಬೆಳೆಸುವುದು.',
    'mission.vision': 'ದೃಷ್ಟಿ',
    'mission.vision.text': 'ಭವಿಷ್ಯದ ನಾಯಕರನ್ನು ರೂಪಿಸುವ ಮತ್ತು ಸಮಾಜದ ಪ್ರಗತಿಗೆ ಕೊಡುಗೆ ನೀಡುವ ಪ್ರಮುಖ ಶಿಕ್ಷಣ ಮಂಡಳಿಯಾಗುವುದು.',
    
    // Gallery
    'gallery.title': 'ಕ್ಯಾಂಪಸ್ ಗ್ಯಾಲರಿ',
    'gallery.description': 'ನಮ್ಮ ಸುಂದರ ಕ್ಯಾಂಪಸ್‌ಗಳು ಮತ್ತು ರೋಮಾಂಚಕ ವಿದ್ಯಾರ್ಥಿ ಜೀವನವನ್ನು ನಮ್ಮ ನಿರಂತರ ಬದಲಾಗುತ್ತಿರುವ ಗ್ಯಾಲರಿಯ ಮೂಲಕ ಅನ್ವೇಷಿಸಿ',
    
    // About
    'about.title': 'USAMEC ಬಗ್ಗೆ',
    'about.subtitle': 'ನಾಲ್ಕು ದಶಕಗಳ ಶಿಕ್ಷಣ ಶ್ರೇಷ್ಠತೆಯ ಪರಂಪರೆ, ಮನಸ್ಸುಗಳನ್ನು ಪೋಷಿಸುವುದು ಮತ್ತು ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸುವುದು',
    'about.president.title': 'ನಮ್ಮ ಅಧ್ಯಕ್ಷರ ಸಂದೇಶ',
    'about.history.title': 'ನಮ್ಮ ಶ್ರೀಮಂತ ಇತಿಹಾಸ ಮತ್ತು ಪರಂಪರೆ',
    'about.management.title': 'ನಮ್ಮ ನಿರ್ವಹಣಾ ತಂಡ',
    'about.impact.title': 'ನಮ್ಮ ಪ್ರಭಾವ',
    
    // Institutions
    'institutions.title': 'ನಮ್ಮ ಸಂಸ್ಥೆಗಳು',
    'institutions.subtitle': 'ನಮ್ಮ ಸಂವಾದಾತ್ಮಕ ಚಕ್ರದ ಮೂಲಕ ನಮ್ಮ 24 ಪ್ರಮುಖ ಸಂಸ್ಥೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಶಿಕ್ಷಣದಲ್ಲಿ ಶ್ರೇಷ್ಠತೆಯನ್ನು ಕಂಡುಕೊಳ್ಳಿ',
    'institutions.explorer.title': 'ಸಂವಾದಾತ್ಮಕ ಸಂಸ್ಥೆ ಎಕ್ಸ್‌ಪ್ಲೋರರ್',
    'institutions.explorer.description': 'ನಮ್ಮ ಸಂಸ್ಥೆಗಳ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಲು ಯಾವುದೇ ವಿಭಾಗದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಹೋವರ್ ಮಾಡಿ',
    
    // Contact
    'contact.title': 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    'contact.subtitle': 'ನಮ್ಮ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳ ಬಗ್ಗೆ ಯಾವುದೇ ವಿಚಾರಣೆಗಳಿಗಾಗಿ ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಿ',
    'contact.form.title': 'ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
    'contact.info.title': 'ಸಂಪರ್ಕದಲ್ಲಿರಿ',
    
    // Footer
    'footer.description': 'ಉಡುಪಿ ಶ್ರೀ ಅಡಮಾರು ಮಠ ಶಿಕ್ಷಣ ಮಂಡಳಿ - ನಮ್ಮ ಸ್ಥಾಪನೆಯಿಂದಲೂ ಶಿಕ್ಷಣದಲ್ಲಿ ಶ್ರೇಷ್ಠತೆಗೆ ಬದ್ಧವಾಗಿದೆ.',
    'footer.rights': 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'kn'>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};