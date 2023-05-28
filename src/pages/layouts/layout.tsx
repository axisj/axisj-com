
import Header from "./_header";
import styled from "@emotion/styled";
import Footer from "./_footer";
import colors from "../../theme/colors";
import {media, mediaMax} from "@/theme/media";

const Layout = ( props:any ) =>{

    return(
        <Div className={'AXRoot'}>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </Div>
    );
}
export default Layout;

const Div = styled.div`
    .anchorPoint{
      scroll-margin-top: 3rem; //gnbMobileWrapper for Mobile
    }
    .anchorPoint.home{
      scroll-margin-top: 1000rem; //When you click top logo...
    }
    ${media.md}{
      .anchorPoint{
        scroll-margin-top: 5.5rem; //gnbWrapper for Desktop
      }
    }
    
    &.AXRoot{
        main{
            
        }
    }
    
`;