import React from 'react';
import styled from 'styled-components';

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

const CreditsPage = () => (
    <Wrapper>
        <a href="/">
            <BackButton>
                BACK
            </BackButton>
        </a>
        <Text>
            <h1>CREDITS</h1>

            <h2>Corporate Board</h2>
            <p>Sarah Braka, Editor in Chief</p>
            <p>Elizabeth Karpen, Managing Editor</p>
            <p>Tamarah Wallace, Publisher</p>

            <br></br>

            <h2>Design and Development</h2>
            <p>Erin McNulty, Head of Engineering</p>
            <p>Mirah Shi, Lead Product Designer</p>

            <br></br>

            <h2>Lead Illustration By:</h2>
            <p>Liza Evseeva, Deputy Illustrations Editor</p>

            <br></br>

            <h2>Content</h2>
            <h3>News</h3>
            <p>Dia Gill, News Editor</p>
            <p>Sofia Kwon, News Editor</p>
            <p>Abby Melbourne, Deputy News Editor</p>
            <p>Talia Abrahamson, Staff Writer</p>
            <p>Faith Onyechere, Staff Writer</p>
            <p>Lucy Brenner, Staff Writer</p>
            <p>Katherine Nessel, Staff Writer</p>
            <p>Maya Mitrasinovic, Staff Writer</p>
            <p>Faith Andrews, Staff Writer</p>
            <p>Stephanie Lai, Staff Writer</p>
            <p>Octavia Galaviz, Staff Writer</p>
            <p>Kathy Fang, Staff Writer</p>

            <h3>Sports</h3>
            <p>Mackenzie George, Sports Editor</p>
            <p>Ence Morse, Sports Editor</p>
            <p>Matt Kim, Deputy Sports Editor</p>
            <p>Miles Schachner, Deputy Sports Editor</p>
            <p>Wick Hallos</p>
            <p>Bernard Wang</p>
            <p>Juliet Tochterman</p>

            <h3>Arts and Entertainment</h3>
            <p>Noah Sheidlower, A&E Editor</p>
            <p>Katie Levine, Deputy A&E Editor</p>
            <p>Bella Druckman, Deputy A&E Editor</p>
            <p>Olivia Doyle, Deputy A&E Editor</p>
            <p>Vincent Hou</p>
            <p>Esterah Brown</p>

            <h3>The Eye</h3>
            <p>Claudia Gohn, Managing Editor of The Eye</p>
            <p>Cole Cahill, Lead Story Editor</p>
            <p>Teresa Lawlor, View from Here Editor</p>
            <p>Briani Netzahuatl, Features Editor</p>
            <p>Derek Ng, Associate Features Editor</p>
            <p>Eve Washington</p>
            <p>Cassie Wu</p>

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

            <h3>Graphics</h3>
            <p>Jessica Li, Graphics Editor</p>
            <p>Charlotte Li, Graphics Deputy Editor</p>
            <p>Liz Commisso</p>
            <p>Raeedah Wahid</p>

            <h3>Illustrations</h3>
            <p>Brenda Huang, Illustrations Editor</p>
            <p>Liza Evseeva, Deputy Illustrations Editor</p>
            <p>Ray Banke, Deputy Illustrations Editor</p>
            <p>Carlos Ochoa, Deputy Illustrations Editor</p>
            <p>Ashley Jiao, Deputy Illustrations Editor</p>
            <p>Noelle Hunter</p>
            <p>Julian Michaud</p>
            <p>Sadia Sharif</p>
            <p>Nicole Yang</p>

            <h3>Photo</h3>
            <p>Beatrice Shlansky, Photo Editor</p>
            <p>Millie Felder, Deputy Photo Editor</p>
        </Text>
    </Wrapper>
);

export default CreditsPage;