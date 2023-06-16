import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center gap-20">
      <h1 className="text-sky-500 text-6xl"> Home Page </h1>
      <p className="w-96">
        {" "}
        Sorry, I scrapped the CSS. This was a by-product of installing a CSS
        framework called{" "}
        <a href="https://tailwindcss.com/" className="text-sky-500 font-bold">
          TailwindCSS
        </a>
        . I saved your css file though, and everything has been re-arranged into
        directories. When you get the time please explore the directories and
        try to get an understanding of what is happening. I also added{" "}
        <a
          href="https://reactrouter.com/en/main"
          className="text-sky-500 font-bold"
        >
          React Router DOM
        </a>{" "}
        to the project so that we can have navigation throughout the site. Hit
        me up if you have any questions.
      </p>
    </div>
  );
}

export default App;
