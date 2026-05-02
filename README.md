# 🚀 Playwright Automation Framework – Loop Technical Assessment

## 📌 Overview
This project demonstrates an end-to-end UI automation framework built using **Playwright with TypeScript** for validating a Task Board application.

The framework focuses on:
- Page Object Model (POM)
- Data-driven testing
- Parallel and Serial execution
- HTML reporting and logging

---

## 🧰 Tech Stack
- Playwright
- TypeScript
- Node.js

---

## ⚙️ How to Set Up

1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Install project dependencies

```bash
npm install
```

3. Install Playwright browsers

```bash
npx playwright install
```

4. Run tests

```bash
npm run test
```

5. Run tests in headed mode

```bash
npm run test:headed
```

6. Open HTML report

```bash
npm run report
```

## 📁 Project Structure
.
├── pages/
│ └── AppPage.ts
├── tests/
│ └── task-board.spec.ts
├── test-data/
│ └── taskscenarios.ts
├── playwright.config.ts
├── package.json
└── playwright-report/


---

## 🧪 Test Scenarios
- Validate tasks in correct column
- Verify task titles
- Validate associated tags

---

## 🧠 Framework Highlights

### ✔ Page Object Model
All UI actions handled in:AppPage.ts


### ✔ Data Driven Testing
Scenarios defined in: taskscenarios.ts

### ✔ Fixtures
Fixture for login page: loginFixture.ts


### ✔ Execution Modes
- Serial (default)
- Parallel (multi-worker)

---

## ▶️ How to Run

### Run tests
npm run test

### Headed mode
npm run test:headed

### Serial execution
npm run test:serial

### Parallel execution
npm run test:parallel


---

## 📊 Reporting

### Open HTML report
npm run report


Report location:
playwright-report/index.html


---

## 📝 Logging
Logs added for debugging:
- Task validation
- Tag verification

Example:
Checking task...
Task card visible
Tag visible


---

## ⚠️ Assumptions
- Login handled using fixtures
- Runs in both Serial and parallel modes
- Optimized locators using Playwright best practices like locator chaining





