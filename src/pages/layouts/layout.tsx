
import Header from "./_header";
import styled from "@emotion/styled";
import Footer from "./_footer";
import colors from "../../theme/colors";

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
    &.AXRoot{
        main{
            
        }
    }
    
`;