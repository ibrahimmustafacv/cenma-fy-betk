# دليل النشر - السينما في بيتك

## 📁 الملفات المتوفرة

### 1. ملف HTML المستقل (`index.html`)
- ملف واحد يحتوي على كامل الموقع
- لا يحتاج إلى خادم أو تبعيات
- جاهز للرفع على أي خدمة استضافة

### 2. المشروع الكامل (`cinema-website-complete.tar.gz`)
- يحتوي على جميع ملفات المشروع
- مبني بتقنيات React + TypeScript
- يحتاج إلى خادم Node.js

## 🚀 طرق النشر

### الطريقة الأولى: استخدام الملف المستقل (الأسهل)

1. **رفع ملف `index.html`**
   - اختر أي خدمة استضافة مجانية
   - ارفع ملف `index.html` فقط
   - سيعمل الموقع فوراً

2. **خدمات الاستضافة المقترحة**:
   - **GitHub Pages**: ارفع الملف وفعّل Pages
   - **Netlify**: اسحب وأسقط الملف
   - **Vercel**: رفع مباشر
   - **Firebase Hosting**: استخدم Console

### الطريقة الثانية: نشر المشروع الكامل

1. **استخراج الملفات**
   ```bash
   tar -xzf cinema-website-complete.tar.gz
   ```

2. **تثبيت التبعيات**
   ```bash
   npm install
   ```

3. **بناء المشروع**
   ```bash
   npm run build
   ```

4. **النشر على الخدمات**
   - **Vercel**: ربط المستودع
   - **Netlify**: ربط GitHub
   - **Railway**: نشر Node.js

## 📋 خطوات النشر على GitHub Pages

### للملف المستقل:

1. **إنشاء مستودع جديد**
   - انتقل إلى GitHub
   - اضغط "New Repository"
   - اختر اسم مثل "cinema-website"

2. **رفع الملفات**
   - ارفع `index.html`
   - ارفع `README.md`
   - اختر "Commit changes"

3. **تفعيل GitHub Pages**
   - انتقل إلى Settings
   - اضغط على Pages
   - اختر Source: "Deploy from a branch"
   - اختر Branch: "main"
   - احفظ

4. **الحصول على الرابط**
   - سيظهر الرابط: `https://username.github.io/cinema-website`

### للمشروع الكامل:

1. **استخراج وتحضير**
   ```bash
   tar -xzf cinema-website-complete.tar.gz
   cd cinema-website
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **ربط بـ GitHub**
   ```bash
   git remote add origin https://github.com/username/cinema-website.git
   git push -u origin main
   ```

3. **إعداد GitHub Actions** (للبناء التلقائي)
   - إنشاء `.github/workflows/deploy.yml`
   - إعداد workflow للبناء والنشر

## 🔧 التخصيص السريع

### تغيير المعلومات الأساسية:

في ملف `index.html`، ابحث عن:

```html
<!-- تغيير العنوان -->
<title>عنوان جديد</title>

<!-- تغيير اسم الموقع -->
<div class="logo-text">اسم جديد</div>

<!-- تغيير الوصف -->
<p class="hero-subtitle">وصف جديد</p>
```

### إضافة مواقع جديدة:

في ملف `index.html`، ابحث عن `streamingSites` وأضف:

```javascript
{
    id: 9,
    name: "اسم الموقع",
    url: "https://example.com",
    description: "وصف الموقع",
    category: "movies",
    rating: 4.5,
    badge: "جديد",
    badgeClass: "badge-movies",
    image: "https://example.com/image.jpg"
}
```

## 📱 اختبار الموقع

### محلياً:
```bash
# للملف المستقل
python -m http.server 8000
# ثم افتح http://localhost:8000

# للمشروع الكامل
npm run dev
# ثم افتح http://localhost:5000
```

### على الإنترنت:
- تأكد من عمل جميع الروابط
- اختبر على أجهزة مختلفة
- تحقق من سرعة التحميل

## 🎯 نصائح مهمة

1. **الأمان**:
   - لا تضع أي مفاتيح API في الكود
   - استخدم HTTPS دائماً

2. **الأداء**:
   - ضغط الصور قبل الرفع
   - استخدام CDN للخطوط

3. **SEO**:
   - أضف meta tags مناسبة
   - استخدم عناوين وصفية

4. **صيانة**:
   - راجع الروابط دورياً
   - حدث المحتوى بانتظام

## ❓ الدعم

للمساعدة أو الاستفسارات:
- راجع ملف README.md
- تواصل عبر الموقع الشخصي للمطور

---

**ملاحظة**: اختر الطريقة الأنسب حسب خبرتك التقنية ومتطلباتك.