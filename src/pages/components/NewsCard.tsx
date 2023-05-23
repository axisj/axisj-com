import styled from "@emotion/styled";
import colors from "../../theme/colors";

interface props{
    key?: String;
    image?: String;
    title?: String;
    desc?: String;
}

const NewsCard = ({...props}) =>{
    return(
        <CardWrap>
            <Card {...props}>
                <dt className={'textBox'}>
                    <div className={'title'}>{props.title}</div>
                    <div className={'desc'}>{props.desc}</div>
                </dt>
            </Card>
        </CardWrap>
    );
}

export default NewsCard;

const CardWrap = styled.div`
    padding:0 1rem;
`;

const Card = styled.dl<props>`
    position:relative;
    aspect-ratio: auto 1 / 1;
    box-sizing: border-box;
    background-image:${(props) => `url(${props.image})` || null };
    background-size:cover;
    border-radius: 0.5rem;
    overflow: hidden;
    .textBox{
      position: absolute;
      bottom:0;
      left:0;
      padding:1rem;
      min-height:6rem;
      color: ${colors.white};
      background-color:rgba(0,0,0, .3);
      -webkit-backdrop-filter: blur(0.5rem);
      backdrop-filter: blur(0.5rem);
      .title{
        font-size:1rem;
      }
      .desc{
        padding-top:1rem;
        font-size:0.875rem;
        line-height:1.2rem;
      }
    }
`;