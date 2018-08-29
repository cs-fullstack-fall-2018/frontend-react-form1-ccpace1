import React, { Component } from 'react';

class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {personName: "", personAge: "", personFeeling: "", message:""}
    }

    changePersonName = (event) => {
        this.setState({personName: event.target.value});
    };
    changePersonAge = (event) => {
        this.setState({personAge: event.target.value})
    };
    changePersonFeeling = (event) => {
        this.setState({personFeeling: event.target.value})
    };

    submitFunction = (event) => {
        console.log("Submitted Form.");
        this.setState({message: "Hello " + this.state.personName+ "." + " You're " + this.state.personAge + " and you are feeling " + this.state.personFeeling + "."});
        //This prevents the form from reloading
        event.preventDefault();
        event.stopPropagation();
        };


    render() {
        return (
            <div>
                <form onSubmit={this.submitFunction}>
                    <h1>Info</h1>
                    <label htmlFor="personName">What is your name? </label>
                    <input type="text" id="name" value={this.state.personName} onChange={this.changePersonName}/>
                    <br/>
                    <label htmlFor="personAge">How old are you?</label>
                    <input type="text" id="age" value={this.state.personAge} onChange={this.changePersonAge}/>
                    <br/>
                    <label htmlFor="personFeeling">How are you feeling? </label>
                    <input type="text" id="feeling" value={this.state.personFeeling} onChange={this.changePersonFeeling}/>
                    <br/>
                    <button>Submit</button>
                    <h2>{this.state.message}</h2>
                    </form>
            </div>
        );
    }
}

export default PersonStats