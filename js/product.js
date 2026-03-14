const urlParams = new URLSearchParams(window.location.search);
const searchFromURL = urlParams.get("search");



const defaultProducts = [
  // Stationery Items
  { name: "Mechanical Pencil & Leads", category: "stationery", img1: "./assets/Product Images/MECHANICAL PENCIL THIN 0.7MM JCC-819.jpg", img2: "./assets/Product Images/MECHANICAL PENCIL+LEAD 0.7 10 PCS JCC-702.jpg"},
  { name: "Magic Writing Book", category: "stationery", img1: "./assets/Product Images/MAGIC HANDWRITTING BOOK 4B+1P+10R.jpg", img2: "./assets/Product Images/MAGIC WATER BOOK SMALL.jpg" },
  { name: "Scissors", category: "stationery", img1: "./assets/Product Images/SCISSORS COLOR SMART CUT (JC-K31).jpg", img2: "./assets/Product Images/SCISSORS COLOR SMART CUT (JC-002).jpg"},
  { name: "Post Stick Pad", category: "stationery", img1: "./assets/Product Images/POST STICK PAD PLASTIC ARROW 100 Pcs.jpg", img2: "./assets/Product Images/POST STICK PAD 3 CUT MULTI 3X3 50PAGES.jpg" },
  { name: "Eraser", category: "stationery", img1: "./assets/Product Images/ERASER ICE CREAM LONG UNICORN.jpg", img2: "./assets/Product Images/MOULDED ERASER BLISTER PKG QIHAO.jpg" },
  { name: "Files & Folders", category: "stationery", img1: "./assets/Product Images/PP BAG NO.4 (FLOWER).jpg", img2: "./assets/Product Images/MY CLEAR BAG 10C FC (LINING).jpg" },
  { name: "School Bag", category: "stationery", img1: "./assets/Product Images/SCHOOL BAG BIG 123.jpg", img2: "./assets/Product Images/SCHOOL BAG BIG 986-28.jpg" },
  { name: "ID Cards & Holders", category: "stationery", img1: "./assets/Product Images/ID CARD HOLDER METAL CASE VERTICAL BLACK.jpg", img2: "./assets/Product Images/ID CARD HOLDER PVC THICK (A002 H).jpg" },
  { name: "Price Labelling Machine", category: "stationery", img1: "./assets/Product Images/GREATWALL NUMBERING MACHINEE.jpg", img2: "./assets/Product Images/PRICE LABLE MACHINE (EOC 5500).jpg" },
  { name: "Magic Writing Board", category: "stationery", img1: "./assets/Product Images/MAGIC WRITING TABLET (8.5 INCH) 8585.jpg", img2: "./assets/Product Images/MAGIC WRITTING TABLET NEW 7575(8.5 INCH).jpg" },
  { name: "Pen Stand", category: "stationery", img1: "./assets/Product Images/PEN STAND WOODEN (5035).jpg", img2: "./assets/Product Images/PEN STAND PLASTIC (8040).jpg" },
  { name: "Marker Pen", category: "stationery", img1: "./assets/Product Images/WHITE BOARD MARKER SMALL PLAIN.jpg", img2: "./assets/Product Images/DL-100 MARK PEN MIX.jpg" },
  { name: "Pens", category: "stationery", img1: "./assets/Product Images/6 IN 1 FUR PEN.jpg", img2: "./assets/Product Images/FANCY GUN PEN (5002) BOX PKG.jpg" },
  { name: "Pouch Items", category: "stationery", img1: "./assets/Product Images/PRINTED PVC POUCH A5(1721).jpg", img2: "./assets/Product Images/CHEQUE BOOK POUCH FLORCENT 11 - 24 CMS.jpg" },
  { name: "Project Items", category: "stationery", img1: "./assets/Product Images/PROJECT MAGNET SET 6PCS 6602.jpg", img2: "./assets/Product Images/PROJECT MOTOR.jpg" },
  { name: "Coloring Items", category: "stationery", img1: "./assets/Product Images/ROLLING CRAYON PCS SET.jpg", img2: "./assets/Product Images/DUAI TIP PEN 12 COLOUR 101-12.jpg" },
  { name: "Sharpeners", category: "stationery", img1: "./assets/Product Images/TIKKO SHARPNER BAG PKG LOOSE.jpg", img2: "./assets/Product Images/SHARPENER HELMER 1911.jpg" },
  { name: "Cutter Items", category: "stationery", img1: "./assets/Product Images/CUTTER SPECIAL FANCY 701.jpg", img2: "./assets/Product Images/18MM HEAVY METAL CUTTER 600.jpg" },
  { name: "Tapes", category: "stationery", img1: "./assets/Product Images/TRANSPARENT TAPE ACCURA 55 YARD.jpg", img2: "./assets/Product Images/GLITTER TAPE 35 YARD(MIX).jpg" },
  { name: "Correction Pen & Tape", category: "stationery", img1: "./assets/Product Images/CORRECTION TAPE 6 METER JCC-801.jpg", img2: "./assets/Product Images/CORRECTION PEN BIG WITH OPP BAG.jpg" },
  { name: "Highlighter Pen", category: "stationery", img1: "./assets/Product Images/HIGHLIGHTER BLACK BODY MIX COLOR JCC-705M.jpg", img2: "./assets/Product Images/HIGHLIGHTER ENGLISH COLOR TRANSPARENT CAP BX-801.jpg" },
  { name: "Compass", category: "stationery", img1: "./assets/Product Images/COMPASS ROUND BIG (DISHAKAR).jpg", img2: "./assets/Product Images/COMPASS ROUND SMALL (DISHAKAR).jpg" },
  { name: "Scale & Rulers", category: "stationery", img1: "./assets/Product Images/FOLDING SCALE (887).jpg", img2: "./assets/Product Images/DESIGNER SCALE 2PCS PKG (9921).jpg" },
  { name: "Diary", category: "stationery", img1: "./assets/Product Images/DIARY MAGNET LOCK WITH DISPLAY BOX.jpg", img2: "./assets/Product Images/DIARY SPIRAL LOCK WITH CUTOUT BIG 8881.jpg" },
  { name: "Binder Clip", category: "stationery", img1: "./assets/Product Images/BINDER CLIP ACCURA 19 MM.jpg", img2: "./assets/Product Images/BINDER CLIP ACCURA 51 MM.jpg" },
  { name: "Finger Counter", category: "stationery", img1: "./assets/Product Images/FINGER COUNTER (B)(2026).jpg", img2: "./assets/Product Images/FINGER COUNTER (JIXIN).jpg" },
  { name: "Magnet Compass Box", category: "stationery", img1: "./assets/Product Images/MAGNET CAMPASS (B)YH-777 (WRITING BOARD).jpg", img2: "./assets/Product Images/MAGNET CAMPASS (S)(JCC-045)+CALAULATOR.jpg" },

  // Hardware Items
  { name: "Cycle Pump", category: "hardware", img1: "./assets/Product Images/CYCLE PUMP METAL CLOTH DORI WITH SPRING.jpg", img2: "./assets/Product Images/CYCLE PUMP METAL CLOTH DORI.jpg" },
  { name: "Lock", category: "hardware", img1: "./assets/Product Images/LOCK MEIBAO YELLOW AND RED 50MM.jpg", img2: "./assets/Product Images/LOCK NUMBER BLACK (B)4 CODE CH-604.jpg" },
  { name: "Hooks", category: "hardware", img1: "./assets/Product Images/HOOK-3-PCS-(-9545+9546+9547-)-3-DESIGN.jpg", img2: "./assets/Product Images/HOOK TRANSPARENT 6X6 LOOSE PKG.jpg" },
  { name: "Hot Melt Glue Gun & Sticks", category: "hardware", img1: "./assets/Product Images/HOT GLUE GUN (AC-501) 40WATT (ACCURA).jpg", img2: "./assets/Product Images/hot melt glustick tranthin smart 100pc small.jpg" },
  { name: "Magnifying Glass", category: "hardware", img1: "./assets/Product Images/MAGNIFYING GREEN GLASS 50MM.jpg", img2: "./assets/Product Images/MANIFYING GLASS RACKET 60MM.jpg" },
  { name: "Nozzle Spray", category: "hardware", img1: "./assets/Product Images/NOZZLE SPRAY GUN BIG SIZE REGULAR.jpg", img2: "./assets/Product Images/NOZZEL SPRAY GARDEN BLACK BIG OPP PKG.jpg" },
  { name: "Torch Keychain", category: "hardware", img1: "./assets/Product Images/TORCH KEYCHAIN 168.jpg", img2: "./assets/Product Images/TORCH KEYCHAIN 570.jpg" },
  { name: "Jackly Impacter", category: "hardware", img1: "./assets/Product Images/JACKLY IMPACTER JK-6036C.jpg", img2: "./assets/Product Images/JACKLY 16PCS STUDENT TOOL KIT.jpg"},
  { name: "Screwdriver", category: "hardware", img1: "./assets/Product Images/WRENCH SET 40 PCS SOCKET.jpg", img2: "./assets/Product Images/SCREWDRIVER + TORCH 8IN1 895.jpg" },
  { name: "Binoculars", category: "hardware", img1: "./assets/Product Images/BINACULORS CANMAN 6X35 MM.jpg", img2: "./assets/Product Images/BINOCULARS NIGHT SCOPE JWY 4X30MM.jpg" },

  // Decorative / Gift & Miscellaneous Items
  { name: "Flask Bottle", category: "decorative", img1: "./assets/Product Images/FLASK COLOR SPORTS 750 ML (RED,BLUE,GLD).jpg", img2: "./assets/Product Images/FLASK VACCUM MIX2.jpg"},
  { name: "Glitter Glue", category: "decorative", img1: "./assets/Product Images/GLITTER GLUE FLORCENT 50ML.jpg", img2: "./assets/Product Images/GLITTER GLUE 50 ML AC-191(12 PCS BOX).jpg"},
  { name: "Shuttle Cock", category: "decorative", img1: "./assets/Product Images/SHUTTLE COCK NYLON AC-350 6 PCS ROD INER.jpg", img2: "./assets/Product Images/SHUTTLE COCK NYLON(AC-N3)6PCS ROD INER.jpg" },
  { name: "Poker Set", category: "decorative", img1: "./assets/Product Images/POKER SET 500 PCS.jpg", img2: "./assets/Product Images/POKER COIN IRON BOX.jpg" },
  { name: "Beads Sticker", category: "decorative", img1: "./assets/Product Images/BEADS STICKER FANCY NEW DESIGN CARD (B).jpg", img2: "./assets/Product Images/EMBOSED FANCY BEADS STICKER XL-CJC.jpg" },
  { name: "Lazor Lights", category: "decorative", img1: "./assets/Product Images/LAZOR LIGHT 3IN1 HANGING CARD.jpg", img2: "./assets/Product Images/LAZOR LIGHT 4IN1 FLOWER HEAD BOX PKG.jpg" },
  { name: "General Items", category: "decorative", img1: "./assets/Product Images/MOBILE HOLDER.jpg", img2: "./assets/Product Images/MASK FUR.jpg" },
  { name: "Happy Birthday Items", category: "decorative", img1: "./assets/Product Images/BALLOON PUMP HAND SMALL 4 HOLES.jpg", img2: "./assets/Product Images/HAPPY BIRTHDAY BANNER MOSA.jpg" },
  { name: "Home Utility Products", category: "decorative", img1: "./assets/Product Images/4 IN 1 PEDICURE BRUSH BLISTER PKG.jpg", img2: "./assets/Product Images/BOKAMA HEAD MASSAGER.jpg" },
  { name: "Inflatable Ball & Football", category: "decorative", img1: "./assets/Product Images/INFLATABLE BALL BEACH.jpg", img2: "./assets/Product Images/FOOTBALL NO.5 MIX COLOUR.jpg" },
  { name: "Laundry Bags", category: "decorative", img1: "./assets/Product Images/LAUNDRYBAG CARTOON.jpg", img2: "./assets/Product Images/LAUNDRYBAG SQUARE.jpg" },
  { name: "Grooming & Beauty Items", category: "decorative", img1: "./assets/Product Images/BLACK HEAD REMOVER.jpg", img2: "./assets/Product Images/EYEBROW RAZOR TWINKLE 3 PCS BLISTER PKG.jpg" },
  { name: "Wall Stickers", category: "decorative", img1: "./assets/Product Images/WALL STICKER PEACOCK 4PCS (FAW).jpg", img2: "./assets/Product Images/WALL STICKER BUTTERFLY 4PCS (FAY).jpg" },
  { name: "Moti Pin", category: "decorative", img1: "./assets/Product Images/MOTI PIN (BIG).jpg", img2: "./assets/Product Images/MOTI PIN (MEDIUM).jpg" },
  { name: "Nail Cutters", category: "decorative", img1: "./assets/Product Images/NAIL CUTTER JUMBO BLACK BOX.jpg", img2: "./assets/Product Images/NAIL CUTTER MINI.jpg" },
  { name: "Razor", category: "decorative", img1: "./assets/Product Images/PLASTIC RAZOR (MAX SOFT CARE).jpg", img2: "./assets/Product Images/PLASTIC SHAVE BODY RAZOR (MAX).jpg" },
  { name: "Curly Ribbon", category: "decorative", img1: "./assets/Product Images/FLOWER BOW PRINTED 30.jpg", img2: "./assets/Product Images/CURRLY RIBBON 2.5x16 Y (RED).jpg" },
  { name: "Tooth Pick", category: "decorative", img1: "./assets/Product Images/TOOTH PICK 6013 CHINESE PRINT ROUND JAR.jpg", img2: "./assets/Product Images/TOOTH PICK HEART JAR PKG.jpg" },
  { name: "Round Clip", category: "decorative", img1: "./assets/Product Images/ROUND CLIP 22 MM (36PCS BOX).jpg", img2: "./assets/Product Images/ROUND CLIP 75 MM (6PCS BOX).jpg" },
  { name: "Art & Craft Items", category: "decorative", img1: "./assets/Product Images/CRAFT PUNCH (JF-821-24A).jpg", img2: "./assets/Product Images/DESIGNER SCISSORS 12pcs CHART PKG.jpg" },
  { name: "Gift Wrapping Paper & Roll", category: "decorative", img1: "./assets/Product Images/GIFT WRAPPING PAPER(50x70) MIX (40 SHT).jpg", img2: "./assets/Product Images/GIFT WRAPPING SHEET 70CMS X 100 METER ROLL.jpg" },
  { name: "Potli", category: "decorative", img1: "./assets/Product Images/POTLI 16X22 GOLDEN HEADER.jpg", img2: "./assets/Product Images/POTLI 8X10 GOLDEN HEADER.jpg" },
  { name: "Sticker", category: "decorative", img1: "./assets/Product Images/FOAM STICKER (GOD).jpg", img2: "./assets/Product Images/FOAM STICKER (LYH)13.8 X 29.5 SMILY.jpg" },
  { name: "Sipper Bottle", category: "decorative", img1: "./assets/Product Images/SIPPER PRINTED LASER+FLATCAP+LED UNICORN.jpg", img2: "./assets/Product Images/SIPPER PRINTED TRANSPARENT PLAIN+DINASOUR CAP.jpg" }
];

