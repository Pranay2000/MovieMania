import React from "react";
import { Feature } from "../components";
import {HeaderContainer} from'../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';

export default function home(){
    return(
        <>
            <HeaderContainer>
               <Feature>
                   <Feature.Title>Unlimited films, TV Programmes and more</Feature.Title>
                   <Feature.SubTitle>Watch Anywhere !</Feature.SubTitle>
               </Feature>
            </HeaderContainer>    
            <JumbotronContainer/> 
            <FaqsContainer/>
            
           
        </>
    );
}