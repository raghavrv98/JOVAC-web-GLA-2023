# Web Development Environment Setup and GitHub Pages Hosting Guide

This guide provides step-by-step instructions for setting up a web development environment on your local device and hosting a static website on GitHub Pages.

## Table of Contents

- [Web Development Environment Setup and GitHub Pages Hosting Guide](#web-development-environment-setup-and-github-pages-hosting-guide)
  - [Table of Contents](#table-of-contents)
  - [Web Development Environment Setup](#web-development-environment-setup)
    - [Prerequisites](#prerequisites)
    - [Installation of Softwares](#installation-of-softwares)
  - [Hosting a Static Website on GitHub Pages](#hosting-a-static-website-on-github-pages)
    - [Creating a GitHub Repository](#creating-a-github-repository)
    - [Hosting of a static website at Github](#hosting-of-a-static-website-at-github)
- [Congratulations You have deployed your First Website.](#congratulations-you-have-deployed-your-first-website)

## Web Development Environment Setup

Follow these steps to set up a web development environment on your local device.

### Prerequisites

Before getting started, ensure you have the following prerequisites:

- Text Editor: Install a text editor such as Visual Studio Code, Atom, or Sublime Text. (Preferred Visual Studio Code)
- Web Browser: Have a modern web browser like Google Chrome or Mozilla Firefox. (Preferred Google Chrome)

### Installation of Softwares

1. Install Node.js: Visit the official Node.js website (https://nodejs.org) and download the latest stable version for your operating system. Follow the installation instructions to install Node.js. (Go for the LTS version)

2. Install Git bash: Visit the official git website (https://git-scm.com/downloads) and download according to your OS verison.
   1. click on the OS version
   2. If it is windows then go for the (Standalone Installer)
   3. Pick 32 bit or 64 bit according to your Device.
   
3. Follow the installation instructions to install Git on local Device.
   1. while installing Git there is an option in between for selection for Text editor.
   2. By default it is selected as Vim.
   3. Change it to Visual Studio as default. (probably 3rd option)

4. Now go to the terminal or command prompt in your maching and check it has node and git installed or not by running commands as-
   1. node -v (For checking node version). It returns the node verison that is currently installed on the device.
   2. git (for checking git installed or not). It returns the git information.
   3. If the above command says ```git is not recognized or node is not recognised``` then please install these things again correctly.

Your Local setup is ready for Web development.

## Hosting a Static Website on GitHub Pages

Follow these steps to host your static website on GitHub Pages.

### Creating a GitHub Repository

1. Create a GitHub Account: If you don't have one already, create a GitHub account at https://github.com.

2. Create a New Repository: Click on the "New" button on the GitHub homepage to create a new repository. Give it a meaningful name and set it to public.

3. Click to HTTPS tab on the homepage and copy that link.

4. Now go to the Desktop. Open command prompt there. Make sure the command prompt path is set upto Desktop. If not then change it via ```Cd Desktop``` command.

5. Now write ```git clone <your copied https link>``` and enter. There is an output as ```You have clone an empty repository```.

6. Now Open VS code.
   1. Open folder by click on file menu.
   2. Select open folder.
   3. Go to Desktop and select the folder that is cloned from github. (probably the repo name).
   4. Now open terminal in VS code by click on terminal menu and select new terminal.
      1. write ```git checkout -b"master"```
      2. You can see in the left-bottom branch is changed from ```main to master```.
   
   5. Go to file menu and click on a new file option.
      1. Enter the file name as ```index.html``` and save it.
      2. Now you have an html file in your repo.
      3. Now you are on your ```index.html``` and write ```!``` then enter. The basic Html code is written there.
      4. Add ```<h1> This is my first website. </h1>``` between ```<body>...</body``` tag.
      5. Save the file by ```ctrl + s```.
   
   6. From the left menu of the VS code. Click on the ```Source control icon (merging branch like symbol)``` (probably 3rd option).
   7. you seen your file name here and click on it you see the changes that you have done to your file.
   8.  Now hover to your file name and click on ```+``` icon.
   9.  You have seen that file is moved to staged changes.
   10. write ```git remote -v``` for checking the repo is connected to your VScode or not. It outputs the github repo path.
       1.  If not then write ```git remote add origin https://github.com/your-username/your-repository.git``` and hit enter. It doesnot produce any output.
   11. Write ```git commit -nm"first commit"``` and hit enter.
       1.  If it showing error then run command 
           1.  ```git config --global user.email "<your github email>"``` and hit enter.
           2.  ```git config --global user.name "<your github username>"``` and hit enter.
   12. Now all the things are done. And it showing output as ```files changed``` type msg.
   13. write git push origin master. It outputs that 
       1. ```Counting objects: 5, done. Delta compression using up to 4 threads.``` type of msg
       2. If not try ```git push -u origin main```
    14. If All things done correctly than you pushed your file to github successfully. Congratulations...

### Hosting of a static website at Github

1. open your Github repo that you want to deploy or Host on internet.
2. Go to ```settings``` tab by click on it. URL look like as ```https://github.com/your-github-username/your-repo-name```
3. Go to ```pages``` tab on the left side (Under code and automation heading).
4. Then change ```Branch``` by clicking dropdown (Undet Branch Heading).
5. select ```master``` and hit save.

After 5 min, There is a box at the top of the page as writen "```Your site is live at some domain```". 

# Congratulations You have deployed your First Website. 

!!Happy Coding!!