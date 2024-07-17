# Resume Generator

My very first project in React where I created a resume generator.  Depending on the size of your screen you will have access to a form that takes values and displays them on a preview that is dynamically updated as you submit information in the form.  

**Link to project:** https://bejewelled-tiramisu-8a5a7d.netlify.app/

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:
**Tech used:** HTML, CSS, JavaScript, React

The web app consists of two main interfaces, a form that the user fills out with their personal information and work history, and a preview interface that displays this information inside of a component meant to simulate a sheet of paper when presented to the user.  
There is a toggle display and print button that allows the user to print or save their created resume copy.  The printing functionality of the button is handled mostly by the react-to-print package.  


## Optimizations

Some things that could be added to this project include:
  -  A place to save your resume in the app in case you would like to make several different versions of your resume(s)
  -  I would like to improve my file structure, my top level component has a lot of code that can probably be refactored into their own utility files, specifically my event handlers
  -  Piggybacking off that last point I would also like to refactor some of my more general components to be more versatile to cut down on making a lot of components that do very similar things with minor differences
  -  There are some naming conventions I used throughout that I'm not the happiest with, I would like to try and come up with more concise/less verbose names if possible to improve code readability

## Lessons Learned:

The biggest lesson learned is just how React works and how components work together and independently.  I think I especially understand the importance of lifting state up now and how much easier that can make your life.  





