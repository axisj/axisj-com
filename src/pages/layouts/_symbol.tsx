import styled from "@emotion/styled";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Container from "./_container";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import colors from "../../theme/colors";
import {media, mediaMax} from "../../theme/media";
import LogoAXSymbol from '../../../public/images/ax-logo.svg';
import React from "react";

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})


const Symbol = () =>{
    const router = useRouter();
    const { t } = useTranslation('common');

    return(
        <Layer>
            <Container>
                <div className={'ciTitleBox'}>
                    <div className={'left'}>
                        <h2>{t('title-ci')}</h2>
                        <p>{t('ci-desc')}</p>
                    </div>
                    <div className={'right'}>
                        <LogoAXSymbol width={'5rem'} height={'5rem'} fill={colors.ax_supernova_red} />
                    </div>
                </div>

                <div className={'colorBox primary'}>
                    <h3>{t('title-color-primary')}</h3>
                    <ul>
                        <li>
                            <div className={'palletBox'}>
                                <span className={'colorPallet'} style={{ backgroundColor: colors.ax_supernova_red}}></span>
                                <span className={'colorName'}>{t('color-primary-1')}</span>
                            </div>
                        </li>
                        <li>
                            <div className={'palletBox'}>
                                <span className={'colorPallet'} style={{ backgroundColor: colors.ax_space_blue}}></span>
                                <span className={'colorName'}>{t('color-primary-2')}</span>
                            </div>
                        </li>
                        <li>
                            <div className={'palletBox'}>
                                <span className={'colorPallet'} style={{ backgroundColor: colors.ax_deep_black}}></span>
                                <span className={'colorName'}>{t('color-primary-3')}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={'colorBox wild'}>
                    <h3>{t('title-color-wild')}</h3>
                    <ul>
                        <li>
                            <div className={'palletBox'}>
                                <span className={'colorPallet'} style={{ backgroundColor: colors.ax_desert_yellow}}></span>
                                <span className={'colorName'}>{t('color-wild-1')}</span>
                            </div>
                        </li>
                        <li>
                            <div className={'palletBox'}>
                                <span className={'colorPallet'} style={{ backgroundColor: colors.ax_leaf_green}}></span>
                                <span className={'colorName'}>{t('color-wild-2')}</span>
                            </div>
                        </li>
                        <li>
                            <div className={'palletBox'}>
                                <span className={'colorPallet'} style={{ backgroundColor: colors.ax_sandy_brown}}></span>
                                <span className={'colorName'}>{t('color-wild-3')}</span>
                            </div>
                        </li>
                        <li>
                            <div className={'palletBox'}>
                                <span className={'colorPallet'} style={{ backgroundColor: colors.ax_skyblue}}></span>
                                <span className={'colorName'}>{t('color-wild-4')}</span>
                            </div>
                        </li>
                    </ul>
                </div>

            </Container>
        </Layer>
    );
}

export default Symbol;


const Layer = styled.div`
   padding:5rem 2rem;
   .ciTitleBox{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .left{
        width:100%;
        flex-wrap: wrap;
        flex-grow:0;
        flex-shrink:0;
        h2{ 
          font-size:1.5rem;
          font-weight: normal;
        }
        p{
          padding: 2rem 0;
          font-size:0.875rem;
          line-height:1.3rem;
          word-break: keep-all;
        }
      }
      .right{
        width:100%;
        display: flex;
        flex-grow:1;
        flex-shrink:1;
        justify-content: center;
        align-items: center;
        
      }
    }
    .colorBox{ //dl...
      margin-top:3rem;
       h3{
         font-size:1.25rem;
         font-weight: normal;
       }
       ul{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;        
        list-style:none;
        margin:2rem 0;
        padding:0;
        li {
            width:100%;
            span{
                vertical-align:middle;
            }
           }
       }
       .colorPallet{
            flex:0 0 auto;
            display:inline-block;
            width:3.75rem;
            height:3.75rem;
            border-radius:100rem;
       }
       .colorName{
         font-size:0.75rem;
         line-height:1rem;
         word-break: keep-all;
       }
       .palletBox{
         padding:0.5rem;
         display: flex;
         justify-content: flex-start;
         align-items: center;
         gap:1rem;
         //flex-wrap:no-wrap

       }
    }
  
    ${media.md}{
        padding:5rem 0;
        .ciTitleBox{
          .left{width:60%;}
          .right{width:40%;}
        }
        .colorBox.primary{
            ul{
                li {
                    width:33.33%;
                }
            }
        }
        .colorBox.wild{
            ul{
                li {
                    width:50%;
                }
            }
        }        
    }
  ${media.lg}{
    .colorBox.primary{
      ul{
        li {
          width:33.33%;
        }
      }
    }
    .colorBox.wild{
      ul{
        li {
          width:25%;
        }
      }
    }
  }  

`;