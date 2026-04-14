import sys
from PIL import Image

def get_bbox(filepath):
    try:
        img = Image.open(filepath).convert("RGBA")
        bbox = img.getbbox()
        if bbox:
            print(f"{filepath}: {bbox} (width: {bbox[2]-bbox[0]}, height: {bbox[3]-bbox[1]})")
        else:
            print(f"{filepath}: Empty or fully transparent")
    except Exception as e:
        print(f"{filepath}: Error: {e}")

for file in sys.argv[1:]:
    get_bbox(file)
