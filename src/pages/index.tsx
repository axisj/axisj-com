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
            <Newsroom />
            <History />
            <Layer>
                <Container>
                    <ul>
                        <li>
                            {t('h1')}<br />
                            {t('description')}<br />
                            {t('currentUrl')}<br />
                            {t('test')}<br />
                        </li>
                        <li>locale: {router.locale}</li>
                    </ul>
                    <div className={"axBox axTechWrapper"}>
                        <h2>{t('titleTech')}</h2>
                        <Row>
                            <Col span={12}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span>액스프레임</span></dt>
                                    <dd>
                                        웹앱을 빠르고 쉽게 구축할 수 있는 리액트를 기반으로 하는 프레임워크 입니다.  액스프레임의 핵심 컴포넌트는 ‘데이터그리드’, ‘페이지탭’, ‘트리매니저’,’패널컨트롤’ 등이 있습니다. 차트는 니보(Nivo), 위지웍에디터는 서머노트(Summernote), 기본 UI세트로 앤트디자인(Ant Design)을 기반으로 기술합니다. 오픈소스 Opensource로 여러분의 많은 참여 바랍니다.
                                    </dd>
                                </dl>
                            </Col>
                            <Col span={12}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span>액스피어</span></dt>
                                    <dd>
                                        웹앱 제품이나 서비스를 개발하면서 빈번히 발생하는 요청 Request의 단계를 단순화하고 협업을 간소화하여 쉽고 빠르게 API를 관리, 운영할 수 있습니다. 다양한 API 사양을 소화하고 테스트 및 배포, 저장, 관리 할 수 있습니다. 이제 요청된 물고기는 부두 위에 펠리컨에게 맡기세요. 빠르고 쉬운 API 생성, 테스트, 배포, 저장, 관리 플랫폼. 액스피어
                                    </dd>
                                </dl>
                            </Col>
                            <Col span={12}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span>액스툴</span><span>2023년 중순 출시예정</span></dt>
                                    <dd>
                                        액스툴은 액스프레임을 보다 쉽게 구축할 수 있는 서비스입니다. 개발자가 없어도 생각했던 사업모델을 기획하고 구축하여 실행에 옮길 수 있습니다. 빠르고 신뢰할 수 있는 액스프레임을 마우스 몇 번만으로 만들 수 있습니다. 비즈니스 모델을 선택하고 미리 준비된 엣지포인트만 넣기만 하면 서비스 완성. 오늘 저녁은 치킨입니다.
                                    </dd>
                                </dl>
                            </Col>
                            <Col span={12}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span>액스워크</span><span>2024년 중순 출시예정</span></dt>
                                    <dd>
                                        액스워크는 유기적으로 비즈니스 플랫폼과 연동할 수 있습니다. 이미 비즈니스를 위해 사용하고 있는 솔루션이 있나요? 괜찮습니다. 액스워크는 유연하게 당신의 서비스를 연결할 수 있습니다.ㅋ

                                        지금 사용하고 있는 서비스나 기능이 불편하신가요? 액스워크에서 필요한 업무를 위한 엣지포인트를 만들어 보세요. 다양한 비즈니스모델에 즉각적으로 대응합니다.
                                        똑똑한 업무를 위한 선택, 스마트한 회사경영이 가능합니다.


                                    </dd>
                                </dl>
                            </Col>

                        </Row>
                    </div>
                    <Spacer />
                    <div className={"axBox axServiceWrapper"}>
                        <h2>서비스</h2>
                        <Row>
                            <Col span={6}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span className={"titKo"}>쇼룸</span><span className={"titEn"}>Showroom</span></dt>
                                    <dd>
                                        액시스제이의 제품의 중요 기능과 특징을 소개하는 서비스입니다. 자세한 제품 데모사이트에 다루어지나 쇼룸은 액시스제이의 다양한 제품을 특징적인 기능을 카탈로그처럼 보실 수 있습니다.
                                    </dd>
                                </dl>
                            </Col>
                            <Col span={6}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span className={'titKo'}>커뮤니티</span><span className={'titEn'}>Community</span></dt>
                                    <dd>
                                        액시스제이의 다양한 기능이나 질문과 답변, 사소한 IT업계의 이야기를 다룹니다. 주로 게시판 형태이며, 회원제를 통해 소통을 깊이를 다르게 하며 MVP 회원 제도 등을 통해 문서와 깃헙 등 다양한 플랫폼과 연계하여 CS업무를 분담하도록 유도합니다.

                                    </dd>
                                </dl>
                            </Col>
                            <Col span={6}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span className={'titKo'}>시험센터</span><span className={'titEn'}>Test Center</span></dt>
                                    <dd>
                                        테스트 센터는 크게 2가지로 하나는 코드를 웹에서 직접 실행해 볼 수 있는 코드 테스트와 문제은행 CBT 형태의 자격검정 서비스 입니다. 이후 채용 프로세스에 적용될 서비스이며, 이를 통해 액시스제이의 활용과 이해도를 측정하고 자격증 서비스로 확대 할 예정입니다.


                                    </dd>
                                </dl>
                            </Col>
                            <Col span={6}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span className={'titKo'}>문서</span><span className={'titEn'}>Docs</span></dt>
                                    <dd>
                                        액시스제이의 다양한 제품의 설명과 자세한 사용법을 알려주는 서비스입니다. 코드 설명과 간단한 예제를 통해 쉽고 빠르게 익숙해져보세요.
                                    </dd>
                                </dl>
                            </Col>

                        </Row>
                    </div>
                    <Spacer />
                    <div className={'axBox axDesignWrapper'}>
                        <h2>{t('titleDesign')}</h2>
                        <Row>
                            <Col span={12}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span>신뢰</span><span>Trust</span></dt>
                                    <dd>
                                        우리의 디자인은 믿고 의지할 수 있어야 합니다. 신뢰는 욕심을 내려 놓을 때 얻을 수
                                        있는 마음입니다.
                                        일관된 목적을 가지고 헤매지 않고 도달할 수 있도록 깔끔하고
                                        명확하게 디자인합니다.


                                        뜨거운 컵을 들고 있다면 '뜨겁다' 하지 말고 그냥 놓으면 되는데, '어떻게 놓아야
                                        하는데요'라고 묻는 것과
                                        같습니다. 놓는 기술이 부족한 게 아니다.  뜨겁긴 한데 갖고
                                        싶으니까 못 놓을 뿐입니다.


                                        핫하고 트렌디한 디자인만 쫓다보면 핵심되는 초점을 잃어 일관성을 놓치게 되고,
                                        이는 곧 신뢰를 잃게
                                        될 것입니다. 믿을 수 없다면 존재하지 않은 것과 다를 바가 없습니다.
                                    </dd>
                                </dl>
                            </Col>
                            <Col span={12}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span>연결</span><span>Connect</span></dt>
                                    <dd>
                                        기술과 사람을 연결합니다. 그리고 이 연결은 유기적이며 좋은 경험을 줄 수 있도록
                                        디자인되어야 합니다.
                                        연결은 관계를 형성하며 이들 사이에 원활한 소통이 될 수 있도록
                                        능동적이며 긍정적으로 디자인합니다.


                                        하나의 점(Dot)이 움직이면 에너지를 만들어 내고 또한 자취를 남깁니다. 점의 자취는
                                        거시적인 관점에서
                                        연결되어 선이 됩니다. 더 나아가 면, 그리고 입체로 복잡한 형태를
                                        발전하지요. 연결된 관계에선 암묵적인
                                        질서의 규칙이 있습니다. 그 규칙은 바로 ‘배려’입니다.
                                        한 점이 다음 점으로 나아갈 수 있는 시간과 공간을
                                        내어 주는 일. 기다리고 들어주는 마음입니다.


                                        예를 들면 사용자가 기능을 직관적으로 파악할 수 있는 모양이나 색상처럼 사소해 보이는
                                        부분도 해당하며,
                                        환경적, 경제적, 사회적으로 연결된 관계를 고려하는 부분도 배려라고
                                        할 수 있습니다. 연결은 지속 가능한
                                        디자인을 만들 수 있습니다.
                                    </dd>
                                </dl>
                            </Col>
                            <Col span={12}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span>성장</span><span>Growth</span></dt>
                                    <dd>
                                        디자인은 인간의 정신과 삶의 표현이자 시대와 문화를 이해하고 해석하는 힘을 가지고
                                        있습니다.
                                        결국 인간의 중심에서 디자인을 시작합니다. 하지만 인간도 대자연의 일부임을
                                        알고 겸손과 변화를 받아드려야 합니다.
                                        대자연의 신비로운 현상을 인간의 관점에서 새롭게
                                        해석하고 구체화하는 일을 게을리해서는 안되겠지요.


                                        목표나 결과에 지나치게 집착한 나머지 선결되어야 하는 기초적이고 우선적인 조건들을
                                        무시하거나 간과해서는
                                        알 될 것입니다. 오만과 편견을 버리고 겸손한 자세로 세상을
                                        바라볼 때 성장할 수 있습니다. 이는 무한한 가능성 시작입니다.
                                    </dd>
                                </dl>
                            </Col>
                            <Col span={12}>
                                <dl>
                                    <dt>아이콘</dt>
                                    <dt><span>균형</span><span>Banlance</span></dt>
                                    <dd>
                                        비례, 구조, 스타일링, 기술의 요소가 조화를 이루는 것. 심미적으로 자연스러운 디자인을
                                        추구합니다.
                                        흑과 백, 음과 양, 선과 악과 같이 이분법적인 사고는 빠르게 현상을 정의하고
                                        실행에 옮길 수 있습니다.
                                        하지만 어느 한쪽으로 치우쳐 있다면 균형이 깨지고 말 것입니다.


                                        세상의 조화는 유연함에 있습니다. 사전적 의미로 부드럽고 약하는 말은 생각이 말랑말랑
                                        하다는 뜻이기도 합니다.
                                        사고의 범위를 확장하고, 한 걸음 물러나 먼거리에서 바라 보며
                                        균형을 맞추는 일. 넣을 것과 뺄 것을 구분하여
                                        불필요한 관심을 일으키지 않아야 합니다.
                                        이는 사용자에게 전달할 가치를 타협하거나 포기하지 않으면서도
                                        더 나은 경험을 전달
                                        할 것입니다.


                                    </dd>
                                </dl>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </Layer>
            <Customers />
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
    
`;

const Spacer = styled.div`
    height: 10rem;
`;

