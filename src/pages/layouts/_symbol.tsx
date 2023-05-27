import styled from "@emotion/styled";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Container from "./_container";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import colors from "../../theme/colors";
import {media, mediaMax} from "../../theme/media";

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
                <h2>{t('title-ci')}</h2>
                <div>{t('ci-desc')}</div>

                <div className={'colorBox primary'}>
                    <h3>{t('title-color-primary')}</h3>
                    <ul>
                        <li>
                            <span className={'colorPallet'} style={{ backgroundColor: colors.ax_supernova_red}}></span>
                            <span className={'colorName'}>{t('color-primary-1')}</span>
                        </li>
                        <li>
                            <span className={'colorPallet'} style={{ backgroundColor: colors.ax_space_blue}}></span>
                            <span className={'colorName'}>{t('color-primary-2')}</span>
                        </li>
                        <li>
                            <span className={'colorPallet'} style={{ backgroundColor: colors.ax_deep_black}}></span>
                            <span className={'colorName'}>{t('color-primary-3')}</span>
                        </li>
                    </ul>
                </div>

                <div className={'colorBox wild'}>
                    <h3>{t('title-color-wild')}</h3>
                    <ul>
                        <li>
                            <span className={'colorPallet'} style={{ backgroundColor: colors.ax_desert_yellow}}></span>
                            <span className={'colorName'}>{t('color-wild-1')}</span>
                        </li>
                        <li>
                            <span className={'colorPallet'} style={{ backgroundColor: colors.ax_leaf_green}}></span>
                            <span className={'colorName'}>{t('color-wild-2')}</span>
                        </li>
                        <li>
                            <span className={'colorPallet'} style={{ backgroundColor: colors.ax_sandy_brown}}></span>
                            <span className={'colorName'}>{t('color-wild-3')}</span>
                        </li>
                        <li>
                            <span className={'colorPallet'} style={{ backgroundColor: colors.ax_skyblue}}></span>
                            <span className={'colorName'}>{t('color-wild-4')}</span>
                        </li>
                    </ul>
                </div>

            </Container>
        </Layer>
    );
}

export default Symbol;


const Layer = styled.div`
   padding:5rem 0;
    h2{
        text-align:center;
        font-size:3rem;
        font-weight: normal;
    }
    .colorBox{ //dl...
       h3{}
       ul{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;        
        list-style:none;
        margin:0;
        padding:0;
        li {
            width:100%;
            span{
                vertical-align:middle;
            }
           }
       }
       .colorPallet{
            display:inline-block;
            width:3.75rem;
            height:3.75rem;
            border-radius:100rem;
       }
       .colorName{
        margin-left:0.5rem;
       }
    }
    ${media.lg}{
        .colorBox.primary{
            ul{
                li {
                    width:33.334%;
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
    ${media.md}{
        .colorBox.primary{
            ul{
                li {
                    width:33.334%;
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

`;