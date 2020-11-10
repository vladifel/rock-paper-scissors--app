import React from "react";
import rules1 from "../assets/rules1.png";
import LetsPlayButton from '../helpers/LetsPlayButton/LetsPlayButton';

const styles: any = {
  buttonPosition: {
    display: "flex",
    justifyContent: 'center',
    marginTop: '4rem'
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  header: {
    display: "flex",
    alignSelf: 'center',
    marginBottom: '4rem'
  },
  img: {
    maxHeight: "30%",
    maxWidth: "30%",
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
  const onClick = () => {
    alert("Let's Play!")
  }
  return (
    <div style={styles.root}>
      <h1 style={styles.header}>Rock - Paper - Scissors - Lizard - Spock</h1>
      <div style={styles.container}>
        <img src={rules1} style={styles.img} alt="Rules" />
        <div style={styles.textRulesContainer}>
          <h2 style={styles.textRulesHeader}>The rules</h2>
          <div style={styles.textContainer}>
            Scissors cuts paper, paper covers rock, rock crushes lizard,
            lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard,
            lizard eats paper, paper disproves Spock, Spock vaporizes rock,
            and as it always has, rock crushes scissors
          </div>
          <div style={styles.buttonPosition}>
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
