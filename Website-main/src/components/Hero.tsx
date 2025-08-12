import React from 'react';
import { GraduationCap, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-red-900 to-orange-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
            <span className="block text-orange-200">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <GraduationCap size={48} className="mx-auto mb-4 text-orange-200" />
              <h3 className="text-2xl font-bold">24</h3>
              <p className="text-orange-200">{t('hero.institutions')}</p>
            </div>
            <div className="text-center">
              <BookOpen size={48} className="mx-auto mb-4 text-orange-200" />
              <h3 className="text-2xl font-bold">32</h3>
              <p className="text-orange-200">{t('hero.colleges')}</p>
            </div>
            <div className="text-center">
              <Users size={48} className="mx-auto mb-4 text-orange-200" />
              <h3 className="text-2xl font-bold">50,000+</h3>
              <p className="text-orange-200">{t('hero.students')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;