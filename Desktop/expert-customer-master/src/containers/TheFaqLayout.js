import React from 'react';
import CommonHeroSection from '../components/CommonHeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Component } from 'react';
import {Table,Accordion ,Card,Button} from 'react-bootstrap'
class TheFaq extends Component{
    state={
        value:"general_question"
    }
    handler=(event)=>{
        var temp=event.target.value;
        this.setState({value : temp})

    }
    render(){
        var show;
        if(this.state.value==="about")
        {
            show=(
                <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Do you give any offer for premium customer?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body style={{color : "black"}}>The green zone is available to everyone, but not just anyone can join. The first step into the green zone is the step in to your client’s future and look back at the advice solutions and services you provided.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Why Would a Successful Entrepreneur Hire a Coach?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body style={{color : "black"}}>The green zone is available to everyone, but not just anyone can join. The first step into the green zone is the step in to your client’s future and look back at the advice solutions and services you provided.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            What is the procedure to join with your company?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body style={{color : "black"}}>The green zone is available to everyone, but not just anyone can join. The first step into the green zone is the step in to your client’s future and look back at the advice solutions and services you provided.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Waht makes your financial projects special?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body style={{color : "black"}}>The green zone is available to everyone, but not just anyone can join. The first step into the green zone is the step in to your client’s future and look back at the advice solutions and services you provided.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            Can I offer my items for free on a promotional basis?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body style={{color : "black"}}>The green zone is available to everyone, but not just anyone can join. The first step into the green zone is the step in to your client’s future and look back at the advice solutions and services you provided</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            Is there a limit to the number of guests should plan in a day?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                            <Card.Body style={{color : "black"}}>The green zone is available to everyone, but not just anyone can join. The first step into the green zone is the step in to your client’s future and look back at the advice solutions and services you provided.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                 </Accordion>

            )
        }else if(this.state.value==="general_question" || this.state.value==="expert_question"){
            show=(
                <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            What are the products offered by Fexperts for consumers?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body style={{color : "black"}}> The green zone is available to everyone, but not just anyone can join. The first step into the green zone is the step in to your client’s future and look back at the advice solutions and services you provided.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Can I do a free online consultation?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body style={{color : "black"}}>The green zone is available to everyone, but not just anyone can join. The first step into the green zone is the step in to your client’s future and look back at the advice solutions and services you provided.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                 </Accordion>

            );
        }else if(this.state.value==="random_knowledge"){
            show=(
                <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Do you give any offer for premium customer?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body style={{color : "black"}}> The green zone is available to everyone, but not just anyone can join. The first step into the green zone is the step in to your client’s future and look back at the advice solutions and services you provided.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            What is the procedure to join with your company?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body style={{color : "black"}}>The green zone is available to everyone, but not just anyone can join. The first step into the green zone is the step in to your client’s future and look back at the advice solutions and services you provided.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                 </Accordion>
            )
        }else{
            show=null;
        }
        return(
            <div>
            <Navbar />
            <div className="container-fluid bg-main pb-15">
            <CommonHeroSection title="Frequently asked questions" />

            <div className="container-fluid bg-main pb-15" style={{backgroundColor : "white"}}>
               <div className="row">
                   <div className="col-6">
                   <Table >
                        <tbody>
                            <tr>
                            <td><Button variant="link" block value="about" onClick={this.handler} style={{color : "black"}}>About Company</Button></td>
                            </tr>
                            <tr>
                            <td><Button variant="link" block value="general_question" onClick={this.handler} style={{color : "black"}}>General Questions</Button></td>
                            </tr>
                            <tr>
                            <td><Button variant="link"  block value= "expert_question" onClick={this.handler} style={{color : "black"}}>Experts Questions</Button></td>
                            </tr>
                            <tr>
                            <td><Button variant="link"  block value="random_knowledge" onClick={this.handler} style={{color : "black"}}>Random Knowledge</Button></td>
                            </tr>
                        </tbody>
            </Table>
                   </div>
                <div className="col-6">
                        {show}
                </div>
               </div>
            </div>
        </div>
        <Footer />
            </div>
        )
    }
}
export default TheFaq;