let products = JSON.parse(localStorage.getItem('adinath_products')) || defaultProducts;


/* ================= STATE ================= */
let activeCategory = "all";
let urlSearchApplied = false;

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

/* ================= RENDER ================= */
function renderProducts() {
  if (!grid) return;

  let query = "";

  // Priority: URL search first (only once)
  if (searchFromURL && !urlSearchApplied) {
    query = searchFromURL.toLowerCase();
    if (searchInput) searchInput.value = searchFromURL;
    urlSearchApplied = true;
  } else {
    query = searchInput ? searchInput.value.toLowerCase() : "";
  }

  grid.innerHTML = "";

  const filteredProducts = products.filter(product => {
    const categoryMatch =
      activeCategory === "all" || product.category === activeCategory;

    const searchMatch =
      product.name.toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center text-muted">
        No products found
      </div>`;
    return;
  }

  filteredProducts.forEach((product, index) => {
    const sliderId = `slider-${index}`;

    grid.insertAdjacentHTML("beforeend", `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="product-card">
          <div class="product-image" id="${sliderId}">
            <img src="${product.img1}" class="active" alt="${product.name}">
            <img src="${product.img2}" alt="${product.name}">
            <button class="image-btn prev" data-id="${sliderId}">&#10094;</button>
            <button class="image-btn next" data-id="${sliderId}">&#10095;</button>
          </div>
          <div class="product-body">
            <h5>${product.name}</h5>
            <div class="product-category">${capitalize(product.category)}</div>
          </div>
        </div>
      </div>
    `);

    startAutoSlide(sliderId);
  });
}

/* ================= IMAGE SLIDER ================= */
const sliders = {};

function startAutoSlide(id) {
  stopAutoSlide(id);
  sliders[id] = setInterval(() => changeImage(id, 1), 3000);
}

function stopAutoSlide(id) {
  if (sliders[id]) clearInterval(sliders[id]);
}

function changeImage(id, direction) {
  const container = document.getElementById(id);
  if (!container) return;

  const imgs = container.querySelectorAll("img");
  if (imgs.length < 2) return;

  let index = [...imgs].findIndex(img => img.classList.contains("active"));
  imgs[index].classList.remove("active");

  index = (index + direction + imgs.length) % imgs.length;
  imgs[index].classList.add("active");

  startAutoSlide(id);
}

// Categories for filtering
const storedCategories = JSON.parse(localStorage.getItem('adinath_categories')) || ['stationery', 'hardware', 'decorative'];

function renderFilters() {
    const filterContainer = document.getElementById('filterButtons');
    if (!filterContainer) return;

    // Keep "All" button
    filterContainer.innerHTML = '<button class="filter-btn active" data-category="all">All Items</button>';

    storedCategories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.category = cat;
        btn.textContent = capitalize(cat) + ' Items';
        if (activeCategory === cat) {
            btn.classList.add('active');
            filterContainer.querySelector('[data-category="all"]').classList.remove('active');
        }
        filterContainer.appendChild(btn);
    });

    // Re-attach listeners
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            activeCategory = button.dataset.category;
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            renderProducts();
        });
    });
}

renderFilters();

/* ================= SEARCH INPUT ================= */
if (searchInput) {
  searchInput.addEventListener("input", () => {
    urlSearchApplied = true; // override URL search once user types
    renderProducts();
  });
}

/* ================= IMAGE BUTTON EVENTS ================= */
document.addEventListener("click", e => {
  if (e.target.classList.contains("image-btn")) {
    const id = e.target.dataset.id;
    if (e.target.classList.contains("prev")) {
      changeImage(id, -1);
    } else {
      changeImage(id, 1);
    }
  }
});

/* ================= INIT ================= */
renderProducts();

/* ================= UTIL ================= */
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}