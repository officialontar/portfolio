import React from 'react';
import '../../src/style.css';

import pic1 from '../assets/Team.jpg';
import me from '../assets/A.jpg';
import pic3 from '../assets/cstClub.jpeg';
import pic4 from '../assets/FS.jpg';
import pic5 from '../assets/ChatGPT.png';
import pic6 from '../assets/IMG.jpg';
import pic7 from '../assets/BFA.jpg';
import pic2 from '../assets/1178.jpg';

const PhotoGallery = () => {
  const photos = [
    { url: pic1, category: 'Group' },
    { url: me, category: 'Single' },
    { url: pic3, category: 'Club' },
    { url: pic4, category: 'Community' },
    { url: pic5, category: 'Group' },
    { url: pic6, category: 'Single' },
    { url: pic7, category: 'Club' },
    { url: pic2, category: 'Community' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-cyan-400">📸 Photo Gallery</h2>
        <p className="text-center mb-12 text-gray-300 max-w-2xl mx-auto text-lg">
          Explore all your special moments — group events, personal snapshots, club memories, and community gatherings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl group hover:shadow-cyan-500/50 transition"
            >
              <img
                src={photo.url}
                alt={photo.category}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-center py-3 text-sm font-semibold">
                {photo.category} Photo
              </div>
            </div>
          ))}
        </div>

        {/* Add More Ideas */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-6 text-center text-purple-400">🎯 Other Gallery Ideas</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            <li className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/50 transition">🎉 Events Gallery</li>
            <li className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/50 transition">🎬 Behind the Scenes</li>
            <li className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/50 transition">🏆 Achievements</li>
            <li className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/50 transition">🎨 Creative Works</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
