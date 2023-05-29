import styled from "@emotion/styled";
import Container from "./_container";
import {Col, Divider, Row, Select} from "antd";

import IconInstagram from '../../../public/images/icon-instagram.svg';
import IconGithub from '../../../public/images/icon-github.svg';
import Link from "next/link";
import colors from "../../theme/colors";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {mediaMax} from "@/theme/media";


export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },

})

const Footer = () =>{
    const router = useRouter();
    const { t } = useTranslation('common');

    const handleFamilyChange = (value:any) => {
        console.log(`selected ${value}`);
    };

    return(
        <Div>
            <Container>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl:32 }}>
                    <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={12} className={"colLeft"} >
                        <span className={"fcopyright"}>ⓒ AXISJ Inc. All rights reserved.</span>
                    </Col>
                    <Col span={14} sm={24} md={12} lg={12} xl={12} xxl={12} className={"colRight"} >
                        <div className={"foptions"}>
                            <Select
                                defaultValue={t('footer-family')}
                                style={{
                                    width: 200,
                                }}
                                onChange={handleFamilyChange}
                                options={[
                                    { label: `${t('footer-select-1')}`, value:'axisj.com'},
                                    { label: `${t('footer-select-2')}`, value:'axframe.axisj.com'},
                                ]}
                                className={"fopt1"}
                            />
                            <Link href={'https://www.instagram.com/axisj_official/'} target={'_blank'} className={"fopt2"}><IconInstagram width={'1.5rem'} height={'1.5rem'} fill={colors.white} /></Link>
                            <Link href={'https://github.com/axisj'} target={'_blank'} className={"fopt3"}><IconGithub width={'1.5rem'} height={'1.5rem'} fill={colors.white} /></Link>
                        </div>
                    </Col>
                </Row>
                <Divider className={'divider'} />
                <Row>
                    <Col>
                        <span className={"faddr"}>{t('footer-addr')}</span>
                    </Col>
                </Row>

            </Container>
        </Div>
    );
}

export default Footer;


const Div = styled.div`
  font-size:0.875rem;
  padding:4rem 0;
  position: relative;
  z-index: 5;
  overflow-x:hidden;
  
  colLeft{
    align-items: center;
    justify-content: flex-start;
    display: flex;
  }
  .colRight{
    align-items: center;
    justify-content: flex-end;
    display: flex;
  }
  .fcopyright{
    font-size:0.75rem;
    color:${colors.white};
  }
    .foptions{
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      .fopt1{ //antd selector...
        .ant-select-selector{
          color:${colors.white};
          background:transparent;
          border:0.063rem solid ${colors.white};
        }
        .ant-select-arrow{
          color:${colors.white};
        }
      }
      .fopt2{}
      .fopt3{}
    }
  .faddr{
    font-size:0.75rem;
    color:${colors.white}
  }
  .divider{
    border-top: 0.063rem solid ${colors.white};
  }
  ${mediaMax.md}{
    padding:6rem 2rem;
    .colLeft{
      padding:1rem 0;
    }
    .colRight{
      justify-content: flex-start;
      
    }
  }
`;