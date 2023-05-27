import styled from "@emotion/styled";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Container from "./_container";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

import LogoAXSymbol from '../../../public/images/ax-logo.svg';
import colors from "../../theme/colors";
import React from "react";

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})


const History = () =>{
    const router = useRouter();
    const { t } = useTranslation('common');

    return(
        <Layer>
            <Container>
                <h3>{t('history-title-1')}</h3>
                <h3>{t('history-title-2')}</h3>
                <LogoAXSymbol width={'3rem'} height={'3rem'} fill={colors.ax_supernova_red} />

                <div className={'timeline'}>
                    <ul>
                        <li className={"li-5 right"}><span className={'textYear'}>2023</span><span className={'textDone'}>{t('history-text-5')}</span></li>
                        <li className={"li-4 right"}><span className={'textYear'}>2018</span><span className={'textDone'}>{t('history-text-4')}</span></li>
                        <li className={"li-3 right"}><span className={'textYear'}>2015</span><span className={'textDone'}>{t('history-text-3')}</span></li>
                        <li className={"li-2 left"}><span className={'textYear'}>2012.9</span><span className={'textDone'}>{t('history-text-2')}</span></li>
                        <li className={"li-1 left"}><span className={'textYear'}>2012</span><span className={'textDone'}>{t('history-text-1')}</span></li>
                    </ul>
                </div>

                <h2>{t('title-company-info')}</h2>
                <div>{t('company-info-desc')}</div>
                <ul>
                    <li>{t('company-info-history-1')}</li>
                    <li>{t('company-info-history-2')}</li>
                    <li>{t('company-info-history-3')}</li>
                    <li>{t('company-info-history-4')}</li>
                    <li>{t('company-info-history-5')}</li>
                </ul>
            </Container>
        </Layer>
    );
}

export default History;


const Layer = styled.div`
   padding:5rem 0;
    h2{
        text-align:center;
        font-size:3rem;
        font-weight: normal;
    }
    
    .timeline{
        ul{
            display:flex;
            flex-direction:column;
            position:relative;
            height:600px;
            width:100%;
            margin:0; 
            padding:0;
            z-index:-1;
            &:before{
                position:absolute;
                content:'';
                left:calc(50% - 0.125rem);
                top:0;
                width:0.25rem;
                height:100%;
                background: linear-gradient(to bottom, #D0555900, ${colors.ax_supernova_red}, ${colors.ax_space_blue}, #3D558800);
                z-index: 1;                 
            }
            li{
                display:inline-flex;
                border:1px solid #f00;
                &.left{
                
                }
                &.right{
                    right:50%;
                }
                &.li-5{
                    top:10rem;
                }
                &.li-4{
                }
                &.li-3{
                }
                &.li-2{
                }
                &.li-1{
                }                                                
                                
            }
        }
    }
`;