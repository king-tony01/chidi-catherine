import os
import sys
import subprocess
import pptx

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = r"C:\Users\KingTonyTech\Desktop\Projects\nursing-portfolio"
DOCS_DIR = os.path.join(BASE_DIR, "public", "documents")
IMAGES_DIR = os.path.join(BASE_DIR, "public", "images", "artifacts")
CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

os.makedirs(DOCS_DIR, exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)

# -------------------------------------------------------------
# 1. HEMODIALYSIS PRESENTATION
# -------------------------------------------------------------
hemo_html = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Hemodialysis Care to a Patient With End-Stage Renal Disease (ESRD)</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
  
  @page {
    size: 11in 6.1875in;
    margin: 0;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #080d1a;
    color: #e2e8f0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  
  .slide {
    width: 11in;
    height: 6.1875in;
    position: relative;
    padding: 2.2rem 2.8rem;
    page-break-after: always;
    break-after: page;
    overflow: hidden;
    background: radial-gradient(circle at 90% 10%, rgba(14, 165, 233, 0.08) 0%, transparent 60%), #080d1a;
    border-bottom: 1px solid #1e293b;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .slide-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.8rem;
    margin-bottom: 1rem;
  }
  
  .category-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #0ea5e9;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .slide-title {
    font-size: 1.55rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.02em;
  }
  
  .slide-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: #64748b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.25rem 0.6rem;
    border-radius: 2px;
  }
  
  .slide-body {
    flex: 1;
    display: flex;
    gap: 1.6rem;
    align-items: stretch;
  }
  
  .col {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  .col-2 {
    flex: 2;
  }
  
  .slide-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 0.6rem;
    font-size: 0.72rem;
    color: #64748b;
    font-family: 'JetBrains Mono', monospace;
  }
  
  /* Title Slide */
  .title-slide {
    background: radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 60%),
                #060a14;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3rem;
  }
  
  .title-pill {
    display: inline-block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #38bdf8;
    background: rgba(14, 165, 233, 0.12);
    border: 1px solid rgba(14, 165, 233, 0.3);
    padding: 0.35rem 0.9rem;
    border-radius: 2px;
    margin-bottom: 1.2rem;
  }
  
  .main-title {
    font-size: 2.25rem;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.03em;
    line-height: 1.2;
    max-width: 900px;
    margin-bottom: 1rem;
  }
  
  .main-subtitle {
    font-size: 1.05rem;
    color: #94a3b8;
    max-width: 780px;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
  
  .title-meta-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
    width: 100%;
    max-width: 880px;
    text-align: left;
  }
  
  .meta-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.2rem;
  }
  
  .meta-val {
    font-size: 0.85rem;
    color: #e2e8f0;
    font-weight: 600;
  }
  
  /* Cards & Tables */
  .card {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem 1.2rem;
    border-radius: 2px;
    margin-bottom: 0.8rem;
  }
  
  .card-title {
    font-size: 0.9rem;
    font-weight: 700;
    color: #38bdf8;
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  p, li {
    font-size: 0.82rem;
    line-height: 1.5;
    color: #cbd5e1;
  }
  
  ul {
    margin-left: 1.2rem;
  }
  
  li {
    margin-bottom: 0.35rem;
  }
  
  .highlight-box {
    border-left: 3px solid #0ea5e9;
    padding-left: 0.9rem;
    background: rgba(14, 165, 233, 0.05);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0.8rem;
  }
  
  table.clinical-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
  
  table.clinical-table th {
    background: #0f172a;
    color: #94a3b8;
    text-transform: uppercase;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.05em;
    padding: 0.45rem 0.7rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
  
  table.clinical-table td {
    padding: 0.42rem 0.7rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    color: #cbd5e1;
  }
  
  table.clinical-table tr:last-child td {
    border-bottom: none;
  }
  
  .critical-high {
    color: #f87171;
    font-weight: 600;
  }
  
  .critical-low {
    color: #fb923c;
    font-weight: 600;
  }
  
  .img-container {
    width: 100%;
    height: 100%;
    max-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #030712;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
  }
  
  .img-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
</style>
</head>
<body>

  <!-- Slide 1: Title -->
  <div class="slide title-slide">
    <div class="title-pill">Clinical Presentation &amp; Case Analysis</div>
    <h1 class="main-title">Hemodialysis Care to a Patient With End-Stage Renal Disease (ESRD)</h1>
    <p class="main-subtitle">A comprehensive clinical evaluation of renal failure pathophysiology, dialyzer fluid dynamics, lab profiles, and evidence-based nursing interventions.</p>
    
    <div class="title-meta-grid">
      <div>
        <div class="meta-label">Author</div>
        <div class="meta-val">Chidi Catherine Obi-Hezekiah, RPN</div>
      </div>
      <div>
        <div class="meta-label">Program</div>
        <div class="meta-val">Honours BSN Candidate '27</div>
      </div>
      <div>
        <div class="meta-label">Institution</div>
        <div class="meta-val">Seneca Polytechnic</div>
      </div>
      <div>
        <div class="meta-label">Clinical Focus</div>
        <div class="meta-val">Acute Medicine &amp; Nephrology</div>
      </div>
    </div>
  </div>

  <!-- Slide 2: Introduction & Definition -->
  <div class="slide">
    <div class="slide-header">
      <div>
        <div class="category-tag">Theoretical Foundation</div>
        <div class="slide-title">Introduction &amp; Definition of Hemodialysis</div>
      </div>
      <div class="slide-num">SLIDE 02 / 11</div>
    </div>
    <div class="slide-body">
      <div class="col">
        <div class="card">
          <div class="card-title">What is Hemodialysis (HD)?</div>
          <p>Hemodialysis is an extracorporeal life-sustaining therapy that removes accumulated metabolic uremic wastes and excess fluid from the circulatory system when native renal function fails.</p>
        </div>
        <div class="highlight-box">
          <p><strong>Extracorporeal Circuit:</strong> Blood is pumped via vascular access through sterile synthetic tubing to a hemodialyzer machine containing a semi-permeable membrane ("artificial kidney"). Once purified, blood safely returns to systemic circulation.</p>
        </div>
        <div class="card">
          <div class="card-title">Clinical Delivery Settings &amp; Regimen</div>
          <ul>
            <li><strong>In-Center Inpatient / Outpatient Unit:</strong> Typical treatment duration is <strong>3 to 5 hours</strong> per session, performed <strong>3 times per week</strong>.</li>
            <li><strong>Home Hemodialysis:</strong> Tailored nocturnal or short daily schedules under specialized patient training.</li>
            <li><strong>Extracorporeal Volume:</strong> Only ~200–250 mL of blood resides outside the body at any single moment during steady-state filtration.</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="card-title">Dialyzer Mechanics &amp; Core Physics</div>
          <div class="img-container" style="flex: 1; margin: 0.5rem 0;">
            <img src="../images/artifacts/hemodialysis/image1.jpeg" alt="Hemodialysis Machine and Dialyzer Circuit" />
          </div>
          <p style="font-size: 0.78rem; color: #94a3b8; margin-top: 0.4rem;">
            Dialysate fluid flows countercurrent to blood flow across hollow-fiber capillary membranes, maximizing the diffusion gradient across the semi-permeable barrier.
          </p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Chidi Catherine Obi-Hezekiah, RPN &bull; Honours BSN '27</span>
      <span>National Kidney Foundation &bull; Clinical Nephrology</span>
    </div>
  </div>

  <!-- Slide 3: Case Study -->
  <div class="slide">
    <div class="slide-header">
      <div>
        <div class="category-tag">Inpatient Case Presentation</div>
        <div class="slide-title">Case Study: Mrs. D.K. (76-Year-Old Female)</div>
      </div>
      <div class="slide-num">SLIDE 03 / 11</div>
    </div>
    <div class="slide-body">
      <div class="col">
        <div class="card">
          <div class="card-title">Admission Background &amp; Chief Complaint</div>
          <p><strong>Patient:</strong> Mrs. D.K., a 76-year-old female admitted to the <strong>Gen 4 Medicine</strong> inpatient unit with an admission diagnosis of <em>"failure to cope at home"</em>.</p>
          <p style="margin-top: 0.4rem;"><strong>Past Medical History:</strong> End-Stage Renal Disease (ESRD) on maintenance hemodialysis, Type 2 Diabetes Mellitus (T2DM), and Chronic Essential Hypertension.</p>
        </div>
        <div class="card">
          <div class="card-title">Psychosocial &amp; Functional Assessment</div>
          <ul>
            <li>Lives alone with limited domestic and community support networks.</li>
            <li>Increasing difficulty managing complex daily medication regimens and renal diabetic dietary restrictions.</li>
            <li>Severe ADL decline driven by chronic fatigue, generalized muscular weakness, and frequent exhausting medical transport appointments.</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-title">Baseline Admission Vital Signs</div>
          <table class="clinical-table" style="margin-top: 0.4rem;">
            <thead>
              <tr>
                <th>Vital Sign</th>
                <th>Patient Value</th>
                <th>Clinical Assessment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Blood Pressure</td>
                <td><strong class="critical-high">162/82 mmHg</strong></td>
                <td>Stage 2 Hypertension; significant risk for end-organ vascular injury in ESRD</td>
              </tr>
              <tr>
                <td>Heart Rate</td>
                <td>64 bpm</td>
                <td>Normal resting sinus rate; hemodynamically stable</td>
              </tr>
              <tr>
                <td>Respiratory Rate</td>
                <td>20 breaths/min</td>
                <td>Mild tachypnea at rest; assess for fluid overload/pulmonary congestion</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>36.7 &deg;C</td>
                <td>Afebrile; no acute systemic hyperthermic response</td>
              </tr>
              <tr>
                <td>SpO2 Saturation</td>
                <td>96% on room air</td>
                <td>Adequate baseline arterial oxygenation without supplemental support</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="highlight-box" style="margin-top: 0.6rem;">
          <p><strong>Clinical Diagnostic Summary:</strong> Mrs. D.K. is afebrile and hemodynamically stable but exhibits severe uncontrolled systolic hypertension superimposed on chronic uremia and fluid-handling compromise.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Gen 4 Medicine Clinical Case Study &bull; Seneca Polytechnic</span>
      <span>Patient Case Record: Mrs. D.K., 76yo</span>
    </div>
  </div>

  <!-- Slide 4: Laboratory Values -->
  <div class="slide">
    <div class="slide-header">
      <div>
        <div class="category-tag">Diagnostic Profile</div>
        <div class="slide-title">Comprehensive Admission Laboratory Profile</div>
      </div>
      <div class="slide-num">SLIDE 04 / 11</div>
    </div>
    <div class="slide-body">
      <div class="col col-2">
        <table class="clinical-table">
          <thead>
            <tr>
              <th>Diagnostic Lab Test</th>
              <th>Patient Result</th>
              <th>Standard Adult Reference</th>
              <th>Clinical Nursing Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Hemoglobin (Hgb)</strong></td>
              <td><span class="critical-low">98 g/L</span></td>
              <td>120 &ndash; 160 g/L (female)</td>
              <td><strong>Low &ndash; Normocytic Anemia of CKD:</strong> Secondary to renal erythropoietin (EPO) synthesis deficiency and reduced RBC survival.</td>
            </tr>
            <tr>
              <td><strong>Platelets (Plt)</strong></td>
              <td><span class="critical-low">82 &times;10&sup9;/L</span></td>
              <td>150 &ndash; 400 &times;10&sup9;/L</td>
              <td><strong>Low &ndash; Thrombocytopenia:</strong> Uremic platelet dysfunction elevates post-puncture bleeding risks at AV fistula sites.</td>
            </tr>
            <tr>
              <td><strong>Serum Creatinine</strong></td>
              <td><span class="critical-high">281 &mu;mol/L</span></td>
              <td>50 &ndash; 100 &mu;mol/L (female)</td>
              <td><strong>High &ndash; Severe Renal Clearance Failure:</strong> Massive loss of nephron glomerular filtration rate (GFR &lt; 15 mL/min).</td>
            </tr>
            <tr>
              <td><strong>Blood Urea Nitrogen (Urea)</strong></td>
              <td><span class="critical-high">51.4 mmol/L</span></td>
              <td>2.5 &ndash; 7.8 mmol/L</td>
              <td><strong>Critical High &ndash; Overt Uremia:</strong> Manifests clinically with severe nausea, pruritus, neurological lethargy, and anorexia.</td>
            </tr>
            <tr>
              <td><strong>Serum Albumin</strong></td>
              <td><span class="critical-low">27 g/L</span></td>
              <td>35 &ndash; 50 g/L</td>
              <td><strong>Low &ndash; Protein-Energy Wasting:</strong> Chronic systemic inflammatory state, malnutrition, and impaired oncotic pressure.</td>
            </tr>
            <tr>
              <td><strong>Magnesium</strong></td>
              <td><span class="critical-high">1.16 mmol/L</span></td>
              <td>0.7 &ndash; 1.0 mmol/L</td>
              <td><strong>High &ndash; Hypermagnesemia:</strong> Decreased renal excretion; risk for reduced deep tendon reflexes and cardiac conduction delay.</td>
            </tr>
            <tr>
              <td><strong>Serum Sodium (Na+)</strong></td>
              <td><span class="critical-low">132 mmol/L</span></td>
              <td>135 &ndash; 145 mmol/L</td>
              <td><strong>Low &ndash; Mild Dilutional Hyponatremia:</strong> Result of impaired free-water clearance and extracellular volume expansion.</td>
            </tr>
            <tr>
              <td><strong>Serum Calcium (Ca2+)</strong></td>
              <td><span class="critical-low">1.71 mmol/L</span></td>
              <td>2.1 &ndash; 2.6 mmol/L</td>
              <td><strong>Low &ndash; Hypocalcemia:</strong> Inadequate renal 1-alpha-hydroxylase activation of 1,25(OH)2D3 (calcitriol) and hyperphosphatemia.</td>
            </tr>
            <tr>
              <td><strong>Serum Chloride (Cl-)</strong></td>
              <td><span class="critical-low">94 mmol/L</span></td>
              <td>98 &ndash; 106 mmol/L</td>
              <td><strong>Low &ndash; Mild Hypochloremia:</strong> Secondary to gastrointestinal losses and metabolic disturbance.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col">
        <div class="card" style="height: 100%;">
          <div class="card-title">Priority Nursing Correlates</div>
          <div class="highlight-box">
            <p><strong>Uremic Syndrome:</strong> BUN of 51.4 mmol/L explains patient's severe exhaustion, confusion, and failure to thrive at home.</p>
          </div>
          <div class="highlight-box">
            <p><strong>Electrolyte &amp; Anemia Risk:</strong> Hgb 98 g/L requires ESA/iron coordination; calcium/magnesium imbalances mandate cardiac telemetry and seizure precautions.</p>
          </div>
          <div class="highlight-box">
            <p><strong>Target Clearance:</strong> Immediate hemodialysis required to clear urea, correct metabolic acidosis, and optimize volume.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Laboratory Diagnostic Panel &bull; General Internal Medicine</span>
      <span>Reference Range Standards: Ontario Laboratory Information System (OLIS)</span>
    </div>
  </div>

  <!-- Slide 5: Dialysis Mechanics -->
  <div class="slide">
    <div class="slide-header">
      <div>
        <div class="category-tag">Biophysical Principles</div>
        <div class="slide-title">Principles of Dialysis Clearance: Diffusion &amp; Osmosis</div>
      </div>
      <div class="slide-num">SLIDE 05 / 11</div>
    </div>
    <div class="slide-body">
      <div class="col">
        <div class="card">
          <div class="card-title">1. Diffusion (Solute Clearance)</div>
          <p>The spontaneous movement of small dissolved solutes (urea, creatinine, potassium) from an area of high concentration in the patient's blood across a semipermeable membrane into a lower concentration in dialysate bath.</p>
          <ul style="margin-top: 0.4rem;">
            <li>Dialysate contains physiological electrolytes (bicarbonate, low potassium) to restore acid-base and chemical equilibrium.</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-title">2. Osmosis (Fluid Shift)</div>
          <p>The movement of solvent water molecules through a semi-permeable membrane from lower solute concentration to higher solute concentration, driven by osmotic gradients.</p>
        </div>
      </div>
      <div class="col">
        <div class="card" style="height: 100%; display: flex; flex-direction: column;">
          <div class="card-title">Semi-Permeable Membrane Dynamics</div>
          <div class="img-container" style="flex: 1; margin: 0.5rem 0;">
            <img src="../images/artifacts/hemodialysis/image2.jpeg" alt="Dialysis Filtration Membrane" />
          </div>
          <p style="font-size: 0.78rem; color: #94a3b8;">
            Synthetic hollow-fiber dialyzer capillaries selectively allow passage of small molecules (&lt;500 Da) while blocking essential high-molecular-weight proteins (albumin) and blood cells (erythrocytes, leukocytes).
          </p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>National Kidney Foundation (2025) &bull; Extracorporeal Solute Clearance</span>
      <span>Principles of Renal Replacement Therapy</span>
    </div>
  </div>

  <!-- Slide 6: Indications -->
  <div class="slide">
    <div class="slide-header">
      <div>
        <div class="category-tag">Clinical Indications</div>
        <div class="slide-title">Why Dialysis is Needed: The "AEIOU" Framework</div>
      </div>
      <div class="slide-num">SLIDE 06 / 11</div>
    </div>
    <div class="slide-body">
      <div class="col">
        <div class="card">
          <div class="card-title">Clinical Rationale for Renal Replacement Therapy</div>
          <p>Native kidneys normally execute crucial regulatory, excretory, and endocrine roles:</p>
          <ul style="margin-top: 0.4rem;">
            <li>Filtration of toxic end-products of nitrogenous metabolism (urea, uric acid, creatinine).</li>
            <li>Precise homeostasis of extracellular fluid volume and vascular pressures.</li>
            <li>Regulation of systemic serum electrolytes (K+, Na+, Ca2+, PO4&sup3;&minus;, Mg2+).</li>
            <li>Systemic acid-base buffering via hydrogen ion excretion and HCO3&minus; reabsorption.</li>
          </ul>
        </div>
        <div class="highlight-box">
          <p><strong>When End-Stage Renal Failure is reached (GFR &lt; 15 mL/min/1.73m&sup2;),</strong> conservative medical management fails to prevent fatal toxic uremic accumulation and hyperkalemic cardiac arrest.</p>
        </div>
      </div>
      <div class="col">
        <div class="card" style="height: 100%; display: flex; flex-direction: column;">
          <div class="card-title">Emergency Nephrology Mnemonic: AEIOU</div>
          <div class="img-container" style="flex: 1; margin: 0.5rem 0;">
            <img src="../images/artifacts/hemodialysis/image3.jpeg" alt="Indications for Dialysis" />
          </div>
          <ul style="font-size: 0.76rem; color: #cbd5e1;">
            <li><strong>A &ndash; Acidosis:</strong> Intractable metabolic acidosis (pH &lt; 7.10) resistant to bicarbonate.</li>
            <li><strong>E &ndash; Electrolytes:</strong> Severe refractory hyperkalemia (K+ &gt; 6.5 mmol/L) with ECG changes.</li>
            <li><strong>I &ndash; Ingestion / Intoxication:</strong> Toxic dialyzable substances (lithium, ASA, toxic alcohols).</li>
            <li><strong>O &ndash; Overload:</strong> Acute pulmonary edema unresponsive to aggressive intravenous diuretics.</li>
            <li><strong>U &ndash; Uremia:</strong> Symptomatic uremic encephalopathy, pericarditis, or bleeding diathesis.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Acute Renal Replacement Indications &bull; Nephrology Practice Guidelines</span>
      <span>CNO Practice Standards: Acute Adult Care</span>
    </div>
  </div>

  <!-- Slide 7: Learning Goal -->
  <div class="slide">
    <div class="slide-header">
      <div>
        <div class="category-tag">Pedagogy &amp; Growth</div>
        <div class="slide-title">Learning Goal: Hemodialysis &amp; CKD Management</div>
      </div>
      <div class="slide-num">SLIDE 07 / 11</div>
    </div>
    <div class="slide-body">
      <div class="col">
        <div class="card">
          <div class="card-title">Explicit Clinical Learning Objective</div>
          <div class="highlight-box" style="border-left-color: #14b8a6; background: rgba(20, 184, 166, 0.08);">
            <p style="font-size: 0.95rem; font-weight: 600; color: #ffffff;">
              "I will master the activity and synthesize the core biophysical purpose of hemodialysis, analyze its mechanical function in the body, and articulate critical nursing safety implications for patients with advanced chronic kidney disease (CKD)."
            </p>
          </div>
          <p style="margin-top: 0.8rem;"><strong>Competency Alignment (CNO Standard):</strong> Integrates physiological assessment, safe medication administration, vascular access preservation, and client-centered discharge coaching.</p>
        </div>
        <div class="card">
          <div class="card-title">Core Performance Competencies Evaluated</div>
          <ul>
            <li>Assessment and bruit/thrill auscultation of arteriovenous (AV) fistulas / grafts.</li>
            <li>Calculation of interdialytic fluid weight gains and ultrafiltration targets.</li>
            <li>Safe management of dialyzable medications (timing anti-hypertensives).</li>
            <li>Patient education on fluid restrictions (&lt;1.0 L/day) and low-potassium/phosphorus nutrition.</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card" style="height: 100%;">
          <div class="card-title">Digital Learning &amp; Multimedia Simulation</div>
          <p>Interactive procedural review of blood circuit, pressure transducers, heparinization protocols, and air embolus sensor alarms.</p>
          <div style="background: rgba(0,0,0,0.4); border: 1px dashed rgba(255,255,255,0.2); padding: 1.2rem; margin: 1rem 0; text-align: center; border-radius: 4px;">
            <div style="color: #38bdf8; font-weight: 700; font-size: 0.95rem;">Extracorporeal Circuit Walkthrough</div>
            <p style="font-size: 0.78rem; color: #94a3b8; margin-top: 0.3rem;">Focus: Safety mechanisms, bubble trap chambers, dialysate heating, and transmembrane pressure (TMP) monitors.</p>
          </div>
          <p style="font-size: 0.8rem; color: #cbd5e1;">Continuous peer and preceptor demonstration ensures student nurse readiness in complex nephrology environments.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Seneca Polytechnic &bull; Honours Bachelor of Science in Nursing</span>
      <span>CNO Standard: Continuing Competence</span>
    </div>
  </div>

  <!-- Slide 8: Pathophysiology -->
  <div class="slide">
    <div class="slide-header">
      <div>
        <div class="category-tag">Etiology &amp; Disease Course</div>
        <div class="slide-title">Pathophysiology &amp; Systemic Nursing Insights</div>
      </div>
      <div class="slide-num">SLIDE 08 / 11</div>
    </div>
    <div class="slide-body">
      <div class="col">
        <div class="card">
          <div class="card-title">Multi-System Cascade of ESRD</div>
          <p>End-Stage Renal Disease (ESRD) represents the terminal, irreversible stage of chronic kidney disease characterized by massive nephron sclerosis and destruction.</p>
          <ul style="margin-top: 0.5rem;">
            <li><strong>Glomerular Hyperfiltration &amp; Fibrosis:</strong> Chronic diabetic microvascular disease and endothelial shear stress destroy capillary loops.</li>
            <li><strong>Endocrine Failure:</strong> Cessation of renal erythropoietin leads to severe non-regenerative anemia; failure to hydroxylate 25(OH)D to calcitriol triggers secondary hyperparathyroidism and bone demineralization (renal osteodystrophy).</li>
            <li><strong>Cardiovascular Overload:</strong> Volume retention causes concentric left ventricular hypertrophy (LVH), congestive heart failure, and calciphylaxis.</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-title">Evidence-Based Nursing Implications (Supramanian et al., 2024)</div>
          <div class="highlight-box">
            <p><strong>Systemic Multi-Organ Surveillance:</strong> Nurses must anticipate pulmonary crackles, peripheral third-spacing, cognitive blunting, uremic pruritus, and hyperkalemic dysrhythmias.</p>
          </div>
          <div class="highlight-box">
            <p><strong>Vascular Access Protection:</strong> Strict ban on venipunctures, blood pressures, and tight sleeves on the access extremity to prevent fistula thrombosis and pseudoaneurysm.</p>
          </div>
          <div class="highlight-box">
            <p><strong>Medication Stewardship:</strong> Rigorous dose adjustments for renally eliminated drugs (e.g., gabapentin, enoxaparin, vancomycin) to avoid severe iatrogenic toxicity.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Supramanian et al. (2024) &bull; Chronic Kidney Disease Pathophysiology</span>
      <span>IntechOpen &bull; Advanced Nursing Practice</span>
    </div>
  </div>

  <!-- Slide 9: Ultrafiltration & Fluid Balance -->
  <div class="slide">
    <div class="slide-header">
      <div>
        <div class="category-tag">Fluid Mechanics</div>
        <div class="slide-title">Ultrafiltration (UF): Fluid &amp; Waste Removal Dynamics</div>
      </div>
      <div class="slide-num">SLIDE 09 / 11</div>
    </div>
    <div class="slide-body">
      <div class="col">
        <div class="card">
          <div class="card-title">Ultrafiltration Principles &amp; Transmembrane Pressure</div>
          <p><strong>Ultrafiltration</strong> is the convective movement of fluid across a semi-permeable membrane driven by an artificial hydrostatic pressure gradient (Transmembrane Pressure / TMP) created by dialysis machine effluent pumps.</p>
          <ul style="margin-top: 0.5rem;">
            <li>Unlike simple diffusion, UF physically pulls bulk fluid along with dissolved small and middle solutes ("solvent drag").</li>
            <li><strong>Dry Weight Concept:</strong> The patient's ideal post-dialysis weight at which they are normotensive without peripheral edema or pulmonary congestion.</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-title">Interdialytic Weight Gain (IDWG) Limits</div>
          <p>For safety, fluid removal during a single 4-hour session should rarely exceed <strong>1.0 &ndash; 1.5 L/hr</strong> (or ~10–13 mL/kg/hr) to prevent sudden hypovolemic intravascular collapse and myocardial stunning.</p>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-title">Intradialytic Complications &amp; Nursing Actions</div>
          <table class="clinical-table">
            <thead>
              <tr>
                <th>Complication</th>
                <th>Underlying Mechanism</th>
                <th>Immediate Nursing Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Hypotension</strong></td>
                <td>Excessive UF rate exceeding vascular refilling capacity</td>
                <td>Lower UF rate; place patient in Trendelenburg position; administer 100–200 mL 0.9% NaCl bolus as ordered.</td>
              </tr>
              <tr>
                <td><strong>Muscle Cramps</strong></td>
                <td>Rapid shifts in extracellular osmolarity and tissue perfusion</td>
                <td>Bolus normal saline; gently stretch affected extremity; re-evaluate dry weight prescription.</td>
              </tr>
              <tr>
                <td><strong>Disequilibrium</strong></td>
                <td>Rapid BUN clearance creates osmotic cerebral edema</td>
                <td>Slow blood flow rate (BFR); stop treatment if neurological deterioration occurs; notify nephrologist.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Medical Advisory Board (2025) &bull; National Kidney Foundation</span>
      <span>Convective Clearance &amp; Hemodynamic Stability</span>
    </div>
  </div>

  <!-- Slide 10: Nursing Interventions & Plan of Care -->
  <div class="slide">
    <div class="slide-header">
      <div>
        <div class="category-tag">Evidence-Based Practice</div>
        <div class="slide-title">Comprehensive Nursing Plan of Care: Mrs. D.K.</div>
      </div>
      <div class="slide-num">SLIDE 10 / 11</div>
    </div>
    <div class="slide-body">
      <div class="col">
        <div class="card">
          <div class="card-title">Pre-Dialysis Assessment Checklist</div>
          <ul>
            <li><strong>Weight &amp; Fluid Calculation:</strong> Weigh patient on calibrated scale; compute exact difference from dry weight to establish target UF goal.</li>
            <li><strong>Vascular Access Integrity:</strong> Palpate continuous thrill, auscultate vascular bruit; inspect for erythema, purulence, hematoma, or limb swelling.</li>
            <li><strong>Medication Timing:</strong> Hold morning antihypertensives (e.g., ACEi, beta-blockers) to prevent profound intradialytic hypotension; hold dialyzable water-soluble vitamins.</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-title">Post-Dialysis Re-Assessment</div>
          <ul>
            <li>Check post-treatment weight and orthostatic vitals; ensure bleeding at cannulation sites has ceased before dressing application.</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-title">Patient &amp; Family Discharge Education</div>
          <div class="highlight-box">
            <p><strong>Dietary Coaching:</strong> Limit sodium (&lt;2 g/day), potassium (&lt;2–3 g/day), and phosphorus (&lt;800–1000 mg/day). Take phosphate binders with first bite of every meal.</p>
          </div>
          <div class="highlight-box">
            <p><strong>Fluid Restrictions:</strong> Maintain strict 1000–1500 mL/day fluid intake; educate on using measured water bottles and ice chips to manage thirst.</p>
          </div>
          <div class="highlight-box">
            <p><strong>Home Support Coordination:</strong> Refer to community care access networks (Home and Community Care Support Services) for transportation, medication blister packaging, and personal support workers.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Seneca Polytechnic Nursing Inpatient Plan of Care</span>
      <span>CNO Professional Standards: Accountability &amp; Ethics</span>
    </div>
  </div>

  <!-- Slide 11: References -->
  <div class="slide">
    <div class="slide-header">
      <div>
        <div class="category-tag">Scholarly Evidence</div>
        <div class="slide-title">References &amp; Clinical Literature</div>
      </div>
      <div class="slide-num">SLIDE 11 / 11</div>
    </div>
    <div class="slide-body">
      <div class="col">
        <div class="card" style="height: 100%;">
          <div class="card-title">Peer-Reviewed Citations &amp; Clinical Guidelines</div>
          <ul style="font-size: 0.8rem; line-height: 1.8;">
            <li><strong>College of Nurses of Ontario (CNO). (2023).</strong> <em>Code of Conduct &amp; Professional Standards for Registered Nurses and Registered Practical Nurses</em>. Toronto, ON: CNO.</li>
            <li><strong>Medical Advisory Board. (2025, August 12).</strong> <em>What is ultrafiltration in hemodialysis?</em> Definitions and physics of transmembrane convective clearance across synthetic dialyzer membranes.</li>
            <li><strong>National Kidney Foundation (NKF). (2025).</strong> <em>KDOQI Clinical Practice Guidelines for Hemodialysis Adequacy and Vascular Access</em>. Kidney Disease Outcomes Quality Initiative. Retrieved from <span style="color: #38bdf8;">https://www.kidney.org</span>.</li>
            <li><strong>Ontario Laboratory Information System (OLIS). (2026).</strong> <em>Standard Reference Ranges for Inpatient Clinical Chemistry and Hematology</em>. Ontario Ministry of Health.</li>
            <li><strong>Supramanian, K., Sekar, M., &amp; Safwan Hadi Nor Afendi, N. (2024).</strong> <em>Chronic Kidney Disease: Etiology, Pathophysiology, and Management Strategies to Increase Quality of Life</em>. In: Chronic Kidney Disease &ndash; Novel Insights into Pathophysiology and Treatment. IntechOpen. doi:10.5772/intechopen.1005083.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Chidi Catherine Obi-Hezekiah, RPN &bull; Honours BSN Candidate '27</span>
      <span>Seneca Polytechnic &bull; Department of Nursing</span>
    </div>
  </div>

</body>
</html>
"""

hemo_html_path = os.path.join(DOCS_DIR, "hemodialysis_presentation.html")
with open(hemo_html_path, "w", encoding="utf-8") as f:
    f.write(hemo_html)

print("Hemodialysis HTML saved:", hemo_html_path)

# Print Hemodialysis to PDF via Chrome
hemo_pdf_path = os.path.join(DOCS_DIR, "clinical-presentation-hemodialysis-esrd.pdf")
cmd_pdf = [
    CHROME_PATH,
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={hemo_pdf_path}",
    f"file:///{hemo_html_path.replace(os.sep, '/')}"
]
print("Generating Hemodialysis PDF...")
subprocess.run(cmd_pdf, check=True)

# Generate Snapshot thumbnail for Hemodialysis (slide 1)
hemo_png_path = os.path.join(IMAGES_DIR, "hemodialysis-presentation-preview.png")
cmd_png = [
    CHROME_PATH,
    "--headless=new",
    "--disable-gpu",
    "--window-size=1280,720",
    f"--screenshot={hemo_png_path}",
    f"file:///{hemo_html_path.replace(os.sep, '/')}"
]
print("Generating Hemodialysis Snapshot Image...")
subprocess.run(cmd_png, check=True)

print("Hemodialysis PDF and Preview successfully generated!")
