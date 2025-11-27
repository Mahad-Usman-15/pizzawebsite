import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';
import Dashboard from './dashboard';
import Users from './users';
import Orders from './orders';
import Products from './products';
import Contacts from './contacts';
const Panel = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'orders':
        return <Orders />;
      case 'products':
        return <Products />;
         case 'contacts':
        return <Contacts />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className='flex'>
      <Sidebar setActiveView={setActiveView} />
      <div className='flex-grow p-4'>
        {renderView()}
      </div>
    </div>
  );
};

export default Panel;