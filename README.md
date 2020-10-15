# Contents:
    * UX 
    * Project Goals
    * Target Audience Goals
    * Site Owner Goals
    * User Requirements and Expectations
    * Design Choices 
        * Fonts
        * Icons
        * Colours
        * Styling
        * Images + Background
    * Wireframes 
    * Features 
        * Features that have been developed
    * Technologies Used 
    * Testing planning + Testing stories 
    * Deployment 
    * Credits 

# UX (User experience)

## Project Goals
The goal of this project is to provide simple but informative app for end user 
who does not like many features but prefers simplicity. As it is a weather app 
intentions were to have all needed information on one screen and also make it 
attractive for user.

### User Goals:
* The website is easy to use and is User Friendly
* Information on website is readable and easy to understand
* Added pictures are clear and works well ij choisen app theme
* Search box answers well to user's requests
* Weather description icon response as predicted
* Interact with the website on Desktop, Tablet and Mobile 

### User Stories:

##### Brandon: 
<em>"I love this app. so simple and nice backgrounds. Now I am using only it to check weather."</em>

##### Tony R.: 
<em>"I am not a technology guru and use it because it helps me on daily basis. This app is nice and easy to use with all necessary information in one place. Big plus from me."</em>

##### Mrs Liane: 
<em>"Days of technologies are full of so much information which is not necessary and just occupies us and I prefer simplicity which this app did provide me."</em>


### Site Owner Goals:
* To provide suitable and not too crowded website for users interested in weather
* To attract new and current weather app users 
* To make sure all information provided is correct 

# User Requirements and Expectations:

### Requirements:
* Search box responds correctly and gives suitable information on a screen 
* Be provided with correct and updated information 
* Website content displayed in a suitable and not offensive manor

### Expectations:
* Searched city name is being displayed on a screen with suitable information
* Can click in a search box and be able to type city name in
* Content is visually approachable 
* Weather icon is being displayed to shadow weather description

# Design Choices:
The theme of this website/app is weather. Images, colours and font was choisen to
create a mood for a user whos main idea is to come and just use this app to check
a weather in choisen city.

### Fonts:
My choice of a font was <a href="https://fonts.google.com/?query=Sansita+Swashed&selection.family=Lato">Sansita Swashed</a> because it looks a little bit different than the others and it has a soft and edgy style to it which can attract users who are bored of our days standards.

### Icons:
Icons have been used from graphic designer Ashley Jager:

<a href="https://github.com/manifestinteractive/weather-underground-icons>">Weather Icons</a> 

The idea of these icons was to have something more live and catchy for the eye of user because picture and figures always attracts our eyes first. Design is really nice and fits into this app theme.

### Colours:
* #ffffff - city name text-shadow colour
* rgba(245, 245, 245, 0.2) - background colour for search box
* #565656 - border-bottom colour for search box and font colour for error message
* rgba(255, 255, 255, 0.2) - background colour for search box then field is activated
* #FFFBE9 - city name colour, date colour
* #F5F5F5 - temperature colour 
* rgba(0, 0, 0, 0.6) - text-shadow for temperature colour text
* rgba(0, 0, 0, 0.4) - text-shadow for weather condition text 
* #000000 - font stroke feature for city and date and error text

### Styling:
I became a fan of bootsrtap and he was my biggest helper for styling this app. I thing grid system is brilliant and it is capapble to do many handy things to make app look attractive. 

### Images + Background:
The main background image I have found via google search on this website:
<a href="https://www.pv-magazine.com/2020/07/14/solar-causes-highest-power-peaks-under-mixed-cloud-conditions/>">Default Background Image</a>
I liked colours and brightness of it and I thought it would be a good idea to have it as a default image. 

Ohter two images for AM and PM times of the day I have found via google search too. 

