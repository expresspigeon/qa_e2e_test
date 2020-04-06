# E2E Automation test 

### Prepare local machine

1. Download and install [Node.js](https://nodejs.org/en/download/)
2. Download and install [Git](https://git-scm.com/download)
3. Download and install [Visual Studio Code](https://code.visualstudio.com/download) or any other JS GUI
4. Install Yarn globally `npm install -g yarn`

### Download and Install

1. Clone repository `git clone git@github.com:expresspigeon/qa_e2e_test.git`
2. Go to `qa_e2e_test` folder install all dependencies `yarn install`
3. Create screenshots folder `mkdir screenshots`
4. Download latest version of [Chrome Driver](https://chromedriver.chromium.org/downloads) 

### Execute test

Every test are located in `test/specs/` folder. Each ExpressPigeon tab have separate folder (Templates, Contacts etc.). Folder `elements` have only test cases for check displayed elements.
Before test execute Chrome Driver `./chromedriver --port=4444` in chrome drivers path.

1. Execute all test: `yarn test`
2. Execute test for one tab: `yarn test --spec ./test/specs/contacts/`
3. Execute test from one file: `yarn test --spec ./test/specs/contacts/lists.js`

### Generate HTML Report

After each failed test screenshot is saved in `/screenshots`
Allure report is generated manually

1. Generate report `yarn reportGenerate`
2. Open report `allure open`