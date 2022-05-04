# Content style guide for Datree Docs

Welcome to the content style guide for [Datree Docs](https://docs.datree.io/).

## Headers

- Use H2 for headers, and H3 for subheaders. When referring to headers, surround the header name with (regualr) quotation marks.
  - **Use:** Under "User licenses", view your total licenses.
- Only the first letter should be capitalized in headers
  - **Use:** Policy customization
  - **Avoid:** Policy Customization

## Code

### Code blocks

Keep lines in code samples to about 60 characters, to avoid requiring readers to scroll horizontally in the code block. Locate explanatory text before the code block, rather than using comments inside the code block.

Within code blocks:
- Do not use markup before the command output.
- Only use `$` before the command itself if you’re showing the command’s output in the same block.

### Commands

Use inline code blocks to refer to short command names.
- **Use:** To check the status of a running cluster, use the `ghe-cluster-status` command.

Use command blocks for longer or more complex commands.
- **Use:** Enable maintenance mode according to your scheduled window by connecting to the administrative shell of any cluster node and running:

  ```
  ghe-cluster-maintenance -s
  ```

Avoid inline links in command names.

### Examples

When code examples refer to a larger file, show the relevant section of the file, so that users understand how to edit their own code in context.
- **Use:**

```
on:
  schedule:
    - cron:  "40 19 * * *"
```

- **Avoid:**

```
schedule:
  - cron:  "40 19 * * *"
```

### Indentation

In YAML examples, such as actions and workflow files, use two spaces to indent lines within nested lists and block sequences.

- **Use:**

```yaml
spec:
  containers:
    - name: app
      image: nginx
```

## Images

### Screenshots

- Screenshots enhance our content but can't replace it. 
- When replacing an existing image (such as for an updated button in the UI), best practice is to retain the image's filename. If you must change an image filename, search the help docs repository for other references to that image and update all references to the original filename. If the image is used in deprecated versions of GHES documentation, please don't change the filename.
- Screenshots should have descriptive names to make them easier to find. For example, use the name `gist-embed-link.png` instead of `right_side_page_03.png`.
- Screenshots should have a transparent border and shadow
- When we want to highlight a CTA in a screenshot we should use the [hand mouse cursor icon](https://user-images.githubusercontent.com/19731161/166833991-fd270118-fbd5-4a2c-9bd2-3535e413c689.png) instead of arrows.
- Termianl and dashboard screenshorts should be mocked with a fram

## Inclusive language
Datree is committed to promoting diversity and inclusion in every aspect of what we do. It is critical that all of our documentation is inclusive and respectful of our audience, which consists of people in widely varying circumstances from all over the planet. When we write our documentation, we use words that are inclusive, anti-racist, and accessible.

Individual words might be small, but together they can create community, belonging, and equity. Be empathetic in all word and style choices. Be accurate when referring to people and communities.

| Use | Avoid |
| --- | --- |
| Allowlist | Whitelist |
| Denylist | Blacklist |
| Default/Main branch | Master branch |

## Procedural steps

Procedures give readers a set of sequential steps to follow to complete a task. Always use numbered lists for procedures. Give readers all of the prerequisites or conceptual information they’ll need to complete the task before the procedure, rather than including it within a specific step.

Each step must include an action. You can also choose to include whether a step is optional, explain the reason or result of the step, and orient the reader by describing the location of the action, before guiding them to complete the action.

Use a consistent order to present information within each step.
1. If the step is optional, indicate that first.
2. When needed for clarity, or to reinforce the severity of a destructive or confusing action, explain the reason for or result of the step.
3. Describe the location the user will find the action in.
4. Action.

**Use:** Optionally, to [REASON], in [LOCATION], take [ACTION].

Examples:
- Click **Payment information**.
- Under your organization name, click **Settings**.
- To confirm your change, click **Remove credit card**.
- Optionally, to see your plan’s details, click **Show details**.

## User interface elements

### Boldface

Use bold to describe UI elements that can be interacted with.
- In the left sidebar, click **Billing**.
- Look in the merge box at the bottom of the pull request's **Conversation** tab.
- Next to **Title**, add a descriptive label for your new key.

## Dynamic text

- Use all lower italic letters kebab case naming convention inside `<>` to indicate text that changes in the user interface or code snippet.
  - **Use:** Passing Kubernetes \<_schema-version_\> schema validation
- Use camel case naming convention inside `[]` to indicate `flags` and `options` that should pass to a command
  - **Use:** `datree kustomize test [path] [cliArgs] -- [kustomizeArgs]`

## Terms to use or avoid

| Use | Avoid |
| --- | --- |
| dashboard | GUI, UI |
| person | user, customer |
| terminal | shell |
| username | login |
| sign in  | log in, login |
| sign up | signup |
| recommended limit | soft limit |
| email | e-mail |
| press (a key) | hit, tap |
| type (in the user interface) | enter (in the user interface) |
| enter (in the command line) | type (in the command line) |
