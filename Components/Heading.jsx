import styles from "./Heading.module.css";
// import useWindowSize from "react-use/lib/useWindowSize";
// import Confetti from "react-confetti";
export default function Heading() {
//   const { width, height } = useWindowSize();
  const clik = () => {
    // event.preventDefault()

    // <Confetti width={width} height={height} />;
  };
  return (
    <>
      <center className={`${styles["center"]}`}>
        <h1 onMouseEnter={clik}>TEXT CONVERT APP</h1>
      </center>
      {/* <p>lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est mollitia vitae aperiam ipsa dolore autem ex voluptas, maiores iusto necessitatibus alias optio exercitationem dicta laboriosam! Perspiciatis similique optio earum?</p> */}
    </>
  );
}
