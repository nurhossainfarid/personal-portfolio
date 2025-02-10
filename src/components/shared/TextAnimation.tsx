// components/TypewriterText.js

import Typewriter from "typewriter-effect";

export default function TextAnimation() {
  return (
    <div className="flex justify-center items-center">
      <h2 className="text-2xl text-primary font-raleway">
        {" "}
        <Typewriter
          options={{
            strings: ["Developer", "Designer", "Innovator", "Tech Enthusiast"],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </h2>
    </div>
  );
}
