// EasterEggModal.js
import React from 'react';
import Modal from 'react-modal';

const EasterEggModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Easter Egg Modal"
        >
            <img src="https://www.masslive.com/resizer/6fG3kn4XVxJ-oL-GSemJT7e6arw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/YT4ZVOQIBFFUPJMF6G5WHYGVDQ.jpeg" alt="Easter Egg Image" />
            {/* Élément audio pour jouer le son */}
            <audio autoPlay>
                <source src="./lobster.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </Modal>
    );
};

export default EasterEggModal;