// Mypage specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Profile picture upload functionality
    const avatarContainer = document.getElementById('profileAvatar');
    const avatarInput = document.getElementById('avatarInput');
    
    if (avatarContainer && avatarInput) {
        avatarContainer.addEventListener('click', function() {
            avatarInput.click();
        });

        avatarInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 5 * 1024 * 1024) { // 5MB limit
                    alert('ファイルサイズは5MB以下にしてください');
                    return;
                }

                if (!file.type.startsWith('image/')) {
                    alert('画像ファイルを選択してください');
                    return;
                }

                const reader = new FileReader();
                reader.onload = function(e) {
                    const imageData = e.target.result;
                    
                    // Update avatar display
                    avatarContainer.innerHTML = `<img src="${imageData}" alt="プロフィール画像">`;
                    
                    // Save to user profile
                    if (userManager && userManager.getCurrentUser()) {
                        userManager.updateProfile({ avatar: imageData });
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Profile edit functionality
    const editProfileBtn = document.getElementById('editProfileBtn');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function() {
            showProfileEditModal();
        });
    }

    // Share functionality
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: 'バレー郷平 - マイプロフィール',
                    text: 'バレーボールを一緒に楽しみませんか？',
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    alert('URLがクリップボードにコピーされました');
                });
            }
        });
    }

    // Settings functionality
    const settingsBtn = document.querySelector('.settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            showSettingsModal();
        });
    }

    // Achievement items click handlers
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('.achievement-text').textContent;
            if (text.includes('Good主催者')) {
                showAchievementModal('good-host');
            } else if (text.includes('スキル')) {
                showAchievementModal('skill');
            }
        });
    });

    // Add racket functionality
    const addRacketBtn = document.querySelector('.add-racket-btn');
    if (addRacketBtn) {
        addRacketBtn.addEventListener('click', function() {
            showAddRacketModal();
        });
    }
});

// Profile edit modal
function showProfileEditModal() {
    const currentUser = userManager.getCurrentUser();
    if (!currentUser) return;

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>プロフィール編集</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <form id="editProfileForm">
                    <div class="form-group">
                        <label for="editNickname">ニックネーム</label>
                        <input type="text" id="editNickname" value="${currentUser.nickname}" maxlength="20" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="editAge">年代</label>
                            <select id="editAge" required>
                                <option value="10代" ${currentUser.age === '10代' ? 'selected' : ''}>10代</option>
                                <option value="20代" ${currentUser.age === '20代' ? 'selected' : ''}>20代</option>
                                <option value="30代" ${currentUser.age === '30代' ? 'selected' : ''}>30代</option>
                                <option value="40代" ${currentUser.age === '40代' ? 'selected' : ''}>40代</option>
                                <option value="50代" ${currentUser.age === '50代' ? 'selected' : ''}>50代</option>
                                <option value="60代以上" ${currentUser.age === '60代以上' ? 'selected' : ''}>60代以上</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="editGender">性別</label>
                            <select id="editGender" required>
                                <option value="男性" ${currentUser.gender === '男性' ? 'selected' : ''}>男性</option>
                                <option value="女性" ${currentUser.gender === '女性' ? 'selected' : ''}>女性</option>
                                <option value="その他" ${currentUser.gender === 'その他' ? 'selected' : ''}>その他</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="editLevel">レベル</label>
                            <select id="editLevel">
                                <option value="初級" ${currentUser.level === '初級' ? 'selected' : ''}>初級</option>
                                <option value="中級" ${currentUser.level === '中級' ? 'selected' : ''}>中級</option>
                                <option value="上級" ${currentUser.level === '上級' ? 'selected' : ''}>上級</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="editExperience">バレー歴</label>
                            <select id="editExperience">
                                <option value="0年以上" ${currentUser.experience === '0年以上' ? 'selected' : ''}>0年以上</option>
                                <option value="1年以上" ${currentUser.experience === '1年以上' ? 'selected' : ''}>1年以上</option>
                                <option value="3年以上" ${currentUser.experience === '3年以上' ? 'selected' : ''}>3年以上</option>
                                <option value="5年以上" ${currentUser.experience === '5年以上' ? 'selected' : ''}>5年以上</option>
                                <option value="10年以上" ${currentUser.experience === '10年以上' ? 'selected' : ''}>10年以上</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-actions">
                        <button type="button" class="btn-cancel">キャンセル</button>
                        <button type="submit" class="btn-save">保存</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Modal event handlers
    const closeBtn = modal.querySelector('.modal-close');
    const cancelBtn = modal.querySelector('.btn-cancel');
    const form = modal.querySelector('#editProfileForm');

    closeBtn.addEventListener('click', () => modal.remove());
    cancelBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const updates = {
            nickname: document.getElementById('editNickname').value,
            age: document.getElementById('editAge').value,
            gender: document.getElementById('editGender').value,
            level: document.getElementById('editLevel').value,
            experience: document.getElementById('editExperience').value
        };

        userManager.updateProfile(updates);
        loadUserProfile(userManager.getCurrentUser());
        modal.remove();
        
        alert('プロフィールを更新しました');
    });
}

// Settings modal
function showSettingsModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>設定</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="settings-list">
                    <div class="setting-item">
                        <span>通知設定</span>
                        <button class="setting-btn">設定</button>
                    </div>
                    <div class="setting-item">
                        <span>プライバシー</span>
                        <button class="setting-btn">設定</button>
                    </div>
                    <div class="setting-item">
                        <span>アカウント</span>
                        <button class="setting-btn">設定</button>
                    </div>
                    <div class="setting-item">
                        <span>ヘルプ</span>
                        <button class="setting-btn">表示</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Achievement modal
function showAchievementModal(type) {
    const titles = {
        'good-host': 'Good主催者バッジ',
        'skill': 'スキルバッジ'
    };

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${titles[type]}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>まだバッジを獲得していません。</p>
                <p>イベントに参加してバッジを獲得しましょう！</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Add racket modal
function showAddRacketModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>ラケット登録</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>この機能は開発中です。</p>
                <p>近日中に利用可能になります。</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Add modal styles
const modalStyles = `
<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 1rem;
}

.modal-content {
    background: white;
    border-radius: 12px;
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #e9ecef;
}

.modal-header h3 {
    margin: 0;
    color: #2c3e50;
}

.modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #6c757d;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-body {
    padding: 1.5rem;
}

.modal-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 2rem;
}

.btn-cancel {
    background: #6c757d;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
}

.btn-save {
    background: #E74C3C;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
}

.settings-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #f8f9fa;
}

.setting-btn {
    background: #E74C3C;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles);
