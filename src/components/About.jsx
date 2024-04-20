import React from "react";
import { Accordion } from "react-bootstrap";

const About = (props) => {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "black" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="my-5">About Us</h1>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>Analyze Your Text</strong>
            </Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Analyzing your text has never been easier with Textutils. Whether
              you're a student working on an essay, a writer crafting a story,
              or a professional editing a document, Textutils offers a range of
              powerful text analysis tools to streamline your work. With
              features like word count, character count, and sentence count, you
              can quickly gather essential information about your text.
              Additionally, Textutils provides readability scores, keyword
              density analysis, and text case conversion, giving you deeper
              insights into your writing style and composition. <br/>
              Using Textutils is simple and intuitive. Just paste your text into the provided
              box, and with the click of a button, you'll have access to
              detailed analysis in seconds. Whether you're on your computer,
              tablet, or smartphone, Textutils is accessible from any device
              with an internet connection, making it the perfect tool for
              on-the-go text analysis. Streamline your writing process and gain
              valuable insights into your text with Textutils today.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <Accordion.Header>
              <strong>Free to use</strong>
            </Accordion.Header>
            <Accordion.Body>
              Textutils is a free-to-use online tool that offers a wide range of
              text analysis functionalities. Whether you need to count words,
              characters, or sentences, Textutils provides quick and efficient
              results without any cost. Its user-friendly interface makes it
              easy to input your text and obtain instant analysis. Whether
              you're a student, writer, or professional, Textutils is the
              perfect companion for all your text analysis needs. Plus, being
              free to use, it's accessible to everyone, ensuring that you can
              analyze your text without any financial barriers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="2"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <Accordion.Header>
              <strong>Browser Compatible</strong>
            </Accordion.Header>
            <Accordion.Body>
              Ensuring that your website is browser compatible is essential for
              reaching your audience effectively. A browser-compatible website
              functions seamlessly across different web browsers such as Chrome,
              Firefox, Safari, and Edge, providing users with a consistent and
              reliable experience regardless of the browser they use. By
              adhering to web standards and employing best practices in web
              development, you can guarantee that your website looks and
              performs its best, regardless of the browser or device your
              visitors are using. With browser compatibility, you can maximize
              your website's reach and ensure a positive user experience for
              all.{" "}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default About;
