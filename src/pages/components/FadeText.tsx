import {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import colors from "../../theme/colors";


const FadeText = (props:any) => {
    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false); // Reset visibility when prop changes
        setTimeout(() => {
            setText(props.text);
            setIsVisible(true); // Trigger fade-in after a short delay
        }, 200);
    }, [props.text]);

    return (
        <Span>
            <span
                style={{
                    animation: isVisible ? 'fadeIn 2s' : 'none',
                    opacity: isVisible ? 1 : 0,
                }}
            >
            {text}
            </span>
        </Span>
    );
};
export default FadeText;

const Span = styled.span`

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`;

