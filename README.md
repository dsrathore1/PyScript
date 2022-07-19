<h1 align="center">🐍 PyScript 🐍</h1>
<img src="https://pyscript.net/assets/images/pyscript-sticker-black.svg">
<h2 align="center"> Run Python in your HTML</h2>

Python introduce a new tool and that's name is **`PyScript`**, which I explored and that is incredible. This may be tricky on first time but ***`PyScript's`*** team organized so well, anyone can explore it by self, use it and explore lots of things. I must say python did a great thing to introduce us a PyScript because this tool gives us a great functionality, we can add logic between the HTML code now. This is very easy to adopt, and you can start your work so quickly. I think this new tech will boom the industry it is very awesome for those who only wants to stay in  **`Python env`** although they will definitely gonna love this. I like to share my thoughts on this new technology. #ThankYou ***`Python.org`*** who got this for us a brand new twisted tech for future, I must say these will be the next future into the tech industry. I'm definitely gonna use it from now.  

Let's talk about its some features and tags, How to use in personal minor projects. I would say this may only for small projects, not preferable for major project because it still have some issues like lagging, data transferring taking much time, some syntax recognize by editor, etc. But at the end I really like **`#PyScript`**

***

## Feature 1️⃣ :-
We can easily type python's code directly into **`HTML`** file like we add **`JS`** and start code into it. 

**NOTE** :- First you have to add two lines before starting a code you can add between **`Head tag`**

```html
<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
<script defer src="https://pyscript.net/alpha/pyscript.js"></script>
```

#### ***Syntax*** 👩‍💻:-

Add this line between **`Body Tag`**

```html
....
<py-script>
    print("Hello Python")
</py-script>
....
```

#### ***My CODE*** ;) :-

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" type="image/png" href="favicon.png" />

    <!-- PyScript CDN (Content Delivery Network)-->
    <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
    <script defer src="https://pyscript.net/alpha/pyscript.js"></script>

    <!-- Local Style Sheet -->
    <link rel="stylesheet" href="./style.css">

    <title>PyScript</title>
</head>

<body>
    <h1 class="heading">Introducing PyScript :- </h1>

    <!-- Script -->
    <py-script>
        print("Hello World")
    </py-script>

</body>

</html>
```
You could try changing the code above to explore and play with PyScript yourself.

***

## Feature 2️⃣ :-

You can operate code from different python file by adding some env path


#### ***Syntax*** 👩‍💻:-

#### Python File
```python
def <function_name>:
    <---code-->

print("Something")
```

#### HTML File

```html
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <!-- Favicon -->
        <link rel="icon" type="image/png" href="favicon.png" />

            <!-- PyScript CDN -->
        <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
        <script defer src="https://pyscript.net/alpha/pyscript.js"></script>

        <!-- Add the Python File Path -->
        <!-- Follow the syntax -->
        - paths :
            - <file-name-with-extension>
    </head>
    <body>
        <h1>Hello, I'm Python Code</h1>
        <py-script>
            <!-- import the file -->
            from <file-name> import <specific-function-name or * >
                <!-- (import all the functions by once (*)) -->
        </py-script>

    </body>

</html>
```
<br>

### **My Code** ;) :-

##### Python File Code (data.py) 👨‍💻 :-
```python
def namePrinter(name):
    print(f"Hello, My name is {name}")


def table(x):
    for i in range(1, 11):
        print(f"{x} x {i} = {i*x}")
        ++i
```
##### HTML Code 💌:-

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

    <py-env>
        - paths :
            - ./data.py <!-- File Path -->
    </py-env>
    <title>PyScript</title>
</head>

<body>
    <h1 class="heading">Python Code :- </h1>
    
    <py-script class="print">
        print("Hello Brother")
    </py-script>
    <py-script>
        from data import *
        namePrinter("David")
    </py-script>

    <py-script>
        table(3)
    </py-script>

<div class="numberTable"></div>
<script src="./main.js"></script>

</body>

</html>
````
You could try changing the code above to explore and play with PyScript yourself.

***

### Reference 📔

1. You can check their GitHub repo (open source) by click on this link 👉 **[Click Me](https://github.com/pyscript/pyscript/blob/main/docs/tutorials/getting-started.md)**

2. Official Website 👉 **[Click Me](https://pyscript.net/)**

3. Import the appropriate PyScript files / CDN (Content Delivery Network)  to your HTML page 👉 **[Click Me](https://github.com/pyscript/pyscript#try-pyscript)**

4. Example Page 👉 **[Click Me](https://pyscript.net/examples)**

5. Community Support 👉 **[Click Me](https://community.anaconda.cloud/c/tech-topics/pyscript)**

***

# NOTE 📝 :-
- **This is an extremely experimental project, so expect things to break!**
- **PyScript has been only tested on Chrome at the moment.**

<br>

<h1 align="center">Thank You!! 🧡</h1>