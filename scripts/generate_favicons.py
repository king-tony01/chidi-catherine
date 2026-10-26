from PIL import Image, ImageDraw, ImageEnhance
import os

def generate_favicons():
    src_path = 'public/images/chidi-catherine-profile.jpg'
    if not os.path.exists(src_path):
        raise FileNotFoundError(f"Source image not found: {src_path}")

    im = Image.open(src_path)
    w, h = im.size
    
    # 1. Square crop centered around her face
    # Focus slightly towards upper half where facial features and eyes are centered
    box = (0, 30, w, 30 + w)
    crop = im.crop(box).convert('RGBA')

    # Enhance contrast and sharpness slightly for tiny icon resolution fidelity
    enh_c = ImageEnhance.Contrast(crop)
    crop = enh_c.enhance(1.08)
    enh_s = ImageEnhance.Sharpness(crop)
    crop = enh_s.enhance(1.15)

    base_size = 512
    crop_resized = crop.resize((base_size, base_size), Image.Resampling.LANCZOS)

    # 2. Anti-aliased high-resolution circular mask (supersampled 4x)
    mask = Image.new('L', (base_size * 4, base_size * 4), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((24, 24, base_size * 4 - 24, base_size * 4 - 24), fill=255)
    mask = mask.resize((base_size, base_size), Image.Resampling.LANCZOS)

    # 3. Transparent circular avatar with brand teal ring (#0d9488)
    circular = Image.new('RGBA', (base_size, base_size), (0, 0, 0, 0))
    circular.paste(crop_resized, (0, 0), mask=mask)
    draw_stroke = ImageDraw.Draw(circular)
    draw_stroke.ellipse((6, 6, base_size - 7, base_size - 7), outline=(13, 148, 136, 255), width=14)

    # 4. Apple Touch Icon canvas with solid crisp white background to prevent iOS black corner bug
    apple_canvas = Image.new('RGBA', (base_size, base_size), (255, 255, 255, 255))
    avatar_for_apple = circular.resize((472, 472), Image.Resampling.LANCZOS)
    apple_canvas.paste(avatar_for_apple, (20, 20), mask=avatar_for_apple)

    # 5. Generate and save all targets
    # A. Multi-resolution .ico for browsers
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    ico_imgs = [circular.resize(s, Image.Resampling.LANCZOS) for s in ico_sizes]
    
    # Save src/app/favicon.ico and public/favicon.ico
    for target in ['src/app/favicon.ico', 'public/favicon.ico']:
        ico_imgs[-1].save(target, format='ICO', sizes=ico_sizes)
        print(f"Created: {target}")

    # B. Standard PNG icons (32x32, 192x192, 512x512)
    icon_32 = circular.resize((32, 32), Image.Resampling.LANCZOS)
    icon_32.save('src/app/icon.png')
    icon_32.save('public/icon.png')
    print("Created: src/app/icon.png and public/icon.png")

    icon_192 = circular.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save('public/icon-192.png')
    print("Created: public/icon-192.png")

    circular.save('public/icon-512.png')
    print("Created: public/icon-512.png")

    # C. Apple Touch Icon (180x180)
    apple_180 = apple_canvas.resize((180, 180), Image.Resampling.LANCZOS)
    apple_180.save('src/app/apple-icon.png')
    apple_180.save('public/apple-icon.png')
    print("Created: src/app/apple-icon.png and public/apple-icon.png")

if __name__ == '__main__':
    generate_favicons()
