import React from 'react';
import { VscAccount } from "react-icons/vsc"; // Replace with your imported icon component if different

function ProfileBox() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <VscAccount style={styles.icon} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  box: {
    width: '200px',
    height: '150px',
    backgroundColor: '#e0e0e0', // Gray box background
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: '-50px', // Position icon halfway outside the box
    fontSize: '100px',
    color: '#333',
    backgroundColor: 'white',
    borderRadius: '50%',
    padding: '10px',
  },
};

export default ProfileBox;
