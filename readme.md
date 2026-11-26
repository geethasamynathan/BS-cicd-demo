
1. first create three different files that is index .Html, script.Js, title.Css.
2. Create a repository And push these files. Using the. Terminate or get CLI.
3. 
4. Actor pushed it. Go to the Gita Repository settings. There in the left side pan you can find the pages. You can change the build and deploy as a Github Actions.

5. Here now we're going to create a workflow that it is going to perform the continuous integration and deployment.
6. 
7. For that you just create a new folder with the name of Gita. Within that create another new folder. It's a workflows within that you just create Hello.yml file. 
8. 
```yaml
name: My First Workflow
on:
  push:
    branches: [main]
jobs:
  hello-job:
    runs-on: ubuntu-latest
    steps:
      - name: Print welcome message
        run: echo "Welcome to GitHub Actions"
```

9. After adding the yml file again, you just go ahead with the git commands like git add, dot git commit, git push.
10. Once the push is completed, automatically your workflow will be available in your Gita repository under the Actions tab. 
11. You can check your workflow whether it is. Running the job successful. Or failure. If you want, you can rerun the same job manually using the Rerun job button.

12. Next we are going to write the deployment. Configuration file. You can delete hello yml instead of that you can add deploy yml file. Here we are giving the configurations When it needs to happen, what actions needs to perform When the job needs to run and Whether the build success or not. If build success how it is deploying?.

```
name: ITTechGenie Website CI-CD
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - name: Validate files
        run: |
          set -e
          test -s index.html
          test -s style.css
          test -s script.js
      - name: Validate JavaScript
        run: node --check script.js
      - name: Package website
        run: |
          mkdir -p dist
          cp index.html style.css script.js dist/
      - uses: actions/configure-pages@v5
        if: github.event_name != 'pull_request'
      - uses: actions/upload-pages-artifact@v4
        if: github.event_name != 'pull_request'
        with:
          path: dist
  deploy:
    needs: build
    if: github.ref == 'refs/heads/main' && github.event_name != 'pull_request'
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy website
        id: deployment
        uses: actions/deploy-pages@v4

```


13. After adding he deploy.yml  push your codfe and check the workflow

14. For next versions are any changes we are performing that changes also you can make it in AH, HTML file and push your code and check whenever we are pushing the code automatically build and deploy workflow it started and it is affected in your. Web page as well. 

15. Just to get a. Build fail intentionally. I'm going to change the script dot JS file without one variable declaration, without any. Assignment. Or initialization. I'm just going to push the code with an error. Then check whether it's a bill to succeed or fail. If build fail, what would be the deployment? It happens And justice? Check it. 

16. Post that correct your error in the script JS file and again you can push the code now you can. Realize that build will be successful whenever we don't have any error in our application then deployment also will continue. 