import itertools
import csv
def generate_usernames(name, existing_usernames=[]):
# Split the name into first name and last name (if applicable)
name_parts = name.lower().split()
# Generate possible usernames
usernames = []
# Add original name
usernames.append("".join(name_parts))
# Add existing usernames
usernames.extend(existing_usernames)
# Add combinations of initials
initials = [part[0] for part in name_parts]
for r in range(1, len(initials) + 1):
usernames.extend(["".join(combo) for combo in
itertools.combinations(initials, r)])
# Add combinations of first name and last name
if len(name_parts) > 1:
first_name = name_parts[0]
last_name = name_parts[-1]
usernames.append(first_name)
usernames.append(last_name)
# Add combinations of first name and last name initials
usernames.append(first_name[0] + last_name)
usernames.append(first_name + last_name[0])
# Add variations with numbers
for i in range(10):
usernames.extend([username + str(i) for username in usernames])
# Filter out usernames with less than 3 letters
usernames = [username for username in usernames if len(username) >= 3]
return usernames
def save_possible_usernames_to_csv(usernames):

Python
with open("possible_usernames.csv", mode="w", newline="", encoding="utf-8")
as file:
writer = csv.writer(file)
writer.writerow(["username"])
for username in usernames:
writer.writerow([username])

# Example usage:
name = "John Doe"
existing_usernames = ["jdoe1", "doejohn", "jodoe33"]
possible_usernames = generate_usernames(name, existing_usernames)
save_possible_usernames_to_csv(possible_usernames)