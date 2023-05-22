import {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import { Menu } from 'antd';
import {breakpoint} from "../../theme/media";
import Container from "./_container";

const gnbItems = [
    {
        label: '액시스제이',
        key: 'axisj'
    },
    {
        label: '뉴스룸',
        key: 'newsroom'
    },
    {
        label: '기술',
        key: 'tech'
    },
    {
        label: '서비스',
        key: 'servcie'
    },
    {
        label: '채용',
        key: 'scout'
    }
];

const MenuMobile = (props) =>{


}

const MenuDesktop = (props) =>{

    const [current, setCurrent] = useState('axisj');

    const handleGnbClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    //debugger
    return(
    <Layer>
        <Container>
            <div className={'gnbWrapper'} >
                <div className={'left'} >
                    logo
                </div>
                <div className={'center'}>
                    <Menu onClick={handleGnbClick} selectedKeys={[current]} mode="horizontal" items={gnbItems} />
                </div>
                <div className={'right'}>
                    option
                </div>
            </div>
        </Container>

    </Layer>
    );
}

const Header = () =>{

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < parseInt(breakpoint.xl));
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <Div>
            {isMobile ? <MenuMobile /> : <MenuDesktop  />}
        </Div>
    );
}

export default Header;

const Layer = styled.div`
    position:fixed;
    width:100%;
    background:#f00;
    z-index:999;
`;

const Div = styled.div`
    .gnbWrapper{
        
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        .left{
            flex-grow:0;
            flex-shrink:0;
            display:flex;
            flex-direction:row;
            align-items: center;
            justify-content: center;
        }
        .right{
            flex-grow:0;
            flex-shrink:0;
            display:flex;
            flex-direction:row;
            align-items: center;
            justify-content: center;
        }
        .center{
            border:1px solid #f00;
            flex-grow:1;
            flex-shrink:1;
            display:flex;
            flex-direction:row;
            align-items: center;
            justify-content: center;
        }
    }
    
    //ANTD Override....
    .ant-menu{ //ul...
        border:1px solid #0f0;
        font-family: "Gmarket Sans", "NotoSansKR", "sans-serif";
        .ant-menu-item{ //li...
            &.ant-menu-item-selected, &.ant-menu-item-active{
                color:#f00;
                &:after{
                   border-bottom-color:#f00;
                }
            }
            .ant-menu-title-content{
            }
        }
    }
`;