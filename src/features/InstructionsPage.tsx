import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import rules1 from "../assets/rules1.png";
import LetsPlayButton from '../helpers/LetsPlayButton/LetsPlayButton';

const styles: any = {
  buttonPosition: {
    display: "flex",
    justifyContent: 'center',
    marginTop: '4rem'
  },
  buttonPositionMobile: {
    display: "flex",
    justifyContent: 'center',
    margin: '1rem 0'
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  containerMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center'
  },
  header: {
    display: "flex",
    alignSelf: 'center',
    marginLeft: '1rem',
    marginBottom: '4rem'
  },
  headerMobile: {
    display: "flex",
    alignSelf: 'center',
    margin: '1rem'
  },
  img: {
    objectFit: 'contain',
    width: 'auto',
    height: 'auto',
    maxHeight: "30%",
    maxWidth: "30%",
  },
  imgMobile: {
    objectFit: 'contain',
    maxHeight: "60%",
    maxWidth: "60%",
  },
  root: {
    height: '100%',
    width: '100%',
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-start',
    cursor: 'default'
  },
  textContainer: {
  },
  textRulesContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: '2rem',
    marginRight: '2rem',
    textAlign: 'left'
  },
  textRulesHeader: {
  }
};

interface InstructionsPageProps { }

const InstructionsPage: React.FunctionComponent<InstructionsPageProps> = (props: InstructionsPageProps) => {
  const [width, setWidth] = useState();
  let history = useHistory();
  const onClick = () => {
    history.push('/play')
  }
  useEffect(() => {
    setWidth(window.innerWidth as any);
    window.addEventListener("resize", () => setWidth(window.innerWidth as any));
  }, []);
  const mobile = width !== undefined && width! >= 800 ? false : true;

  return (
    <div style={styles.root}>
      <h1 style={mobile ? styles.headerMobile : styles.header}>
        Rock - Paper - Scissors - Lizard - Spock
        </h1>
      <div style={mobile ? styles.containerMobile : styles.container}>
        <img src={rules1} style={mobile ? styles.imgMobile : styles.img} alt="Rules" />
        <div style={styles.textRulesContainer}>
          <h2 style={styles.textRulesHeader}>The rules</h2>
          <div style={styles.textContainer}>
            Scissors cuts paper, paper covers rock, rock crushes lizard,
            lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard,
            lizard eats paper, paper disproves Spock, Spock vaporizes rock,
            and as it always has, rock crushes scissors
          </div>
          <div style={mobile ? styles.buttonPositionMobile : styles.buttonPosition}>
            <LetsPlayButton
              onClick={onClick}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
