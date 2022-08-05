import React, {useEffect, useState } from "react";
import {Link as ReactRouterLink} from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import {
    Background,
    ButtonLink,
    Container,
    Link,
    Logo,
    Group,
    Profile,
    Dropdown,
    Feature,
    Picture,
    PlayButton, 
    Text,
    FeatureCallOut,
    Search,
    SearchIcon,
    SearchInput,
    Mic,
    MicIcon,
    micText,
    setMicText,
} from './styles/header';

export default function Header({bg=true,children,...restProps}){
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature=function HeaderFeature({children,...restProps}){
    return <Feature {...restProps}>{children}</Feature>
};

Header.FeatureCallOut=function HeaderFeatureCallOut({children,...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
};

Header.Text=function HeaderText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
};

Header.Mic=function HeaderMic({children, ...restProps}) {
    let speech;
    if (window.webkitSpeechRecognition) {
    // eslint-disable-next-line
    const SpeechRecognition = webkitSpeechRecognition;
    speech = new SpeechRecognition();
    speech.continuous = true;   
    } else {
    speech = null;
    }
    const [isListening, setIsListening] = useState(false);
    const listen = () => {
        setIsListening(!isListening);
        if (isListening) {
            speech.stop();
        } else {
            speech.start();
        }
    };
    useEffect(() => {
        if (!speech) {
            return;
        }
        
        speech.onresult = event => {
            setMicText(event.results[event.results.length - 1][0].transcript);
        };
    }, []);
    
    return (
        <Mic {...restProps}>
            <MicIcon onClick = {() => setIsListening((isListening) => !isListening)}>
                <img src="/images/icons/microphone.png" alt="Microphone" />
            </MicIcon>
           onClick={listen}
           active={isListening};
       <p>{micText}</p>
     </Mic>
    );
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick = {() => setSearchActive((searchActive) => !searchActive)}>
                <img src="/images/icons/search.png" alt = "Search" />
            </SearchIcon>
            <SearchInput 
                value = {searchTerm} 
                onChange = {({ target }) => setSearchTerm(target.value)}
                placeholder = "Search movies and series"
                active = {searchActive} />
        </Search>
    );
};



Header.Dropdown=function HeaderDropdown({children,...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
};

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
    return <PlayButton {...restProps}>{children}</PlayButton>
};

Header.TextLink=function HeaderTextLink({children,...restProps}){
    return <Link {...restProps}>{children}</Link>
};

Header.Frame=function HeaderFrame({children,...restProps}){
    return <Container {...restProps}>{children}</Container>;
};

Header.Group=function HeaderGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>;
};

Header.Profile=function HeaderProfile({children,...restProps}){
    return <Profile {...restProps}>{children}</Profile>;
};

Header.ButtonLink=function HeaderButtonLink({children,...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Picture=function HeaderPicture({src,...restProps}){
    return <Picture  {...restProps} src={`/images/users/${src}.png`}/>
};

Header.Logo= function HeaderLogo({to,...restProps}){
    return(
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    );
};


