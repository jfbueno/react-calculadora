import React, { Component} from 'react'
import './Calculadora.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculadora extends Component
{

    clearMemory = () => console.log('Limpar')
    
    setOperation = operation => console.log(operation)
    
    addDigit = digit => console.log(digit)

    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        
        return (
            <div className="calculator">
                <Display value={1000}></Display>
                <Button label="AC" click={() => this.clearMemory()}></Button>
                <Button label="/" click={setOperation}></Button>
                <Button label="7"></Button>
                <Button label="8"></Button>
                <Button label="9"></Button>
                <Button label="*"></Button>
                <Button label="4"></Button>
                <Button label="5"></Button>
                <Button label="6"></Button>
                <Button label="-"></Button>
                <Button label="1"></Button>
                <Button label="2"></Button>
                <Button label="3"></Button>
                <Button label="+"></Button>
                <Button label="0"></Button>
                <Button label="."></Button>
                <Button label="="></Button>
            </div>
        )
    }
}