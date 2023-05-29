import React, {forwardRef, useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled";
import {Menu, Button, Drawer, Row, Col, Modal, Space} from 'antd';
import {breakpoint} from "../../theme/media";
import Container from "./_container";
import colors from "../../theme/colors";

import LogoAXSymbol from '../../../public/images/ax-logo.svg';
import LangSelector from "../components/LangSelector";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Link from "next/link";
import MenuItem from "antd/es/menu/MenuItem";
import {useRouter} from "next/router";
import Newsroom from "@/pages/layouts/_newsroom";

import IconMenu from '../../../public/images/ax-icon-menu.svg';
import IconMenuClose from '../../../public/images/ax-icon-menu-close.svg';

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})


const MenuMobile = () =>{
    const { t } = useTranslation('common');
    const router = useRouter();

    const [current, setCurrent] = useState(t('gnb-1'));
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const headerMobileWrapRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const showDrawer = () => {
        setIsOpen(true);
    };
    const closeDrawer = () => {
        setIsOpen(false);
    };
    const info = () => {
        Modal.info({
            title: t('modal-info'),
            content: (
                <div>
                    <p>{t('modal-msg-recruit')}</p>
                </div>
            ),
            onOk() {},
        });
    };
    const handleGnbClick = (e:any) => {
        console.log('click ', e);
        setCurrent(e.label);

        if(e.key === "ko" || e.key === "en"){
            router.push(`${router.pathname}`, undefined, {locale:e.key, scroll:false});
        }
        if(e.key === "RECRUIT"){
            info();
        }else{
            const IdMatchedPage = document.querySelector(`#${e.key}`);
            IdMatchedPage?.scrollIntoView({ block: 'start', behavior: "smooth" });
        }

    };
    const handleScroll = () => {
        let headerMobileWarpHeight = headerMobileWrapRef.current.clientHeight;
        let heightGap = window.innerHeight - headerMobileWarpHeight;
        setScroll(window.scrollY > heightGap);
        console.log("🛰️heightGap:"+heightGap);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <MobileLayer className={scroll ? 'scroll' : ''} ref={headerMobileWrapRef}>
            <div className={'gnbMobileWrapper'}>
                <div className={'left'}>
                    <Link href={'#HOME'}>
                        <LogoAXSymbol width={'1.5rem'} height={'1.5rem'} fill={colors.ax_supernova_red} />
                    </Link>
                </div>
                <div className={'right'}>
                    <Button type="link" onClick={showDrawer} className={'menuButton'}>
                        <IconMenu width={24} height={24} fill={`${colors.ax_text_black}`} />
                    </Button>
                    <Drawer
                        title="AXISJ"
                        placement="right"
                        onClose={closeDrawer}
                        closable={false}
                        open={isOpen}
                        extra={
                            <Space>
                                <Button type="link" onClick={closeDrawer} className={'menuButton'}>
                                    <IconMenuClose width={24} height={24} fill={`${colors.ax_text_black}`} />
                                </Button>
                            </Space>
                        }
                    >
                        { router.locale == "ko" ?
                            <Menu
                                onClick={handleGnbClick}
                                selectedKeys={[current as string]}
                                mode="vertical"
                                items={[
                                    {
                                        type: 'group', // Must have
                                        label: `${t('mobile-group-1')}`,
                                    },
                                    {
                                        label: `${t('gnb-1')}`,
                                        key: 'AXISJ',
                                    },
                                    {
                                        label: `${t('gnb-2')}`,
                                        key: 'NEWSROOM',
                                    },
                                    {
                                        label: `${t('gnb-3')}`,
                                        key: 'TECH',
                                    },
                                    {
                                        label: `${t('gnb-4')}`,
                                        key: 'SERVICE',
                                    },
                                    {
                                        label: `${t('gnb-5')}`,
                                        key: 'RECRUIT',
                                    },
                                    {
                                        type: 'group', // Must have
                                        label: `${t('mobile-group-2')}`,
                                    },
                                    {
                                        label: `한국어`,
                                        key: 'ko',
                                    },
                                    {
                                        label: `English`,
                                        key: 'en',
                                    }
                                ]}
                            />
                            :
                            <Menu
                                onClick={handleGnbClick}
                                selectedKeys={[current as string]}
                                mode="vertical"
                                items={[
                                    {
                                        type: 'group', // Must have
                                        label: `${t('mobile-group-1')}`,
                                    },
                                    {
                                        label: `${t('gnb-1')}`,
                                        key: 'AXISJ',
                                    },
                                    {
                                        label: `${t('gnb-3')}`,
                                        key: 'TECH',
                                    },
                                    {
                                        label: `${t('gnb-4')}`,
                                        key: 'SERVICE',
                                    },
                                    {
                                        label: `${t('gnb-5')}`,
                                        key: 'RECRUIT',
                                    },
                                    {
                                        type: 'group', // Must have
                                        label: `${t('mobile-group-2')}`,
                                    },
                                    {
                                        label: `한국어`,
                                        key: 'ko',
                                    },
                                    {
                                        label: `English`,
                                        key: 'en',
                                    }
                                ]}
                            />
                        }

                    </Drawer>
                </div>
            </div>
        </MobileLayer>
    );
}
// interface IDivProps {
//     height: number;
// }

