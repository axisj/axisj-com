import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";

import LangKo from '../../../public/images/icon-lang-1.svg';
import LangEn from '../../../public/images/icon-lang-2.svg';
import {useTranslation} from "react-i18next";

const LangSelector = (props:any) =>{
    const { t, i18n } = useTranslation();
    //const [nowLang, setNowLang] = useState('ko');
    const [isToggled, setIsToggled] = useState(false);
    const handleClick = () => {
        //setNowLang(nowLang === 'ko' ? 'en' : 'ko');
        setIsToggled(!isToggled);

        const newLanguage = i18n.language === 'ko' ? 'en' : 'ko';
        i18n.changeLanguage(newLanguage);
        console.log(i18n.language);

    };
    return(
        <Button onClick={handleClick}>
            {isToggled ? (
                <LangKo width={props.width} height={props.height} fill={props.fill} />
            ) : (
                <LangEn width={props.width} height={props.height} fill={props.fill} />
            )}
        </Button>
    );
}

export default LangSelector;


const Button = styled.button`
   background: transparent;
   border:none;
   padding:0;
   margin:0;
`;