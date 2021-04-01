import React, { useState } from "react";
import "./home.css"
import { Link } from "@reach/router";
import FacebookLogin from 'react-facebook-login';

import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import BootstrapButton from "react-bootstrap/Button"

import { AiFillFacebook, AiOutlineLink } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
import { FcReddit } from "react-icons/fc";
import { Card } from "react-bootstrap"

export default function Home() {
    const [fbURL, setFbURL] = useState('');
    const [twitterAcc, setTwitterAcc] = useState('');
    const [redditAcc, setRedditAcc] = useState('');
    return (
        <div>
            <div style={{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
            <Card>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>DoxMy.tech</h1>
                <h2>How much can a stranger find out about you?</h2>

                <div class="platformInput">
                    <AiFillFacebook style={{fontSize: "2.7em", color: "#3b5998", marginRight: "5px"}} />
                    <Form inline onSubmit={(e) => e.preventDefault()}>
                        <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <AiOutlineLink style={{fontSize: "0.9em", color: "#000000"}}/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                            <FormControl
                                placeholder="https://facebook.com/"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setFbURL(e.target.value)}
                            />
                        </InputGroup>
                    </Form>
                </div>

                <div class="platformInput">
                    <FcReddit style={{fontSize: "2.7em", marginRight: "10px"}} />
                    <Form inline onSubmit={(e) => e.preventDefault()}>
                        <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">u/</InputGroup.Text>
                        </InputGroup.Prepend>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setRedditAcc(e.target.value)}
                            />
                        </InputGroup>
                    </Form>
                </div>

                <div class="platformInput">
                    <ImTwitter style={{fontSize: "2.7em", color: "#1DA1F2", marginRight: "10px"}}/>
                    <Form inline>
                        <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                                onChange={(e) => setTwitterAcc(e.target.value)}
                        />
                        </InputGroup>
                    </Form>
                </div>

                <BootstrapButton as={Link} to="/verification" state={{ facebook: fbURL, twitter: twitterAcc, reddit: redditAcc }} style={{margin: "3em 0em 1em 0em"}}>
                    Explore!
                </BootstrapButton>
            </div>
            </Card>
            </div>
            <div style={{ display: 'none' }}><FacebookLogin
                appId="440751897337373"
                fields="name,email,picture"
                scope="public_profile"
                autoLoad={false}
                callback={() => {}} /></div>
            

            <div class="fixed-bottom text-center bg-white" >
                <p>Made by Sunny Zuo, Matt Zhang, Wolf Van Dierdonck, Aurik Datta</p> 
            </div>
        </div>
    )
}