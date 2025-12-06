// Squote - Commercial Insurance Quote Wizard

document.addEventListener('DOMContentLoaded', function() {
    // State
    let currentStep = 1;
    let selectedPolicy = null;
    let selectedQuote = null;
    let formData = {};

    // DOM Elements
    const landingPage = document.getElementById('landing-page');
    const quoteWizard = document.getElementById('quote-wizard');
    const progressSteps = document.querySelectorAll('.progress-step');
    const progressLines = document.querySelectorAll('.progress-line');
    const formSteps = document.querySelectorAll('.form-step');
    const policyCards = document.querySelectorAll('.policy-card');
    const step1Continue = document.getElementById('step1-continue');
    const step4Continue = document.getElementById('step4-continue');

    // Initialize
    function init() {
        setupPolicyCardListeners();
        setupQuoteCardListeners();
    }

    // Navigate to quote wizard
    window.startQuote = function() {
        landingPage.style.display = 'none';
        quoteWizard.style.display = 'block';
        window.scrollTo(0, 0);
    };

    // Navigate back to landing
    window.goToLanding = function() {
        quoteWizard.style.display = 'none';
        landingPage.style.display = 'block';
        resetWizard();
        window.scrollTo(0, 0);
    };

    // Reset wizard state
    function resetWizard() {
        currentStep = 1;
        selectedPolicy = null;
        selectedQuote = null;
        formData = {};

        // Reset UI
        policyCards.forEach(card => card.classList.remove('selected'));
        document.querySelectorAll('.quote-card').forEach(card => card.classList.remove('selected'));
        step1Continue.disabled = true;
        step4Continue.disabled = true;

        updateProgress();
        showStep(1);
    }

    // Setup policy card click listeners
    function setupPolicyCardListeners() {
        policyCards.forEach(card => {
            card.addEventListener('click', function() {
                policyCards.forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                selectedPolicy = this.dataset.policy;
                step1Continue.disabled = false;
            });
        });
    }

    // Setup quote card listeners
    function setupQuoteCardListeners() {
        document.querySelectorAll('.quote-card').forEach(card => {
            card.addEventListener('click', function() {
                // Only select when clicking the card itself, not the button
            });
        });
    }

    // Select quote
    window.selectQuote = function(carrier) {
        selectedQuote = carrier;
        document.querySelectorAll('.quote-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Find and select the card for this carrier
        const buttons = document.querySelectorAll('.quote-card button');
        buttons.forEach(btn => {
            if (btn.getAttribute('onclick').includes(carrier)) {
                btn.closest('.quote-card').classList.add('selected');
            }
        });

        step4Continue.disabled = false;
    };

    // Navigate to next step
    window.nextStep = function() {
        // Handle sub-steps
        if (currentStep === 2 && !document.getElementById('step-2b').classList.contains('visited')) {
            document.getElementById('step-2').classList.remove('active');
            document.getElementById('step-2b').classList.add('active');
            document.getElementById('step-2b').classList.add('visited');
            window.scrollTo(0, 0);
            return;
        }

        if (currentStep < 5) {
            // Collect form data before moving
            collectFormData();

            currentStep++;
            updateProgress();
            showStep(currentStep);

            // Update review section on step 5
            if (currentStep === 5) {
                updateReview();
            }

            window.scrollTo(0, 0);
        }
    };

    // Navigate to previous step
    window.prevStep = function() {
        // Handle sub-steps
        if (document.getElementById('step-2b').classList.contains('active')) {
            document.getElementById('step-2b').classList.remove('active');
            document.getElementById('step-2').classList.add('active');
            window.scrollTo(0, 0);
            return;
        }

        if (currentStep > 1) {
            currentStep--;
            updateProgress();
            showStep(currentStep);
            window.scrollTo(0, 0);
        }
    };

    // Update progress indicator
    function updateProgress() {
        progressSteps.forEach((step, index) => {
            const stepNum = index + 1;
            step.classList.remove('active', 'completed');

            if (stepNum < currentStep) {
                step.classList.add('completed');
            } else if (stepNum === currentStep) {
                step.classList.add('active');
            }
        });

        progressLines.forEach((line, index) => {
            line.classList.remove('completed');
            if (index < currentStep - 1) {
                line.classList.add('completed');
            }
        });
    }

    // Show specific step
    function showStep(step) {
        formSteps.forEach(s => s.classList.remove('active'));

        // Handle step 2 and 2b
        if (step === 2) {
            if (document.getElementById('step-2b').classList.contains('visited')) {
                document.getElementById('step-2b').classList.add('active');
            } else {
                document.getElementById('step-2').classList.add('active');
            }
        } else {
            const stepEl = document.getElementById(`step-${step}`);
            if (stepEl) {
                stepEl.classList.add('active');
            }
        }
    }

    // Collect form data from current step
    function collectFormData() {
        const inputs = document.querySelectorAll('.form-step.active input, .form-step.active select');
        inputs.forEach(input => {
            if (input.type === 'radio') {
                if (input.checked) {
                    formData[input.name] = input.value;
                }
            } else {
                formData[input.id] = input.value;
            }
        });
    }

    // Update review section
    function updateReview() {
        // Policy
        const policyNames = {
            'bop': 'Business Owner Policy',
            'gl': 'General Liability',
            'wc': 'Worker\'s Compensation',
            'ca': 'Commercial Auto',
            'umbrella': 'Umbrella',
            'cyber': 'Cyber'
        };
        document.getElementById('review-policy').innerHTML = `
            <p><strong>Selected:</strong> ${policyNames[selectedPolicy] || 'Not selected'}</p>
        `;

        // Business
        document.getElementById('review-business').innerHTML = `
            <p><strong>Business Name:</strong> ${formData['business-name'] || 'N/A'}</p>
            <p><strong>Address:</strong> ${formData['address'] || 'N/A'}, ${formData['city'] || ''} ${formData['state'] || ''} ${formData['zipcode'] || ''}</p>
            <p><strong>Email:</strong> ${formData['email'] || 'N/A'}</p>
            <p><strong>Year Started:</strong> ${formData['year-started'] || 'N/A'}</p>
            <p><strong>Annual Revenue:</strong> ${formData['annual-revenue'] || 'N/A'}</p>
            <p><strong>Employees:</strong> ${formData['num-employees'] || 'N/A'}</p>
        `;

        // Location
        document.getElementById('review-location').innerHTML = `
            <p><strong>Year Built:</strong> ${formData['year-build'] || 'N/A'}</p>
            <p><strong>Stories:</strong> ${formData['num-stories'] || 'N/A'}</p>
            <p><strong>Building Area:</strong> ${formData['building-area'] || 'N/A'} sq. ft.</p>
            <p><strong>Construction Type:</strong> ${formData['construction-type'] || 'N/A'}</p>
        `;

        // Quote
        const quoteDetails = {
            'travelers': { name: 'Travelers', price: '$2,450/year', features: 'GL: $1M/$2M, Property: $500K' },
            'hartford': { name: 'The Hartford', price: '$2,680/year', features: 'GL: $1M/$2M, Property: $500K' },
            'next': { name: 'Next', price: '$2,150/year', features: 'GL: $1M/$2M, Property: $400K' }
        };
        const quote = quoteDetails[selectedQuote];
        document.getElementById('review-quote').innerHTML = quote ? `
            <p><strong>Carrier:</strong> ${quote.name}</p>
            <p><strong>Premium:</strong> ${quote.price}</p>
            <p><strong>Coverage:</strong> ${quote.features}</p>
        ` : '<p>No quote selected</p>';
    }

    // Submit quote
    window.submitQuote = function() {
        collectFormData();

        // Create success modal
        const modal = document.createElement('div');
        modal.className = 'success-modal active';
        modal.innerHTML = `
            <div class="success-content fade-in">
                <div class="success-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h2>Application Submitted!</h2>
                <p>Your insurance application has been submitted successfully. A representative will contact you within 24-48 hours.</p>
                <button class="btn-primary" onclick="closeSuccessModal()">Return to Home</button>
            </div>
        `;
        document.body.appendChild(modal);
    };

    // Close success modal
    window.closeSuccessModal = function() {
        const modal = document.querySelector('.success-modal');
        if (modal) {
            modal.remove();
        }
        goToLanding();
    };

    // Initialize app
    init();
});
