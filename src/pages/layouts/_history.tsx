import styled from "@emotion/styled";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Container from "./_container";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

import LogoAXSymbol from '../../../public/images/ax-logo.svg';
import colors from "../../theme/colors";
import React from "react";
import {media, mediaMax} from "@/theme/media";

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
                <div className={'historySymbol'}>
                    <LogoAXSymbol width={'3rem'} height={'3rem'} fill={colors.ax_supernova_red} />
                </div>

                <div className={'timeline'}>
                    <ul>
                        <li className={"li-5 right"}>
                            <div className={'historyBox'}>
                                <span className={'ball red'}></span>
                                <span className={'textYear'}>2023</span>
                                <span className={'textDone'}>{t('history-text-5')}</span>
                            </div>
                        </li>
                        <li className={"li-4 right"}>
                            <div className={'historyBox'}>
                                <span className={'ball red'}></span>
                                <span className={'textYear'}>2018</span>
                                <span className={'textDone'}>{t('history-text-4')}</span>
                            </div>
                        </li>
                        <li className={"li-3 right"}>
                            <div className={'historyBox'}>
                                <span className={'ball red'}></span>
                                <span className={'textYear'}>2015</span>
                                <span className={'textDone'}>{t('history-text-3')}</span>
                            </div>
                        </li>
                        <li className={"li-2 left"}>
                            <div className={'historyBox'}>
                                <span className={'ball blue'}></span>
                                <span className={'textYear'}>2012.9</span>
                                <span className={'textDone'}>{t('history-text-2')}</span>
                            </div>
                        </li>
                        <li className={"li-1 left"}>
                            <div className={'historyBox'}>
                                <span className={'ball blue'}></span>
                                <span className={'textYear'}>2012</span>
                                <span className={'textDone'}>{t('history-text-1')}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <Spacer />
                <h2>{t('title-company-info')}</h2>
                <p>{t('company-info-desc')}</p>
                <ul className={'historyDetails'}>
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
  padding: 5rem 0;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: normal;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: normal;
    text-align: center;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3rem;
    margin: 1.75rem 2rem;
  }

  .historySymbol {
    text-align: center;
    padding: 1.5rem 0;
  }

  .historyDetails { //ul...
    padding: 0 0 0 1rem;
    list-style: none;
    border-left: 0.25rem solid ${colors.ax_text_black};
    margin: 1.75rem 2rem;
    font-size: 0.875rem;
    line-height: 1.2rem;

    li {
      padding-bottom: 0.5rem;

      &:last-child {
        padding-bottom: 0;
      }
    }
  }

  .timeline {
    .historyBox {
      font-size: 0.875rem;
      line-height: 1rem;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
    }

    .ball {
      width: 1.5rem;
      height: 1.5rem;
      border: 0.25rem solid ${colors.ax_text_black};
      border-radius: 1.5rem;
      box-sizing: border-box;
      background: ${colors.white};
      position: absolute;
      z-index: 4;

      &.blue {
        border-color: ${colors.ax_space_blue};
      }

      &.red {
        border-color: ${colors.ax_supernova_red};
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      //height:600px;
      width: 100%;
      margin: 0;
      z-index: -1;
      padding: 3rem 0;

      &:before {
        position: absolute;
        content: '';
        left: calc(50% - 0.125rem);
        top: 0;
        width: 0.25rem;
        height: 100%;
        background: linear-gradient(to bottom, #D0555900, ${colors.ax_supernova_red}, ${colors.ax_space_blue}, #3D558800);
        z-index: 1;
      }

      li {
        display: inline-flex;
        padding-top: 2rem;

        &.left {
          padding-right: 50%;
          justify-content: flex-end;

          .historyBox {
            text-align: right;
            flex-direction: row-reverse;
            padding-right: 1.5rem;

            .ball {
              right: -0.75rem;
            }
          }
        }

        &.right {
          padding-left: 50%;

          .historyBox {
            padding-left: 1.5rem;

            .ball {
              left: -0.75rem;
            }
          }
        }

        &.li-5 {
          margin-top: 3rem;
        }

        &.li-4 {
          margin-top: 4rem;
        }

        &.li-3 {

        }

        &.li-2 {
        }

        &.li-1 {
          margin-bottom: 3rem;
        }

      }
    }
  }

  ${mediaMax.md} {
    padding-right: 2rem;
    padding-left: 2rem;

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.4rem;
      margin: 3rem 2rem;
    }

    .timeline {
      width:18rem;
      margin:0 auto;
      ul {
        &:before {
          left: -0.11rem;
        }
        li {
          padding-left: 0 !important;
          padding-right: 0 !important;
          justify-content: flex-start !important;
            .historyBox {
              text-align: left !important;
              flex-direction: row !important;
              padding-left: 1.5rem !important;
              .ball {
                left: -0.75rem !important;
              }
            }
          }
        }
      }
    }
    .historyBox {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
    .historyDetails {
      margin: 3rem 2rem;
      font-size: 0.875rem;
      line-height: 1.2rem;
    }
  }
`;

const Spacer = styled.div`
    height: 5rem;
`;