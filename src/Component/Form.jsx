import React, { Component } from 'react';
import "./Form.css";

class RegForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            username: "",
            phoneNumber: "",
            nextOfKin: "",
            fees: "",
            location: "",
            school: "",
            join: "",


        }
    }
    handleChange = (e) => { 
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});

      }

      handleSubmit = (e) => {
          e.preventDefault();
          this.setState({email:"", username:"", phoneNumber:"", nextOfKin:"", fees:"", location:"", school:"", join:"", about:"",});
      }
    render() {
        return (
            <div>
            <div className="box">         
                <h1>Codetrain Registration Form</h1>
                <h6>This form is the first step to register for Codetrain's program starting on 25th July 2020. 
                    Our admissions team will reach out to you after successfully submitting your form.</h6>
                <p className="required">* Required</p> 
            </div> <br />
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor="">Email<span>*</span></label><br />
                <input type="text" name="email" placeholder="Your email"
                value={this.state.email} onChange={this.handleChange} required></input><br />
            </form> <br />
            <form >
                <label htmlFor="">Your name<span>*</span></label><br />
                <input type="text" name="username" placeholder="Your answer"
                value={this.state.email} onChange={this.handleChange}></input><br />
            </form> <br />
            <form >
                <label htmlFor="">Phone number<span>*</span></label><br />
                <input type="text" name="phonenumber" placeholder="Your answer"
                value={this.state.email} onChange={this.handleChange}></input><br />
            </form> <br />
            <form className="kin">
                <label htmlFor="">Phone number of next of kin <br />
                Phone number of someone we can reach out to in case your phone is off or not reachable. 
                Eg, your<br /> parent, guardian or sibling, or spouse <span>*</span></label><br />
                <input type="text" name="phonenumber" placeholder="Your answer"
                value={this.state.email} onChange={this.handleChange}></input><br />
            </form> <br />
            <form className="radio">
                <label htmlFor="">Can you pay 60% or more of the full Codetrain fees (GHS6000 for Ghanaian applicants or $1,200 for international applicants)<span></span>*</label><br /> 
                <div>
                <label>
                    <input type="radio" value="option1" checked={this.state.name=== "No"} /><span>No</span>
                </label>
                <label>
                    <input type="radio" value="option1" checked={this.state.name=== "Yes"} /><span>Yes</span>
                </label>  
                </div> 
            </form><br />
            <form className="radio">
                <label htmlFor="">Please indicate who is going to pay your fees<span>*</span></label><br /> 
                <div className="radio1">
                <label>
                    <input type="radio" value="option1" checked={this.state.name=== "No"} /><span>Yourself</span>
                </label>
                <label>
                    <input type="radio" value="option1" checked={this.state.name=== "Yes"} /><span>Parent/Sponsor</span>
                </label> 
                <label>
                    <input type="radio" value="option1" checked={this.state.name=== "Yes"} /><span>Organization</span>
                </label>
                </div>
            </form> <br />
            <form >
                <label htmlFor="">Location<span>*</span></label><br />
                <input type="text" name="username" placeholder="Your answer"
                value={this.state.location} onChange={this.handleChange}></input><br />
            </form> <br />
            <form >
                <label htmlFor="">Current or previous school<span>*</span></label><br />
                <input type="text" name="username" placeholder="Your answer"
                value={this.state.school} onChange={this.handleChange}></input><br />
            </form> <br />
            <form >
                <label htmlFor="">Why do you want to join Codetrain<span>*</span></label><br />
                <input type="text" name="username" placeholder="Your answer"
                value={this.state.join} onChange={this.handleChange}></input><br />
            </form> <br />
            <form >
                <label htmlFor="">How did you hear about Codetrain ?<span>*</span></label><br />
                <input type="text" name="username" placeholder="Your answer"
                value={this.state.about} onChange={this.handleChange}></input><br />
            </form> <br />
            <div className="faint">
            <p>A copy of your responses will be emailed to the address you provided</p>
            <div/>
            
            
            <div className="line-1"><p>Page 1 of 1</p></div>
            
            <button type="submit" form="nameform" value="Submit">Submit</button>
            <div className="page">
                
                <p>Never submit passwords through Google Forms.</p>
            </div>
            </div>
        </div>
        );
    }
}

export default RegForm;
