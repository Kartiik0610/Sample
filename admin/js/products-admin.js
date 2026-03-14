// Initial hardcoded products (same as in product.js)
const defaultProducts = [
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

if (!localStorage.getItem('adinath_products')) {
    localStorage.setItem('adinath_products', JSON.stringify(defaultProducts));
}

// Categories State
const defaultCategories = ['stationery', 'hardware', 'decorative'];
let categories = JSON.parse(localStorage.getItem('adinath_categories')) || defaultCategories;

const tableBody = document.getElementById('adminProductTable');
const productModal = document.getElementById('productModal');
const productForm = document.getElementById('productForm');
const categorySelect = document.getElementById('prodCategory');
const customCategoryGroup = document.getElementById('customCategoryGroup');
const customCategoryInput = document.getElementById('customCategory');

function loadCategories() {
    categorySelect.innerHTML = '';
    categories.forEach(cat => {
        categorySelect.insertAdjacentHTML('beforeend', `<option value="${cat}">${capitalize(cat)}</option>`);
    });
    categorySelect.insertAdjacentHTML('beforeend', `<option value="new">+ Add New Category...</option>`);
}

function toggleCustomCategory() {
    if (categorySelect.value === 'new') {
        customCategoryGroup.style.display = 'block';
        customCategoryInput.required = true;
        customCategoryInput.focus();
    } else {
        customCategoryGroup.style.display = 'none';
        customCategoryInput.required = false;
    }
}

function fixPath(path) {
    if (!path) return '';
    if (path.startsWith('./assets')) {
        return '../' + path.substring(2);
    }
    return path;
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function renderAdminProducts() {
    tableBody.innerHTML = '';
    products.forEach((product, index) => {
        tableBody.insertAdjacentHTML('beforeend', `
            <tr class="animate-fade-in" style="animation-delay: ${index * 0.05}s">
                <td>
                    <div style="display: flex; align-items: center; gap: 16px;">
                        <div style="width: 50px; height: 50px; border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border);">
                            <img src="${fixPath(product.img1)}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <span style="font-weight: 600; font-size: 1rem;">${product.name}</span>
                    </div>
                </td>
                <td>
                    <span style="background: var(--admin-accent-glow); color: var(--admin-accent); padding: 6px 14px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid rgba(74, 68, 242, 0.1);">
                        ${product.category}
                    </span>
                </td>
                <td style="text-align: right;">
                    <div style="display: flex; justify-content: flex-end; gap: 8px;">
                        <button onclick="editProduct(${index})" style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); color: #fff; width: 40px; height: 40px; border-radius: 12px; cursor: pointer; transition: var(--transition);" onmouseover="this.style.background='var(--admin-accent)'; this.style.borderColor='var(--admin-accent)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'; this.style.borderColor='var(--glass-border)'">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button onclick="deleteProduct(${index})" style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); color: #fff; width: 40px; height: 40px; border-radius: 12px; cursor: pointer; transition: var(--transition);" onmouseover="this.style.background='var(--admin-danger)'; this.style.borderColor='var(--admin-danger)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'; this.style.borderColor='var(--glass-border)'">
                            <i class="bi bi-trash3"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `);
    });
    document.getElementById('totalProductsCount').textContent = products.length;
}

// Image Upload Logic
function setupUpload(zoneId, inputId, previewId, hiddenId) {
    const zone = document.getElementById(zoneId);
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    const hidden = document.getElementById(hiddenId);

    zone.addEventListener('click', () => input.click());

    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        if (e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0], preview, hidden, zone);
        }
    });

    input.addEventListener('change', () => {
        if (input.files.length) {
            handleFile(input.files[0], preview, hidden, zone);
        }
    });
}

function handleFile(file, preview, hidden, zone) {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const base64 = e.target.result;
        preview.src = base64;
        hidden.value = base64;
        zone.classList.add('has-image');
    };
    reader.readAsDataURL(file);
}

setupUpload('uploadZone1', 'fileInput1', 'preview1', 'prodImg1');
setupUpload('uploadZone2', 'fileInput2', 'preview2', 'prodImg2');

function showAddProductModal() {
    productForm.reset();
    document.getElementById('editIndex').value = '';
    document.getElementById('modalTitle').textContent = 'Create New Product';
    
    // Reset previews
    document.getElementById('preview1').src = '';
    document.getElementById('preview2').src = '';
    document.getElementById('uploadZone1').classList.remove('has-image');
    document.getElementById('uploadZone2').classList.remove('has-image');
    
    loadCategories();
    productModal.style.display = 'flex';
}

function editProduct(index) {
    const p = products[index];
    document.getElementById('editIndex').value = index;
    document.getElementById('prodName').value = p.name;
    document.getElementById('prodCategory').value = p.category;
    
    // Setup Images
    const img1 = p.img1;
    const img2 = p.img2 || '';
    
    document.getElementById('prodImg1').value = img1;
    document.getElementById('preview1').src = fixPath(img1);
    document.getElementById('uploadZone1').classList.add('has-image');
    
    if (img2) {
        document.getElementById('prodImg2').value = img2;
        document.getElementById('preview2').src = fixPath(img2);
        document.getElementById('uploadZone2').classList.add('has-image');
    } else {
        document.getElementById('prodImg2').value = '';
        document.getElementById('preview2').src = '';
        document.getElementById('uploadZone2').classList.remove('has-image');
    }

    loadCategories();
    document.getElementById('modalTitle').textContent = 'Edit Product';
    productModal.style.display = 'flex';
}

function closeModal() {
    productModal.style.display = 'none';
}

function deleteProduct(index) {
    if (confirm('Are you sure you want to remove this product?')) {
        products.splice(index, 1);
        saveProducts();
    }
}

function saveProducts() {
    localStorage.setItem('adinath_products', JSON.stringify(products));
    renderAdminProducts();
}

productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const index = document.getElementById('editIndex').value;
    let category = categorySelect.value;

    if (category === 'new') {
        category = customCategoryInput.value.trim().toLowerCase();
        if (!categories.includes(category)) {
            categories.push(category);
            localStorage.setItem('adinath_categories', JSON.stringify(categories));
        }
    }

    const newProduct = {
        name: document.getElementById('prodName').value,
        category: category,
        img1: document.getElementById('prodImg1').value,
        img2: document.getElementById('prodImg2').value
    };

    if (index === '') {
        products.unshift(newProduct);
    } else {
        products[index] = newProduct;
    }

    saveProducts();
    closeModal();
});

// Sync data between tabs
window.addEventListener('storage', () => {
    products = JSON.parse(localStorage.getItem('adinath_products')) || defaultProducts;
    renderAdminProducts();
});

renderAdminProducts();

// Set Personalized Greeting
const adminUser = localStorage.getItem('adinath_admin_user') || 'Sanjay';
const greetingEl = document.getElementById('adminGreeting');
if (greetingEl) {
    greetingEl.textContent = `Welcome back, ${adminUser}`;
}

// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const sidebarOverlay = document.getElementById('sidebarOverlay');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-open');
    });
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
        document.body.classList.remove('sidebar-open');
    });
}

// Close sidebar on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('sidebar-open');
    });
});
