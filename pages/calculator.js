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
        
          <div className={styles.displayEquals}>
            =
          </div>
          <div className={styles.displayResult}>
            ??
          </div>
        </div>

        <div className={styles.operandsContainer}>
          <button>1</button>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        
      </div>

    )
  }
}

export default Calculator;