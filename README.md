# Setup

To run the demo:

1. Go into `server` folder and run `npm start` or `yarn start` to run server to serve the html.
2. Install [ngrok](https://ngrok.com/) because webview don't work with `localhost`.
3. Run `$ ngrok http 3000` ngrok will generate a url for us to use.
4. Replace the url in `webview-demo/App.js` with your ngork url. 
5. Go into `webview-demo` folder and run `npm start` or `yarn start`.
6. Start running iOS and Andriod simulator.
