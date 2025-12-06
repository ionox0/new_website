// Insurance Comparison Website - Main Application Logic

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
    const comparisonTbody = document.getElementById('comparison-tbody');
    const resultsCount = document.getElementById('results-count');
    const modal = document.getElementById('policy-modal');
    const modalBody = document.getElementById('modal-body');

    // Filter Elements
    const insuranceTypeSelect = document.getElementById('insurance-type');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const coverageLevelSelect = document.getElementById('coverage-level');
    const ratingFilterSelect = document.getElementById('rating-filter');
    const sortBySelect = document.getElementById('sort-by');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');

    // Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    // Initialize the application
    function init() {
        renderInsuranceCards(insuranceData);
        renderComparisonTable(insuranceData);
        setupEventListeners();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search functionality
        searchBtn.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleSearch();
        });

        // Insurance type dropdown in hero
        insuranceTypeSelect.addEventListener('change', function() {
            currentFilters.type = this.value;
            applyFilters();
        });

        // Filter controls
        applyFiltersBtn.addEventListener('click', applyFilters);
        resetFiltersBtn.addEventListener('click', resetFilters);

        // Sort dropdown
        sortBySelect.addEventListener('change', function() {
            currentFilters.sortBy = this.value;
            applyFilters();
        });

        // Navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.dataset.section;
                handleNavigation(section);
            });
        });

        // Mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
        });

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
    }

    // Handle search
    function handleSearch() {
        currentFilters.search = searchInput.value.trim().toLowerCase();
        currentFilters.type = insuranceTypeSelect.value;
        applyFilters();
    }

    // Handle navigation
    function handleNavigation(section) {
        navLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');

        if (section === 'home') {
            currentFilters.type = 'all';
            insuranceTypeSelect.value = 'all';
        } else if (section === 'auto') {
            currentFilters.type = 'auto';
            insuranceTypeSelect.value = 'auto';
        } else if (section === 'home-insurance') {
            currentFilters.type = 'home';
            insuranceTypeSelect.value = 'home';
        } else if (section === 'life') {
            currentFilters.type = 'life';
            insuranceTypeSelect.value = 'life';
        } else if (section === 'health') {
            currentFilters.type = 'health';
            insuranceTypeSelect.value = 'health';
        }

        applyFilters();

        // Scroll to filters section
        document.querySelector('.filters-section').scrollIntoView({ behavior: 'smooth' });
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
        renderInsuranceCards(filteredData);
        renderComparisonTable(filteredData);
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
            type: 'all',
            minPrice: null,
            maxPrice: null,
            coverage: 'all',
            rating: 'all',
            search: '',
            sortBy: 'price-low'
        };

        // Reset form inputs
        insuranceTypeSelect.value = 'all';
        searchInput.value = '';
        minPriceInput.value = '';
        maxPriceInput.value = '';
        coverageLevelSelect.value = 'all';
        ratingFilterSelect.value = 'all';
        sortBySelect.value = 'price-low';

        // Reset nav links
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('[data-section="home"]').classList.add('active');

        applyFilters();
    }

    // Update results count display
    function updateResultsCount(count) {
        if (count === insuranceData.length) {
            resultsCount.textContent = 'Showing all policies';
        } else if (count === 0) {
            resultsCount.textContent = 'No policies found';
        } else {
            resultsCount.textContent = `Showing ${count} polic${count === 1 ? 'y' : 'ies'}`;
        }
    }

    // Render insurance cards
    function renderInsuranceCards(data) {
        if (data.length === 0) {
            insuranceGrid.innerHTML = `
                <div class="no-results">
                    <h3>No policies found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
            return;
        }

        insuranceGrid.innerHTML = data.map(policy => `
            <div class="insurance-card fade-in" data-id="${policy.id}">
                <div class="card-header">
                    <div class="company-info">
                        <div class="company-logo-icon">${policy.icon}</div>
                        <div>
                            <div class="company-name">${policy.company}</div>
                            <div class="policy-type">${policy.policyName}</div>
                        </div>
                    </div>
                    <span class="card-badge ${policy.coverage}">${policy.coverage}</span>
                </div>
                <div class="card-body">
                    <div class="price-section">
                        <div class="price">
                            ${formatCurrency(policy.monthlyPremium)}<span>/month</span>
                        </div>
                        <div class="rating">
                            <span class="stars">${generateStars(policy.rating)}</span>
                            <span class="rating-value">${policy.rating}</span>
                        </div>
                    </div>
                    <ul class="features-list">
                        ${policy.features.slice(0, 4).map(feature => `
                            <li><span class="check">✓</span> ${feature}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="card-footer">
                    <button class="btn-primary" onclick="viewPolicyDetails(${policy.id})">View Details</button>
                    <button class="btn-secondary" onclick="getQuote(${policy.id})">Get Quote</button>
                </div>
            </div>
        `).join('');
    }

    // Render comparison table
    function renderComparisonTable(data) {
        const tableData = data.slice(0, 10); // Show top 10 in table

        comparisonTbody.innerHTML = tableData.map(policy => `
            <tr>
                <td>
                    <div class="company-cell">
                        <span class="table-logo">${policy.icon}</span>
                        <div>
                            <strong>${policy.company}</strong>
                            <br><small>${policy.policyName}</small>
                        </div>
                    </div>
                </td>
                <td><span class="type-badge ${policy.type}">${capitalizeFirst(policy.type)}</span></td>
                <td><span class="card-badge ${policy.coverage}">${capitalizeFirst(policy.coverage)}</span></td>
                <td><strong>${formatCurrency(policy.monthlyPremium)}</strong>/mo</td>
                <td>${formatCurrency(policy.deductible)}</td>
                <td>
                    <span class="stars">${generateStars(policy.rating)}</span>
                    ${policy.rating}
                </td>
                <td>
                    <button class="table-btn" onclick="viewPolicyDetails(${policy.id})">Details</button>
                </td>
            </tr>
        `).join('');
    }

    // Helper function to capitalize first letter
    function capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
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
                <div class="company-info" style="display: flex; gap: 1rem; align-items: center;">
                    <div class="company-logo-icon" style="font-size: 2.5rem;">${policy.icon}</div>
                    <div>
                        <h2>${policy.company}</h2>
                        <p style="color: var(--text-light);">${policy.policyName}</p>
                    </div>
                </div>
            </div>
            <div class="modal-body-content">
                <div class="modal-section">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <div>
                            <span style="font-size: 2.5rem; font-weight: 700; color: var(--primary-color);">
                                ${formatCurrency(policy.monthlyPremium)}
                            </span>
                            <span style="color: var(--text-light);">/month</span>
                        </div>
                        <div style="text-align: right;">
                            <div class="rating" style="font-size: 1.2rem;">
                                <span class="stars">${generateStars(policy.rating)}</span>
                                <span class="rating-value">${policy.rating}</span>
                            </div>
                            <small style="color: var(--text-light);">${policy.reviewCount.toLocaleString()} reviews</small>
                        </div>
                    </div>
                    <p style="color: var(--text-dark); line-height: 1.6;">${policy.description}</p>
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
                            <li><span class="check">✓</span> ${feature}</li>
                        `).join('')}
                    </ul>
                </div>

                <div class="modal-section">
                    <h3>Highlights</h3>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${policy.highlights.map(highlight => `
                            <span style="background: var(--bg-light); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">
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

        // Show a simple alert (in a real app, this would open a quote form)
        alert(`Thank you for your interest in ${policy.company}'s ${policy.policyName}!\n\nIn a live application, you would be redirected to a quote form where you can provide your information and receive a personalized quote.\n\nEstimated monthly premium: ${formatCurrency(policy.monthlyPremium)}`);
    };

    // Close modal
    window.closeModal = function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Initialize the app
    init();
});
