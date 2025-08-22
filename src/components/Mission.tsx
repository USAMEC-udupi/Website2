import React from 'react';
import { Target, Heart, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
            {t('mission.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('mission.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Target className="mx-auto mb-4 text-orange-500" size={48} />
            <h3 className="text-xl font-bold text-red-900 mb-4">{t('mission.mission')}</h3>
            <p className="text-gray-600">
              {t('mission.mission.text')}
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Heart className="mx-auto mb-4 text-orange-500" size={48} />
            <h3 className="text-xl font-bold text-red-900 mb-4">{t('mission.values')}</h3>
            <p className="text-gray-600">
              {t('mission.values.text')}
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Lightbulb className="mx-auto mb-4 text-orange-500" size={48} />
            <h3 className="text-xl font-bold text-red-900 mb-4">{t('mission.vision')}</h3>
            <p className="text-gray-600">
              {t('mission.vision.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;