// Streaming sites data
const streamingSites = [
    {
        id: 1,
        name: "وقت المسلسلات",
        url: "https://series-time.co/m1/",
        description: "منصة لعرض المسلسلات بجودة عالية.",
        category: "series",
        rating: 4.5,
        badge: "مسلسلات",
        badgeClass: "badge-series",
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 2,
        name: "توب سينما",
        url: "https://web6.topcinema.cam/",
        description: "أفلام ومسلسلات مترجمة ومحدثة باستمرار.",
        category: "movies",
        rating: 4.7,
        badge: "أفلام",
        badgeClass: "badge-movies",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 3,
        name: "سيما ناو",
        url: "https://bs.cimanow.cc/home/",
        description: "موقع للأفلام العربية والأجنبية.",
        category: "arabic",
        rating: 4.3,
        badge: "عربي",
        badgeClass: "badge-arabic",
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 4,
        name: "سيما وبس",
        url: "https://mycima.cc/index.php",
        description: "أحدث الأفلام والمسلسلات بجودة ممتازة.",
        category: "movies",
        rating: 4.6,
        badge: "HD",
        badgeClass: "badge-hd",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 5,
        name: "عرب سيد",
        url: "https://a.asd.homes/main/",
        description: "مكتبة ضخمة من الأفلام والمسلسلات.",
        category: "arabic",
        rating: 4.4,
        badge: "مكتبة",
        badgeClass: "badge-library",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 6,
        name: "إيجي ديد",
        url: "https://egydeadw.sbs/",
        description: "أفلام ومسلسلات مترجمة بجودة عالية.",
        category: "movies",
        rating: 4.5,
        badge: "4K",
        badgeClass: "badge-4k",
        image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 7,
        name: "فاصل إعلاني",
        url: "https://web184.faselhd.cafe/",
        description: "موقع شهير لمتابعة الأفلام المترجمة.",
        category: "movies",
        rating: 4.8,
        badge: "شهير",
        badgeClass: "badge-popular",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 8,
        name: "شاهد فور يو",
        url: "https://shahid4u.blog/",
        description: "أفلام ومسلسلات بكل التصنيفات.",
        category: "series",
        rating: 4.2,
        badge: "شامل",
        badgeClass: "badge-comprehensive",
        image: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 9,
        name: "ADTV",
        url: "https://adtv.ae/ar",
        description: "منصة بث مباشر للقنوات العربية والأجنبية.",
        category: "live",
        rating: 4.3,
        badge: "بث مباشر",
        badgeClass: "badge-live",
        image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
];

let currentFilter = 'all';
let currentSearch = '';

// Render sites
function renderSites(sites = streamingSites) {
    const grid = document.getElementById('sitesGrid');
    if (!sites.length) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <svg style="width: 64px; height: 64px; color: #6b7280; margin: 0 auto 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.837 0-5.376-1.474-6.825-3.709"/>
                </svg>
                <h3 style="color: #6b7280; margin-bottom: 8px;">لا توجد نتائج</h3>
                <p style="color: #6b7280;">جرب البحث بكلمات مختلفة أو اختر فئة أخرى</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = sites.map(site => `
        <div class="site-card">
            <div class="card-image">
                <img src="${site.image}" alt="${site.name}" loading="lazy">
                <div class="card-overlay"></div>
                <div class="card-badge ${site.badgeClass}">${site.badge}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${site.name}</h3>
                <p class="card-description">${site.description}</p>
                <div class="card-footer">
                    <div class="card-rating">
                        <svg class="icon rating-star" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        ${site.rating}/5
                    </div>
                    <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="visit-btn">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        زيارة الموقع
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter functionality
function filterSites() {
    let filtered = streamingSites;

    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(site => site.category === currentFilter);
    }

    // Apply search filter
    if (currentSearch) {
        filtered = filtered.filter(site => 
            site.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            site.description.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }

    renderSites(filtered);
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    renderSites();

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        currentSearch = e.target.value;
        filterSites();
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentFilter = this.dataset.filter;
            filterSites();
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close modal when clicking outside
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
});