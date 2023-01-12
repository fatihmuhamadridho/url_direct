import { useEffect } from "react"

const AutoRedirect = () => {
    useEffect(() => {
        if (navigator.appVersion.toLocaleLowerCase().includes("android")) {
            window.open("https://play.google.com/store/apps/details?id=net.ekgames.fclasshero")
        } else if (navigator.appVersion.toLocaleLowerCase().includes("iphone")) {
            window.open("https://apps.apple.com/id/app/roblox/id431946152")
        }
        console.log(navigator.appVersion);
        console.log(navigator.userAgent)
        console.log(navigator.appName)
        console.log(navigator.language)
        console.log(navigator.appCodeName)
        console.log(navigator.product)
        console.log(navigator.productSub)
        console.log(navigator.vendor)
      }, [])

    return (
        <div>

        </div>
    )
}

export default AutoRedirect;