# bountiful-web
Donor Management webapp for Bountiful Children's Foundation

Comments: SCSS file was refactored from a fairly interesting but mostly unwieldy source scss library, and the site designed to be mobile-first. compass.js is fairly self-explanatory but includes a note on what HTML and CSS it expects, it uses a FontAwesome compass icon (could be substituted), a basic hover animation, and an event listener to create a virtual "hamburger-esque" component design.

Site goes

index<->about page
  |  /
  | /
  v
login

Pitch: A donor management app that allows for donor communication tracking and easy user sign up.
MVP: Board members can log in and see a list of donors and the time they were last contacted. User can log in and add a donor, their contact info, a list of their past donations, location they allocated their donation to (optional) and update the date and method of last communication.

  WEB UI GOALS (Landing Page):
  Inform donor services person they are at the right place
  Inform donor services person they will find their info here
  Lead donor services person to login (links to React app)
  Make sure web page is Fully Responsive
  Show off a bit?

  Post Mortem:
  Web page leads quickly to login (good).
  Web page has adequate if compromise-driven stylings (eh)
  Web page has some exercises in original JS fiddlery (the compass, etc.)
  I learned a lot about using someone else's idiosyncratic libraries.
