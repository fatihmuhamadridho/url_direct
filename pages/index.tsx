import { useState } from "react";

const HomePage = () => {
  const [url, setUrl] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (url.toLocaleLowerCase().includes("https://")) {
      window.open(url)
    } else if (url.toLocaleLowerCase().includes("http://")) {
      window.open(url)
    } else {
      window.open(`https://${url}`)
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => setUrl(e.target.value)} value={url} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HomePage;
