# Hamm Playwright Framework 

This repo contains e2e tests written in Playwright.


## Help + Testing

The steps below will take you all the way through Playwright. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Playwright Support](https://playwright.dev/)

### 1. Install Playwright

[Follow these instructions to install Playwright.](https://playwright.dev/docs/intro)

### 2. Fork this repo

If you want to experiment with running this project in Continuous Integration, you'll need to [fork](https://github.com/anthony-hamm/playwright-framework-poplin#fork-destination-box) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/playwright-framework-poplin.git

## cd into the cloned repo
cd playwright-framework-poplin

## install the node_modules
npm install

## start the local webserver
npx playwright test
```

The `npx playwright test` script will run playwright locally.

You should see the Playwright interface up and running. We are now ready to run Playwright tests.

### 3. Add new tests!

[Follow these instructions to add new tests into the project.](https://playwright.dev/docs/writing-tests)
