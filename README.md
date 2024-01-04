# Playwright_tests_with_Typescript
Basic tests with Playwright. My learning experience.

# Installing Playwright
Get started by installing Playwright using npm or yarn. Alternatively you can also get started and run your tests using the [VS Code Extension](https://playwright.dev/docs/getting-started-vscode).
```
npm init playwright@latest
```
Run the install command and select the following to get started:

- Choose between TypeScript or JavaScript (default is TypeScript)
- Name of your Tests folder (default is tests or e2e if you already have a tests folder in - your project)
- Add a GitHub Actions workflow to easily run tests on CI
- Install Playwright browsers (default is true)

# What's installed
Playwright will download the browsers needed as well as create the following files.
```
playwright.config.ts
package.json
package-lock.json
tests/
  example.spec.ts
tests-examples/
  demo-todo-app.spec.ts
```
The playwright.config is where you can add configuration for Playwright including modifying which browsers you would like to run Playwright on. If you are running tests inside an already existing project then dependencies will be added directly to your package.json.

The tests folder contains a basic example test to help you get started with testing. For a more detailed example check out the tests-examples folder which contains tests written to test a todo app.

# Run script
```
npx playwright test
```

# Generate code from browser
In order for playwright to generate your code based on all the clicks you do on the page, we will use codegen. In terminal, write the following command:
```
npx playwright codegen
```

As you can see in playwright.config.ts file, I have added a folder in which you can place the reports after every test, in json format. In the same file you can modify which test file you want to execute.
You can also see the report by executing
```
npx playwright show-report
```

# Other observations:
1. The difference between "type" and "fill" function:
- **type** = writing each letter one by one;
- **fill** = deleting the text that is already in the field and importing the text we want to fill inside.

2. For now, everytime I use the command **"npx playwright test"**, it will run all the tests that I chose to be runned from **config file**, in line _testMatch: ["tests/alertsHandling.test.ts"]_.

3. The _**await**_ keyword makes the function pause the execution and wait for a resolved promise before it continues:
```
let value = await promise;
```



# Utils
The code is written with the help of [this tutorial from LambdaTest](https://youtu.be/wawbt1cATsk).

Also, here is [Playwright official documentation](https://playwright.dev/docs/intro).

Useful articles:
- [Why Static Typing & Why is TypeScript so popular?](https://www.section.io/engineering-education/typescript-static-typing/)
- [Difference between TypeScript and JavaScript](https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/)
