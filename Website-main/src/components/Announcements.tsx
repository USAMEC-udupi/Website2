import React from 'react';
import { Calendar, Bell } from 'lucide-react';
import { announcements } from '../data/staticData';

const Announcements = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Bell className="text-orange-500 mr-3" size={24} />
        <h2 className="text-2xl font-bold text-red-900">Announcements</h2>
      </div>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="border-l-4 border-orange-500 pl-4 py-2">
            <div className="flex items-center mb-2">
              <Calendar className="text-gray-500 mr-2" size={16} />
              <span className="text-sm text-gray-500">
                {new Date(announcement.date).toLocaleDateString()}
              </span>
            </div>
            <h3 className="font-bold text-red-900 mb-1">{announcement.title}</h3>
            <p className="text-gray-600 text-sm">{announcement.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a 
          href="#" 
          className="text-orange-500 hover:text-red-900 font-medium transition-colors duration-200"
        >
          View All Announcements →
        </a>
      </div>
    </div>
  );
};

export default Announcements;