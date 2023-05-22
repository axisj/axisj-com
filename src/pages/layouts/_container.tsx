import styled from "@emotion/styled";
import { media, breakpoint} from "../../theme/media";
import {ReactNode} from "react";

interface Props{
    children?: ReactNode;
    isSelected?: boolean;
    horizontal?: string;
    vertical?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    justify_content?: string;
    align_items?: string;
    flex?: string;
    selected?: boolean;
    forPopup?: boolean;
    isOpened?: boolean;
    expand?: boolean;
}

const Container = ({ children, ...props }: Props) => {
    return(
        <Section {...props}>
            {children}
        </Section>
    );
};

export default Container;


const Section = styled.section<Props>`
    max-width: 100%;
    margin: 0 auto;
    transition: all 0.2s ease-out;
    ${media.xs}, ${media.sm}{
      max-width: 100%; 
    }
    ${media.md}{
      max-width: ${breakpoint.md}
    }
    ${media.lg}{
      max-width: ${breakpoint.md}
    }
    ${media.xl}{
      max-width: ${breakpoint.xl}
    }
    ${media.ul}{
      max-width: ${breakpoint.ul}
    }
  
    width:100%;
    height:${(props) => props.height ||'auto'};
    background:${(props) => props.backgroundColor ||'transparent'};
`;