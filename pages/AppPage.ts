import { expect, type Locator, type Page } from "@playwright/test";

export class AppPage {
  private readonly page: Page;
  private readonly login_page_title: string = 'Project Board Login';
  private readonly edt_username: string = '#username';
  private readonly edt_password: string = '#password';
  private readonly signin: string = 'Sign in';
  private readonly web_application_heading: string = "Web Application";
  private readonly btn_mobileApplication: string = "Mobile Application";

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async login(): Promise<void> {
    await expect(this.page.getByText(this.login_page_title)).toBeVisible();
    console.log("Application Launched Successfully");

    const username = process.env.APP_USERNAME;
    const password = process.env.APP_PASSWORD;

    if (!username || !password) {
      throw new Error("Missing APP_USERNAME or APP_PASSWORD in .env");
    }

    await this.page.locator(this.edt_username).fill(username);
    await this.page.locator(this.edt_password).fill(password);
    await this.page.getByRole("button", { name: this.signin }).click();

    await expect(this.page.getByRole("heading", {name:this.web_application_heading, level:1})).toBeVisible();
    console.log("Login Successful!!");
  }

  async navigateToApplication(applicationName: string): Promise<void> {
    if (applicationName === "Mobile Application") {
      await this.page.getByRole("button", { name: new RegExp(applicationName, "i") }).click();

      await expect(this.page.getByRole('heading', {name: applicationName, level:1})).toBeVisible();
      console.log("You are on Mobile Application Board");
    } else if (applicationName === "Web Application") {

      console.log("You are already on Web Application Board");
      return;

    }
  }

  getColumn(columnName: string): Locator {
    return this.page
      .getByRole("heading", { name: new RegExp(`^${columnName}\\s*\\(`, "i") })
      .locator("..");
  }

  getTaskCard(columnName: string, taskTitle: string): Locator {
    return this.getColumn(columnName)
      .getByText(taskTitle, { exact: true })
      .locator("..");
  }

  getTagInTaskCard(
    columnName: string,
    taskTitle: string,
    tagName: string
  ): Locator {
    return this.getTaskCard(columnName, taskTitle)
      .getByText(tagName, { exact: true });
  }
  
  async expectTaskInColumnWithTags(
    columnName: string,
    taskTitle: string,
    tags: string[]
  ): Promise<void> {
    console.log(`Checking task:"${taskTitle}" in column: "${columnName}`)
    const taskCard = this.getTaskCard(columnName, taskTitle);

    await expect(taskCard).toBeVisible();
    console.log(`Task card visible: "${taskTitle}"`);

    await expect(taskCard).toContainText(taskTitle);
    console.log(`Task title verified:"${taskTitle}"`)

    for (const tag of tags) {
      console.log(`Checking tag: "${tag}"`);
      await expect(taskCard.getByText(tag, { exact: true })).toBeVisible();
      console.log(`Tag visible: "${tag}"`);
    }
  }
}