//const MenuDesktop = forwardRef<HTMLDivElement, IDivProps>(({height}, ref) =>{
const MenuDesktop = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const [current, setCurrent] = useState(t('gnb-1'));
    const [scroll, setScroll] = useState(false);
    const headerWrapRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const info = () => {
        Modal.info({
            title: t('modal-info'),
            content: (
                <div>
                    <p>{t('modal-msg-recruit')}</p>
                </div>
            ),
            onOk() {},
        });
    };
    const handleGnbClick = (e:any) => {

        console.log('click ', e);
        setCurrent(e.label);
        if(e.key === "RECRUIT"){
            info();
        }else{
            const IdMatchedPage = document.querySelector(`#${e.key}`);
            //console.log(">>>>"+IdMatchedPage +" / "+e.key);
            IdMatchedPage?.scrollIntoView({ block: 'start', behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        let headerWarpHeight = headerWrapRef.current.clientHeight;
        let heightGap = window.innerHeight - headerWarpHeight;
        setScroll(window.scrollY > heightGap);
        console.log("🛰️heightGap:"+heightGap);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //debugger
    return(
    <DesktopLayer className={scroll ? 'scroll' : ''} ref={headerWrapRef}>
        <Container>
            <div className={'gnbWrapper'} >
                <div className={'left'} >
                    <Link href={'#HOME'}>
                        <LogoAXSymbol width={'2rem'} height={'2rem'} fill={colors.ax_supernova_red} />
                    </Link>
                </div>
                <div className={'center'}>
                    {/*<Menu onClick={handleGnbClick} selectedKeys={[current]} mode="horizontal" items={gnbItems}/>*/}
                    { router.locale == "ko" ?
                    <Menu
                        onClick={handleGnbClick}
                        selectedKeys={[current as string]}
                        mode="horizontal"
                        items={[
                            {
                                label: `${t('gnb-1')}`,
                                key: 'AXISJ',
                            },
                            {
                                label: `${t('gnb-2')}`,
                                key: 'NEWSROOM',
                            },
                            {
                                label: `${t('gnb-3')}`,
                                key: 'TECH',
                            },
                            {
                                label: `${t('gnb-4')}`,
                                key: 'SERVICE',
                            },
                            {
                                label: `${t('gnb-5')}`,
                                key: 'RECRUIT',
                            }
                        ]}
                    />
                        :
                        <Menu
                            onClick={handleGnbClick}
                            selectedKeys={[current as string]}
                            mode="horizontal"
                            items={[
                                {
                                    label: `${t('gnb-1')}`,
                                    key: 'AXISJ',
                                },
                                {
                                    label: `${t('gnb-3')}`,
                                    key: 'TECH',
                                },
                                {
                                    label: `${t('gnb-4')}`,
                                    key: 'SERVICE',
                                },
                                {
                                    label: `${t('gnb-5')}`,
                                    key: 'RECRUIT',
                                }
                            ]}
                        />
                    }
                    {/*{gnbItems.map(( menu, index ) => (*/}
                    {/*    <Item key={menu.lang}>{t(menu.lang)}</Item>*/}
                    {/*))}*/}


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
    top:0;
    left:0;
    -webkit-backdrop-filter: blur(0.2rem);
    backdrop-filter: blur(0.2rem);
    transition: all 0.2s ease-out;
  &.scroll{
    background:rgba(255,255,255, .9);
  }
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
      color:${colors.ax_deep_black};
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
    z-index:999;
    top:0;
    left:0;
    -webkit-backdrop-filter: blur(0.5rem);
    backdrop-filter: blur(0.5rem);
  &.scroll{
    background:rgba(255,255,255, .9);
  }
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
