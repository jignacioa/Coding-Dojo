import React, { Component } from 'react'; // always need to import React 
//import React from react then set up will look like line 8 
import styles from './BoxClicker.module.css';
//(.module) allows isolation of the style. (style encapsulation) it will not affect styles of other components
// styles returns a styles object with the contents as keys
// styles is what we get back from the .css files. styles is just a name and it can be named w/e


//class BoxClicker extends React.Component
class BoxClicker extends Component {
    //takes in prop from the BoxClicker div in App 
    /*constructor is needed because we're working with state and we need to be able 
    to crate an attribute for the component (this.state = {}*/
    constructor(props) {
        //calls on super to pass along the props - invoking constructor method of Component class
        super(props)

        //state has to be declared as an object 
        // this reference actual instance of BoxClicker 
        this.state = {
            boxes: [
                false,
                false,
                false,
            ]
        }   
    }
    //index to know what box was clicked 
    handleClick = index => {
        

        const newBoxState = this.state.boxes.slice(); // slice will return a shallow copy of the array so the old array is not changed!
        //state object can't be mutated, 



        // new single box state equals the opposite of what it currently equals old array is not changed! working with a copy .slice
        // * this used to say this.state.boxes[index] BUT we can't be changing boxes object 
        newBoxState[index] = !newBoxState[index];

        //  .setState is coming from Component, need to provide a new value for boxes object 
        // must use .setState to change the state
        this.setState({
            boxes: newBoxState
        })
    }


    render () {
        // the state could be destructured 
        // {boxes} = this.boxes
        //elem.addEVentListener('click', event => {...our callback body}) this is for vanilla
        return (
            /*function handleClicked() {
                console.log('clicked')
            }*/

            //this.props is just an object and this.props.title will render 'First One!" from title in app.js on the page 
             <div>
                <h2>{this.props.title}</h2> 
                <div className={styles.container}>
                {this.state.boxes.map((box, idx) => {
                    const style = box /* asks if box( the state) is a truthy. True = truthy, False = falsy. what style do 
                    i want to give the box*/
                        ? styles.clicked
                        : styles.unclicked

                    // in line 53 box is referecing the boxstate(true/false)
                    // the div is the box!!
                    return <div 
                    //event names are camelCased(onClick)
                    onClick={() => this.handleClick(idx)} 
                    key = {idx}
                    className ={styles.box + ' ' + style}
                    ></div>;
                })}
                </div>
            </div>
        )
    }
}

export default BoxClicker