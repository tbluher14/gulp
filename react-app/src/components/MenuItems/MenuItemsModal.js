import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import MenuItemCard from '../MenuItemCard';
import MenuItems from './MenuItems';
import './MenuItems.css';

function MenuItemsModal({ menuItems }) {
  const [showModal, setShowModal] = useState(false);

  console.log('this is menuItems', menuItems)

  return (
    <>
      <button className='menuItems-button' onClick={() => setShowModal(true)}>View Full Menu</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='menuItems-modal-container'>

            <div className='menuItems-modal-header'>
              <div className='menuItemsmenuItems'>Full Menu</div>
            </div>

            <div>
              <MenuItemCard menuItems={menuItems}/>
            </div>

            <div className='menuItems-modal-form'>
              <MenuItems />
            </div>

          </div>
      </Modal>
      )}
    </>
  );
}

export default MenuItemsModal;
