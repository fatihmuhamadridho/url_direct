import { useEffect, useState } from "react";

const HomePage = () => {
  const [url, setUrl] = useState("");
  const [metaData, setMetaData] = useState<any>({
    appVersion: "",
    userAgent: "",
    appName: "",
    language: "",
    appCodeName: "",
    product: "",
    productSub: "",
    vendor: ""
  })

  useEffect(() => {
    setMetaData({
      appVersion: navigator.appVersion,
      userAgent: navigator.userAgent,
      appName: navigator.appName,
      language: navigator.language,
      appCodeName: navigator.appCodeName,
      product: navigator.product,
      productSub: navigator.productSub,
      vendor: navigator.vendor
    })
    // console.log(navigator.appVersion);
    // console.log(navigator.userAgent)
    // console.log(navigator.appName)
    console.log(navigator.language)
    console.log(navigator.appCodeName)
    console.log(navigator.product)
    console.log(navigator.productSub)
    console.log(navigator.vendor)
  }, [])

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
      <ul style={{ margin: "10px", padding: "10px", border: "1px solid black", listStyle: "none", display: "grid", gridTemplateColumns: "150px 1000px", overflow: "scroll" }}>
        <li>appVersion </li>
        <li>: {metaData.appVersion}</li>
        <li>userAgent</li>
        <li>: {metaData.userAgent}</li>
        <li>appName</li>
        <li>: {metaData.appName}</li>
        <li>language</li>
        <li>: {metaData.language}</li>
        <li>appCodeName</li>
        <li>: {metaData.appCodeName}</li>
        <li>product</li>
        <li>: {metaData.product}</li>
        <li>productSub</li>
        <li>: {metaData.productSub}</li>
        <li>vendor</li>
        <li>: {metaData.vendor}</li>
      </ul>
    </div>
  );
};

export default HomePage;
