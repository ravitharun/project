import { useState } from "react";

function Btn() {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "00",
    "(",
    ")",
    "sin",
    "cos",
    "tan",
    "+",
    "-",
    ".",
    "/",
    "*",
    "c",
    "=",
  ];

  const [val, setVal] = useState("");

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "300px",
      margin: "auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      fontSize: "20px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    },
    buttonGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px",
    },
    button: {
      padding: "15px",
      fontSize: "18px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      backgroundColor: "#f1f1f1",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#ddd",
    },
  };

  const handleButtonClick = (event) => {
    const value = event.target.textContent;
    setVal((prevVal) => prevVal + value);
    if (value === "c") {
      setVal("");
    } else if (value == "sin") {
      const sin = Math.sin(val);
      setVal(sin);
    } else if (value == "cos") {
      const cos = Math.cos(val);
      setVal(cos);
    } else if (value == "tan") {
      const tan = Math.tan(val);
      setVal(tan);
    } else if (value === "=") {
      try {
        const res = eval(val);
        console.log(res);
        setVal(res);
      } catch (ZeroDivisionError) {
        setVal("Cannot divide by zero");
      }
    }
  };

  return (
    <>
      <div style={styles.container}>
        <input type="text" value={val} readOnly style={styles.input} />
        <div style={styles.buttonGrid}>
          {buttons.map((btn, index) => (
            <button
              key={index}
              style={styles.button}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = styles.button.backgroundColor)
              }
              onClick={handleButtonClick}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Btn;
