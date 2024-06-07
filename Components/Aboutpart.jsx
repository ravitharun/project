import styles from "./Text.module.css";
function Aboutpart() {
  return (
    <>
      <div className={`${styles.div}`}>
        <div className="card1"> 
          <center>
            <h1>About These Text Converter Case</h1>
          </center>
        </div>
        <div className={`${styles.card1}`}>
          <p className="heading1">
            Welcome to the Convert Case Text Generator Tool
          </p>
          <p className="card1">
            A very handy online text tool where you can change between lower
            case and upper case letters, where you can capitalize, uncapitalize,
            convert to mix case and transform your text. Explore the options
            below:
          </p>
        </div>
        <div className="card2">
          <a href="" className="link">
            {" "}
            Sentence Case{" "}
          </a>
          <p className="card2">
            The sentence case converter will allow you to paste any text you’d
            like, and it will automatically transform it to a fully formed
            structured sentence. It works by capitalizing the very first letter
            in each sentence, and will then go on to transform the rest of the
            text into lowercase as well as converting i’s into I’s. Every letter
            after a full stop will get converted into an upper case letter.
            Note: it won’t, however, capitalize names or places. This is an
            example of sentence case.
          </p>
        </div>
        <div className="card3">
          <p className="card3"></p>
        </div>
        <div className="card4">
          <p className="heading4"> Lower Case</p>
          <p className="card4">
            If you are wondering how to uncapitalize text, this is exactly what
            the lower case text converter will allow you to do - it transforms
            all the letters in your text into lowercase letters. Simply copy the
            text that you need generating into lower case and paste the text
            into the box above and select the ‘lower case’ tab. this is an
            example of lower case.
          </p>
        </div>
        <div className="card5">
          <p className="heading5">Upper Case</p>
          <p className="card5">
            The upper case transformer will take any text that you have and will
            generate all the letters into upper case ones. It will essentially
            make all lower case letters into CAPITALS (as well as keep upper
            case letters as upper case letters). To do this, you simply have to
            select the text that you need changing and pasting into the box
            above and then select the UPPER CASE tab. THIS IS AN EXAMPLE OF
            UPPER CASE.
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutpart;
