import styled from "@emotion/styled"
import Layout from "@/pages/layouts/layout";
import Newsroom from "./layouts/_newsroom";
import History from "./layouts/_history";
import Top from "./layouts/_top";
import Customers from "./layouts/_customers";
import Container from "./layouts/_container";
import {Col, Row} from "antd";
import colors from "../theme/colors";
import { useTranslation, Trans } from 'next-i18next';
import {useRouter} from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Symbol from "./layouts/_symbol";

import IconTech1 from '../../public/images/ax-tech-1.svg';
import IconTech2 from '../../public/images/ax-tech-2.svg';
import IconTech3 from '../../public/images/ax-tech-3.svg';
import IconTech4 from '../../public/images/ax-tech-4.svg';

import IconService1 from '../../public/images/ax-service-1.svg';
import IconService2 from '../../public/images/ax-service-2.svg';
import IconService3 from '../../public/images/ax-service-3.svg';
import IconService4 from '../../public/images/ax-service-4.svg';

import IconDesign from '../../public/images/ax-design.svg';
import IconDesign1 from '../../public/images/ax-design-1.svg';
import IconDesign2 from '../../public/images/ax-design-2.svg';
import IconDesign3 from '../../public/images/ax-design-3.svg';
import IconDesign4 from '../../public/images/ax-design-4.svg';
import {mediaMax} from "@/theme/media";



export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})

