import styled from "@emotion/styled";

const Top = () =>{
    return(
        <Div>
            <div className={'HeroWrapper'}>
            </div>
        </Div>
    );
}

export default Top;


const Div = styled.div`
   .HeroWrapper{
        //height:60rem;
        height:20rem;
        background:#eaeaea url('./images/ax-hero-1.jpg') no-repeat top left;
        background-size:cover;
   }
`;