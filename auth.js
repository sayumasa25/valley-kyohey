// Authentication and User Management
class UserManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('volleyUsers') || '[]');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    }

    // Save users to localStorage
    saveUsers() {
        localStorage.setItem('volleyUsers', JSON.stringify(this.users));
    }

    // Save current user session
    saveCurrentUser(user) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    // Clear current user session
    clearCurrentUser() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    // Check if user ID already exists
    userExists(userId) {
        return this.users.some(user => user.userId === userId);
    }

    // Register new user
    register(userData) {
        if (this.userExists(userData.userId)) {
            throw new Error('このユーザーIDは既に使用されています');
        }

        const newUser = {
            ...userData,
            registeredAt: new Date().toISOString(),
            level: '初級',
            experience: '0年以上',
            hostCount: 0,
            participationCount: 0,
            friendCount: 0,
            practiceCount: 0,
            goodHostBadges: 0,
            skillBadges: 0,
            avatar: null
        };

        this.users.push(newUser);
        this.saveUsers();
        return newUser;
    }

    // Login user
    login(userId, password) {
        const user = this.users.find(u => u.userId === userId && u.password === password);
        if (!user) {
            throw new Error('ユーザーIDまたはパスワードが間違っています');
        }
        this.saveCurrentUser(user);
        return user;
    }

    // Logout user
    logout() {
        this.clearCurrentUser();
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Update user profile
    updateProfile(updates) {
        if (!this.currentUser) return null;
        
        const userIndex = this.users.findIndex(u => u.userId === this.currentUser.userId);
        if (userIndex === -1) return null;

        this.users[userIndex] = { ...this.users[userIndex], ...updates };
        this.saveUsers();
        this.saveCurrentUser(this.users[userIndex]);
        return this.users[userIndex];
    }
}

// Initialize user manager
const userManager = new UserManager();

// Registration form handling
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    // Registration form
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(registerForm);
            const userData = {
                userId: formData.get('userId'),
                password: formData.get('password'),
                nickname: formData.get('nickname'),
                age: formData.get('age'),
                gender: formData.get('gender')
            };

            // Validation
            if (!validateRegistration(userData, formData.get('confirmPassword'))) {
                return;
            }

            try {
                userManager.register(userData);
                alert('アカウントが作成されました！ログインページに移動します。');
                window.location.href = 'login.html';
            } catch (error) {
                showError('userIdError', error.message);
            }
        });

        // Real-time validation
        const userIdInput = document.getElementById('userId');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        userIdInput.addEventListener('blur', function() {
            const userId = this.value.trim();
            if (userId && userManager.userExists(userId)) {
                showError('userIdError', 'このユーザーIDは既に使用されています');
            } else {
                clearError('userIdError');
            }
        });

        confirmPasswordInput.addEventListener('blur', function() {
            const password = passwordInput.value;
            const confirmPassword = this.value;
            if (confirmPassword && password !== confirmPassword) {
                showError('confirmPasswordError', 'パスワードが一致しません');
            } else {
                clearError('confirmPasswordError');
            }
        });
    }

    // Login form
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(loginForm);
            const userId = formData.get('userId');
            const password = formData.get('password');

            try {
                userManager.login(userId, password);
                window.location.href = 'mypage.html';
            } catch (error) {
                showError('loginUserIdError', error.message);
            }
        });
    }

    // Check if user is already logged in
    if (window.location.pathname.includes('mypage.html')) {
        const currentUser = userManager.getCurrentUser();
        if (!currentUser) {
            alert('ログインが必要です');
            window.location.href = 'login.html';
            return;
        }
        loadUserProfile(currentUser);
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('ログアウトしますか？')) {
                userManager.logout();
                window.location.href = 'index.html';
            }
        });
    }
});

// Validation functions
function validateRegistration(userData, confirmPassword) {
    let isValid = true;

    // Clear all errors
    clearAllErrors();

    // User ID validation
    if (!userData.userId || userData.userId.length < 4 || userData.userId.length > 20) {
        showError('userIdError', 'ユーザーIDは4-20文字で入力してください');
        isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(userData.userId)) {
        showError('userIdError', '半角英数字のみ使用できます');
        isValid = false;
    }

    // Password validation
    if (!userData.password || userData.password.length < 8) {
        showError('passwordError', 'パスワードは8文字以上で入力してください');
        isValid = false;
    }

    // Confirm password validation
    if (userData.password !== confirmPassword) {
        showError('confirmPasswordError', 'パスワードが一致しません');
        isValid = false;
    }

    // Nickname validation
    if (!userData.nickname || userData.nickname.trim().length === 0) {
        showError('nicknameError', 'ニックネームを入力してください');
        isValid = false;
    }

    // Age validation
    if (!userData.age) {
        showError('ageError', '年代を選択してください');
        isValid = false;
    }

    // Gender validation
    if (!userData.gender) {
        showError('genderError', '性別を選択してください');
        isValid = false;
    }

    // Terms validation
    const termsCheckbox = document.getElementById('terms');
    if (termsCheckbox && !termsCheckbox.checked) {
        showError('termsError', '利用規約に同意してください');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = '';
    }
}

function clearAllErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

// Load user profile on mypage
function loadUserProfile(user) {
    // Update profile information
    document.getElementById('profileName').textContent = user.nickname;
    document.getElementById('ageDisplay').textContent = user.age;
    document.getElementById('genderDisplay').textContent = user.gender;
    document.getElementById('levelDisplay').textContent = user.level;
    document.getElementById('experienceDisplay').textContent = user.experience;
    
    // Update activity stats
    document.getElementById('hostCount').textContent = user.hostCount + '回';
    document.getElementById('participationCount').textContent = user.participationCount + '回';
    document.getElementById('friendCount').textContent = user.friendCount + '人';
    document.getElementById('practiceCount').textContent = user.practiceCount + '人';
    
    // Update badges
    document.getElementById('goodHostBadges').textContent = user.goodHostBadges + '個';
    document.getElementById('skillBadges').textContent = user.skillBadges + '個';

    // Load avatar if exists
    if (user.avatar) {
        const avatarContainer = document.getElementById('profileAvatar');
        avatarContainer.innerHTML = `<img src="${user.avatar}" alt="プロフィール画像">`;
    }
}