const Index = () => {

    const router = useRouter();
    const { t } = useTranslation('common');

    return(
        <Layout>
            <a id={'HOME'} className={'anchorPoint home'} />
            <Top />
            <Section>
                <a id={'NEWSROOM'} className={'anchorPoint'} />
                { router.locale == "ko" ? <Newsroom /> : <></> }
                <a id={'AXISJ'} className={'anchorPoint'} />
                <History />
                <Symbol />
                <a id={'TECH'} className={'anchorPoint'} />
                <Layer className={'bgTech'}>
                    <Container>
                        <div className={"axBox axTechWrapper"}>
                            <h2>{t('title-tech')}</h2>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl:32 }}>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={6}>
                                    <dl>
                                        <dt>
                                            <IconTech1 />
                                            <span>{t('tech-1-title')}</span>
                                        </dt>
                                        <dd>
                                            {t('tech-1-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={6}>
                                    <dl>
                                        <dt>
                                            <IconTech2 />
                                            <span>{t('tech-2-title')}</span>
                                        </dt>
                                        <dd>
                                            {t('tech-2-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={6}>
                                    <dl>
                                        <dt>
                                            <IconTech3 />
                                            <span>{t('tech-3-title')}</span><span className={'badge'}>{t('tech-3-badge')}</span>
                                        </dt>
                                        <dd>
                                            {t('tech-3-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={6}>
                                    <dl>
                                        <dt>
                                            <IconTech4 />
                                            <span>{t('tech-4-title')}</span><span className={'badge'}>{t('tech-4-badge')}</span>
                                        </dt>
                                        <dd>
                                            <Trans i18nKey="tech-4-desc" />
                                        </dd>
                                    </dl>
                                </Col>

                            </Row>
                        </div>
                    </Container>
                </Layer>
                <a id={'SERVICE'} className={'anchorPoint'} />
                <Layer className={'bgService'}>
                    <Container>
                        <div className={"axBox axServiceWrapper"}>
                            <h2>{t('title-service')}</h2>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl:32 }}>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={6}>
                                    <dl>
                                        <dt className={'titIcon'}><IconService1 /></dt>
                                        <dt>
                                            <span className={"titKo"}>{t('service-1-title')}</span>
                                            {router.locale == "ko" ? <span className={'titEn'}>Showroom</span> : ''}
                                        </dt>
                                        <dd>
                                            {t('service-1-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={6}>
                                    <dl>
                                        <dt className={'titIcon'}><IconService2 /></dt>
                                        <dt>
                                            <span className={'titKo'}>{t('service-2-title')}</span>
                                            {router.locale == "ko" ? <span className={'titEn'}>Community</span> : ''}
                                        </dt>
                                        <dd>
                                            {t('service-2-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={6}>
                                    <dl>
                                        <dt className={'titIcon'}><IconService3 /></dt>
                                        <dt>
                                            <span className={'titKo'}>{t('service-3-title')}</span>
                                            {router.locale == "ko" ? <span className={'titEn'}>Test Center</span> : ''}
                                        </dt>
                                        <dd>
                                            {t('service-3-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={6}>
                                    <dl>
                                        <dt className={'titIcon'}><IconService4 /></dt>
                                        <dt>
                                            <span className={'titKo'}>{t('service-4-title')}</span>
                                            {router.locale == "ko" ? <span className={'titEn'}>Docs</span> : ''}
                                        </dt>
                                        <dd>
                                            {t('service-4-desc')}
                                        </dd>
                                    </dl>
                                </Col>

                            </Row>
                        </div>
                    </Container>
                </Layer>
                <a id={'DESIGN'} className={'anchorPoint'} />
                <Layer>
                    <Container>
                        <div className={'axBox axDesignWrapper'}>
                            <h2>{t('title-design')}</h2>
                            <div className={'titleDesignIcon'}><IconDesign /></div>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl:32 }}>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                                    <dl>
                                        <dt className={'titIcon'}><IconDesign1 /></dt>
                                        <dt>
                                            <span>{t('design-1-title')}</span>
                                            {router.locale == "ko" ? <span className={'titEn'}>Trust</span> : ''}
                                        </dt>
                                        <dd>
                                            <Trans i18nKey="design-1-desc" />
                                            {/*{t('design-1-desc').split('\n')}*/}
                                            {/*{t('design-1-desc')}*/}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                                    <dl>
                                        <dt className={'titIcon'}><IconDesign2 /></dt>
                                        <dt>
                                            <span>{t('design-2-title')}</span>
                                            {router.locale == "ko" ? <span className={'titEn'}>Connect</span> : ''}
                                        </dt>
                                        <dd>
                                            <Trans i18nKey="design-2-desc" />
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                                    <dl>
                                        <dt className={'titIcon'}><IconDesign3 /></dt>
                                        <dt>
                                            <span>{t('design-3-title')}</span>
                                            {router.locale == "ko" ? <span className={'titEn'}>Growth</span> : ''}
                                        </dt>
                                        <dd>
                                            <Trans i18nKey="design-3-desc" />
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                                    <dl>
                                        <dt className={'titIcon'}><IconDesign4 /></dt>
                                        <dt>
                                            <span>{t('design-4-title')}</span>
                                            {router.locale == "ko" ? <span className={'titEn'}>Balance</span> : ''}
                                        </dt>
                                        <dd>
                                            <Trans i18nKey="design-4-desc" />
                                        </dd>
                                    </dl>
                                </Col>

                            </Row>
                        </div>
                    </Container>
                </Layer>
                <Layer className={'customersLayer'}>
                    <Customers />
                </Layer>
            </Section>
        </Layout>
    );
}
export default Index;


const Layer = styled.div`

    &.customersLayer{
        padding:4rem 0;
    }
    .axBox{
        padding:5rem 0;
        h2{
            text-align:center;
            font-size:2.5rem;
            font-weight: normal;
        }
        dl{ 
            margin-top:4rem;
            color:${colors.ax_text_black};
            dt{
                font-size: 1.5rem;
            }
            dd{ 
                font-size: 0.875rem;
                line-height: 1.25rem;
                word-break: keep-all;
                padding:1rem 0;
                margin:0;
                white-space: pre-line;
            }
        }
    }
    ${mediaMax.md}{
      .axBox {
        padding: 5rem 2rem;
        h2{
          font-size:2rem;
        }
      }
    }
    .badge{
        display:inline-block;
        font-size:0.75rem;
        color:${colors.ax_sandy_brown};
        padding:0.25rem 0.5rem;
        border-radius: 5rem;
        border:0.063rem solid ${colors.ax_sandy_brown}
    }
    .axTechWrapper{
      dl{
        dt{
            display:flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            gap:0.5rem;
            color:${colors.white}
        }
        dd{
            color:${colors.white}
        }
      }    
    }
    .axServiceWrapper{
        dl{
            dt{
                display:flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                gap:0.5rem;
                flex-wrap: wrap;
                &.titIcon{
                    padding-bottom:1rem;
                }
                .titEn{
                    font-size: 1rem;
                }
            }
            dd{}
        }
    }
    .axDesignWrapper{
        .titleDesignIcon{
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top:2rem;
        }
        dl{
            dt{
                display:flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                gap:0.5rem;
                flex-wrap: wrap;
                &.titIcon{
                    padding-bottom:1rem;
                }
                .titEn{
                    font-size: 1rem;
                }
            }
            dd{}
        }
    }
    
    &.bgTech{
      background-color:${colors.black};
      color:${colors.white};
    }
    &.bgService{
      background-image:url('./images/bg-service.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
`;

const Spacer = styled.div`
    height: 10rem;
`;
const Section = styled.section`
  margin-top:100vh;
  position: relative;
  z-index: 3;
  overflow-x:hidden;
  background:${colors.white}
`;


