import os
import sys
import subprocess
import shutil

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = r"C:\Users\KingTonyTech\Desktop\Projects\nursing-portfolio"
IMAGES_DIR = os.path.join(BASE_DIR, "public", "images")
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

profile_img_path = os.path.join(IMAGES_DIR, "chidi-catherine-profile.jpg").replace(os.sep, "/")

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap');
  
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  
  html, body {{
    width: 1200px;
    height: 630px;
    overflow: hidden;
    background: radial-gradient(circle at 75% 25%, rgba(20, 184, 166, 0.22) 0%, transparent 50%),
                radial-gradient(circle at 20% 75%, rgba(14, 165, 233, 0.15) 0%, transparent 45%),
                #070c18;
    color: #f8fafc;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  }}
  
  .banner-container {{
    width: 1200px;
    height: 630px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    padding: 44px 48px;
    gap: 48px;
    align-items: stretch;
    position: relative;
  }}
  
  .left-col {{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }}
  
  .eyebrow-row {{
    display: flex;
    align-items: center;
    gap: 12px;
  }}
  
  .pulse-dot {{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #10b981;
    box-shadow: 0 0 10px #10b981;
  }}
  
  .eyebrow {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #2dd4bf;
  }}
  
  .main-heading {{
    margin-top: 14px;
  }}
  
  .name {{
    font-size: 40px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.03em;
    line-height: 1.15;
    white-space: nowrap;
  }}
  
  .title-sub {{
    font-size: 21px;
    font-weight: 600;
    color: #94a3b8;
    margin-top: 8px;
  }}
  
  .tagline {{
    font-size: 16px;
    font-weight: 700;
    color: #38bdf8;
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 0.05em;
    margin-top: 6px;
  }}
  
  .highlights-grid {{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 22px;
  }}
  
  .badge-chip {{
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 9px 15px;
    border-radius: 2px;
    font-size: 13.5px;
    color: #e2e8f0;
  }}
  
  .badge-chip strong {{
    color: #2dd4bf;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }}
  
  .footer-row {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 16px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: #64748b;
  }}
  
  .right-col {{
    width: 380px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }}
  
  .photo-frame {{
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: #030712;
    position: relative;
    overflow: hidden;
  }}
  
  .photo-frame img {{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 8%;
    display: block;
  }}
  
  .photo-overlay-tag {{
    position: absolute;
    bottom: 14px;
    right: 14px;
    background: rgba(6, 10, 20, 0.88);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.22);
    padding: 7px 14px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11.5px;
    font-weight: 700;
    color: #2dd4bf;
    letter-spacing: 0.08em;
  }}
</style>
</head>
<body>
  <div class="banner-container">
    <div class="left-col">
      <div>
        <div class="eyebrow-row">
          <span class="pulse-dot"></span>
          <span class="eyebrow">College of Nurses of Ontario &bull; Licensed RPN (2021)</span>
        </div>
        
        <div class="main-heading">
          <h1 class="name">Chidi Catherine Obi-Hezekiah</h1>
          <div class="title-sub">Honours Bachelor of Science in Nursing Candidate &apos;27</div>
          <div class="tagline">Clinical Rigour. Compassionate Care.</div>
        </div>
        
        <div class="highlights-grid">
          <div class="badge-chip">
            <strong>Honour:</strong> Seneca Polytechnic President&apos;s Honour List (Winter 2026)
          </div>
          <div class="badge-chip">
            <strong>Placements:</strong> Mackenzie Health (3 Aqua) &bull; Brampton Civic General Medicine
          </div>
          <div class="badge-chip">
            <strong>Experience:</strong> 4+ Years Acute Care, Medical-Surgical &amp; LTC Practice
          </div>
        </div>
      </div>
      
      <div class="footer-row">
        <span>Seneca Polytechnic School of Nursing</span>
        <span>Systems: Epic &bull; Meditech &bull; PointClickCare</span>
      </div>
    </div>
    
    <div class="right-col">
      <div class="photo-frame">
        <img src="file:///{profile_img_path}" alt="Chidi Catherine Obi-Hezekiah, RPN" />
        <div class="photo-overlay-tag">CNO RPN #2021 &bull; BSN &apos;27</div>
      </div>
    </div>
  </div>
</body>
</html>
"""

html_temp = os.path.join(PUBLIC_DIR, "og-template.html")
with open(html_temp, "w", encoding="utf-8") as f:
    f.write(html_content)

banner_png_path = os.path.join(IMAGES_DIR, "og-banner.png")
root_og_png = os.path.join(PUBLIC_DIR, "og-image.png")

cmd = [
    CHROME_PATH,
    "--headless=new",
    "--disable-gpu",
    "--window-size=1200,630",
    f"--screenshot={banner_png_path}",
    f"file:///{html_temp.replace(os.sep, '/')}"
]

print("Rendering full-bleed OG Banner image via Chrome...")
subprocess.run(cmd, check=True)

shutil.copy2(banner_png_path, root_og_png)
print("Copied to", root_og_png)

if os.path.exists(html_temp):
    os.remove(html_temp)

print("Full-bleed OG Banner generated successfully!")
