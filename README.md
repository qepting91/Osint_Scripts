# Osint_Scripts

This repository contains a collection of scripts for Open Source Intelligence (OSINT) purposes. The scripts are designed to be used in various environments, including Google Sheets, Google Apps Script, and Google Colab.

## Table of Contents

- [Google Sheets and Google Apps Script]
  - [Google Dork Assistant](google_dork_asst/README.md)
  - [Public API Data Fetcher](public_api/README.md)
  - [Domain Registration Date Checker](api_key/README.md)
  - [CVE Search by Keyword and Publication Date](api_key/README.md)
- [Google Colab Scripts](google_colab/README.md)
  - [Username Fuzzer](google_colab/username.py)
  - [Username Enumeration](google_colab/enumerate.py)
- [License](LICENSE)

## Google Sheets and Google Apps Script

The scripts not included in the google_colab folder are designed to be used within Google Sheets and Google Apps Script. Each subfolder contains scripts for specific functionalities:

- [`google_dork_asst`](google_dork_asst/readme.md): Scripts for generating Google dorks based on user input.
- [`public_api`](public_api/readme.md): Script for fetching data from a public API and populating a Google Sheets spreadsheet.
- [`api_key`](api_key/readme.md): Scripts for checking domain registration dates and searching for CVEs using API keys.

Refer to the individual README.md files in each subfolder for more details on setup, usage, and requirements.

## Google Colab Scripts

The scripts in the [`google_colab`](google_colab) folder are designed to be used within Google Colab notebooks. These scripts perform username fuzzing and enumeration.

Refer to the [README.md](google_colab/README.md) file in the `google_colab` folder for more information on each script.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
