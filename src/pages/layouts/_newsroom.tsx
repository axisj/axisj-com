import styled from "@emotion/styled";
import Slider from "react-slick";
import Container from "./_container";
import NewsCard from "@/pages/components/NewsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IconInstagram from '../../../public/images/icon-instagram.svg';
import IconGithub from '../../../public/images/icon-github.svg';

import colors from "@/theme/colors";
import {breakpoint, media} from "@/theme/media";

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

const PrevArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
            <IconInstagram width={'1.25rem'} height={'1.25rem'} fill={colors.ax_gray_1}  />
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
         <IconInstagram width={'1.25rem'} height={'1.25rem'} fill={colors.ax_gray_1}  />
        </div>
    );
}



const Newsroom = () =>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: parseFloat(breakpoint.lg),
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: parseFloat(breakpoint.md),
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     nextArrow: <IconInstagram width={'1.5rem'} height={'1.5rem'} fill={colors.ax_gray_1}  />,
    //     prevArrow: <IconGithub width={'1.5rem'} height={'1.5rem'} fill={colors.ax_gray_1}  />,
    //     responsive:[
    //         {
    //             breakpoint: breakpoint.lg,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: breakpoint.md,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: breakpoint.xs,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };

    return(
        <Layer>
            <Container>
            <Slider {...settings}>
                {newsData.map(( news, index ) => (
                    <NewsCard key={index} image={news.image} title={news.title} desc={news.desc} />
                ))}
            </Slider>
            </Container>
        </Layer>
    );
}

export default Newsroom;



const Layer = styled.div`
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