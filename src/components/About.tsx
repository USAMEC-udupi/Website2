import React from 'react';
import { Users, Award, BookOpen, Calendar, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Swami from '../assets/images/swami.jpg';
import { Swamiji } from '../assets/images/image';

const About = () => {
  const { t } = useLanguage();

  const managementTeam = [
    {
      name: 'H.H.  Shree Eeshapriya Theertha Swamiji',
      position: 'President',
      image: Swami,
      description: 'Guiding the institution with spiritual wisdom and educational vision',
    },
    {
      name: 'Sri N.B. Bhat',
      position: 'Vice President',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Leading academic excellence and institutional development',
    },
    {
      name: 'Dr. Ananthapadmanabha Bhat',
      position: 'Hon. Secretary',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Overseeing administrative operations and student services',
    },
    {
      name: 'Sri G.V. Krishna',
      position: 'Hon. Treasurer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Overseeing administrative operations and student services',
    },
    {
      name: 'Dr. K. Srihari',
      position: 'Member',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Managing financial planning and resource allocation',
    },
    {
      name: 'Sri. P. Srinivas Rao',
      position: 'Member',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Promoting research initiatives and innovation',
    },
    {
      name: 'Sri. Ashok Harnahalli',
      position: 'Member',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Developing and maintaining world-class facilities',
    },
    {
      name: 'Sri. S.V. Manjunath',
      position: 'Member',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Developing and maintaining world-class facilities',
    },
    {
      name: 'Sri. S.K. Bhat',
      position: 'Member',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Developing and maintaining world-class facilities',
    },
    {
      name: 'Sri K. Subramanya',
      position: 'Member',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Developing and maintaining world-class facilities',
    },
    {
      name: 'Justice Sri. N Santhosh Hegde',
      position: 'Member',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Developing and maintaining world-class facilities',
    },
    {
      name: 'Sri. Mahabaleshwara Bhat',
      position: 'Member',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Developing and maintaining world-class facilities',
    },
    {
      name: 'Sri. Subramanya Keshav Bhat',
      position: 'Member',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Developing and maintaining world-class facilities',
    },
  ];

  const milestones = [
    { year: '1950', event: 'Poornaprajna Pre-University College, Admar' },
    { year: '1960', event: 'Poornaprajna College, Udupi' },
    { year: '1962', event: 'PPEC Dahisar(E), Mumbai' },
    { year: '1966', event: 'Poornaprajna Evening College, Udupi' },
    { year: '1968', event: 'Ganapathi High School, Padubidri' },
    { year: '1969', event: 'PPEC Sadashiva Nagar, Bangalore' },
    { year: '1978', event: 'Poornaprajna English Nursery and Primary School, Aldur' },
    { year: '1978', event: 'PPEC, Sangameshwarpet' },
    { year: '1980', event: 'PPEC Belur, hassan' },
    { year: '1982', event: 'PPEC, Bhadravathi' },
    { year: '1982', event: 'PPEC Yalahanka, Banglore' },
    { year: '1984', event: 'PPEC Indiranagar, Banglore' },
    { year: '1987', event: 'Poornaprajna Public School, New Delhi' },
    { year: '1988', event: 'Widia Poornaprajna School, Banglore' },
    { year: '1998', event: 'Poornaprajna Institute of Scientific Research, Banglore' },
    { year: '2001', event: 'PPEC Sri Krishnanagar, Banglore' },
    { year: '2001', event: 'Poornaprajna P.U. College, Udupi' },
    { year: '2006', event: 'Poornaprajna Institute of Management, Udupi' },
    { year: '2009', event: 'Poornaprajna Institute of Faculty Improvement, Banglore' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Presidential Message */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-4">{t('about.president.title')}</h2>
          </div>
          
      
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img
                src={Swami}
                alt="His Holiness Sri Eeshapriya Theertha Swamiji"
                className="w-64 h-100 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-red-900 mb-2">His Holiness Sri Eeshapriya Theertha Swamiji</h3>
              <p className="text-orange-500 font-medium">President</p>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Heart className="text-orange-500 mb-4" size={40} />
                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                  "Nowadays the important aim of education has become to prepare the students for their examination, encouraging them to compete with one another to score high mark and finally to get good and lucrative jobs. But things were not like this in the past. The students had respect to their teachers in spite of the punishments they used to get from them. There was close and friendly relation between the teachers and students. In my opinion teachers should not teach the students only to make them pass the examinations. Importance should be given for the acquisition of knowledge. The education should aim at all-round development of the students. This should be the primary aim of education.

"                
                </p>
                
                <p className="text-gray-800 mb-4 font-bold">
                  - H.H. Sri Eeshapriya Theertha Swamiji.
                </p>
                {/*
                <p className="text-gray-600">
                  We remain committed to our founding principles while embracing innovation and modern 
                  pedagogical approaches to prepare our students for the challenges of the 21st century.
                </p>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich History and Legacy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-4">{t('about.history.title')}</h2>
            <p className="text-lg text-gray-600">Four decades of educational excellence and continuous growth</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-gray-600 mb-6">
                The Udupi Shree Adamaru Matha Education Council was founded in 1985 with a noble vision 
                to democratize quality education and make it accessible to students from all backgrounds. 
                Rooted in the ancient Indian tradition of 'Guru-Shishya Parampara', our institution 
                combines time-tested wisdom with modern educational methodologies.
              </p>
              <p className="text-gray-600 mb-6">
                What began as a humble initiative with just three institutions has blossomed into a 
                comprehensive educational ecosystem spanning 24 institutions and 32 colleges. Our growth 
                story is not just about numbers, but about the countless lives we have touched and 
                transformed over the years.
              </p>
              <p className="text-gray-600">
                Our legacy is built on the pillars of academic excellence, character development, and 
                social responsibility. We have consistently adapted to changing times while preserving 
                our core values, making us a trusted name in education across Karnataka and beyond.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Historic USAMEC Campus"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
          
          {/* Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-red-900 mb-8 text-center">Milestones in Our Journey</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-500"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex items-center mb-2">
                        <Calendar className="text-orange-500 mr-2" size={16} />
                        <span className="font-bold text-red-900">{milestone.year}</span>
                      </div>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-4">{t('about.management.title')}</h2>
            <p className="text-lg text-gray-600">
              Experienced leaders dedicated to educational excellence and institutional growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <h3 className="text-lg font-bold text-red-900 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-4">{t('about.impact.title')}</h2>
            <p className="text-lg text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-3xl font-bold text-red-900">24</h3>
              <p className="text-gray-600">{t('hero.institutions')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-bold text-red-900">32</h3>
              <p className="text-gray-600">{t('hero.colleges')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-3xl font-bold text-red-900">50,000+</h3>
              <p className="text-gray-600">{t('hero.students')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-3xl font-bold text-red-900">40+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;