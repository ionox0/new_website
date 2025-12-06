// Insurance Comparison App - Modern Dark Theme

document.addEventListener('DOMContentLoaded', function() {
    // State management
    let currentFilters = {
        type: 'all',
        minPrice: null,
        maxPrice: null,
        coverage: 'all',
        rating: 'all',
        search: '',
        sortBy: 'price-low'
    };

    // DOM Elements
    const insuranceGrid = document.getElementById('insurance-grid');
    const resultsCount = document.getElementById('results-count');
    const sectionHeading = document.getElementById('section-heading');
    const modal = document.getElementById('policy-modal');
    const modalBody = document.getElementById('modal-body');

    // Filter Elements
    const filterToggle = document.getElementById('filter-toggle');
    const filterPanel = document.getElementById('filter-panel');
    const searchInput = document.getElementById('search-input');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const coverageLevelSelect = document.getElementById('coverage-level');
    const ratingFilterSelect = document.getElementById('rating-filter');
    const sortBySelect = document.getElementById('sort-by');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');

    // Navigation Elements
    const categoryItems = document.querySelectorAll('.category-item');
    const navIcons = document.querySelectorAll('.nav-icon');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Initialize the application
    function init() {
        renderPolicyCards(insuranceData);
        setupEventListeners();
        updateResultsCount(insuranceData.length);
    }

    // Setup event listeners
    function setupEventListeners() {
        // Filter toggle
        filterToggle.addEventListener('click', () => {
            filterPanel.classList.toggle('active');
        });

        // Search functionality
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });

        // Filter controls
        applyFiltersBtn.addEventListener('click', applyFilters);
        resetFiltersBtn.addEventListener('click', resetFilters);

        // Sort dropdown - immediate update
        sortBySelect.addEventListener('change', function() {
            currentFilters.sortBy = this.value;
            applyFilters();
        });

        // Category navigation
        categoryItems.forEach(item => {
            item.addEventListener('click', function() {
                const type = this.dataset.type;
                handleCategoryClick(type, this);
            });
        });

        // Sidebar nav icons
        navIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                navIcons.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Mobile menu toggle
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        }

        // Modal close
        document.querySelector('.close-modal').addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });

        // Keyboard navigation for modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });

        // Provider list click
        document.querySelectorAll('.provider-item').forEach(item => {
            item.addEventListener('click', function() {
                const companyName = this.querySelector('.provider-name').textContent;
                searchInput.value = companyName;
                currentFilters.search = companyName.toLowerCase();
                applyFilters();
            });
        });
    }

    // Debounce function for search
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Handle search
    function handleSearch() {
        currentFilters.search = searchInput.value.trim().toLowerCase();
        applyFilters();
    }

    // Handle category click
    function handleCategoryClick(type, element) {
        categoryItems.forEach(item => item.classList.remove('active'));
        element.classList.add('active');

        currentFilters.type = type;

        // Update section heading
        const headings = {
            'all': 'ALL POLICIES',
            'auto': 'AUTO INSURANCE',
            'home': 'HOME INSURANCE',
            'life': 'LIFE INSURANCE',
            'health': 'HEALTH INSURANCE'
        };
        sectionHeading.textContent = headings[type] || 'ALL POLICIES';

        applyFilters();
    }

    // Apply all filters
    function applyFilters() {
        // Get filter values
        currentFilters.minPrice = minPriceInput.value ? parseInt(minPriceInput.value) : null;
        currentFilters.maxPrice = maxPriceInput.value ? parseInt(maxPriceInput.value) : null;
        currentFilters.coverage = coverageLevelSelect.value;
        currentFilters.rating = ratingFilterSelect.value;

        let filteredData = [...insuranceData];

        // Filter by type
        if (currentFilters.type !== 'all') {
            filteredData = filteredData.filter(item => item.type === currentFilters.type);
        }

        // Filter by search term
        if (currentFilters.search) {
            filteredData = filteredData.filter(item =>
                item.company.toLowerCase().includes(currentFilters.search) ||
                item.policyName.toLowerCase().includes(currentFilters.search) ||
                item.description.toLowerCase().includes(currentFilters.search)
            );
        }

        // Filter by price range
        if (currentFilters.minPrice !== null) {
            filteredData = filteredData.filter(item => item.monthlyPremium >= currentFilters.minPrice);
        }
        if (currentFilters.maxPrice !== null) {
            filteredData = filteredData.filter(item => item.monthlyPremium <= currentFilters.maxPrice);
        }

        // Filter by coverage level
        if (currentFilters.coverage !== 'all') {
            filteredData = filteredData.filter(item => item.coverage === currentFilters.coverage);
        }

        // Filter by rating
        if (currentFilters.rating !== 'all') {
            const minRating = parseFloat(currentFilters.rating);
            filteredData = filteredData.filter(item => item.rating >= minRating);
        }

        // Sort data
        filteredData = sortData(filteredData, currentFilters.sortBy);

        // Render results
        renderPolicyCards(filteredData);
        updateResultsCount(filteredData.length);
    }

    // Sort data based on criteria
    function sortData(data, sortBy) {
        const sortedData = [...data];

        switch (sortBy) {
            case 'price-low':
                sortedData.sort((a, b) => a.monthlyPremium - b.monthlyPremium);
                break;
            case 'price-high':
                sortedData.sort((a, b) => b.monthlyPremium - a.monthlyPremium);
                break;
            case 'rating':
                sortedData.sort((a, b) => b.rating - a.rating);
                break;
            case 'name':
                sortedData.sort((a, b) => a.company.localeCompare(b.company));
                break;
        }

        return sortedData;
    }

    // Reset all filters
    function resetFilters() {
        currentFilters = {
            type: currentFilters.type, // Keep current category
            minPrice: null,
            maxPrice: null,
            coverage: 'all',
            rating: 'all',
            search: '',
            sortBy: 'price-low'
        };

        // Reset form inputs
        searchInput.value = '';
        minPriceInput.value = '';
        maxPriceInput.value = '';
        coverageLevelSelect.value = 'all';
        ratingFilterSelect.value = 'all';
        sortBySelect.value = 'price-low';

        applyFilters();
    }

    // Update results count display
    function updateResultsCount(count) {
        resultsCount.textContent = `${count} ${count === 1 ? 'policy' : 'policies'}`;
    }

    // Render policy cards in new style
    function renderPolicyCards(data) {
        if (data.length === 0) {
            insuranceGrid.innerHTML = `
                <div class="no-results fade-in">
                    <h3>No policies found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
            return;
        }

        insuranceGrid.innerHTML = data.map((policy, index) => {
            const isActive = index < 3; // First 3 cards are "active" for visual effect
            return `
                <div class="policy-card fade-in ${isActive ? 'active' : ''}" data-id="${policy.id}" onclick="viewPolicyDetails(${policy.id})">
                    <div class="card-icon">${policy.icon}</div>
                    <div class="card-company">${policy.company}</div>
                    <div class="card-policy-name">${policy.policyName}</div>
                    <div class="card-price">
                        <span class="amount">${formatCurrency(policy.monthlyPremium)}</span>
                        <span class="period">/month</span>
                    </div>
                    <div class="card-meta">
                        <div class="card-rating">
                            <span>${generateStars(policy.rating)}</span>
                            <span>${policy.rating}</span>
                        </div>
                        <span class="card-badge ${policy.coverage}">${policy.coverage}</span>
                    </div>
                    <div class="card-status ${isActive ? 'active' : ''}">
                        ${isActive ? 'Popular choice' : `${policy.features.length} features included`}
                    </div>
                </div>
            `;
        }).join('');
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
        sidebar.classList.toggle('active');

        // Create/toggle overlay
        let overlay = document.querySelector('.sidebar-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'sidebar-overlay';
            document.body.appendChild(overlay);
            overlay.addEventListener('click', () => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
        }
        overlay.classList.toggle('active');
    }

    // View policy details (modal)
    window.viewPolicyDetails = function(policyId) {
        const policy = insuranceData.find(p => p.id === policyId);
        if (!policy) return;

        const coverageHtml = Object.entries(policy.coverageDetails).map(([key, value]) => `
            <div class="coverage-item">
                <span class="label">${formatCoverageKey(key)}</span>
                <span class="value">${value}</span>
            </div>
        `).join('');

        modalBody.innerHTML = `
            <div class="modal-header">
                <div style="display: flex; gap: 1rem; align-items: center;">
                    <span style="font-size: 2.5rem;">${policy.icon}</span>
                    <div>
                        <h2>${policy.company}</h2>
                        <p>${policy.policyName}</p>
                    </div>
                </div>
            </div>
            <div class="modal-body-content">
                <div class="modal-section">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <div>
                            <span style="font-size: 2rem; font-weight: 700; color: var(--accent-cyan);">
                                ${formatCurrency(policy.monthlyPremium)}
                            </span>
                            <span style="color: var(--text-muted);">/month</span>
                        </div>
                        <div style="text-align: right;">
                            <div class="card-rating" style="font-size: 1.1rem;">
                                <span>${generateStars(policy.rating)}</span>
                                <span style="margin-left: 0.25rem; font-weight: 600;">${policy.rating}</span>
                            </div>
                            <small style="color: var(--text-muted);">${policy.reviewCount.toLocaleString()} reviews</small>
                        </div>
                    </div>
                    <p style="color: var(--text-secondary); line-height: 1.6;">${policy.description}</p>
                </div>

                <div class="modal-section">
                    <h3>Coverage Details</h3>
                    <div class="coverage-grid">
                        ${coverageHtml}
                        <div class="coverage-item">
                            <span class="label">Deductible</span>
                            <span class="value">${formatCurrency(policy.deductible)}</span>
                        </div>
                        <div class="coverage-item">
                            <span class="label">Annual Premium</span>
                            <span class="value">${formatCurrency(policy.annualPremium)}</span>
                        </div>
                    </div>
                </div>

                <div class="modal-section">
                    <h3>Key Features</h3>
                    <ul class="features-list">
                        ${policy.features.map(feature => `
                            <li><span class="check">&#10003;</span> ${feature}</li>
                        `).join('')}
                    </ul>
                </div>

                <div class="modal-section">
                    <h3>Highlights</h3>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${policy.highlights.map(highlight => `
                            <span style="background: var(--bg-card); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; color: var(--text-secondary); border: 1px solid var(--border-color);">
                                ${highlight}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-primary" onclick="getQuote(${policy.id})">Get a Quote</button>
                <button class="btn-secondary" onclick="closeModal()">Close</button>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Format coverage key for display
    function formatCoverageKey(key) {
        const keyMap = {
            liability: 'Liability',
            collision: 'Collision',
            comprehensive: 'Comprehensive',
            medical: 'Medical',
            uninsured: 'Uninsured Motorist',
            dwelling: 'Dwelling',
            personalProperty: 'Personal Property',
            medicalPayments: 'Medical Payments',
            additionalLiving: 'Additional Living',
            deathBenefit: 'Death Benefit',
            cashValue: 'Cash Value',
            premiumPeriod: 'Premium Period',
            dividends: 'Dividends',
            riders: 'Riders',
            termLength: 'Term Length',
            premiumType: 'Premium Type',
            convertible: 'Convertible',
            adjustable: 'Adjustable',
            annualMaximum: 'Annual Maximum',
            outOfPocketMax: 'Out of Pocket Max',
            primaryCare: 'Primary Care',
            specialist: 'Specialist',
            emergency: 'Emergency'
        };
        return keyMap[key] || key.replace(/([A-Z])/g, ' $1').trim();
    }

    // Get quote (simulated)
    window.getQuote = function(policyId) {
        const policy = insuranceData.find(p => p.id === policyId);
        if (!policy) return;

        // Close modal if open
        closeModal();

        // Show a notification-style message
        showNotification(`Thank you for your interest in ${policy.company}'s ${policy.policyName}! Estimated monthly premium: ${formatCurrency(policy.monthlyPremium)}`);
    };

    // Show notification
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--bg-card);
            border: 1px solid var(--accent-cyan);
            color: var(--text-primary);
            padding: 1rem 2rem;
            border-radius: var(--radius-lg);
            box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
            z-index: 2000;
            max-width: 90%;
            text-align: center;
            animation: fadeIn 0.3s ease-out;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(-50%) translateY(10px)';
            notification.style.transition = 'all 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    // Close modal
    window.closeModal = function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Initialize the app
    init();
});
