import  { useState, useEffect, useRef } from "react";
import styles from "./Text.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Audio } from "react-loader-spinner";
import swal from "sweetalert";

function Text() {
  const [text, setText] = useState("a");
  const [Rabdomtext, setRabdomtext] = useState("");
  const [loading, setLoading] = useState(true);
  const textAreaRef = useRef(null);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (text === "") {
      toast("TEXT PART IS EMPTY");
    } else if (text === text.toLocaleLowerCase()) {
      const uppercaseText = text.toUpperCase();
      setText(uppercaseText);
    } else {
      const lowercaseText = text.toLowerCase();
      setText(lowercaseText);
      toast("TEXT IS CONVERTED to lowercase");
    }
  };

  const clr = () => {
    setText("");
    setRabdomtext("");
    swal("THE TEXT IS CLEARED ", "success");
  };

  const copy = () => {
    textAreaRef.current.select();
    document.execCommand("copy");
    toast("Text Copied to Clipboard");
  };

  const random = () => {
    let alpha = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let result = Math.floor(Math.random() * alpha.length);
    setRabdomtext(alpha[result]);
  };

  if (loading) {
    return (
      <center>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="blck"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </center>
    );
  }

  return (
    <>
      <div className={`${styles.outerdiv}`}>
        <div className="htmlForm-floating">
          <textarea
            ref={textAreaRef}
            cols="30"
            rows="50 "
            value={text}
            onChange={handleChange}
            placeholder="type or paste your text here"
            title="ENTER THE TEXT HERE"
          ></textarea>
        </div>
        <div>
          <p>{"RANDOM LETTER'S ARE HERE : " + Rabdomtext}</p>
        </div>
        <br />
        <button type="button" className="btn btn-light" onClick={handleClick}>
          UPPERCASE
        </button>
        <button type="button" className="btn btn-light" onClick={handleClick}>
          LocaleLowerCase
        </button>
        <button onClick={clr}>Clear</button>
        <button onClick={copy}>Copy</button>
        <button onClick={random}>GenerateRandomAlphabets</button>
        <ToastContainer />
      </div>
      <center className="user_part_">
        <h1>Word Counter</h1>
        <p>
          Track word and character count, fix grammar, summarize text, extract
          keywords and more for any text with this advanced free tool.
        </p>
        <br />
        <p className={`${styles.p1}`}>Character count : {text.length}</p>
        <p className={`${styles.p2}`}>word count : {text.split(" ").length}</p>
        <p className={`${styles.p3}`}>
          Reading time : {text.split(" ").length / 200}
        </p>
        <p className={`${styles.p4}`}>line count : {text.split("\n").length}</p>
        <p className={`${styles.p5}`}>
          Speaking time : {text.split(" ").length / 150}
        </p>
        <p className={`${styles.p6}`}>
          Characters without space : {text.replace(/\s/g, "").length}
        </p>
      </center>

      <div className={`${styles.div}`}>
        <div className="card1">
          <center>
            <h1>About These Text Converter Case</h1>
          </center>
        </div>
        <div className={`${styles.outer}`}>
          <div className={`${styles.card1}`}>
            <p className="heading1">
              Welcome to the Convert Case Text Generator Tool
            </p>
            <p className="card1">
              A very handy online text tool where you can change between lower
              case and upper case letters, where you can capitalize,
              uncapitalize, convert to mix case and transform your text. Explore
              the options below:
            </p>
          </div>
          <div className={`${styles.card2}`}>
            <a href="" className={`${styles.link}`}>
              {" "}
              Sentence Case{" "}
            </a>

            <p className="card2">
              The sentence case converter will allow you to paste any text you’d
              like, and it will automatically transform it to a fully formed
              structured sentence. It works by capitalizing the very first
              letter in each sentence, and will then go on to transform the rest
              of the text into lowercase as well as converting i’s into I’s.
              Every letter after a full stop will get converted into an upper
              case letter. Note: it won’t, however, capitalize names or places.
              This is an example of sentence case.
            </p>
          </div>

          <div className={`${styles.card3}`}>
            <p className="heading4"> Lower Case</p>
            <p className="card4">
              If you are wondering how to uncapitalize text, this is exactly
              what the lower case text converter will allow you to do - it
              transforms all the letters in your text into lowercase letters.
              Simply copy the text that you need generating into lower case and
              paste the text into the box above and select the ‘lower case’ tab.
              this is an example of lower case.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Text;
