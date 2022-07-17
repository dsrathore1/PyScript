<h1 align="center">🐍 PyScript 🐍</h1>
<img src="https://pyscript.net/assets/images/pyscript-sticker-black.svg">
<h2 align="center"> Run Python in your HTML</h2>

***

### My Review :)

Python introduce a new things which I explored today and that is ***`PyScript`*** . This may be tricky on first time but ***`PyScript's`*** team organized so well, anyone can explore it by self and use it, this is very easy to adopt and start work so quickly, I think this new tech will boom the industry it is very awesome for those who only wants to stay in  **`Python env`** they will definitely gonna love this. I like to share my thoughts on this new technology. #ThankYou ***`Python.org`*** who got this for us a brand new twisted tech for future, I must say these will be the next future into the tech industry.

Let's talk about its some features and tags, How to use in personal minor projects. I would say this may only for small projects, not preferable for major project because it still have some issues like lagging, data transferring taking much time, some syntax recognize by editor, etc. But at the end I really like **`#PyScript`**

***

## Feature 1️⃣ :-
We can easily type python's code directly into **`HTML`** file like we add **`JS`** and start code into it. 

**NOTE** :- First you have to add two lines before starting a code you can add between **`Head tag`**


```
<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
<script defer src="https://pyscript.net/alpha/pyscript.js"></script>
```

#### ***Syntax*** :-

Add this line between **`Body Tag`**

    ```html
        <py-script>
            print("Hello Python")
        </py-script>

    ```

#### ***My CODE*** :-

    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/png" href="favicon.png" />

        <!-- PyScript CDN -->
        <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
        <script defer src="https://pyscript.net/alpha/pyscript.js"></script>

        <!-- Local Style Sheet -->
        <link rel="stylesheet" href="./style.css">

        <title>PyScript</title>
    </head>

    <body>
        <h1 class="heading">Python Code :- </h1>
        <py-script>
        </py-script>

    </body>

    </html>
    ```
