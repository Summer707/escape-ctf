import React from 'react';

interface GlitchOverlayProps {
  visible: boolean;
}

const GlitchOverlay: React.FC<GlitchOverlayProps> = ({ visible }) => {
  return (
    <div className={`glitch-overlay${visible ? ' visible' : ''}`}></div>
  );
};

export default GlitchOverlay; 