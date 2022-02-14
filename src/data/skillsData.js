import React from 'react';
import { SiHtml5 as HtmlIcon, SiCss3 as CssIcon, SiJavascript as JsIcon, SiSass as SassIcon, SiReact as ReactIcon, SiGithub as GithubIcon } from 'react-icons/si';

export const skillsData = [
{
  id: 1,
  icon: <HtmlIcon className="html--icon jb--icon"/>,
  name: 'HTML',
  description: `
    HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).
  `,
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
},

{
  id: 2,
  icon: <CssIcon className="css--icon jb--icon"/>,
  name: 'CSS',
  description: `
    Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
  `,
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
},

{
  id: 3,
  icon: <JsIcon className="js--icon jb--icon"/>,
  name: 'Javascript',
  description: `
    JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.
  `,
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
},

{
  id: 4,
  icon: <SassIcon className="sass--icon jb--icon"/>,
  name: 'Sass',
  description: `
    Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects. 
  `,
  url: 'https://sass-lang.com/documentation',
},

{
  id: 5,
  icon: <ReactIcon className="react--icon jb--icon"/>,
  name: 'React Js',
  description: `
    React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.
  `,
  url: 'https://reactjs.org/docs/getting-started.html',
},

{
  id: 6,
  icon: <GithubIcon className="github--icon jb--icon"/>,
  name: 'Github',
  description: `
    GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.
  `,
  url: 'https://github.com/',
},
]