# Wireframes:
I have built wireframes for this project using <a href="https://balsamiq.com/">Balsamiq</a> mockups. I created basic wireframes for Mobile/Tablet/Desktop
on Balsamiq to show how structurally elements would appear on the page for different devices. Wireframes can be found by clicking this link in my repository:

<a href="https://github.com/vaida898/weather-app/tree/master/wireframes">Wireframes for Desktop, Mobile and Tablet</a>

# Features:

* Updated information from outside API 
* Integrated responsive weather icons

# Technologies Used:

## Languages:

* <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>
* <a href="https://www.w3schools.com/js/">JavaScript</a>

## Tools and Libraries:

* <a href="https://openweathermap.org/api">Open Weather API</a>
* <a href="https://getbootstrap.com/">Bootstrap</a>
* <a href="https://fontawesome.com/icons?d=gallery">Font-Awesome</a>
* <a href="https://css-tricks.com/">CSS-tricks</a>
* <a href="https://jquery.com/">jQuery</a>
* <a href="https://htmlcolorcodes.com/">Colour picker</a>

### Testing planning + Testing stories:
The most of the testing has been conducted in GitPod but I also have used chrome dev tools for layout inspection of my app. App was tried and tested on other devices like Iphone, Ipad and PC to check if background is responding correctly depending on screen size.

All testing has been done manually clicking and typing into search-box. 

#### Main page:

Main testing of this app was to make sure that I am getting correct data by my choisen city form a search box and API responds to request by providing correct data on a screen for end user. 

I added weather icons under weather description too, to make app more live and not too boring. 

1. Click in search box. Does this field let you to type city name in?
2. Click enter after you have typed city name in a search box. 
   Do you see correct city name on a screen with all information?
3. Resize the window. Does all content fit on a screen and not disappear?
4. Weather icon under weather description. Does weather icon shadow weather description?
5. 

# Deployment:

Weather App page was developed on GitPod, using git and GitHub to host the repository.

When deploying Weather App page using GitHub Pages the following steps were made:

* Opened up <strong>GitHub</strong> in the browser.
* Signed in using my username and password.
* Navigated to my <strong>repositories</strong>.
* Found repository called <strong>'/vaida898/weather-app'</strong>.
* In the right side above respository I clicked <strong>'settings'</strong>.
* Scrolled down to the <strong>GitHub Pages</strong> area. 
* Selected <strong>'Master Branch'</strong> from the <strong>'Source'</strong> dropdown menu.
* Clicked to confirm my selection.
* Weather App page became live on GitHub Pages.

#### Running Weather App fan page Locally

Cloning Weather App page from GitHub:

* Navigate to <strong>'/vaida898/weather-app</strong>.
* Click the green <strong>'Clone or Download'</strong> button.
* Copy the <strong>url</strong> in the dropdown box.
* Using your favourite <strong>IDE</strong> open up your preferred <strong>terminal</strong>.
* Navigate to your desired file location. 
* Copy the following <strong>code</strong> and input it into your terminal to clone Weather app page.
 ```git
  git clone https://github.com/vaida898/weather-app.git
   ```

# Closing Notes:

Developing this project first time I have used <strong>API</strong> which I find was challanging and not that straight forward either. My personal opinion is that javascript is not that easy to understand and I definitely know that I will have to work on it more to be completely comfortable using it. 
I also used my old friend from my previous project <strong>Bootstrap</strong> which I think is amazing and so helpful whilst developing mobile apps because of it's grid system. It helped so much with layout of page and was mobile device friendly. For the further development of this project I would probably try to to use animation in a background and svg or gif weather icons which would make it even more live but I like it as it is now too. I also managed to make it work on all sizes of devices which was one of the main reasons because I will probably use it myself on my mobile phone from now.

This project is created only for educational purpose to try and get data displayed from API.

# Credits:

* <a href="https://htmlcolorcodes.com/color-names/">Colour names and codes</a>
* <a href="https://www.cssmatic.com/box-shadow">Shadow box parameters</a>