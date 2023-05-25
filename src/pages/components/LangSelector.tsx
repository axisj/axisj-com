import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import { useRouter } from 'next/router'
import LangKo from '../../../public/images/icon-lang-1.svg';
import LangEn from '../../../public/images/icon-lang-2.svg';
import { useTranslation } from 'next-i18next';
import Link from "next/link";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const LangSelector = (props:any) =>{
    const { t } = useTranslation('common');
    const router = useRouter();

    //const [currentLanguage, setCurrentLanguage] = useState('ko');

    const [isToggled, setIsToggled] = useState(false);
    const handleClick = () => {
        setIsToggled(!isToggled);
    };
    useEffect (() => {
        console.log("👽router.locale: "+router.locale);
        if(router.locale === "en"){
            setIsToggled(true);
        }
    },[]);

    return(
        <Button onClick={handleClick}>
            {isToggled ? (
                <Link href={router.pathname} locale="ko" scroll={false} >
                    <LangEn width={props.width} height={props.height} fill={props.fill} locale={"ko"} />
                </Link>
            ) : (
                <Link href={router.pathname} locale="en" scroll={false}>
                    <LangKo width={props.width} height={props.height} fill={props.fill} locale={"en"} />
                </Link>
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