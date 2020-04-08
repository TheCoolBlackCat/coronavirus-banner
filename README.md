# COVID-19 Banner
A banner to tell your website viewers about what they can do to protect themselves from the coronavirus.

## Installing on your webpage
### Using GitHub.io
```<script type="text/javascript" src="https://TheCoolBlackCat.github.io/coronavirus-banner/loader.js"></script>```

### Or, download locally
```<script type="text/javascript" src="loader.js"></script>```

Place the ```<script>``` before your closing ```</body>``` tag.

## Usage
Include the following code after the ```</script>```:
```html
<script>
    _cvLoader.load("en"); // Change to desired language/country (see below)
</script>
```

Note that the banner uses a cookie to store the user dismssing it, retained for 15 days after they press the close button (x).

## Preview
You can see a working preview [here](https://thecoolblackcat.github.io/coronavirus-banner/index.html).

## Languages Supported
The program currently supports the following languages:
* en-GB (default)
* en-US

Please feel free to add more languages/countries into ```_cv.info``` object, found at the top of ```cv-banner.js```, please use their [ISO Language Code](http://www.lingoes.net/en/translator/langcode.htm) as the key.

## Contributions
Any contributions are welcome! Whether you are a coder, bug-fixer, tester, translator, grammar-corrector, please [raise an issue](https://github.com/TheCoolBlackCat/coronavirus-banner/issues).
