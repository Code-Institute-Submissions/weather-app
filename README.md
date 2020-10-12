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

##### John M.: 
<em>"I am a big fan of this band and I am always researching what is happening in a band's life. I admire and adore
this band so I am always keen on any website which has any information provided. I am personally prefer mobile devices and give priority 
for mobile first websites."</em>

##### Diana R.: 
<em>"As being a new fan of this band I was interested into informative and not too crowded website. I just was looking
for a place in a web to read more about this band, see pictures of band members and videos to watch to get to know them more. It was 
handy for me that I could fill the form to get in touch with website owners to find out more."</em>

##### Mr James: 
<em>"In todays web world you can find so much information but in website like this, everything was in one place.
I was finding most of the websites too much into my face and you were getting lost in colours and pictures."</em>


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
* #565656 - border-bottom colour for search box
* rgba(255, 255, 255, 0.2) - background colour for search box then field is activated
* #717070 - city name colour, date colour
* #F5F5F5 - temperature colour 
* rgba(0, 0, 0, 0.6) - text-shadow for temperature colour text
* rgba(0, 0, 0, 0.4) - text-shadow for weather condition text 
* #000000 - font stroke feature for city and date 

### Styling:
Thanks to SCSS I was easily able to set variables in my stylesheets that ask as the house style - this means that the styles can be used in multiple places without 
having to repeat code. Using SCSS also allowed me to better structure my stylesheets.

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
* <a href="https://jquery.com/">jQuery</a>


## Tools and Libraries:

* <a href="https://getbootstrap.com/">Bootstrap</a>
* <a href="https://fontawesome.com/icons?d=gallery">Font-Awesome</a>
* <a href="https://mdbootsrap.com">MDbootstrap</a>
* <a href="https://jquery.com/">jQuery</a>
* <a href="https://ianlunn.github.io/Hover/">Hover.css</a>
* <a href="https://imagecompressor.com">Optimizilla</a>

### Testing planning + Testing stories:
The most of the testing has been conducted in GitPod but I also have used chrome dev tools to inspect
layout of my page on mobile device and tablet.

All testing has been done manually clicking and typing into provided contact us form. 

#### Home page:

I tested if all navigation bar links work and send user to a correct section of page. 

I added JavaScript (Provided by my mentor Simen Daehlin) code to make expanded navigation bar slide up then one of menu items is picked then
user is using tablet or mobile device. 

1. Click navigation bar links. Do they take you to the correct section of the page?
2. Click on a logo image. Does it take you to home page? 
3. Resize the window. Does toggle icon appear and your menu works then it is clicked?
4. Click 'Read more' button. Does it take you to page section 'About us'?

#### About Us:

In this section I wanted to have only short paragraph and images of band's members. I wanted paragraph to
be on the left side of page and images on the right. The best helper in this case was bootstrap grid 
system. I just have to make sure that iamges and paragraph align in a way I wanted them. I was testing
it manually resizing in google chrome inspect option.

1. Resize window. Do images and paragraph of text responding correctly on a smaller devices?

#### Media:

This section of page had to have two videos embedded from youtube.com website and I wanted to have
them next to each other. On a smaller devices my plan was to have them stacked on each other. The 
most testing in this section has been done by making sure that videos are responsive via pc, tablet 
and mobile device. Knowing that these media files are videos I had to test that they were working 
and could be viewed on the website.

1. Resize the window. Do embedded videos are responsive depending on device size?
2. Play video. Do videos play on a website? Can you go to youtube.com website and watch it there?

#### Contact Us:

Contact us section purpose is to get messages from fans of a band or everyone interested into band's 
movememts. User had to type in his email address, name and message he had in mind for band. 
The testing I conducted on this form was to make sure all fields worked as expected and 'submit' 
button sent you back to home page.

1. Type in wrong type of email. Does field show rules of email address?
2. Type in all information and press 'submit' button. Does it send you to home page?
3. Do not fill any field and press submit button. Do you get a message that you have to fill form with information?

# Deployment:

Linkin Park fan page was developed on GitPod, using git and GitHub to host the repository.

When deploying Linkin Park fan page using GitHub Pages the following steps were made:

* Opened up <strong>GitHub</strong> in the browser.
* Signed in using my username and password.
* Navigated to my <strong>repositories</strong>.
* Found repository called <strong>'/vaida898/LinkinPark-fan-page'</strong>.
* In the right side above respository I clicked <strong>'settings'</strong>.
* Scrolled down to the <strong>GitHub Pages</strong> area. 
* Selected <strong>'Master Branch'</strong> from the <strong>'Source'</strong> dropdown menu.
* Clicked to confirm my selection.
* Linkin Park fan page became live on GitHub Pages.

#### Running Linkin Park fan page Locally

Cloning Linkin Park fan page from GitHub:

* Navigate to <strong>'/vaida898/LinkinPark-fan-page'</strong>.
* Click the green <strong>'Clone or Download'</strong> button.
* Copy the <strong>url</strong> in the dropdown box.
* Using your favourite <strong>IDE</strong> open up your preferred <strong>terminal</strong>.
* Navigate to your desired file location. 
* Copy the following <strong>code</strong> and input it into your terminal to clone Linkin Park fan page.
 ```git
  git clone https://github.com/vaida898/LinkinPark-fan-page.git
   ```

# Closing Notes:

Developing this project first time I have used <strong>Bootstrap</strong> which I find was so helpful and capable helper.
Then I got a hang on grid system I thought to myself that it is such a briliant thing and so handy for any website developer. 
It helped so much with layout of page and was mobile device friendly. For the further development of this project 
I would probably try to add more styling features such as zoom-in while image is clicked, sliding in heading of the page and
maybe carousel for images to have an album not only couple images. I managed to make it work on all sizes of devices which I 
think was a challange for me and user was happy to see all the content on any device it has been tried on. 

This project is created only for educational purpose to show admiration for this band.

# Credits:

* <a href="https://htmlcolorcodes.com/color-names/">Colour names and codes</a>
* <a href="http://linkinparkweb.yaia.com/biography.html">Linkin Park biography</a>
* <a href="https://www.cssmatic.com/box-shadow">Shadow box parameters</a>