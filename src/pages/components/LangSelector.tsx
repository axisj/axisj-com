import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";

import LangKo from '../../../public/images/icon-lang-1.svg';
import LangEn from '../../../public/images/icon-lang-2.svg';

const LangSelector = (props:any) =>{

    const [isToggled, setIsToggled] = useState(false);
    const handleClick = () => {
        setIsToggled(!isToggled);
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