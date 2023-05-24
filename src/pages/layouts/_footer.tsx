import styled from "@emotion/styled";
import Container from "./_container";
import {Col, Divider, Row, Select} from "antd";

import IconInstagram from '../../../public/images/icon-instagram.svg';
import IconGithub from '../../../public/images/icon-github.svg';
import Link from "next/link";
import colors from "../../theme/colors";

const familyData = [
    { label: 'AXISJ', value:'axisj.com'},
];


const Footer = () =>{

    const handleFamilyChange = (value:any) => {
        console.log(`selected ${value}`);
    };

    return(
        <Div>
            <Container>
                <Row>
                    <Col span={12} style={{ alignItems: 'center', justifyContent: 'flex-start', display:'flex' }}>
                        <span className={"fcopyright"}>ⓒ AXISJ Inc. All rights reserved.</span>
                    </Col>
                    <Col span={12} style={{ alignItems: 'center', justifyContent: 'flex-end', display:'flex' }}>
                        <div className={"foptions"}>
                            <Select
                                defaultValue="Family Site"
                                style={{
                                    width: 200,
                                }}
                                onChange={handleFamilyChange}
                                options={familyData}
                                className={"fopt1"}
                            />
                            <Link href={'#'} className={"fopt2"}><IconInstagram width={'1.5rem'} height={'1.5rem'} fill={colors.ax_gray_1} /></Link>
                            <Link href={'#'} className={"fopt3"}><IconGithub width={'1.5rem'} height={'1.5rem'} fill={colors.ax_gray_1} /></Link>
                        </div>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col>
                        <span className={"faddr"}>서울시 영등포구 양평로14길 13, 3F</span>
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
  .fcopyright{
    font-size:0.75rem;
  }
    .foptions{
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      .fopt1{ //antd selector...
        .ant-select-selector{
          background:transparent;
          border:none;
        } 
      }
      .fopt2{}
      .fopt3{}
    }
  .faddr{
    font-size:0.75rem;
    color:${colors.ax_gray_1}
  }
`;