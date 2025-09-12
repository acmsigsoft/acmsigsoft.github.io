# Website of The ACM Special Interest Group on Software Engineering (SIGSOFT)


[![Deploy to Production](https://github.com/acmsigsoft/acmsigsoft.github.io/actions/workflows/production-deploy.yml/badge.svg)](https://github.com/acmsigsoft/acmsigsoft.github.io/actions/workflows/production-deploy.yml)

## Overview
Welcome to the ACM SIGSOFT GitHub repository!

This repository contains the source code for the [ACM SIGSOFT website](https://www2.sigsoft.org). 
The website is built using [Hugo-Universal-Theme](https://github.com/devcows/hugo-universal-theme) and hosted on GitHub Pages.


The website is maintained by the [ACM SIGSOFT Information Director](https://www2.sigsoft.org/contact/).
If you have any questions or suggestions, please feel free to contact the Information Director.

## Contributing
If you would like to contribute to the website, please fork the repository and submit a pull request.
We welcome contributions from anyone who is interested in improving the website.

Most of the content on the website can be revised by modifying the Markdown files in the `content` directory.
Images and other static files can be added to the `static` directory.
Configuration of the website, including the top bar and index page, can be done in the `config.toml` file.

### Development
To editing the information on the website, you may fork this website repository and edit the content files in the `content` directory.
Alternatively, you can also edit the content files directly on GitHub using the web interface.
The content files are written in Markdown, and you can use any text editor to edit them.
The website uses [Hugo](https://gohugo.io/) as the static site generator, so you will need to install Hugo to build the website locally.
You can find the documentation for Hugo [here](https://gohugo.io/documentation/).



### Testing
To test the website locally, please clone this repository and run the following commands:

```bash
# Clone the repository and its submodules
# you may have to change the URL to your forked repository
git clone --recurse-submodules git@github.com:acmsigsoft/acmsigsoft.github.io.git

# Install Hugo if you haven't already
# See https://gohugo.io/installation/
brew install hugo # For macOS users
sudo snap install hugo # For linux users

# Navigate to the repository directory
cd acmsigsoft.github.io

# Start the Hugo server
hugo server
```

Alternatively, to test the website on GitHub, please create a pull request and the GitHub Actions workflow will automatically build and deploy the website to a staging environment.
You can then review the changes on the staging environment before asking for reviewing the pull request.

There are two GitHub Actions workflows defined in the `.github/workflows` directory:
- `pr-preview.yml`: This workflow is triggered on pull requests and deploys the website to a temporary URL.
- `production-deploy.yml`: This workflow is triggered on pushes to the main branch and deploys the website to the production URL.
You can enable these workflows in your forked repository by going to the "Actions" tab and clicking on the "Enable workflow" button. 


### Acknowledgements
This website is or was previously maintained by:
- Yongqiang Tian, Monash University, Australia (since 2024)
- Raula Gaikovina Kula, The University of Osaka, Japan (2021-2024)