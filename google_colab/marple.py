# marple.py

"""
This file represents the structure of a Google Colab notebook for running the Marple OSINT tool.
Each section is clearly marked to represent a separate cell in the notebook.
"""

# ========================== CELL 1: Setup and Input Widgets ==========================
# Run this cell to set up the input widgets

import ipywidgets as widgets
from IPython.display import display

# Create input widgets
username = widgets.Text(description='Username:')
yandex_key = widgets.Text(description='Yandex API Key:', placeholder='Optional')
naver_key = widgets.Text(description='Naver API Key:', placeholder='Optional')
baidu_key = widgets.Text(description='Baidu API Key:', placeholder='Optional')
use_plugins = widgets.Checkbox(description='Use plugins')
custom_engines = widgets.Text(description='Custom engines:', placeholder='space-separated, or leave blank')
export_csv = widgets.Checkbox(description='Export to CSV')
csv_filename = widgets.Text(description='CSV filename:', value='marple.csv')

# Display widgets
display(username, yandex_key, naver_key, baidu_key, use_plugins, custom_engines, export_csv, csv_filename)

# ========================== CELL 2: Marple Execution Function ==========================
# Run this cell to define the function that will execute Marple

def run_marple(b):
    # Clone the repository and install dependencies
    !git clone https://github.com/soxoj/marple.git
    %cd marple
    !pip install -r requirements.txt

    # Set environment variables
    import os
    if yandex_key.value: os.environ['YANDEX_KEY'] = yandex_key.value
    if naver_key.value: os.environ['NAVER_KEY'] = naver_key.value
    if baidu_key.value: os.environ['BAIDU_KEY'] = baidu_key.value

    # Function to run Marple commands
    def run_command(cmd):
        !python3 marple.py {cmd}

    # Run Marple based on user inputs
    run_command(username.value)

    if use_plugins.value:
        run_command(f"{username.value} --plugins metadata")

    if custom_engines.value:
        run_command(f"{username.value} --engines {custom_engines.value} -v")

    if export_csv.value:
        run_command(f"{username.value} --csv {csv_filename.value}")
        print(f"CSV file '{csv_filename.value}' has been created.")

# ========================== CELL 3: Run Button ==========================
# Run this cell to create the "Run Marple" button

# Button to run the script
run_button = widgets.Button(description="Run Marple")
display(run_button)

run_button.on_click(run_marple)

# ========================== CELL 4: Display CSV ==========================
# Run this cell to create the function and button for displaying CSV contents

import pandas as pd
from IPython.display import display, HTML

def display_csv():
    try:
        # Read the CSV file
        df = pd.read_csv(csv_filename.value)
        
        # Display basic information about the DataFrame
        print(f"CSV file '{csv_filename.value}' contents:")
        print(f"Number of rows: {len(df)}")
        print(f"Number of columns: {len(df.columns)}")
        print("\nColumn names:")
        print(df.columns.tolist())
        
        # Display the first few rows of the DataFrame
        display(HTML(df.head().to_html()))
        
        # Optional: Display summary statistics
        print("\nSummary Statistics:")
        display(df.describe())
        
    except FileNotFoundError:
        print(f"CSV file '{csv_filename.value}' not found. Please run the Marple script first.")
    except pd.errors.EmptyDataError:
        print(f"CSV file '{csv_filename.value}' is empty.")
    except Exception as e:
        print(f"An error occurred while reading the CSV file: {str(e)}")

# Button to display CSV contents
display_csv_button = widgets.Button(description="Display CSV Contents")
display(display_csv_button)

display_csv_button.on_click(lambda b: display_csv())

# ========================== END OF FILE ==========================
