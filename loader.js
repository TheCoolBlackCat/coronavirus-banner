_cvLoader = {
    name: "https://thecoolblackcat.github.io/coronavirus-banner/cv-banner.js",
    // name: "cv-banner.js",
    load: function (lang) {
        var body = document.getElementsByTagName("body")[0],
            script = document.createElement("script");

        script.type = "text/javascript";
        script.src = this.name;
        script.addEventListener("load", function () {_cv.display(lang);});
        body.appendChild(script);
    }
}

_cvLoader.load("en");