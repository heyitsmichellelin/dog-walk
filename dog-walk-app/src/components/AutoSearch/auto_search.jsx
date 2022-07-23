import React from 'react';
import {useRef} from 'react';
import magnifying_glass from '../../images/magnifying_glass.png'
import styles from './auto_search.module.css';

function AutoSearchComponent() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    let info = inputRef.current.value;
    console.log('success', {info});
  }
  return (
  <form>
    <input id="autocomplete_box" placeholder="Where is your next adventure?" type="text" ref={inputRef} className={styles.autocomplete_box}/>
    <input type="image" src={magnifying_glass} alt="Submit" width='28' height='28' onClick={handleSubmit} className={styles.magnifying_glass}></input>
  </form>  )
}


export default AutoSearchComponent;