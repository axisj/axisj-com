import styled from "@emotion/styled";
import Container from "./_container";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import {media, mediaMax} from "../../theme/media";

const logoPath = './logos/';
const customerItem = [
    {   id:1, name:'Doosan', link:'', img: logoPath + 'ref-logo-1.png'},
    {   id:2, name:'Boehringer Ingelheim', link:'', img: logoPath + 'ref-logo-2.png'},
    {   id:3, name:'Ourhome', link:'', img: logoPath + 'ref-logo-3.png'},
    {   id:4, name:'KRIHS', link:'', img: logoPath + 'ref-logo-4.png'},
    {   id:5, name:'Subway', link:'', img: logoPath + 'ref-logo-5.png'},
    {   id:6, name:'Samsung Heavy Industry', link:'', img: logoPath + 'ref-logo-6.png'},
    {   id:7, name:'BurgerKing', link:'', img: logoPath + 'ref-logo-7.png'},
    {   id:8, name:'SR', link:'', img: logoPath + 'ref-logo-8.png'},
    {   id:9, name:'Good neighbors', link:'', img: logoPath + 'ref-logo-9.png'},
    {   id:10, name:'Puruni', link:'', img: logoPath + 'ref-logo-10.png'},
    {   id:11, name:'Kyobo', link:'', img: logoPath + 'ref-logo-11.png'},
    {   id:12, name:'Kakao', link:'', img: logoPath + 'ref-logo-12.png'},
    {   id:13, name:'Hancom', link:'', img: logoPath + 'ref-logo-13.png'},
    {   id:14, name:'SKTelecom', link:'', img: logoPath + 'ref-logo-14.png'},
    {   id:15, name:'SM Entertainment', link:'', img: logoPath + 'ref-logo-15.png'},
    {   id:16, name:'SH', link:'', img: logoPath + 'ref-logo-16.png'},
    {   id:17, name:'Coffee Banhada', link:'', img: logoPath + 'ref-logo-17.png'}

];



const Customers = () =>{
    return(
        <Div>
            <div className={'maskee left'}></div>
            <div className={'maskee right'}></div>
            <Marquee speed={80} autoFill={true} pauseOnHover={true}>
                {customerItem.map((element, index) => (
                    <Link href={element.link} key={element.id} target='_blank' rel='noopener noreferrer'><img src={element.img} /></Link>
                ))}
            </Marquee>
        </Div>
    );
}

export default Customers;


const Div = styled.div`
    position:relative;
    .maskee{
        position:absolute;
        left:0;
        width:4rem;
        height:100%;
        z-index:5;
        background:linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        &.right{
            left: auto;
            right:0;
            background:linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        }
    }
    ${media.sm}{
        .maskee{
            width:8rem;
        }
    }             
    ${media.md}{
        .maskee{
            width:10rem;
        }
    }         
    ${media.lg}{
        .maskee{
            width:15rem;
        }
    }      
    ${media.xl}{
        .maskee{
            width:20rem;
        }
    }      
    ${media.ul}{
        .maskee{
            width:25rem;
        }
    }          
`;