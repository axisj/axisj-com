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

    const handleFamilyChange = (value) => {
        console.log(`selected ${value}`);
    };

    return(
        <Div>
            <Container>
                <Row>
                    <Col span={12}>
                        ⓒ AXISJ Inc. All rights reserved.
                    </Col>
                    <Col span={12}>
                        <Select
                            defaultValue="Family Site"
                            style={{
                                width: 200,
                            }}
                            onChange={handleFamilyChange}
                            options={familyData}
                        />
                        <Link href={'#'}><IconInstagram width={'1.5rem'} height={'1.5rem'} fill={colors.ax_gray_1} /></Link>
                        <Link href={'#'}><IconGithub width={'1.5rem'} height={'1.5rem'} fill={colors.ax_gray_1} /></Link>

                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col>서울시 영등포구 양평로14길 13, 3F</Col>
                </Row>

            </Container>
        </Div>
    );
}

export default Footer;


const Div = styled.div`
   
`;