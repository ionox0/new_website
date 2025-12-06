// Insurance Companies Data
const insuranceData = [
    // AUTO INSURANCE
    {
        id: 1,
        company: "State Farm",
        icon: "🏢",
        type: "auto",
        policyName: "Drive Safe Auto",
        coverage: "premium",
        monthlyPremium: 145,
        annualPremium: 1740,
        deductible: 500,
        rating: 4.7,
        reviewCount: 12453,
        features: [
            "Collision coverage up to $50,000",
            "Comprehensive coverage",
            "Uninsured motorist protection",
            "Roadside assistance 24/7",
            "Rental car reimbursement"
        ],
        coverageDetails: {
            liability: "$100,000/$300,000",
            collision: "$50,000",
            comprehensive: "$50,000",
            medical: "$10,000",
            uninsured: "$100,000"
        },
        description: "Comprehensive auto coverage with excellent customer service and wide network of agents.",
        highlights: ["A+ AM Best Rating", "Discount for safe drivers", "Mobile app claims"]
    },
    {
        id: 2,
        company: "Geico",
        icon: "🦎",
        type: "auto",
        policyName: "Basic Auto Protection",
        coverage: "basic",
        monthlyPremium: 89,
        annualPremium: 1068,
        deductible: 1000,
        rating: 4.5,
        reviewCount: 18234,
        features: [
            "Liability coverage",
            "Collision coverage up to $25,000",
            "24/7 customer service",
            "Easy online claims"
        ],
        coverageDetails: {
            liability: "$50,000/$100,000",
            collision: "$25,000",
            comprehensive: "$25,000",
            medical: "$5,000",
            uninsured: "$50,000"
        },
        description: "Affordable auto insurance with quick online quotes and easy claims process.",
        highlights: ["15% multi-policy discount", "Military discount", "Good student discount"]
    },
    {
        id: 3,
        company: "Progressive",
        icon: "🏛️",
        type: "auto",
        policyName: "Snapshot Auto",
        coverage: "standard",
        monthlyPremium: 112,
        annualPremium: 1344,
        deductible: 750,
        rating: 4.4,
        reviewCount: 15678,
        features: [
            "Usage-based insurance option",
            "Collision coverage up to $35,000",
            "Comprehensive coverage",
            "Pet injury coverage",
            "Custom parts coverage"
        ],
        coverageDetails: {
            liability: "$75,000/$150,000",
            collision: "$35,000",
            comprehensive: "$35,000",
            medical: "$7,500",
            uninsured: "$75,000"
        },
        description: "Innovative auto insurance with Snapshot device for personalized rates based on driving habits.",
        highlights: ["Name Your Price tool", "Snapshot savings up to 30%", "Bundle discounts"]
    },
    {
        id: 4,
        company: "Allstate",
        icon: "☂️",
        type: "auto",
        policyName: "Drivewise Premium",
        coverage: "premium",
        monthlyPremium: 156,
        annualPremium: 1872,
        deductible: 500,
        rating: 4.6,
        reviewCount: 9876,
        features: [
            "Collision coverage up to $75,000",
            "Comprehensive coverage",
            "New car replacement",
            "Accident forgiveness",
            "Deductible rewards"
        ],
        coverageDetails: {
            liability: "$150,000/$300,000",
            collision: "$75,000",
            comprehensive: "$75,000",
            medical: "$15,000",
            uninsured: "$150,000"
        },
        description: "Premium auto coverage with innovative rewards programs and accident forgiveness.",
        highlights: ["Safe driving bonus", "Claim-free rewards", "Local agents available"]
    },
    {
        id: 5,
        company: "Liberty Mutual",
        icon: "🔔",
        type: "auto",
        policyName: "Auto Secure Plus",
        coverage: "standard",
        monthlyPremium: 128,
        annualPremium: 1536,
        deductible: 750,
        rating: 4.3,
        reviewCount: 7654,
        features: [
            "Collision coverage up to $40,000",
            "Comprehensive coverage",
            "Better car replacement",
            "Lifetime repair guarantee",
            "24/7 roadside assistance"
        ],
        coverageDetails: {
            liability: "$100,000/$200,000",
            collision: "$40,000",
            comprehensive: "$40,000",
            medical: "$10,000",
            uninsured: "$100,000"
        },
        description: "Reliable auto insurance with unique benefits like better car replacement and lifetime repair guarantee.",
        highlights: ["New car replacement", "Teacher discount", "Early shopper discount"]
    },
    {
        id: 6,
        company: "USAA",
        icon: "⭐",
        type: "auto",
        policyName: "Military Auto Shield",
        coverage: "premium",
        monthlyPremium: 98,
        annualPremium: 1176,
        deductible: 500,
        rating: 4.9,
        reviewCount: 21345,
        features: [
            "Collision coverage up to $60,000",
            "Comprehensive coverage",
            "Accident forgiveness",
            "Diminishing deductible",
            "Rental reimbursement"
        ],
        coverageDetails: {
            liability: "$100,000/$300,000",
            collision: "$60,000",
            comprehensive: "$60,000",
            medical: "$10,000",
            uninsured: "$100,000"
        },
        description: "Exclusive auto insurance for military members and their families with exceptional rates and service.",
        highlights: ["Military exclusive", "Top-rated customer service", "No rate increases after claims"]
    },
    {
        id: 7,
        company: "Nationwide",
        icon: "🌟",
        type: "auto",
        policyName: "On Your Side Auto",
        coverage: "standard",
        monthlyPremium: 119,
        annualPremium: 1428,
        deductible: 750,
        rating: 4.4,
        reviewCount: 8765,
        features: [
            "Collision coverage up to $35,000",
            "Comprehensive coverage",
            "Vanishing deductible",
            "Accident forgiveness",
            "Gap coverage available"
        ],
        coverageDetails: {
            liability: "$75,000/$150,000",
            collision: "$35,000",
            comprehensive: "$35,000",
            medical: "$7,500",
            uninsured: "$75,000"
        },
        description: "Dependable auto coverage with vanishing deductible that decreases for every year of safe driving.",
        highlights: ["SmartRide discount", "Multi-policy savings", "Accident-free discount"]
    },

    // HOME INSURANCE
    {
        id: 8,
        company: "State Farm",
        icon: "🏢",
        type: "home",
        policyName: "Homeowners Plus",
        coverage: "premium",
        monthlyPremium: 185,
        annualPremium: 2220,
        deductible: 1000,
        rating: 4.7,
        reviewCount: 10234,
        features: [
            "Dwelling coverage up to $500,000",
            "Personal property protection",
            "Liability coverage $300,000",
            "Additional living expenses",
            "Identity theft protection"
        ],
        coverageDetails: {
            dwelling: "$500,000",
            personalProperty: "$250,000",
            liability: "$300,000",
            medicalPayments: "$5,000",
            additionalLiving: "$100,000"
        },
        description: "Comprehensive home insurance with extensive coverage options and local agent support.",
        highlights: ["Bundling discounts", "Smart home discount", "Claims-free discount"]
    },
    {
        id: 9,
        company: "Allstate",
        icon: "☂️",
        type: "home",
        policyName: "House & Home",
        coverage: "standard",
        monthlyPremium: 142,
        annualPremium: 1704,
        deductible: 1500,
        rating: 4.5,
        reviewCount: 8765,
        features: [
            "Dwelling coverage up to $350,000",
            "Personal property protection",
            "Liability coverage $200,000",
            "Water backup coverage",
            "Equipment breakdown"
        ],
        coverageDetails: {
            dwelling: "$350,000",
            personalProperty: "$175,000",
            liability: "$200,000",
            medicalPayments: "$3,000",
            additionalLiving: "$70,000"
        },
        description: "Flexible home insurance options with innovative claim satisfaction guarantee.",
        highlights: ["Claim RateGuard", "HostAdvantage for Airbnb", "Easy pay plan"]
    },
    {
        id: 10,
        company: "Liberty Mutual",
        icon: "🔔",
        type: "home",
        policyName: "Home Protector",
        coverage: "premium",
        monthlyPremium: 198,
        annualPremium: 2376,
        deductible: 1000,
        rating: 4.4,
        reviewCount: 6543,
        features: [
            "Dwelling coverage up to $600,000",
            "Replacement cost coverage",
            "Liability coverage $500,000",
            "Inflation protection",
            "Home systems protection"
        ],
        coverageDetails: {
            dwelling: "$600,000",
            personalProperty: "$300,000",
            liability: "$500,000",
            medicalPayments: "$5,000",
            additionalLiving: "$120,000"
        },
        description: "Premium home protection with inflation coverage that adjusts your policy automatically.",
        highlights: ["Inflation protection included", "Master policy discount", "Claims-free bonus"]
    },
    {
        id: 11,
        company: "Travelers",
        icon: "🧳",
        type: "home",
        policyName: "Home Essential",
        coverage: "basic",
        monthlyPremium: 95,
        annualPremium: 1140,
        deductible: 2500,
        rating: 4.3,
        reviewCount: 5432,
        features: [
            "Dwelling coverage up to $200,000",
            "Personal property protection",
            "Liability coverage $100,000",
            "Fire and theft protection"
        ],
        coverageDetails: {
            dwelling: "$200,000",
            personalProperty: "$100,000",
            liability: "$100,000",
            medicalPayments: "$1,000",
            additionalLiving: "$40,000"
        },
        description: "Affordable home insurance for basic protection needs with reliable claims service.",
        highlights: ["New home discount", "Loss-free discount", "Automatic payments discount"]
    },
    {
        id: 12,
        company: "Nationwide",
        icon: "🌟",
        type: "home",
        policyName: "Better Roof",
        coverage: "standard",
        monthlyPremium: 156,
        annualPremium: 1872,
        deductible: 1500,
        rating: 4.5,
        reviewCount: 7654,
        features: [
            "Dwelling coverage up to $400,000",
            "Extended replacement cost",
            "Liability coverage $300,000",
            "Brand new belongings",
            "Water backup protection"
        ],
        coverageDetails: {
            dwelling: "$400,000",
            personalProperty: "$200,000",
            liability: "$300,000",
            medicalPayments: "$3,000",
            additionalLiving: "$80,000"
        },
        description: "Solid home coverage with brand new belongings replacement and extended dwelling protection.",
        highlights: ["Brand new belongings", "Extended replacement cost", "Protective device discount"]
    },

    // LIFE INSURANCE
    {
        id: 13,
        company: "Northwestern Mutual",
        icon: "🏦",
        type: "life",
        policyName: "Whole Life Premier",
        coverage: "premium",
        monthlyPremium: 245,
        annualPremium: 2940,
        deductible: 0,
        rating: 4.8,
        reviewCount: 9876,
        features: [
            "Death benefit $500,000",
            "Cash value accumulation",
            "Guaranteed premiums",
            "Dividend potential",
            "Living benefits rider"
        ],
        coverageDetails: {
            deathBenefit: "$500,000",
            cashValue: "Guaranteed growth",
            premiumPeriod: "Lifetime",
            dividends: "Eligible",
            riders: "Multiple options"
        },
        description: "Premium whole life insurance with cash value growth and potential dividends.",
        highlights: ["A++ AM Best Rating", "Over 160 years of experience", "Dividend-paying policy"]
    },
    {
        id: 14,
        company: "New York Life",
        icon: "🗽",
        type: "life",
        policyName: "Term Life 20",
        coverage: "standard",
        monthlyPremium: 45,
        annualPremium: 540,
        deductible: 0,
        rating: 4.7,
        reviewCount: 11234,
        features: [
            "Death benefit $250,000",
            "20-year level term",
            "Convertible to permanent",
            "Accelerated death benefit",
            "No medical exam option"
        ],
        coverageDetails: {
            deathBenefit: "$250,000",
            termLength: "20 years",
            premiumType: "Level",
            convertible: "Yes",
            riders: "Available"
        },
        description: "Affordable 20-year term life insurance with option to convert to permanent coverage.",
        highlights: ["Level premiums", "Convertible policy", "Strong financial ratings"]
    },
    {
        id: 15,
        company: "Prudential",
        icon: "🪨",
        type: "life",
        policyName: "Term Essential",
        coverage: "basic",
        monthlyPremium: 28,
        annualPremium: 336,
        deductible: 0,
        rating: 4.5,
        reviewCount: 8765,
        features: [
            "Death benefit $100,000",
            "10-year level term",
            "Quick online application",
            "No medical exam required"
        ],
        coverageDetails: {
            deathBenefit: "$100,000",
            termLength: "10 years",
            premiumType: "Level",
            convertible: "Limited",
            riders: "Basic"
        },
        description: "Simple and affordable term life insurance with quick approval process.",
        highlights: ["No medical exam", "Fast approval", "Budget-friendly"]
    },
    {
        id: 16,
        company: "MassMutual",
        icon: "🏛️",
        type: "life",
        policyName: "Universal Life Plus",
        coverage: "premium",
        monthlyPremium: 189,
        annualPremium: 2268,
        deductible: 0,
        rating: 4.6,
        reviewCount: 6543,
        features: [
            "Death benefit $400,000",
            "Flexible premiums",
            "Cash value growth",
            "Adjustable coverage",
            "Long-term care rider"
        ],
        coverageDetails: {
            deathBenefit: "$400,000",
            cashValue: "Interest-credited",
            premiumType: "Flexible",
            adjustable: "Yes",
            riders: "Comprehensive"
        },
        description: "Flexible universal life insurance with adjustable premiums and death benefits.",
        highlights: ["Premium flexibility", "Adjustable death benefit", "Multiple riders available"]
    },
    {
        id: 17,
        company: "MetLife",
        icon: "🏢",
        type: "life",
        policyName: "Term Life 30",
        coverage: "standard",
        monthlyPremium: 65,
        annualPremium: 780,
        deductible: 0,
        rating: 4.4,
        reviewCount: 7654,
        features: [
            "Death benefit $300,000",
            "30-year level term",
            "Accelerated benefit",
            "Conversion privilege",
            "Waiver of premium rider"
        ],
        coverageDetails: {
            deathBenefit: "$300,000",
            termLength: "30 years",
            premiumType: "Level",
            convertible: "Yes",
            riders: "Multiple options"
        },
        description: "Long-term protection with 30-year level premiums and comprehensive benefits.",
        highlights: ["30-year protection", "Conversion option", "Strong global presence"]
    },

    // HEALTH INSURANCE
    {
        id: 18,
        company: "Blue Cross Blue Shield",
        icon: "💙",
        type: "health",
        policyName: "Blue Complete",
        coverage: "premium",
        monthlyPremium: 485,
        annualPremium: 5820,
        deductible: 500,
        rating: 4.6,
        reviewCount: 15678,
        features: [
            "Comprehensive medical coverage",
            "Prescription drug coverage",
            "Mental health services",
            "Preventive care 100% covered",
            "Nationwide network"
        ],
        coverageDetails: {
            annualMaximum: "Unlimited",
            outOfPocketMax: "$3,000",
            primaryCare: "$20 copay",
            specialist: "$40 copay",
            emergency: "$150 copay"
        },
        description: "Comprehensive health coverage with extensive network and low out-of-pocket costs.",
        highlights: ["Largest provider network", "Telehealth included", "Wellness programs"]
    },
    {
        id: 19,
        company: "UnitedHealthcare",
        icon: "🏥",
        type: "health",
        policyName: "Choice Plus",
        coverage: "standard",
        monthlyPremium: 345,
        annualPremium: 4140,
        deductible: 1500,
        rating: 4.4,
        reviewCount: 12345,
        features: [
            "In-network and out-of-network coverage",
            "Prescription coverage",
            "Virtual visits",
            "Preventive care covered",
            "HSA eligible"
        ],
        coverageDetails: {
            annualMaximum: "Unlimited",
            outOfPocketMax: "$5,000",
            primaryCare: "$30 copay",
            specialist: "$50 copay",
            emergency: "$200 copay"
        },
        description: "Flexible health plan with both in-network and out-of-network options.",
        highlights: ["PPO flexibility", "Motion wellness program", "Real Appeal weight loss"]
    },
    {
        id: 20,
        company: "Aetna",
        icon: "❤️",
        type: "health",
        policyName: "Open Access",
        coverage: "standard",
        monthlyPremium: 365,
        annualPremium: 4380,
        deductible: 1000,
        rating: 4.5,
        reviewCount: 9876,
        features: [
            "No referral needed for specialists",
            "Comprehensive pharmacy benefits",
            "24/7 nurse line",
            "Mental health coverage",
            "Maternity coverage"
        ],
        coverageDetails: {
            annualMaximum: "Unlimited",
            outOfPocketMax: "$4,500",
            primaryCare: "$25 copay",
            specialist: "$45 copay",
            emergency: "$175 copay"
        },
        description: "Open access plan with no referrals needed and strong prescription coverage.",
        highlights: ["No referrals required", "CVS pharmacy network", "Aetna Health app"]
    },
    {
        id: 21,
        company: "Cigna",
        icon: "🌿",
        type: "health",
        policyName: "Connect",
        coverage: "basic",
        monthlyPremium: 245,
        annualPremium: 2940,
        deductible: 2500,
        rating: 4.3,
        reviewCount: 7654,
        features: [
            "Essential health benefits",
            "Preventive care covered",
            "Generic drug coverage",
            "Telehealth services",
            "HSA compatible"
        ],
        coverageDetails: {
            annualMaximum: "Unlimited",
            outOfPocketMax: "$7,000",
            primaryCare: "After deductible",
            specialist: "After deductible",
            emergency: "After deductible"
        },
        description: "Affordable health plan focused on essential coverage with telehealth options.",
        highlights: ["Low monthly premium", "HSA compatible", "Telehealth included"]
    },
    {
        id: 22,
        company: "Humana",
        icon: "🌻",
        type: "health",
        policyName: "Gold Plus",
        coverage: "premium",
        monthlyPremium: 525,
        annualPremium: 6300,
        deductible: 250,
        rating: 4.5,
        reviewCount: 8765,
        features: [
            "Low deductible plan",
            "Comprehensive drug formulary",
            "Dental and vision included",
            "Gym membership",
            "Care management programs"
        ],
        coverageDetails: {
            annualMaximum: "Unlimited",
            outOfPocketMax: "$2,500",
            primaryCare: "$15 copay",
            specialist: "$35 copay",
            emergency: "$125 copay"
        },
        description: "Premium health coverage with low deductible and dental/vision benefits included.",
        highlights: ["Dental & vision included", "Go365 rewards", "Silver Sneakers fitness"]
    },
    {
        id: 23,
        company: "Kaiser Permanente",
        icon: "🏨",
        type: "health",
        policyName: "HMO Complete",
        coverage: "premium",
        monthlyPremium: 445,
        annualPremium: 5340,
        deductible: 0,
        rating: 4.7,
        reviewCount: 14567,
        features: [
            "No deductible",
            "Integrated care system",
            "Pharmacy included",
            "Mental health services",
            "Online appointment scheduling"
        ],
        coverageDetails: {
            annualMaximum: "Unlimited",
            outOfPocketMax: "$3,500",
            primaryCare: "$20 copay",
            specialist: "$35 copay",
            emergency: "$100 copay"
        },
        description: "Integrated HMO with no deductible and coordinated care approach.",
        highlights: ["No deductible", "Integrated care model", "Top-rated hospitals"]
    },

    // Additional Auto Insurance
    {
        id: 24,
        company: "Farmers",
        icon: "🌾",
        type: "auto",
        policyName: "Smart Plan Auto",
        coverage: "standard",
        monthlyPremium: 135,
        annualPremium: 1620,
        deductible: 750,
        rating: 4.3,
        reviewCount: 6543,
        features: [
            "Collision coverage up to $40,000",
            "Comprehensive coverage",
            "New car pledge",
            "Rideshare coverage available",
            "Accident forgiveness"
        ],
        coverageDetails: {
            liability: "$100,000/$200,000",
            collision: "$40,000",
            comprehensive: "$40,000",
            medical: "$10,000",
            uninsured: "$100,000"
        },
        description: "Flexible auto coverage with unique perks like new car pledge and rideshare options.",
        highlights: ["Signal app savings", "New car pledge", "Local agent support"]
    },
    {
        id: 25,
        company: "American Family",
        icon: "👨‍👩‍👧‍👦",
        type: "auto",
        policyName: "DreamSecure Auto",
        coverage: "basic",
        monthlyPremium: 78,
        annualPremium: 936,
        deductible: 1000,
        rating: 4.2,
        reviewCount: 4567,
        features: [
            "Liability coverage",
            "Collision coverage up to $20,000",
            "Roadside assistance",
            "Teen driver discount"
        ],
        coverageDetails: {
            liability: "$50,000/$100,000",
            collision: "$20,000",
            comprehensive: "$20,000",
            medical: "$5,000",
            uninsured: "$50,000"
        },
        description: "Family-focused auto insurance with competitive rates and teen driver programs.",
        highlights: ["Teen Safe Driver", "Multi-car discount", "Loyalty rewards"]
    },

    // Additional Home Insurance
    {
        id: 26,
        company: "Chubb",
        icon: "🏰",
        type: "home",
        policyName: "Masterpiece Home",
        coverage: "premium",
        monthlyPremium: 325,
        annualPremium: 3900,
        deductible: 1000,
        rating: 4.8,
        reviewCount: 3456,
        features: [
            "Dwelling coverage up to $1,000,000",
            "Cash settlement option",
            "Worldwide coverage",
            "Valuable articles coverage",
            "Risk consulting services"
        ],
        coverageDetails: {
            dwelling: "$1,000,000",
            personalProperty: "$500,000",
            liability: "$1,000,000",
            medicalPayments: "$10,000",
            additionalLiving: "$250,000"
        },
        description: "Luxury home insurance for high-value properties with personalized risk management.",
        highlights: ["High-value coverage", "Risk consulting", "White-glove service"]
    },
    {
        id: 27,
        company: "USAA",
        icon: "⭐",
        type: "home",
        policyName: "Military Home Shield",
        coverage: "premium",
        monthlyPremium: 145,
        annualPremium: 1740,
        deductible: 1000,
        rating: 4.9,
        reviewCount: 8765,
        features: [
            "Dwelling coverage up to $450,000",
            "Personal property replacement",
            "Liability coverage $300,000",
            "Military-specific coverage",
            "Deployment assistance"
        ],
        coverageDetails: {
            dwelling: "$450,000",
            personalProperty: "$225,000",
            liability: "$300,000",
            medicalPayments: "$5,000",
            additionalLiving: "$90,000"
        },
        description: "Exclusive home insurance for military members with deployment-specific benefits.",
        highlights: ["Military exclusive", "Deployment coverage", "Top-rated service"]
    }
];

// Helper function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Helper function to generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '★';
    }
    if (hasHalfStar) {
        starsHtml += '☆';
    }

    return starsHtml;
}

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { insuranceData, formatCurrency, generateStars };
}
