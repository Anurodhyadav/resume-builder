# resume-builder

This resume builder application allows user to build and download resume 

## How to start working?

1. `cd app`
2. `npm install`
3. `npm start`
4. Visit `localhost:3000` to view the resume builder page.


This resume builder application allows user to add these sections in resume.
1. Basic information about themselves.
2. Information about their work experience.
3. Information about their Education.
4. Information about their Projects.

How to add additional sections in resume:
1. Add a section in `SideNavbar.js`.
2. Add a case for new section in `FormComponent` of `App.js`.
3. Create a component for new section in Form Folder. For example: `Education.js` is there for adding Education information.

How to additonal template:

1. Add another option for Template in Select Template dropdown of UserResume.js.
2. Create another case for new template in Template Component section of `UserResume.js`. Currently there is TemplateOne and TemplateTwo.
3. Create a component for new template in ResumeTemplates folder.
