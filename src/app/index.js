// slider logics
const track = document.getElementById('slider-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const underlines = document.querySelectorAll('.slider-pagination .underline');

// product list
const products = [
    {
        slug: 'irish-coffee',
        title: 'Irish coffee',
        description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
        img: 'assets/coffee-irish.png',
        price: '7$',
        category: 'coffee',
        favorite: false
    },
    {
        slug: 'kahlua-coffee',
        title: 'Kahlua coffee',
        description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
        img: 'assets/coffee-kahlua.jpg',
        price: '7$',
        category: 'coffee',
        favorite: false
    },
    {
        slug: 'honey-raf',
        title: 'Honey raf',
        description: 'Espresso with frothed milk, cream and aromatic honey',
        img: 'assets/coffee-raf.jpg',
        price: '5.5$',
        category: 'coffee',
        favorite: false
    },
    {   
        slug: 'espresso',
        title: 'Espresso',
        description: 'Classic black coffee',
        img: 'assets/coffee-espresso.jpg',
        price: '4.5$',
        category: 'coffee',
        favorite: false
    },
    {
        slug: 'latte',
        title: 'Latte',
        description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
        img: 'assets/coffee-latte.jpg',
        price: '7$',
        category: 'coffee',
        favorite: true
    },
    {
        slug: 'macchiato',
        title: 'Latte macchiato',
        description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
        img: 'assets/coffee-macciato.jpg',
        price: '7$',
        category: 'coffee',
        favorite: true
    },
    {
        slug: 'cognac',
        title: 'Coffee with cognac',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/coffee-cognac.jpg',
        price: '7$',
        category: 'coffee',
        favorite: false
    },
    {
        slug: 'moroccan',
        title: 'Moroccan',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/tea-moroccan.ppg',
        price: '7$',
        category: 'tea',
        favorite: false
    },
    {
        slug: 'cranberry',
        title: 'Cranberry',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/tea-cranberry.ppg',
        price: '7$',
        category: 'tea',
        favorite: false
    },
    {
        slug: 'ginger',
        title: 'Ginger',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/tea-ginger.ppg',
        price: '7$',
        category: 'tea',
        favorite: false
    },
    {
        slug: 'sea',
        title: 'Sea buckthorn',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/tea-sea.ppg',
        price: '7$',
        category: 'tea',
        favorite: false
    },
    {
        slug: 'marble',
        title: 'Marble cheesecake',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/dessert-marble.ppg',
        price: '7$',
        category: 'dessert',
        favorite: false
    },
    {
        slug: 'red',
        title: 'Red velvet',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/dessert-red.ppg',
        price: '7$',
        category: 'dessert',
        favorite: false
    },
    {
        slug: 'cheescake',
        title: 'Cheescakes',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/dessert-cheescake.ppg',
        price: '7$',
        category: 'dessert',
        favorite: false
    },
    {
        slug: 'creme',
        title: 'Creme brulee',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/dessert-creme.ppg',
        price: '7$',
        category: 'dessert',
        favorite: false
    },
    {
        slug: 'pancake',
        title: 'Pancake',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/dessert-pankake.ppg',
        price: '7$',
        category: 'dessert',
        favorite: false
    },
    {
        slug: 'honey',
        title: 'Red velvet',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/dessert-honey.ppg',
        price: '7$',
        category: 'dessert',
        favorite: false
    },
    {
        slug: 'chocolate',
        title: 'Chocolate cake',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/dessert-chocolate.ppg',
        price: '7$',
        category: 'dessert',
        favorite: false
    },
    {
        slug: 'forest',
        title: 'Red velvet',
        description: 'Fragrant black coffee with cognac and whipped cream',
        img: 'assets/dessert-forest.ppg',
        price: '7$',
        category: 'dessert',
        favorite: false
    }
]

// Arrow button click handlers
nextBtn?.addEventListener('click', () => {
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
});

prevBtn?.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
});

// Clickable underlines to jump to slide
underlines.forEach((underline, index) => {
    underline.addEventListener('click', () => {
        const targetSlide = track.children[index];
        targetSlide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
});

// Update active underline on scroll/swipe
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(track.children).indexOf(entry.target);
            underlines.forEach((u, i) => {
                u.classList.toggle('active', i === index);
            });
        }
    });
}, { root: track, threshold: 0.6 });

Array.from(track.children).forEach(slide => observer.observe(slide));
window. addEventListener("DOMContentLoaded", (event) => { 

const handleRoute = () => {
    console.log('ROUTE HANDLED START')
    const hash = globalThis.location.hash;
    if (!(hash === '#menu')) {
        document.querySelectorAll('section[data-index].inactive').forEach((element) => {
            element.classList.remove('inactive')
        })
        document.querySelectorAll('section[data-menu]').forEach((element) => {
            element.classList.add('inactive');
            console.log('CLASS LIST:', )
        })
        return;
    }
    if (hash === '#menu') {
        document.querySelectorAll('section[data-menu].inactive').forEach((element) => {
            element.classList.remove('inactive')
        })
        document.querySelectorAll('section[data-index]').forEach((element) => {
            
            element.classList.add('inactive');
            console.log()
        })
    }
    console.log('ROUTE HANDLED')
}

window.addEventListener('hashchange', () => {
    console.log('HASH CHANGED')
    handleRoute();
});

handleRoute();


    console.log('GRID');
    const grid = document.getElementById('products-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const filterBtns = document.querySelectorAll('[data-category]');

    // Modal elements
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalPrice = document.getElementById('modal-price');
    const modalClose = document.querySelector('.modal-close');

    let currentCategory = 'coffee';
    let visibleLimit = 4; // Initial limit for mobile/tablet view
    let isDesktop = window.innerWidth >= 1024;

    // Listen to window resize to manage desktop vs mobile/tablet limits
    window.addEventListener('resize', () => {
        const desktopNow = window.innerWidth >= 1024;
        if (desktopNow !== isDesktop) {
            isDesktop = desktopNow;
            renderProducts();
        }
    });

    // Render products based on category and display constraints
    function renderProducts() {
        grid.innerHTML = '';
        const filtered = products.filter(p => p.category === currentCategory);
        
        // On desktop, show all items. On mobile/tablet, respect visibleLimit
        const itemsToDisplay = isDesktop ? filtered : filtered.slice(0, visibleLimit);

        itemsToDisplay.forEach(product => {
            const card = document.createElement('article');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-img-wrapper">
                    <img src="${product.img}" alt="${product.title}" onerror="this.src='assets/thumbnail.png'" />
                </div>
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p class="price">${product.price}</p>
                </div>
            `;

            // Open modal on click
            card.addEventListener('click', () => {
                modalImg.src = product.img;
                modalTitle.textContent = product.title;
                modalDesc.textContent = product.description;
                modalPrice.textContent = product.price;
                modal.classList.add('open');
            });

            grid.appendChild(card);
        });

        // Handle "Load More" button visibility for mobile/tablet
        if (!isDesktop && filtered.length > visibleLimit) {
            loadMoreBtn.classList.remove('hidden');
        } else {
            loadMoreBtn.classList.add('hidden');
        }
    }

    // Category filter button clicks
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            visibleLimit = 4; // Reset limit when switching category
            renderProducts();
        });
    });

    // Load More click handler
    loadMoreBtn.addEventListener('click', () => {
        visibleLimit += 4; // Reveal 4 more items
        renderProducts();
    });

    // Close Modal triggers
    modalClose.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
    });

    // Initial Render
    renderProducts();
})