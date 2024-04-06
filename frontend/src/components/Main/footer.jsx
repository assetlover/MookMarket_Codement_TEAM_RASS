import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <div className="flex gap-40 justify-center">
          <ul className="list-none p-0 mr-8">
            <li className="mb-2">Link 1</li>
            <li className="mb-2">Link 2</li>
            <li className="mb-2">Link 3</li>
          </ul>
          <ul className="list-none p-0">
            <li className="mb-2">Link 4</li>
            <li className="mb-2">Link 5</li>
            <li className="mb-2">Link 6</li>
          </ul>
        </div>
        <p className="mt-4">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

