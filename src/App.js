// App.js
import React, { useState } from "react";
// import "./App.css";

function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Howdy! Welcome to my portfolio! Type 'help' to get knowledge about commands!",
  ]);

  // const clearOutput = () => {
  // console.log("Clearing output...");
  // setOutput([""]);
  // setOutput((prevOutput) => []);
  // console.log("Output after clearing:", output);
  // };
  const responses = {
    help: `Available Commands: help, clear, aboutme, contact, projects, calculator, website`,
    // clear: () => setOutput((prevOutput) => []),
    aboutme: (
      <div>
        <div>I am an undergrad student</div>
        <a href="#">github</a>
      </div>
    ),
    contact: (
      <span>
        Are you sure?{" "}
        <button class="button" onclick="confirmAction('Yes')">
          Yes
        </button>
        <button class="button" onclick="confirmAction('No')">
          No
        </button>
      </span>
    ),
    projects: `1. Hypixel Skyblock MMORPG - Recreation of Skyblock from Hypixel Net<br>2. Ticket Bot - Made for Gamepixel Network, Works like a charm!`,
    calculator: `Welcome to the calculator! Try commands like 'add 2 3', 'subtract 5 1', 'multiply 4 6', 'divide 8 2'.`,
    website: (
      <span>
        Visit my website at{" "}
        <span className="link" onClick="openLink('https://vexylon.dev')">
          vexylon.dev
        </span>
      </span>
    ),
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      executeCommand(input.trim().toLowerCase());
      setInput("");
    }
  };

  const executeCommand = (command) => {
    let newOutput = [...output];
    let response = responses[command];
    if (command === "clear") {
      newOutput = [
        "Howdy! Welcome to my portfolio! Type 'help' to get knowledge about commands!",
      ];
    } else if (typeof response === "function") {
      response(); // Execute the function directly
    } else if (response) {
      newOutput.push(response);
    } else {
      newOutput.push('Unknown command. Type "help" for available commands.');
    }

    setOutput(newOutput);
  };

  return (
    <div className="terminal">
      {output.map((line, index) => (
        <div key={index} className="output">
          {line}
        </div>
      ))}
      <div className="input-line">
        <span className="blink">>></span>
        <input
          className="input"
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Terminal />
    </div>
  );
}

export default App;
