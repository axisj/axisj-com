import styled from "@emotion/styled";
import { media, breakpoint, maxwidth } from "../../theme/media";
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
        <Div {...props}>
            {children}
        </Div>
    );
};

export default Container;


const Div = styled.div<Props>`
    max-width: 100%;
    margin: 0 auto;
    transition: all 0.2s ease-out;
    ${media.xs}{
      max-width: 100%;
      width:100%;
    }
    ${media.sm}{
      max-width: 100%;
      width:100%;
    }
    ${media.md}{
      max-width: ${maxwidth.md}
    }
    ${media.lg}{
      max-width: ${maxwidth.md}
    }
    ${media.xl}{
      max-width: ${maxwidth.xl}
    }
    ${media.ul}{
      max-width: ${maxwidth.ul}
    }
  
    width:100%;
    height:${(props) => props.height ||'auto'};
    background:${(props) => props.backgroundColor ||'transparent'};
`;