// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab + '-search').classList.add('active');
        });
    });

    // Search functionality
    const searchButtons = document.querySelectorAll('.search-btn');
    searchButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the active tab
            const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-tab');
            
            if (activeTab === 'court') {
                handleCourtSearch();
            } else if (activeTab === 'event') {
                handleEventSearch();
            }
        });
    });

    // Court search handler
    function handleCourtSearch() {
        const prefecture = document.querySelector('#court-search .search-select').value;
        const date = document.querySelector('#court-search input[type="date"]').value;
        const time = document.querySelector('#court-search input[type="time"]').value;

        if (!prefecture) {
            alert('都道府県を選択してください');
            return;
        }

        // Simulate search results
        showSearchResults('court', {
            prefecture: prefecture,
            date: date,
            time: time
        });
    }

    // Event search handler
    function handleEventSearch() {
        const area = document.querySelector('#event-search .search-select:first-child').value;
        const level = document.querySelector('#event-search .search-select:last-child').value;

        if (!area) {
            alert('エリアを選択してください');
            return;
        }

        // Simulate search results
        showSearchResults('event', {
            area: area,
            level: level
        });
    }

    // Show search results (simulation)
    function showSearchResults(type, params) {
        let message = '';
        
        if (type === 'court') {
            message = `${params.prefecture}のバレーボールコートを検索中...`;
            if (params.date) message += `\n日付: ${params.date}`;
            if (params.time) message += `\n時間: ${params.time}`;
        } else if (type === 'event') {
            message = `${params.area}のイベントを検索中...`;
            if (params.level) message += `\nレベル: ${params.level}`;
        }

        alert(message + '\n\n検索結果は別ページで表示されます。');
    }

    // Event participation buttons
    const joinButtons = document.querySelectorAll('.btn-join');
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventCard = this.closest('.event-card');
            const eventTitle = eventCard.querySelector('h3').textContent;
            
            if (confirm(`「${eventTitle}」に参加しますか？`)) {
                alert('参加申し込みが完了しました！\n詳細は登録メールアドレスに送信されます。');
                
                // Update participant count (simulation)
                const participantText = eventCard.querySelector('.event-participants');
                const currentText = participantText.textContent;
                const match = currentText.match(/(\d+)\/(\d+)/);
                
                if (match) {
                    const current = parseInt(match[1]);
                    const max = parseInt(match[2]);
                    
                    if (current < max) {
                        participantText.textContent = `参加者: ${current + 1}/${max}名`;
                        
                        if (current + 1 === max) {
                            this.textContent = '満員';
                            this.disabled = true;
                            this.style.background = '#95a5a6';
                        }
                    }
                }
            }
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile menu toggle (for future implementation)
    function createMobileMenu() {
        const navWrapper = document.querySelector('.nav-wrapper');
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-toggle';
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        
        mobileToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('mobile-open');
        });
        
        // Add mobile toggle button on smaller screens
        if (window.innerWidth <= 768) {
            navWrapper.appendChild(mobileToggle);
        }
    }

    // Initialize mobile menu if needed
    createMobileMenu();

    // Resize handler for mobile menu
    window.addEventListener('resize', function() {
        const mobileToggle = document.querySelector('.mobile-toggle');
        
        if (window.innerWidth <= 768 && !mobileToggle) {
            createMobileMenu();
        } else if (window.innerWidth > 768 && mobileToggle) {
            mobileToggle.remove();
            document.querySelector('.nav-menu').classList.remove('mobile-open');
        }
    });

    // Form validation for search inputs
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.addEventListener('change', function() {
            const selectedDate = new Date(this.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                alert('過去の日付は選択できません');
                this.value = '';
            }
        });
    });

    // Animation on scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .court-card, .event-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Console welcome message
    console.log('🏐 バレー郷平へようこそ！');
    console.log('バレーボールを日常にしよう。');
});
