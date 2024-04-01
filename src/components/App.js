// import React from "react";
// import { format } from "date-fns";
// import ExampleComponent from "./ExampleComponent";

// // Add your code own within the return statement
// function App() {
//   return (
//     <div className="App">
//       <h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1>
//       <p className="App-intro">
//         In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
//         syntax. JSX lets us include JavaScript functions right along with the
//         HTML, and also allows us to add in components, which are separate,
//         self-contained chunks of JSX.
//       </p>
//       <ExampleComponent />
//     </div>
//   );
// }

// export default App;

// src/components/App.js

import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // Assuming TestComponent is another component in the same directory

function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* Updated to display 'Now' instead of the timestamp */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      {/* <ExampleComponent /> removed as per the instruction */}
      <TestComponent /> {/* New TestComponent added */}
    </div>
  );
}

export default App;
