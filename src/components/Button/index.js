import React from 'react';

import styles from './styles.css';

export default ({label, ...props}) => (
  <button className={styles['button']} {...props}>{label}</button>
)