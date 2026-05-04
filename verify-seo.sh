#!/bin/bash

# SEO Verification Script
# Run this script to verify all SEO implementations are working

echo "🔍 SEO Verification Script"
echo "=========================="
echo ""

BASE_URL="https://rashidxxmhd.vercel.app"
LOCAL_URL="http://localhost:3000"

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check URL
check_url() {
    local url=$1
    local name=$2
    echo -e "${BLUE}Checking $name...${NC}"
    if curl -sf "$url" > /dev/null 2>&1; then
        echo -e "${GREEN}✓ $name is accessible${NC}"
        return 0
    else
        echo -e "${YELLOW}✗ $name returned an error (might be local only)${NC}"
        return 1
    fi
}

# Function to check for meta tags
check_meta_tags() {
    local url=$1
    echo -e "${BLUE}Checking meta tags on $url...${NC}"
    
    # Get the HTML and check for og:title
    response=$(curl -sf "$url" 2>/dev/null)
    
    if echo "$response" | grep -q "og:title"; then
        echo -e "${GREEN}✓ Open Graph tags found${NC}"
    else
        echo -e "${YELLOW}✗ Open Graph tags not found${NC}"
    fi
    
    if echo "$response" | grep -q "twitter:card"; then
        echo -e "${GREEN}✓ Twitter Card tags found${NC}"
    else
        echo -e "${YELLOW}✗ Twitter Card tags not found${NC}"
    fi
    
    if echo "$response" | grep -q "application/ld+json"; then
        echo -e "${GREEN}✓ JSON-LD schema found${NC}"
    else
        echo -e "${YELLOW}✗ JSON-LD schema not found${NC}"
    fi
    
    if echo "$response" | grep -q "description"; then
        echo -e "${GREEN}✓ Meta description found${NC}"
    else
        echo -e "${YELLOW}✗ Meta description not found${NC}"
    fi
}

echo ""
echo -e "${BLUE}1. Checking Essential SEO Files${NC}"
echo "=================================="

# Check sitemap and robots files (production URL)
echo ""
echo "Production URLs:"
check_url "$BASE_URL/sitemap.xml" "Sitemap"
check_url "$BASE_URL/robots.txt" "Robots.txt"

echo ""
echo "Local URLs (if running 'npm run dev'):"
check_url "$LOCAL_URL/sitemap.xml" "Sitemap (local)"
check_url "$LOCAL_URL/robots.txt" "Robots.txt (local)"

echo ""
echo -e "${BLUE}2. Checking Page Metadata${NC}"
echo "=================================="

echo ""
echo "Home Page:"
check_meta_tags "$BASE_URL"

echo ""
echo "Projects Page:"
check_meta_tags "$BASE_URL/projects"

echo ""
echo "About Page:"
check_meta_tags "$BASE_URL/about"

echo ""
echo -e "${GREEN}=================================="
echo "SEO Verification Complete!"
echo "=================================="
echo ""
echo "Next Steps:"
echo "1. Validate at: https://search.google.com/test/mobile-friendly"
echo "2. Check: https://pagespeed.web.dev/"
echo "3. Setup: https://search.google.com/search-console"
echo ""
