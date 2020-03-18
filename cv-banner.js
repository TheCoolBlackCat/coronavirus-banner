_cv = {
    info: {
        "en-gb": {
            title:"There is an ongoing outbreak of COVID-19",
            url: "https://www.nhs.uk/conditions/coronavirus-covid-19",
            description: "Learn more about how you can protect yourself and others"
        },
        "en-us": {
            title:"There is an ongoing outbreak of COVID-19",
            url: "https://www.cdc.gov/coronavirus/2019-ncov/index.html",
            description: "Learn more about how you can protect yourself and others"
        }
    },



    html: document.getElementsByTagName("html")[0],

    display: function(code) {
        var i  = this.info[code];
    
        var div = document.createElement("div"),
            h1 = document.createElement("h1"),
            p = document.createElement("p"),
            a = document.createElement("a");

        h1.innerText = i.title;
        a.innerText = i.description;
        a.href = i.url; 
        p.appendChild(a);

        div.appendChild(h1);
        div.appendChild(p);
        div.id = "cv-banner";

        this.style();
        this.html.appendChild(div)
    },

    style: function() {
        var s = document.createElement("style");
        s.type = "text/css";
        s.innerText = "\
            html {margin-top: 115px;} \
            #cv-banner {background: #000; color:#FFF; position:fixed; top:0; width:100%; padding:1.5rem; font-family:Arial,sans-serif}\
        ";
        this.html.appendChild(s);
    }
};

_cv.display("en-gb");