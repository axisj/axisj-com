import styled from "@emotion/styled"
import Layout from "@/pages/layouts/layout";
import Newsroom from "./layouts/_newsroom";
import History from "./layouts/_history";
import Top from "./layouts/_top";
import Customers from "./layouts/_customers";
import Container from "./layouts/_container";
import {Col, Row} from "antd";
import colors from "../theme/colors";
import { useTranslation } from 'next-i18next';
import {useRouter} from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


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
            <Top />
            <Section>
                <Newsroom />
                <History />
                <Layer>
                    <Container>
                        <ul>
                            <li>
                            </li>
                            <li></li>
                        </ul>
                    </Container>
                </Layer>
                <Spacer />
                <Layer className={'bgTech'}>
                    <Container>
                        <div className={"axBox axTechWrapper"}>
                            <h2>{t('title-tech')}</h2>
                            <Row>
                                <Col span={12}>
                                    <dl>
                                        <dt><IconTech1 /></dt>
                                        <dt><span>{t('tech-1-title')}</span></dt>
                                        <dd>
                                            {t('tech-1-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={12}>
                                    <dl>
                                        <dt><IconTech2 /></dt>
                                        <dt><span>{t('tech-2-title')}</span></dt>
                                        <dd>
                                            {t('tech-2-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={12}>
                                    <dl>
                                        <dt><IconTech3 /></dt>
                                        <dt><span>{t('tech-3-title')}</span><span>{t('tech-3-badge')}</span></dt>
                                        <dd>
                                            {t('tech-3-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={12}>
                                    <dl>
                                        <dt><IconTech4 /></dt>
                                        <dt><span>{t('tech-4-title')}</span><span>{t('tech-4-badge')}</span></dt>
                                        <dd>
                                            {t('tech-4-desc')}
                                        </dd>
                                    </dl>
                                </Col>

                            </Row>
                        </div>
                    </Container>
                </Layer>
                <Spacer />
                <Layer className={'bgService'}>
                    <Container>
                        <div className={"axBox axServiceWrapper"}>
                            <h2>{t('title-service')}</h2>
                            <Row>
                                <Col span={6}>
                                    <dl>
                                        <dt><IconService1 /></dt>
                                        <dt><span className={"titKo"}>{t('service-1-title')}</span><span className={"titEn"}>Showroom</span></dt>
                                        <dd>
                                            {t('service-1-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={6}>
                                    <dl>
                                        <dt><IconService2 /></dt>
                                        <dt><span className={'titKo'}>{t('service-2-title')}</span><span className={'titEn'}>Community</span></dt>
                                        <dd>
                                            {t('service-2-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={6}>
                                    <dl>
                                        <dt><IconService3 /></dt>
                                        <dt><span className={'titKo'}>{t('service-3-title')}</span><span className={'titEn'}>Test Center</span></dt>
                                        <dd>
                                            {t('service-3-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={6}>
                                    <dl>
                                        <dt><IconService4 /></dt>
                                        <dt><span className={'titKo'}>{t('service-4-title')}</span><span className={'titEn'}>Docs</span></dt>
                                        <dd>
                                            {t('service-4-desc')}
                                        </dd>
                                    </dl>
                                </Col>

                            </Row>
                        </div>
                    </Container>
                </Layer>
                <Spacer />
                <Layer>
                    <Container>
                        <div className={'axBox axDesignWrapper'}>
                            <h2>{t('title-design')}</h2>
                            <IconDesign />
                            <Row>
                                <Col span={12}>
                                    <dl>
                                        <dt><IconDesign1 /></dt>
                                        <dt><span>{t('design-1-title')}</span><span>Trust</span></dt>
                                        <dd>
                                            {t('design-1-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={12}>
                                    <dl>
                                        <dt><IconDesign2 /></dt>
                                        <dt><span>{t('design-2-title')}</span><span>Connect</span></dt>
                                        <dd>
                                            {t('design-2-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={12}>
                                    <dl>
                                        <dt><IconDesign3 /></dt>
                                        <dt><span>{t('design-3-title')}</span><span>Growth</span></dt>
                                        <dd>
                                            {t('design-3-desc')}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col span={12}>
                                    <dl>
                                        <dt><IconDesign4 /></dt>
                                        <dt><span>{t('design-4-title')}</span><span>Banlance</span></dt>
                                        <dd>
                                            {t('design-4-desc')}
                                        </dd>
                                    </dl>
                                </Col>

                            </Row>
                        </div>
                    </Container>
                </Layer>
                <Customers />
            </Section>
        </Layout>
    );
}
export default Index;


const Layer = styled.div`
    .axBox{
        h2{
            text-align:center;
            font-size:3rem;
            font-weight: normal;
        }
        dl{ 
            color:${colors.ax_text_black};
            dt{
                font-size: 2rem;
            }
            dd{ 
                font-size: 0.875rem;
                line-height: 1.25rem;
            }
        }    
    }
    
    .axServiceWrapper{
        dl{
            dt{
                font-size: 1.5rem;
                .titEn{
                    font-size: 1.125rem;
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
  background:${colors.white}
`;


