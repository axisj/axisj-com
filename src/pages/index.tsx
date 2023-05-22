import styled from '@emotion/styled'
import Layout from "@/pages/layouts/layout";
import Newsroom from "./layouts/_newsroom";
import History from "./layouts/_history";
import Top from "./layouts/_top";

const Index = () => {
    return(
        <Layout>
            <Top />
            <Newsroom />
            <History />
        </Layout>
    );
}
export default Index;

const Div = styled.div`
    background:#f00;
`;