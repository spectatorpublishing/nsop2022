import React, { useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../device';

const BackButton = styled.button`
    cursor: pointer;
    width: fit-content;
    padding: 1rem 2rem;
    background: transparent;
    border: 3px solid white;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    margin: 2rem;

    :hover {
        background: white;
        color: #251282;
    }
`;

const Wrapper = styled.div`
    background: #251282;
`;

const Text = styled.div`
    color: white;
    text-align: center;
    padding-bottom: 5rem;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: center;

    @media ${device.tablet} {
        justify-content: space-evenly;
    }
`;

const SubDiv = styled.div`
    width: 75vw;

    @media ${device.tablet} {
        width: fit-content;
    }
`;

const CreditsPage = () => {
    useEffect(() => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'auto'
        });
    });

    return (
    <>
        <Wrapper>
            <a href="/">
                <BackButton>
                    BACK
                </BackButton>
            </a>
            <Text>
                <h1>CREDITS</h1>

                <Row>
                    <SubDiv>
                        <h2>Corporate Board</h2>
                        <p>Sarah Braka, Editor in Chief</p>
                        <p>Elizabeth Karpen, Managing Editor</p>
                        <p>Tamarah Wallace, Publisher</p>
                    </SubDiv>

                    <SubDiv>
                        <h2>Design and Development</h2>
                        <p>Erin McNulty, Head of Engineering</p>
                        <p>Mirah Shi, Product Manager</p>
                    </SubDiv>

                    <SubDiv>
                        <h2>Lead Illustration By</h2>
                        <p>Liza Evseeva, Deputy Illustrations Editor</p>
                    </SubDiv>
                </Row>
                <h1>Content</h1>
                <Row>
                    <SubDiv>
                        <div>
                            <h3>News</h3>
                            <p>Dia Gill, News Editor</p>
                            <p>Sofia Kwon, News Editor</p>
                            <p>Abby Melbourne, Deputy News Editor</p>
                            <p>Talia Abrahamson</p>
                            <p>Faith Onyechere</p>
                            <p>Lucy Brenner</p>
                            <p>Katherine Nessel</p>
                            <p>Maya Mitrasinovic</p>
                            <p>Faith Andrews</p>
                            <p>Stephanie Lai</p>
                            <p>Octavio Galaviz</p>
                            <p>Kathy Fang</p>
                        </div>
                        <div>
                            <h3>Arts and Entertainment</h3>
                            <p>Noah Sheidlower, A&E Editor</p>
                            <p>Katie Levine, Deputy A&E Editor</p>
                            <p>Bella Druckman, Deputy A&E Editor</p>
                            <p>Olivia Doyle, Deputy A&E Editor</p>
                            <p>Vincent Hou</p>
                            <p>Esterah Brown</p>
                        </div>
                        <div>
                            <h3>Illustrations</h3>
                            <p>Brenda Huang, Illustrations Editor</p>
                            <p>Ray Banke, Deputy Illustrations Editor</p>
                            <p>Carlos Ochoa, Deputy Illustrations Editor</p>
                            <p>Ashley Jiao, Deputy Illustrations Editor</p>
                            <p>Noelle Hunter</p>
                            <p>Julian Michaud</p>
                            <p>Sadia Sharif</p>
                            <p>Nicole Yang</p>
                        </div>
                        <div>
                            <h3>Photo</h3>
                            <p>Beatrice Shlansky, Photo Editor</p>
                            <p>Millie Felder, Deputy Photo Editor</p>
                            <p>Kate Della Pietra, Deputy Photo Editor</p>
                            <p>Elisabeth McLaughlin, Deputy Photo Editor</p>
                            <p>Samantha Camacho</p>
                            <p>Rommel Nunez</p>
                        </div>
                    </SubDiv>
                    <SubDiv>
                        <div>
                            <h3>Opinion</h3>
                            <p>Ryan Oden, Editorial Page Editor</p>
                            <p>Gurtej Gill, Deputy Editorial Page Editor</p>
                            <p>Senem Yurdakul, Deputy Editorial Page Editor</p>
                            <p>Lily Nathanson, Deputy Editorial Page Editor</p>
                            <p>Karlton Gaskin, Deputy Editorial Page Editor</p>
                            <p>Hsinyen Huang, Deputy Editorial Page Editor</p>
                            <p>Casey Qi</p>
                            <p>Celeste Ramirez</p>
                            <p>Sara Chough</p>
                            <p>Isabella Inouye</p>
                            <p>Danya Jafri</p>
                            <p>John Towfighi</p>
                            <p>Tamarah Wallace</p>
                        </div>
                        <div>
                            <h3>Sports</h3>
                            <p>Mackenzie George, Sports Editor</p>
                            <p>Ence Morse, Sports Editor</p>
                            <p>Matt Kim, Deputy Sports Editor</p>
                            <p>Miles Schachner, Deputy Sports Editor</p>
                            <p>Wick Hallos</p>
                            <p>Bernard Wang</p>
                            <p>Juliet Tochterman</p>
                        </div>
                        <div>
                            <h3>Graphics</h3>
                            <p>Jessica Li, Graphics Editor</p>
                            <p>Charlotte Li, Graphics Deputy Editor</p>
                            <p>Liz Commisso</p>
                            <p>Raeedah Wahid</p>
                        </div> 
                        <div>
                            <h3>Spectrum</h3>
                            <p>Ariana Novo, Deputy Spectrum Editor</p>
                            <p>Lina Bennani Karim, Deputy Spectrum Editor</p>
                            <p>Jane Mok, Deputy Spectrum Editor</p>
                            <p>Swethaa Suresh</p>
                            <p>Jazilah Salam</p>
                            <p>Nandini Talwar</p>
                            <p>Charlotte Wu</p>
                        </div>   
                    </SubDiv>
                    <SubDiv>
                        <div>
                            <h3>Copy</h3>
                            <p>Emma Bradbury, Head Copy Editor</p>
                            <p>Fritzie Schwentker, Deputy Copy Editor</p>
                            <p>Mabry Griffin, Deputy Copy Editor</p>
                            <p>Kaylene Chong, Deputy Copy Editor</p>
                            <p>Vincenzo DiNatale, Deputy Copy Editor</p>
                            <p>Olivia Vella</p>
                            <p>Carolyn Wang</p>
                            <p>Harry Shi</p>
                            <p>Jacob Kang</p>
                            <p>Robyn Fohouo</p>
                            <p>Katherine Carraway</p>
                            <p>Rachel Borshchenko</p>
                            <p>Jonah Pitkowsky</p>
                            <p>Natalie Park</p>
                            <p>Adeline Hu</p>
                            <p>Maria Levit</p>
                            <p>Eden Teferi</p>
                            <p>Willa Nagy</p>
                            <p>Alia Derriey</p>
                            <p>Sam Barnett</p>
                            <p>Kathryn Cherven</p>
                            <p>Leif Wood</p>
                            <p>Renuka Balakrishnan</p>
                        </div>
                        <div>
                            <h3>The Eye</h3>
                            <p>Claudia Gohn, Managing Editor of The Eye</p>
                            <p>Cole Cahill, Lead Story Editor</p>
                            <p>Teresa Lawlor, View from Here Editor</p>
                            <p>Briani Netzahuatl, Features Editor</p>
                            <p>Derek Ng</p>
                            <p>Eve Washington</p>
                            <p>Cassie Wu</p>
                        </div>
                        <div>
                            <h3>Video</h3>
                            <p>Ryan Balderas</p>
                            <p>Caitlin Buckley</p>
                        </div> 
                    </SubDiv>
                </Row>
            </Text>
        </Wrapper>
    </>
)};

export default CreditsPage;