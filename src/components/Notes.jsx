import React from "react";

function Notes() {
  return (
    <div id="note1">
      <div className="note">
        <h1>
          <a href="https://en.wikipedia.org/wiki/Web_development" class="link">
            Web Development
          </a>
        </h1>
        <p>
          Web development is the work involved in developing a website for the
          Internet (World Wide Web) or an intranet (a private network). Web
          development can range from developing a simple single static page of
          plain text to complex web applications, electronic businesses, and
          social network services.
        </p>
      </div>

      <div className="note" id="second">
        <h1>
          <a
            href="https://en.wikipedia.org/wiki/Mobile_app_development"
            class="link"
          >
            App Development
          </a>
        </h1>
        <p>
          Mobile application development is the process of designing and
          building software for use on mobile devices. A mobile application can
          be pre-installed or downloaded from an app store or mobile web
          browser.
        </p>
      </div>

      <div className="note">
        <h1>
          <a href="https://en.wikipedia.org/wiki/Deep_learning" class="link">
            Deep learning
          </a>
        </h1>
        <p>
          Deep learning is a subset of machine learning, which is essentially a
          neural network with three or more layers. These neural networks
          attempt to simulate the behavior of the human brain—albeit far from
          matching its ability—allowing it to “learn” from large amounts of
          data.
        </p>
      </div>

      <div className="note">
        <h1>
          <a href="https://en.wikipedia.org/wiki/Machine_learning" class="link">
            Maching learning
          </a>
        </h1>
        <p>
          What is machine learning? Machine learning is a subfield of artificial
          intelligence, which is broadly defined as the capability of a machine
          to imitate intelligent human behavior.
        </p>
      </div>
      <div className="note">
        <h1>
          <a href="https://en.wikipedia.org/wiki/Data_science" class="link">
            Data Scientist
          </a>
        </h1>
        <p>
          Data science is the field of study that combines domain expertise,
          programming skills, and knowledge of mathematics and statistics to
          extract meaningful insights from data.
        </p>
      </div>

      <div className="note">
        <h1>
          <a
            href="https://en.wikipedia.org/wiki/Computer_security"
            class="link"
          >
            Cyber security
          </a>
        </h1>
        <p>
          Cyber security is the application of technologies, processes, and
          controls to protect systems, networks, programs, devices and data from
          cyber attacks. It aims to reduce the risk of cyber attacks and protect
          against the unauthorised exploitation of systems, networks, and
          technologies.
        </p>
      </div>

      <div className="note">
        <h1>
          <a href="https://en.wikipedia.org/wiki/Cloud_computing" class="link">
            Cloud Engineer
          </a>
        </h1>
        <p>
          What is a Cloud Developer? In general, developers are professionals
          who build and design useful websites, programs, applications, etc.
          either from the start or with the help of templates and predefined
          resources. A professional Cloud Developer is one who builds computer
          applications and software.
        </p>
      </div>

      <div className="note">
        <h1>
          <a href="https://en.wikipedia.org/wiki/Blockchain" class="link">
            Blockchain Developer
          </a>
        </h1>
        <p>
          Blockchain software developers build applications onto existing
          blockchain platforms. They handle front-end and back-end development,
          design, and maintenance.
        </p>
      </div>
    </div>
  );
}

export default Notes;
