#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Convert HTML files to PDF"""

from weasyprint import HTML, CSS
from pathlib import Path
import os

def convert_html_to_pdf(html_file, output_pdf):
    """Convert a single HTML file to PDF"""
    try:
        HTML(string=open(html_file, 'r', encoding='utf-8').read(), 
             base_url=Path(html_file).parent).write_pdf(output_pdf)
        print(f"✓ Successfully converted: {html_file} -> {output_pdf}")
        return True
    except Exception as e:
        print(f"✗ Error converting {html_file}: {str(e)}")
        return False

def main():
    base_dir = Path(__file__).parent
    
    # Convert the main index.html
    convert_html_to_pdf(
        str(base_dir / "index.html"),
        str(base_dir / "modbus-guide.pdf")
    )
    
    # Convert all section HTML files
    sections_dir = base_dir / "sections"
    if sections_dir.exists():
        for html_file in sorted(sections_dir.glob("*.html")):
            pdf_file = html_file.with_suffix('.pdf')
            convert_html_to_pdf(str(html_file), str(pdf_file))
    
    print("\n✓ All conversions completed!")
    print(f"Output directory: {base_dir}")

if __name__ == "__main__":
    main()
