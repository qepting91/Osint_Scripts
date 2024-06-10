## Google Colab Scripts

### Username Fuzzer (username.py)

This script generates possible usernames based on a given name and any existing usernames you have found attached to the target.

#### Input
- Your target's name
- Any other usernames you have found attached to them

#### Output
- A file named `possible_usernames.csv` containing the generated usernames

### Username Enumeration (enumerate.py)

This script performs username enumeration using the Maigret tool.

#### Input
- Change the `username` variable to the username you want to search for

#### Output
- A folder named "Reports" containing a file named `username_report.pdf`