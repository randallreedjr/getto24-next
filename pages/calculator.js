import Stack from '/lib/Stack.js';
import React from 'react';
import styles from '../styles/Calculator.module.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.operands = new Stack();
    this.operands.push(1)
    this.operands.push(2);
  }

  render() {
    return (
      <div className={styles.calculatorContainer}>

        <div>{this.operands.peek()}</div>
        <div className={styles.displayContainer}>
          <div className={styles.display}>
            <div className={styles.displayContents}>
              1 + 2
            </div>
          </div>
        
          <div className={styles.displayResult}>
            <div className={styles.displayEquals}>
              =
            </div>
            <div className={styles.displayValue}>
              ??
            </div>
          </div>
        </div>

        <div className={styles.operandsContainer}>
          <div className={styles.operandsButtonsContainer}>
            <button className={`${styles.operandsButton} ${styles.operandsButtonEnabled}`}>1</button>
            <button className={`${styles.operandsButton} ${styles.operandsButtonDisabled}`} disabled>2</button>
            <button className={styles.operandsButton}>3</button>
            <button className={styles.operandsButton}>4</button>
          </div>
          <div className={styles.operandsSpacerContainer}>
            &nbsp;
          </div>
        </div>
        
      </div>

    )
  }
}

export default Calculator;