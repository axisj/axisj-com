import styled from "@emotion/styled";
import Slider from "react-slick";
import Container from "./_container";
import NewsCard from "@/pages/components/NewsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Modal } from 'antd';

import IconPrev from '../../../public/images/ax-icon-prev.svg';
import IconNext from '../../../public/images/ax-icon-next.svg';

import colors from "@/theme/colors";
import {breakpoint, media} from "@/theme/media";
import {useState} from "react";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const newsData = [
    {
        image: "./images/news-1.jpg",
        title: "공개SW 대회 금상 수상",
        desc: "제10회 공개소프트웨어 개발자대회 ‘액스부트’ 금상 수상"
    },
    {
        image: "./images/news-2.jpg",
        title: "공개SW 해커톤 AX5 최우수상 수상",
        desc: "2016 KOSS 공개SW 해카톤, ‘AX5’이 최우수상을 수상하였습니다."
    },
    {
        image: "./images/news-3.jpg",
        title: "슈퍼 개발자K3 우승",
        desc: "안전행정부 주최 2014 전자정부프레임워크 기능공모전에서 우승하였습니다."
    },
    {
        image: "./images/news-4.jpg",
        title: "다음 디브온 2013 행사 참여",
        desc: "다음(Daum)에서 주최한 개발자 행사에 선정되어 부스에서 행사를 하였습나다."
    }
];

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})

const PrevArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
            <IconPrev width={'1.25rem'} height={'1.25rem'} fill={colors.ax_gray_1}  />
        </div>
    );
}
const NextArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
         <IconNext width={'1.25rem'} height={'1.25rem'} fill={colors.ax_gray_1}  />
        </div>
    );
}



const Newsroom = () =>{

    const router = useRouter();
    const { t } = useTranslation('common');

    const [open, setOpen] = useState(false);
    // const [news, setNews] = useState<any | null>(null);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [titleText, setModalTitleText] = useState('Title');
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: parseFloat(breakpoint.xl),
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: parseFloat(breakpoint.lg),
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: parseFloat(breakpoint.md),
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: parseFloat(breakpoint.sm),
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: parseFloat(breakpoint.xs),
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const showModal = (news:any) => {
        setOpen(true);
        console.log(news);
        setModalTitleText(news.title);
        setModalText(news.desc);
    };


    const handleOk = () => {
        //console.log(">>>"+modalText);
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 100);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return(
        <Layer>
            <Container>
            <h2>{t('title-newsroom')}</h2>
            <Slider {...settings}>
                {newsData.map(( news, index ) => (
                    <NewsCard key={index} image={news.image} title={news.title} desc={news.desc} onClick={() => {showModal(news)}} />
                ))}
            </Slider>
            </Container>
            <Modal
                title={titleText}
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </Layer>
    );
}

export default Newsroom;



const Layer = styled.div`
   padding:5rem 0;
    h2{
        text-align:center;
        font-size:2.5rem;
        font-weight: normal;
        margin-bottom:1rem;
    }
  .slick-prev{
    &:before{
      display: none;
    }
  }
  .slick-next{
    &:before{
      display: none;
    }
  }
`;