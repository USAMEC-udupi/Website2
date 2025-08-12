import React from 'react';
import { ExternalLink, Clock, MapPin, Phone, Mail } from 'lucide-react';

interface Institution {
  id: number;
  name: string;
  website: string;
  available: boolean;
}

interface InstitutionDetailsProps {
  institution: Institution | null;
}

const InstitutionDetails: React.FC<InstitutionDetailsProps> = ({ institution }) => {
  if (!institution) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-xl font-bold text-red-900 mb-4">Select an Institution</h3>
        <p className="text-gray-600">Click or hover over a segment on the wheel to view institution details.</p>
      </div>
    );
  }

  let institutionInfo = {
    //description: `${institution.name} is one of our premier educational institutions, committed to providing quality education and fostering academic excellence.`,
    established: '1985',
    location: 'Udupi, Karnataka',
    phone: '+91 820 2570000',
    email: `info@${institution.name.toLowerCase().replace(/\s+/g, '')}.edu.in`,
    programs: ['Undergraduate Programs', 'Postgraduate Programs', 'Research Programs'],
    facilities: ['Modern Classrooms', 'Well-equipped Labs', 'Library', 'Sports Complex'],
  };

  // Custom details for Poornaprajna PU College Adamaru
  if (institution.name === 'Poornaprajna PU College Adamaru') {
    institutionInfo = {
      ...institutionInfo,
      established: '1950',
    location: 'Adamaru',
    phone: '8762185171 / 9448720705',
    email: `principalpuc@poornaprajnaadamaru.edu.in`,
      programs: ['HEPS', 'HEBA', 'ESBA', 'BASCs', 'PCMB', 'PCMS', 'PCMCs'],
    };
  }

  // Custom details for Poornaprajna College Udupi
  if (institution.name === 'Poornaprajna College Udupi') {
    institutionInfo = {
      ...institutionInfo,
      established: '1960',
    location: 'Udupi, Karnataka',
    phone: '+91 820 2520459',
    email: `office@ppc.edu.in`,
      programs: ['BA', 'B.Sc', 'B.Com', 'B.B.A.', 'M.Com', 'M.Sc'],
    };
  }

  // Custom details for Poornaprajna Evening College Udupi
  if (institution.name === 'Poornaprajna Evening College Udupi') {
    institutionInfo = {
      ...institutionInfo,
      established: '1966',
    location: 'Udupi, Karnataka',
    phone: '+91 820 2520743',
    email: `sppecudupi@gmail.com`,
      programs: ['BCA', 'BA', 'BCom', 'MCom'],
    };
  }

  // Custom details for PPEC Sadashivanagar(Pre-Primary , Primary & High School)
  if (institution.name === 'PPEC Sadashivanagar(Pre-Primary , Primary & High School)') {
    institutionInfo = {
      ...institutionInfo,
      established: '1969',
    location: 'Sadashivanagar, Banglore',
    phone: "080-23618187 (High School)",
    email: `ssng.support@ppec.edu.in`,
      programs: ['Nursery-Grade 10'],
    };
  }

  // Custom details for PPEC Sangameshwarpet
  if (institution.name === 'PPEC SPET(Primary & High School)') {
    institutionInfo = {
      ...institutionInfo,
      established: '1978',
    location: 'Sangameshwarpet',
    phone: "08262200080",
    email: `contact.spet@ppec.edu.in`,
      programs: ['Nursery-Grade 10'],
    };
  }

  // Custom details for PPEC Yelahanka (Pre-primary ,Primary & High School)
  if (institution.name === 'PPEC Yelahanka (Pre-primary ,Primary & High School)') {
    institutionInfo = {
      ...institutionInfo,
      established: '1982',
    location: 'Yelahanka, Banglore',
    phone: "080 4203 3482",
    email: `contact.yelahanka@ppec.edu.in`,
      programs: ['Nursery-Grade 10'],
    };
  }

  // Custom details for Poornaprajna Institute of Scientific Research
  if (institution.name === 'Poornaprajna Institute of Scientific Research') {
    institutionInfo = {
      ...institutionInfo,
      established: '1998',
    location: 'Banglore',
    phone: "080-23611836",
    email: `info@ppisr.res.in`,
      programs: ['Biological Science', 'Theoretical Science', 'Materials Science & Catalysis', 'Center for Foundational Study'],
    };
  }

  // Custom details for PPEC SKNagar
  if (institution.name === 'PPEC SKNagar') {
    institutionInfo = {
      ...institutionInfo,
      established: '2001',
      location: 'Sri Krishna Nagar, Banglore',
      email: `office.sknagar@ppec.edu.in`,
      programs: ['Grade 1 to Grade 10'],
    };
  }

  // Custom details for Poornaprajna PU College, Udupi
  if (institution.name === 'Poornaprajna PU College, Udupi') {  
    institutionInfo = {
      ...institutionInfo,
      established: '2001',
    location: 'Udupi',
    phone: "9880922626",
    email: `office.udupi@ppuc.edu.in`,
      programs: ['BAECs', 'BASCs', 'BASE', 'BASM', 'PCMB', 'PCMCs', 'PCMS'],
    };
  }

  // Custom details for Poornaprajna Institute of Management
  if (institution.name === 'Poornaprajna Institute of Management') {
    institutionInfo = {
      ...institutionInfo,
      established: '2006',
    location: 'Udupi',
    phone: "9343348392",
    email: `office@pim.ac.in`,
      programs: ['MBA', 'MCA', 'BBA (Logistic & Supply Chain Management)', 'Poornaprajna Visiting Fellow Programme'],
    };
  }

  // Custom details for PPEC Delhi
  if (institution.name === 'PPEC Delhi') {
    institutionInfo = {
      ...institutionInfo,
      established: '1987',
    location: 'Vasant Kunj, New Delhi',
    phone: "9821571372",
    email: `ppps2009@gmail.com`,
      programs: ['Nursery to Grade 10', 'PUC(Science, Commerce, Humanities)'],
    };
  }

  // Custom details for Ganapathi High School, Padubidri
  if (institution.name === 'Ganapathi High School, Padubidri') {
    institutionInfo = {
      ...institutionInfo,
      established: '1968',
      location: 'Padubidri',
      phone: '',
      email: '',
      programs: [],
    };
  }

  // Custom details for PPEC Dahisar Mumbai
  if (institution.name === 'PPEC Mumbai') {
    institutionInfo = {
      ...institutionInfo,
      established: '1962',
      location: 'Dahisar East, Mumbai',
      phone: '022-28284831',
      email: `ppecmum.primary@ppec.edu.in`,
      programs: ['Nursery','Jr & Sr. kg','Std I-V','std V-X'],
    };
  }

  // Custom details for PPEC Aldur
  if (institution.name === 'PPEC Aldur(Primary & High School)') {
    institutionInfo = {
      ...institutionInfo,
      established: '1978',
      location: 'Aldur',
      phone: '08262250818',
      email: `contact.aldur@ppec.edu.in`,
      programs: ['Nursery','Primary','High School'],
    };
  }

  // Custom details for PPEC Belur
  if (institution.name === 'PPEC Belur(Nursary ,Primary & High School)') {
    institutionInfo = {
      ...institutionInfo,
      established: '1980',
      location: 'Belur, Hassan',
      phone: '08177222346',
      email: `contact.belur@ppec.edu.in`,
      programs: ['Primary','High School'],
    };
  }

  // Custom details for PPEC Bhadravathi
  if (institution.name === 'PPEC Bhadravathi') {
    institutionInfo = {
      ...institutionInfo,
      established: '1982',
      location: 'Bhadravathi',
      phone: '08282-266244',
      email: `ppecbdvt.@yahoo.in`,
      programs: ['Nursery','I-V','VI-VII','VIII'],
    };
  }

  // Custom details for PPEC Indiranagar
  if (institution.name === 'PPEC Indiranagar') {
    institutionInfo = {
      ...institutionInfo,
      established: '1984',
      location: 'Indiranagar, Banglore',
      phone: '08025292930',
      email: `contact.indiranagar@ppec.edu.in`,
      programs: ['Nursery','I-V','VI-VII','VIII-X'],
    };
  }

  // Custom details for PPEC Widia 
  if (institution.name === 'PPEC Widia') {
    institutionInfo = {
      ...institutionInfo,
      established: '1988',
      location: 'Widia Banglore',
      phone: '080-28391399',
      email: `contact.wpps@ppec.edu.in`,
      programs: ['Prep-I,II','Class I-X'],
    };
  }

  // Custom details for PPC Faculty Development Program
  if (institution.name === 'PPC Faculty Development Program') {
    institutionInfo = {
      ...institutionInfo,
      established: '2009',
      location: 'Udupi',
      phone: '',
      email: '',
      programs: [],
    };
  }
 
  // Custom details for SBVP
  if (institution.name === 'SBVP Higher Primary School') {
    institutionInfo = {
      ...institutionInfo,
      established: '1921',
    location: 'Padubidri',
    phone: "NA",
    email: `NA`,
      programs: ['Grade 1-7'],
    };
  }

  // Custom details for Poornaprajna High School Adamaru
  if (institution.name === 'Poornaprajna High School Adamaru') {
    institutionInfo = {
      ...institutionInfo,
      established: '1950(Kannada Medium) 2007(English Medium)',
    location: 'Adamaru',
    phone: "9900407155, 9480724722",
    email: `hmemhs@poornaprajnaadamaru.edu.in`,
      programs: ['Class 5- Class 10'],
    };
  }

  // Custom details for PPEC Adamaru
  if (institution.name === 'PPEC Adamaru(Primary & Pre-Primary)') {
    institutionInfo = {
      ...institutionInfo,
      established: '1950',
    location: 'Adamaru',
    phone: "9480724722, 9901290413",
    email: `ppps.poornaprajnaadamaru.edu.in`,
      programs: ['Pre-Primary(LKG & UKG)','Primary(Grade 1-4)'],
    };
  }

  // Custom details for Widia PU
  if (institution.name === 'Widia Poornaprajna PU College') {
    institutionInfo = {
      ...institutionInfo,
      established: '2019',
    location: 'Widia, Banglore',
    phone: "7022622639",
    email: `office.wppuc@ppec.edu.in`,
      programs: ['PCMB','PCMC','CEBA','SEBA'],
    };
  }

  // Custom details for PPEC Bhadravathi
  if (institution.name === 'PPEC Bhadravathi') {
    institutionInfo = {
      ...institutionInfo,
      established: '1982',
    location: 'Bhadravathi, shimoga',
    phone: "08282-266244",
    email: `ppecbdvt@yahoo.in`,
      programs: ['LKG,UKG','Grade 1-5','Grade 6-7','Grade 8'],
    };
  }

  // Custom details for PPUC SPet
  if (institution.name === 'Poornaprajna PU College, Sangameshwarpet') {
    institutionInfo = {
      ...institutionInfo,
      established: '1980',
    location: 'Sangameshwarpet,Chikamagalur',
    phone: "8618783275",
    email: `office.spet@ppuc.edu.in`,
      programs: ['EBAC','PCMB','PCMC'],
    };
  }

  

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-red-900">{institution.name}</h2>
        {institution.available ? (
          <a
            href={institution.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Visit Website
            <ExternalLink size={16} className="ml-2" />
          </a>
        ) : (
          <span className="inline-flex items-center px-4 py-2 bg-gray-400 text-white rounded-lg">
            <Clock size={16} className="mr-2" />
            Coming Soon
          </span>
        )}
      </div>

      <p className="text-gray-600 mb-6">{institutionInfo.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-bold text-red-900 mb-2">Established</h4>
          <p className="text-gray-600">{institutionInfo.established}</p>
        </div>
        <div>
          <h4 className="font-bold text-red-900 mb-2">Location</h4>
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-1" />
            {institutionInfo.location}
          </div>
        </div>
      </div>

      {/* Only show Contact and Programs if not Ganapathi High School, Padubidri */}
      {institution.name !== 'Ganapathi High School, Padubidri' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-red-900 mb-2">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Phone size={16} className="mr-2" />
                {institutionInfo.phone}
              </div>
              <div className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2" />
                {institution.name === 'Poornaprajna PU College Adamaru' ? (
                  <a href="mailto:principalpuc@poornaprajnaadamaru.edu.in" className="text-blue-600 hover:underline">MAIL</a>
                ) : institution.name === 'PPEC Sadashivanagar(Pre-Primary , Primary & High School)' ? (
                  <a href="mailto:ssng.support@ppec.edu.in" className="text-blue-600 hover:underline">MAIL</a>
                ) : institution.name === 'Poornaprajna PU College, Udupi' ? (
                  <a href="mailto:office.udupi@ppuc.edu.in" className="text-blue-600 hover:underline">MAIL</a>
                ) : institution.name === 'PPEC SKNagar' ? (
                  <a href="mailto:office.sknagar@ppec.edu.in" className="text-blue-600 hover:underline">MAIL</a>
                ) : institution.name === 'Poornaprajna Institute of Scientific Research' ? (
                  <a href="mailto:info@ppisr.res.in" className="text-blue-600 hover:underline">MAIL</a>
                ) : institution.name === 'PPEC Indiranagar' ? (
                  <a href="mailto:contact.indiranagar@ppec.edu.in" className="text-blue-600 hover:underline">MAIL</a>
                ) : institution.name === 'Poornaprajna Institute of Management' ? (
                  <a href="mailto:office@pim.ac.in" className="text-blue-600 hover:underline">MAIL</a>
                ) : institution.name === 'Poornaprajna Evening College Udupi' ? (
                  <a href="mailto:sppecudupi@gmail.com" className="text-blue-600 hover:underline">MAIL</a>
                ) : institution.name === 'PPEC Yelahanka (Pre-primary ,Primary & High School)' ? (
                  <a href="mailto:contact.yelahanka@ppec.edu.in" className="text-blue-600 hover:underline">MAIL</a>
                ) : institution.name === 'Poornaprajna College Udupi' ? (
                  <a href="mailto:office@ppc.edu.in" className="text-blue-600 hover:underline">MAIL</a>
                ) : institution.name === 'PPEC Delhi' ? (
                  <a href="mailto:ppps2009@gmail.com" className="text-blue-600 hover:underline">MAIL</a>
                ) : (
                  <a href={`mailto:${institutionInfo.email}`} className="text-blue-600 hover:underline">{institutionInfo.email}</a>
                )}
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-red-900 mb-2">Programs</h4>
            <ul className="text-gray-600 space-y-1">
              {institutionInfo.programs.map((program, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  {program}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstitutionDetails;