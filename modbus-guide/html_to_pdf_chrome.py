#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Convert HTML files to PDF using browser print to file"""

import subprocess
import os
from pathlib import Path

def print_to_pdf_via_chrome(html_file, pdf_file):
    """Use Chrome/Chromium to print HTML to PDF"""
    abs_html_path = os.path.abspath(html_file)
    abs_pdf_path = os.path.abspath(pdf_file)
    
    # Try different Chrome executables
    chrome_paths = [
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        "C:\\Users\\Tri\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe",
    ]
    
    chrome_path = None
    for path in chrome_paths:
        if os.path.exists(path):
            chrome_path = path
            break
    
    if not chrome_path:
        print("Chrome not found. Using alternative method...")
        return False
    
    try:
        # Use Chrome headless to print to PDF
        cmd = [
            chrome_path,
            f"--headless",
            f"--disable-gpu",
            f"--print-to-pdf={abs_pdf_path}",
            f"--print-to-pdf-no-header",
            f"file://{abs_html_path}"
        ]
        
        result = subprocess.run(cmd, capture_output=True, timeout=30)
        if result.returncode == 0:
            print(f"✓ Converted: {html_file} -> {pdf_file}")
            return True
        else:
            print(f"✗ Chrome conversion failed for {html_file}")
            return False
    except Exception as e:
        print(f"✗ Error: {str(e)}")
        return False

def main():
    base_dir = Path(__file__).parent
    
    print("Converting HTML files to PDF...")
    print("-" * 50)
    
    # Convert the current file
    convert_file = base_dir / "sections/02-internet-connection.html"
    pdf_file = convert_file.with_suffix('.pdf')
    
    if convert_file.exists():
        print_to_pdf_via_chrome(str(convert_file), str(pdf_file))
    else:
        print(f"✗ File not found: {convert_file}")
    
    print("-" * 50)
    print("Done!")

if __name__ == "__main__":
    main()
