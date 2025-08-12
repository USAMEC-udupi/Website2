import React, { useState } from 'react';
import RouletteWheel from './RouletteWheel';
import InstitutionDetails from './InstitutionDetails';
import Gallery from './Gallery';
import Alumni from './Alumni';
import { useLanguage } from '../contexts/LanguageContext';

const institutions = [
  { id: 1, name: 'PPEC Sadashivanagar(Pre-Primary , Primary & High School)', website: 'https://poornaprajnassnagar.org', available: true },
  { id: 2, name: 'SBVP Higher Primary School', website: '', available: false },
  { id: 3, name: 'Poornaprajna PU College, Udupi', website: 'https://udupi.ppuc.edu.in', available: true },
  //{ id: 4, name: 'Poornaprajna Kannada Medium High School Adamaru', website: '', available: false },
  { id: 5, name: 'Poornaprajna PU College Adamaru', website: 'https://poornaprjnaadamaru.edu.in', available: true },
  //{ id: 6, name: 'PPEC Mumbai(Pre-Primary, Primary & Secondary School)', website: 'https://mumbai.ppec.edu.in', available: true },
  { id: 7, name: 'PPEC Adamaru(Primary & Pre-Primary)', website: 'https://adamaru.ppec.edu.in', available: true },
  { id: 8, name: 'Widia Poornaprajna PU College', website: 'https://widia.ppuc.edu.in', available: true },
  { id: 9, name: 'PPEC Bhadravathi', website: 'https://bhadravathi.ppec.edu.in', available: true },
  { id: 10, name: 'Poornaprajna High School Adamaru', website: 'https://adamaru.ppec.edu.in', available: true },
  { id: 11, name: 'PPEC Belur(Nursary ,Primary & High School)', website: 'https://belur.ppec.edu.in', available: true },
  { id: 12, name: 'Poornaprajna PU College, Sangameshwarpet', website: 'https://spet.ppuc.edu.in', available: true },
  { id: 13, name: 'PPEC Aldur(Primary & High School)', website: 'https://aldur.ppec.edu.in', available: true },
  //{ id: 14, name: 'Poornaprajna PU College Yelahanka', website: 'https://yelahanka.ppuc.edu.in', available: true },
  { id: 15, name: 'PPEC SPET(Primary & High School)', website: 'https://spet.ppec.edu.in', available: true },
  { id: 16, name: 'Poornaprajna College Udupi', website: 'https://ppc.ac.in', available: true },
  { id: 17, name: 'PPEC Yelahanka (Pre-primary ,Primary & High School)', website: 'https://yelahanka.ppec.edu.in', available: true },
  { id: 18, name: 'Poornaprajna Evening College Udupi', website: 'https://specudupi.ac.in', available: true },
  { id: 19, name: 'Poornaprajna Institute of Management', website: 'https://pim.ac.in', available: true },
  { id: 20, name: 'PPEC Indiranagar', website: 'https://indiranagar.ppec.edu.in', available: true },
  { id: 21, name: 'Poornaprajna Institute of Scientific Research', website: 'https://ppisr.res.in', available: true },
  { id: 22, name: 'PPEC SKNagar', website: 'https://krishnanagar.ppec.edu.in', available: true },
  { id: 23, name: 'Ganapathi High School, Padubidri', website: '', available: false },
  { id: 24, name: 'PPEC Delhi', website: '', available: true },
];

const Institutions = () => {
  const [selectedInstitution, setSelectedInstitution] = useState<typeof institutions[0] | null>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('institutions.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('institutions.subtitle')}
          </p>
        </div>
      </section>

      {/* Interactive Wheel Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-4">{t('institutions.explorer.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('institutions.explorer.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <RouletteWheel 
                institutions={institutions}
                onInstitutionSelect={setSelectedInstitution}
              />
            </div>
            
            <div>
              <InstitutionDetails institution={selectedInstitution} />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <Gallery />

      {/* Alumni Success Stories */}
      <Alumni />
    </div>
  );
};

export default Institutions;