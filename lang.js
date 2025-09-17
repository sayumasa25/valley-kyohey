// Language Management System
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ja';
        this.translations = {
            ja: {
                // Header
                'site-title': 'Sabai Volley',
                'nav-courts': 'コート',
                'nav-events': 'イベント・大会',
                'nav-circles': 'サークル',
                'nav-junior': 'ジュニア',
                'nav-home': 'ホーム',
                'btn-login': 'ログイン',
                'btn-register': '登録',
                'btn-logout': 'ログアウト',
                
                // Hero Section
                'hero-title': 'バレーボールを日常にしよう。',
                'hero-subtitle': '全国のバレーボールコートを簡単予約！イベント参加でもっと楽しく！',
                
                // Search Form
                'search-court-tab': 'コート検索',
                'search-event-tab': 'イベント検索',
                'search-prefecture-placeholder': '都道府県を選択',
                'search-tokyo': '東京都',
                'search-kanagawa': '神奈川県',
                'search-saitama': '埼玉県',
                'search-chiba': '千葉県',
                'search-date': '日付',
                'search-time': '時間',
                'search-button': '検索',
                'search-area-placeholder': 'エリアを選択',
                'search-kanto': '関東',
                'search-kansai': '関西',
                'search-chubu': '中部',
                'search-level-placeholder': 'レベルを選択',
                'search-beginner': '初心者',
                'search-intermediate': '中級者',
                'search-advanced': '上級者',
                
                // District Search (Bangkok)
                'search-district': '地区',
                'search-district-placeholder': '地区を選択',
                'search-siam': 'サイアム',
                'search-silom': 'シーロム',
                'search-sukhumvit': 'スクンビット',
                'search-yaowarat': 'ヤワラート',
                'search-riverside': 'リバーサイド',
                
                // Main page
                'cta-find-courts': 'コートを探す',
                'cta-join-events': 'イベントに参加',
                'section-court-search': '全国のコート検索',
                'section-event-search': 'イベント・練習会',
                'section-circle-management': 'サークル管理',
                'section-mobile-app': 'アプリで便利',
                'court-search-desc': '都道府県・市区・区間・民間施設まで、全国のバレーボールコートを検索・予約できます。',
                'event-search-desc': 'レベル別の練習会や大会に参加して、新しい仲間と出会いましょう。',
                'circle-management-desc': 'サークルの管理や新メンバーの募集が簡単にできます。',
                'mobile-app-desc': 'スマートフォンアプリでいつでもどこでも予約・参加が可能です。',
                'popular-courts-title': '人気のバレーボールコート',
                'events-title': '今週のイベント・練習会',
            'court-tokyo-gym': '東京体育館',
            'court-tokyo-location': '東京都渋谷区',
            'court-yokohama-arena': '横浜アリーナ',
            'court-yokohama-location': '神奈川県横浜市',
            'court-saitama-budokan': '埼玉県立武道館',
            'court-saitama-location': '埼玉県さいたま市',
            'per-hour': '時間',
            'reviews-count': '件',
            'event-beginner-practice': '初心者歓迎！バレーボール練習会',
            'event-location-shinjuku': '東京都新宿区 - 新宿スポーツセンター',
            'event-intermediate-practice': '中級者向けゲーム練習',
            'event-location-yokohama': '神奈川県横浜市 - 横浜体育館',
            'event-women-tournament': '女性限定バレーボール大会',
            'event-location-shinagawa': '東京都品川区 - 品川区総合体育館',
            'level-beginner': '初心者',
            'level-intermediate': '中級者',
            'level-all': '全レベル',
            'participants': '参加者',
            'people-count': '名',
            'join-button': '参加する',
            'september': '9月',
            'app-title': 'アプリならもっと便利',
            'app-description': 'スマートフォンアプリで、いつでもどこでもコート予約やイベント参加ができます。',
                
                // Login page
                'login-page-title': 'ログイン - Sabai Volley',
                'login-title': 'ログイン',
                'login-subtitle': 'アカウントにログインしてバレーボールを楽しもう！',
                'placeholder-userid': 'ユーザーIDを入力',
                'placeholder-password': 'パスワードを入力',
                'remember-me': 'ログイン状態を保持する',
                'login-button': 'ログイン',
                'forgot-password': 'パスワードを忘れた方',
                'no-account': 'アカウントをお持ちでない方は',
                'register-link': '新規登録',
                'menu-toggle': 'メニューを開く',
                'nav-junior': 'ジュニア',
                
                // MyPage
                'mypage-title': 'マイページ',
                'share-button': 'シェア',
                'settings-button': '設定',
                'edit-profile': 'プロフィール編集',
                'age-group': '年代',
                'gender': '性別',
                'level': 'レベル',
                'volleyball-experience': 'バレー歴',
                'host-count': '主催回数',
                'participation-count': '参加回数',
                'volleyball-friends': 'バレ友',
                'practice-people': '練習人数',
                'count-unit': '個',
                'good-host-badge': 'のGood主催者バッジを獲得',
                'skill-badge': 'のスキルバッジを獲得',
                'racket-title': '使用ラケット',
                'register-new': '新規登録する',
                'schedule': '予定',
                'veteran-log': 'ベテログ',
                'chat': 'チャット',
                'mypage-nav': 'マイページ',
                'age-30s': '30代',
                'gender-male': '男性',
                'times-unit': '回',
                'people-unit': '人',
                
                // Registration page
                'register-title': '新規登録',
                'register-subtitle': 'Sabai Volleyへようこそ！アカウントを作成してバレーボールライフを始めましょう。',
                'label-userid': 'ユーザーID',
                'placeholder-userid': '半角英数字4-20文字',
                'label-password': 'パスワード',
                'placeholder-password': '8文字以上',
                'label-confirm-password': 'パスワード（確認）',
                'placeholder-confirm-password': 'もう一度パスワードを入力',
                'label-nickname': 'ニックネーム',
                'placeholder-nickname': '表示名を入力',
                'label-age': '年代',
                'label-gender': '性別',
                'select-placeholder': '選択してください',
                'age-10s': '10代',
                'age-20s': '20代',
                'age-30s': '30代',
                'age-40s': '40代',
                'age-50s': '50代',
                'age-60plus': '60代以上',
                'gender-male': '男性',
                'gender-female': '女性',
                'gender-other': 'その他',
                'terms-agree': '利用規約とプライバシーポリシーに同意する',
                'btn-create-account': 'アカウントを作成',
                'already-have-account': 'すでにアカウントをお持ちですか？',
                
                // Login page
                'login-title': 'ログイン',
                'login-subtitle': 'アカウントにログインしてバレーボールを楽しもう！',
                'remember-me': 'ログイン状態を保持する',
                'forgot-password': 'パスワードを忘れた方',
                'no-account': 'アカウントをお持ちでない方は',
                
                // Mypage
                'mypage-title': 'マイページ',
                'profile-edit': 'プロフィール編集',
                'stat-age': '年代',
                'stat-gender': '性別',
                'stat-level': 'レベル',
                'stat-experience': 'バレー歴',
                'activity-host': '主催回数',
                'activity-participation': '参加回数',
                'activity-friends': 'バレ友',
                'activity-practice': '練習人数',
                'achievement-good-host': 'のGood主催者バッジを獲得',
                'achievement-skill': 'のスキルバッジを獲得',
                'racket-section': '使用ラケット',
                'add-racket': '新規登録する',
                'nav-schedule': '予定',
                'nav-blog': 'ベテログ',
                'nav-chat': 'チャット',
                'nav-mypage': 'マイページ',
                
                // Levels
                'level-beginner': '初級',
                'level-intermediate': '中級',
                'level-advanced': '上級',
                
                // Experience
                'exp-0': '0年以上',
                'exp-1': '1年以上',
                'exp-3': '3年以上',
                'exp-5': '5年以上',
                'exp-10': '10年以上'
            },
            th: {
                // Header and navigation
                'site-title': 'Sabai Volley',
                'nav-home': 'หน้าแรก',
                'nav-courts': 'สนาม',
                'nav-events': 'กิจกรรม',
                'nav-circles': 'กลุ่ม',
                'nav-about': 'เกี่ยวกับ',
                'btn-login': 'เข้าสู่ระบบ',
                'btn-register': 'สมัครสมาชิก',
                'btn-logout': 'ออกจากระบบ',
                
                // Courts and events sections
                'popular-courts-title': 'สนามวอลเลย์บอลยอดนิยม',
                'events-title': 'กิจกรรม • การฝึกซ้อมสัปดาห์นี้',
                'court-tokyo-gym': 'โตเกียวยิม',
                'court-tokyo-location': 'โตเกียว ชิบุยะ',
                'court-yokohama-arena': 'โยโกฮาม่าอารีน่า',
                'court-yokohama-location': 'คานางาวะ โยโกฮาม่า',
                'court-saitama-budokan': 'ไซตามะบูโดคัง',
                'court-saitama-location': 'ไซตามะ ไซตามะซิตี้',
                'per-hour': 'ชั่วโมง',
                'reviews-count': 'รีวิว',
                'event-beginner-practice': 'ยินดีต้อนรับมือใหม่! การฝึกซ้อมวอลเลย์บอล',
                'event-location-shinjuku': 'โตเกียว ชินจูกุ - ศูนย์กีฬาชินจูกุ',
                'event-intermediate-practice': 'การฝึกซ้อมเกมระดับกลาง',
                'event-location-yokohama': 'คานางาวะ โยโกฮาม่า - โยโกฮาม่าสปอร์ตเซ็นเตอร์',
                'event-women-tournament': 'ทัวร์นาเมนต์วอลเลย์บอลสำหรับผู้หญิงเท่านั้น',
                'event-location-shinagawa': 'โตเกียว ชินางาวะ - ศูนย์กีฬาครบวงจรชินางาวะ',
                'level-beginner': 'มือใหม่',
                'level-intermediate': 'ระดับกลาง',
                'level-all': 'ทุกระดับ',
                'participants': 'ผู้เข้าร่วม',
                'people-count': 'คน',
                'join-button': 'เข้าร่วม',
                'september': 'ก.ย.',
                
                // Search Form
                'search-court-tab': 'ค้นหาสนาม',
                'search-event-tab': 'ค้นหากิจกรรม',
                'search-prefecture-placeholder': 'เลือกจังหวัด',
                'search-tokyo': 'โตเกียว',
                'search-kanagawa': 'คานากาวะ',
                'search-saitama': 'ไซตามะ',
                'search-chiba': 'ชิบะ',
                'search-date': 'วันที่',
                'search-time': 'เวลา',
                'search-button': 'ค้นหา',
                'search-area-placeholder': 'เลือกพื้นที่',
                'search-kanto': 'คันโต',
                'search-kansai': 'คันไซ',
                'search-chubu': 'ชูบุ',
                'search-level-placeholder': 'เลือกระดับ',
                'search-beginner': 'ผู้เริ่มต้น',
                'search-intermediate': 'ระดับกลาง',
                'search-advanced': 'ระดับสูง',
                
                // District Search (Bangkok)
                'search-district': 'ย่าน',
                'search-district-placeholder': 'เลือกย่าน',
                'search-siam': 'สยาม',
                'search-silom': 'สีลม',
                'search-sukhumvit': 'สุขุมวิท',
                'search-yaowarat': 'เยาวราช',
                'search-riverside': 'ริมแม่น้ำ',
                'app-title': 'สะดวกยิ่งขึ้นด้วยแอป',
                'app-description': 'ด้วยแอปสมาร์ทโฟน คุณสามารถจองสนามและเข้าร่วมกิจกรรมได้ทุกที่ทุกเวลา',
                
                // Login page
                'login-page-title': 'เข้าสู่ระบบ - Sabai Volley',
                'login-title': 'เข้าสู่ระบบ',
                'login-subtitle': 'เข้าสู่ระบบบัญชีของคุณและเพลิดเพลินกับวอลเลย์บอล!',
                'placeholder-userid': 'กรอกรหัสผู้ใช้',
                'placeholder-password': 'กรอกรหัสผ่าน',
                'remember-me': 'จดจำการเข้าสู่ระบบ',
                'login-button': 'เข้าสู่ระบบ',
                'forgot-password': 'ลืมรหัสผ่าน?',
                'no-account': 'ยังไม่มีบัญชี?',
                'register-link': 'สมัครสมาชิก',
                'menu-toggle': 'เปิดเมนู',
                'nav-junior': 'เยาวชน',
                
                // MyPage
                'mypage-title': 'หน้าของฉัน',
                'share-button': 'แชร์',
                'settings-button': 'ตั้งค่า',
                'edit-profile': 'แก้ไขโปรไฟล์',
                'age-group': 'ช่วงอายุ',
                'gender': 'เพศ',
                'level': 'ระดับ',
                'volleyball-experience': 'ประสบการณ์วอลเลย์บอล',
                'host-count': 'จำนวนครั้งที่เป็นเจ้าภาพ',
                'participation-count': 'จำนวนครั้งที่เข้าร่วม',
                'volleyball-friends': 'เพื่อนวอลเลย์บอล',
                'practice-people': 'จำนวนคนฝึกซ้อม',
                'count-unit': 'อัน',
                'good-host-badge': 'ได้รับแบดจ์เจ้าภาพดี',
                'skill-badge': 'ได้รับแบดจ์ทักษะ',
                'racket-title': 'ไม้ที่ใช้',
                'register-new': 'ลงทะเบียนใหม่',
                'schedule': 'ตารางเวลา',
                'veteran-log': 'บันทึกผู้เชี่ยวชาญ',
                'chat': 'แชท',
                'mypage-nav': 'หน้าของฉัน',
                'age-30s': '30s',
                'gender-male': 'ชาย',
                'times-unit': 'ครั้ง',
                'people-unit': 'คน',
                
                // Main page
                'hero-title': 'ทำให้วอลเลย์บอลเป็นส่วนหนึ่งของชีวิตประจำวัน',
                'hero-subtitle': 'จองสนามวอลเลย์บอลทั่วประเทศได้ง่ายๆ! เข้าร่วมกิจกรรมเพื่อความสนุกมากขึ้น!',
                'cta-find-courts': 'ค้นหาสนาม',
                'cta-join-events': 'เข้าร่วมกิจกรรม',
                'section-court-search': 'ค้นหาสนามทั่วประเทศ',
                'section-event-search': 'กิจกรรม・การฝึกซ้อม',
                'section-circle-management': 'จัดการชมรม',
                'section-mobile-app': 'สะดวกด้วยแอป',
                'court-search-desc': 'ค้นหาและจองสนามวอลเลย์บอลทั่วประเทศ จากจังหวัด เขต อำเภอ ไปจนถึงสถานที่เอกชน',
                'event-search-desc': 'เข้าร่วมการฝึกซ้อมและการแข่งขันตามระดับ พบเพื่อนใหม่',
                'circle-management-desc': 'จัดการชมรมและรับสมาชิกใหม่ได้อย่างง่ายดาย',
                'mobile-app-desc': 'จองและเข้าร่วมได้ทุกที่ทุกเวลาผ่านแอปสมาร์ทโฟน',
                'popular-courts-title': 'สนามวอลเลย์บอลยอดนิยม',
                'events-title': 'กิจกรรม・การฝึกซ้อมสัปดาห์นี้',
                
                // Registration page
                'register-title': 'สมัครสมาชิก',
                'register-subtitle': 'ยินดีต้อนรับสู่ Sabai Volley! สร้างบัญชีเพื่อเริ่มต้นชีวิตวอลเลย์บอลของคุณ',
                'label-userid': 'รหัสผู้ใช้',
                'placeholder-userid': 'ตัวอักษรและตัวเลข 4-20 ตัว',
                'label-password': 'รหัสผ่าน',
                'placeholder-password': '8 ตัวอักษรขึ้นไป',
                'label-confirm-password': 'ยืนยันรหัสผ่าน',
                'placeholder-confirm-password': 'กรอกรหัสผ่านอีกครั้ง',
                'label-nickname': 'ชื่อเล่น',
                'placeholder-nickname': 'กรอกชื่อที่ต้องการแสดง',
                'label-age': 'ช่วงอายุ',
                'label-gender': 'เพศ',
                'select-placeholder': 'กรุณาเลือก',
                'age-10s': '10-19 ปี',
                'age-20s': '20-29 ปี',
                'age-30s': '30-39 ปี',
                'age-40s': '40-49 ปี',
                'age-50s': '50-59 ปี',
                'age-60plus': '60 ปีขึ้นไป',
                'gender-male': 'ชาย',
                'gender-female': 'หญิง',
                'gender-other': 'อื่นๆ',
                'terms-agree': 'ยอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว',
                'btn-create-account': 'สร้างบัญชี',
                'already-have-account': 'มีบัญชีอยู่แล้ว?',
                
                // Login page
                'login-title': 'เข้าสู่ระบบ',
                'login-subtitle': 'เข้าสู่ระบบเพื่อเพลิดเพลินกับวอลเลย์บอล!',
                'remember-me': 'จดจำการเข้าสู่ระบบ',
                'forgot-password': 'ลืมรหัสผ่าน',
                'no-account': 'ยังไม่มีบัญชี?',
                
                // Mypage
                'mypage-title': 'หน้าโปรไฟล์',
                'profile-edit': 'แก้ไขโปรไฟล์',
                'stat-age': 'ช่วงอายุ',
                'stat-gender': 'เพศ',
                'stat-level': 'ระดับ',
                'stat-experience': 'ประสบการณ์',
                'activity-host': 'จัดกิจกรรม',
                'activity-participation': 'เข้าร่วม',
                'activity-friends': 'เพื่อน',
                'activity-practice': 'ฝึกซ้อม',
                'achievement-good-host': 'ได้รับเหรียญผู้จัดกิจกรรมดี',
                'achievement-skill': 'ได้รับเหรียญทักษะ',
                'racket-section': 'ไม้แบดมินตัน',
                'add-racket': 'เพิ่มใหม่',
                'nav-schedule': 'ตารางเวลา',
                'nav-blog': 'บล็อก',
                'nav-chat': 'แชท',
                'nav-mypage': 'โปรไฟล์',
                
                // Levels
                'level-beginner': 'เริ่มต้น',
                'level-intermediate': 'ปานกลาง',
                'level-advanced': 'ขั้นสูง',
                
                // Experience
                'exp-0': '0 ปีขึ้นไป',
                'exp-1': '1 ปีขึ้นไป',
                'exp-3': '3 ปีขึ้นไป',
                'exp-5': '5 ปีขึ้นไป',
                'exp-10': '10 ปีขึ้นไป'
            }
        };
        this.init();
    }

    init() {
        this.updateLanguage();
        this.addLanguageSwitcher();
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.updateLanguage();
    }

    updateLanguage() {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            const translation = this.translations[this.currentLang][key];
            if (translation) {
                if (element.tagName === 'INPUT' && element.type !== 'submit') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update page title
        const titleKey = document.body.getAttribute('data-page-title');
        if (titleKey && this.translations[this.currentLang][titleKey]) {
            document.title = this.translations[this.currentLang][titleKey] + ' - Sabai Volley';
        }

        // Apply theme and assets per language
        const htmlEl = document.documentElement;
        if (htmlEl) {
            htmlEl.setAttribute('lang', this.currentLang);
        }

        const body = document.body;
        if (body) {
            body.classList.remove('theme-ja', 'theme-th');
            body.classList.add(this.currentLang === 'th' ? 'theme-th' : 'theme-ja');
        }

        const logoImg = document.getElementById('siteLogo');
        if (logoImg) {
            logoImg.setAttribute('src', this.currentLang === 'th' ? 'ロゴタイ語.png' : 'ロゴ日本語.png');
            logoImg.setAttribute('alt', this.currentLang === 'th' ? 'Sabai Volley ロゴ(タイ語)' : 'Sabai Volley ロゴ(日本語)');
        }

        const favicon = document.getElementById('siteFavicon');
        if (favicon) {
            favicon.setAttribute('href', 'ファビコン.png');
        }

        // Update language switcher
        this.updateLanguageSwitcher();

        // Update currency for court prices
        this.updatePricesByLanguage();
    }

    async getRateJPYtoTHB() {
        const cacheKey = 'rate_JPY_THB';
        const cacheTimeKey = 'rate_JPY_THB_time';
        const ttlMs = 6 * 60 * 60 * 1000; // 6 hours
        try {
            const last = localStorage.getItem(cacheTimeKey);
            const now = Date.now();
            if (last && (now - parseInt(last, 10)) < ttlMs) {
                const cached = localStorage.getItem(cacheKey);
                if (cached) return parseFloat(cached);
            }
            const res = await fetch('https://api.exchangerate.host/latest?base=JPY&symbols=THB');
            const data = await res.json();
            const rate = data?.rates?.THB || 0.25; // fallback approx
            localStorage.setItem(cacheKey, String(rate));
            localStorage.setItem(cacheTimeKey, String(now));
            return rate;
        } catch (e) {
            return 0.25; // fallback
        }
    }

    formatJPY(amount) {
        try {
            return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: 0 }).format(amount);
        } catch (e) {
            return `¥${amount.toLocaleString()}`;
        }
    }

    formatTHB(amount) {
        try {
            return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(amount);
        } catch (e) {
            return `${Math.round(amount).toLocaleString()}฿`;
        }
    }

    async updatePricesByLanguage() {
        const priceEls = document.querySelectorAll('.court-price');
        if (!priceEls.length) return;

        if (this.currentLang === 'th') {
            const rate = await this.getRateJPYtoTHB();
            priceEls.forEach(el => {
                const jpy = parseFloat(el.getAttribute('data-price-jpy') || '0');
                const thb = jpy * rate;
                const span = el.querySelector('.price-amount');
                if (span) span.textContent = this.formatTHB(thb);
            });
        } else {
            priceEls.forEach(el => {
                const jpy = parseFloat(el.getAttribute('data-price-jpy') || '0');
                const span = el.querySelector('.price-amount');
                if (span) span.textContent = this.formatJPY(jpy);
            });
        }
    }

    addLanguageSwitcher() {
        const navWrapper = document.querySelector('.nav-wrapper');
        if (navWrapper) {
            const langSwitcher = document.createElement('div');
            langSwitcher.className = 'lang-switcher';
            
            // Create buttons individually to avoid any browser interference
            const jaBtn = document.createElement('button');
            jaBtn.className = `lang-btn ${this.currentLang === 'ja' ? 'active' : ''}`;
            jaBtn.setAttribute('data-lang-switch', 'ja');
            jaBtn.textContent = 'JP';
            jaBtn.type = 'button';
            
            const thBtn = document.createElement('button');
            thBtn.className = `lang-btn ${this.currentLang === 'th' ? 'active' : ''}`;
            thBtn.setAttribute('data-lang-switch', 'th');
            thBtn.textContent = 'TH';
            thBtn.type = 'button';
            
            langSwitcher.appendChild(jaBtn);
            langSwitcher.appendChild(thBtn);
            
            // Insert after the logo
            const logo = navWrapper.querySelector('.logo');
            if (logo) {
                logo.parentNode.insertBefore(langSwitcher, logo.nextSibling);
            }

            // Add event listeners
            langSwitcher.addEventListener('click', (e) => {
                if (e.target.hasAttribute('data-lang-switch')) {
                    const lang = e.target.getAttribute('data-lang-switch');
                    this.switchLanguage(lang);
                }
            });
        }
    }

    updateLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang-switch') === this.currentLang) {
                btn.classList.add('active');
            }
        });
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.langManager = new LanguageManager();
});
