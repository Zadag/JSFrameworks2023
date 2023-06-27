import "./App.css";
import AccordionSection from ".components/AccordionSection/AccordionSection";

function App() {
  return (
    <div className="ui styled accordion">
      <AccordionSection
        title="What is React used for?"
        paragraph="React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development. React Native, a framework based on React, is specifically designed for mobile app development, while React Desktop allows you to create desktop applications using web technologies."
        isOpen={false}
      />
      <AccordionSection
        title="Why would anyone use React?"
        paragraph="One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don't have to write various codes for the same features. Furthermore, if any changes are made in any particular part, it will not affect other parts of the application."
        isOpen={true}
      />
      <AccordionSection
        title="What is React in simple terms?"
        paragraph="The Best Guide to Know What Is React [Updated] React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."
        isOpen={false}
      />
    </div>
  );
}

export default App;
