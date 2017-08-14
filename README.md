## Simple chat bot for mapping questions to stack overflow answers.

## Getting Started


# YouTube url for sample
https://youtu.be/ACnUQD-pCrU


# Android(React native)
`npm install`

Make sure to you have react native installed on your system
Please refer `https://facebook.github.io/react-native/docs/getting-started.html` for setting up react native on your system

- 
- Navigate to src/constants/AppConstant.js in android 
- Change `SERVER_URL` to your localhost ex:`http://192.168.43.44` 
- Set Port to 4000
- Final url ex:`http://192.168.43.44:4000`



# Node-Backend
`npm install`

- Navigate src/constant.js in Node-Backend
- Change `SERVER_URL` to your localhost ex:`http://192.168.43.44` 
- Set Port to 5000
- Final url ex:`http://192.168.43.44:5000/process`



# Python-Server
`pip install -r requirements.txt`


- Make sure difflib, textblob, pandas, numpy, sklearn, BeautifulSoup is installed
- Now download csv files from web. 
- Answers.csv `https://www.kaggle.com/stackoverflow/pythonquestions`
- Questions.csv `https://www.kaggle.com/stackoverflow/pythonquestions`
- Place in root directory i.e adjacent to requirements.txt

# After you are done with this. Connect your android device with your PC and run

For Android in a new terminal window navigate to Android directory and run
Please refer facebook react-native home page for more info on how to run app on device.
`react-native run-android` this will install the app on your android device  
`npm start`

For Node-backend run
`npm run dev`

For Python-Backend run
`python application.py`

