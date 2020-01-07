npx create-nx-workspace xplat-sample-electron-routing
select:

angular
portal
scss
cd xplat-sample-electron-routing
od tohto bodu sa pridava electron:
yarn add @nstudio/schematics -D
yarn add @nstudio/web-angular -D
yarn add @nstudio/xplat -D
ng add @nstudio/xplat
select:

electron
angular
nx generate app
steps:
? What name would you like for this app? portal
? What type of app would like to create? web [Web app]
? Which frontend framework should it use? angular [Angular app]
? Use xplat supporting architecture? No
? In which directory should the app be generated?
? Which stylesheet format would you like to use? SASS(.scss) [ http://sass-lang.com ]
nx generate app
steps:
? What name would you like for this app? portal
? What type of app would like to create? electron [Electron app]
? Which frontend framework should it use? angular [Angular app]
? Use xplat supporting architecture? No
? What's the name of the web app in your workspace you'd like to use inside Electron? web-portal
? In which directory should the app be generated?
delete original portal & portal-e2e folders in app folder
yarn start.electron.portal
or
yarn start.web.portal


build:
https://hackernoon.com/electron-the-bad-parts-2b710c491547
https://medium.com/how-to-electron/a-complete-guide-to-packaging-your-electron-app-1bdc717d739f
to run build:
yarn build.electron.portal.windows
updater:
yarn add electron-updater
yarn add electron-log
add to package.json in electron app:
  "dependencies": {
    "electron-updater": "^4.2.0",
    "electron-log": "^4.0.2"
  },

helper: npx asar extract app.asar d:/testasar
run powershell as admin and from github
[Environment]::SetEnvironmentVariable("GH_TOKEN","0bfbd66c0c4d777660177a2c0f5b21c7695fe74a","User")
npm i -D electron@7.1.2
npm i -D  electron-updater@latest

