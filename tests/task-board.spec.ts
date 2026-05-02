import { test,expect } from "../fixtures/loginFixture";
import { taskScenarios } from "../test-data/taskScenarios";

test.describe.configure({ mode: "parallel" });

test.describe("App task board scenarios", () => {
  for (const scenario of taskScenarios) {
    test(`verify ${scenario.name}`, async ({appPage}) => {
      await appPage.navigateToApplication(scenario.application);

      await appPage.expectTaskInColumnWithTags(
        scenario.column,
        scenario.taskTitle,
        scenario.tags
      );
    });
  }
});