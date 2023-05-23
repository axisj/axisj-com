import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import { Menu, Button, Drawer, Row, Col } from 'antd';
import {breakpoint} from "../../theme/media";
import Container from "./_container";
import colors from "../../theme/colors";

import LogoAXSymbol from '../../../public/images/ax-logo.svg';
import LangSelector from "../components/LangSelector";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Link from "next/link";
import MenuItem from "antd/es/menu/MenuItem";

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})

const gnbItems = [
    {
        label: '액시스제이',
        key: 'axisj',
        lang: 'gnb-1'
    },
    {
        label: '뉴스룸',
        key: 'newsroom',
        lang: 'gnb-2'
    },
    {
        label: '기술',
        key: 'tech',
        lang: 'gnb-3'
    },
    {
        label: '서비스',
        key: 'service',
        lang: 'gnb-4'
    },
    {
        label: '채용',
        key: 'scout',
        lang: 'gnb-5'
    }
];

const MenuMobile = () =>{
    const [current, setCurrent] = useState('gnb-1');
    const [isOpen, setIsOpen] = useState(false);
    const showDrawer = () => {
        setIsOpen(true);
    };
    const closeDrawer = () => {
        setIsOpen(false);
    };
    const handleGnbClick = (e:any) => {
        console.log('click ', e);
        setCurrent(e.lang);

    };

    return(
        <MobileLayer>
            <div className={'gnbMobileWrapper'}>
                <div className={'left'}>
                    <LogoAXSymbol width={'1.5rem'} height={'1.5rem'} fill={colors.ax_supernova_red} />
                </div>
                <div className={'right'}>
                    <Button type="primary" onClick={showDrawer}>
                        Open
                    </Button>
                    <Drawer title="AXISJ" placement="right" onClose={closeDrawer} open={isOpen}>
                        <Menu
                            onClick={handleGnbClick}
                            selectedKeys={[current]}
                            mode="vertical"
                            items={gnbItems}
                        />
                        <LangSelector width={'1.5rem'} height={'1.5rem'} fill={colors.ax_deep_black} />
                    </Drawer>
                </div>
            </div>
        </MobileLayer>
    );
}

const MenuDesktop = () =>{

    const { t } = useTranslation('common');
    const [current, setCurrent] = useState('gnb-1');

    const handleGnbClick = (e:any) => {
        console.log('click ', e);
        setCurrent(e.lang);
    };

    //debugger
    return(
    <DesktopLayer>
        <Container>
            <div className={'gnbWrapper'} >
                <div className={'left'} >
                    <LogoAXSymbol width={'2rem'} height={'2rem'} fill={colors.ax_supernova_red} />
                </div>
                <div className={'center'}>
                    {/*<Menu onClick={handleGnbClick} selectedKeys={[current]} mode="horizontal" items={gnbItems}/>*/}
                    <Menu
                        onClick={handleGnbClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                    >
                        {gnbItems.map(( menu, index ) => (
                            <Menu.Item key={menu.lang}>{t(menu.lang)}</Menu.Item>
                        ))}

                    </Menu>

                </div>
                <div className={'right'}>
                    <LangSelector width={'1.5rem'} height={'1.5rem'} fill={colors.ax_deep_black} />
                </div>
            </div>
        </Container>

    </DesktopLayer>
    );
}

const Header = () =>{

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < parseInt(breakpoint.lg));
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return(
        <>
            {isMobile ? <MenuMobile /> : <MenuDesktop  />}
        </>
    );
}

export default Header;

const DesktopLayer = styled.div`
    position:fixed;
    width:100%;
    z-index:999;
    -webkit-backdrop-filter: blur(0.2rem);
    backdrop-filter: blur(0.2rem);
  .gnbWrapper{
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    height:5.5rem;
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
      flex-grow:1;
      flex-shrink:1;
      display:flex;
      flex-direction:row;
      align-items: center;
      justify-content: center;
      //background:#00f;
    }
  }

  //ANTD Override....
  .ant-menu{ //ul...
    font-family: "Gmarket Sans", "NotoSansKR", "sans-serif";
    flex-grow:1;
    flex-shrink:1;
    align-items: center;
    justify-content: center;
    background:transparent;
    border-bottom:none;
    &.ant-menu-horizontal{
      line-height:2rem;
    }
    .ant-menu-item{ //li...
      color:${colors.ax_deep_black}
      font-size:1rem;
    }
    .ant-menu-item:hover, .ant-menu-item-selected, .ant-menu-item-active{
      color:${colors.ax_deep_black};
      &:after{
        border-bottom-color:${colors.ax_deep_black};
      }
    }
    .ant-menu-title-content{
    }
  }
  

`;

const MobileLayer = styled.div`
    position:fixed;
    width:100%;
    //background:rgba(255,255,255, 0.6);
    z-index:999;
    -webkit-backdrop-filter: blur(0.5rem);
    backdrop-filter: blur(0.5rem);
  .gnbMobileWrapper{
    display:flex;
    justify-content: center;
    align-items: center;
    height:3rem;
    .left{
      flex-grow:1;
      flex-shrink:1;
      display:flex;
      justify-content: flex-start;
      align-items: center;
      padding:0 1rem;
    }
    .right{
      flex-grow:0;
      flex-shrink:0;
      display:flex;
      justify-content: flex-end;
      align-items: center;  
      padding:0 1rem;
    }
  }
`;
