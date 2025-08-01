# السينما في بيتك - Arabic Streaming Website

موقع عربي للتعريف بأفضل مواقع مشاهدة الأفلام والمسلسلات المجانية.

## الوصف

"السينما في بيتك" هو موقع ويب ثابت مصمم خصيصاً للجمهور العربي، يوفر دليلاً شاملاً لأفضل مواقع مشاهدة الأفلام والمسلسلات المجانية على الإنترنت. الموقع مبني بتقنيات HTML5 وCSS3 وJavaScript مع تصميم متجاوب وداعم للغة العربية (RTL).

## المميزات

- ✨ تصميم حديث ومتجاوب
- 🌙 وضع ليلي داكن
- 🔍 بحث وفلترة متقدمة
- 📱 متوافق مع جميع الأجهزة
- 🌍 دعم كامل للغة العربية (RTL)
- 🎭 أيقونة فشار واقعية
- 📊 قسم إحصائيات تفاعلي
- ⚡ أداء سريع وتحميل مُحسّن

## التقنيات المستخدمة

- **HTML5**: هيكل الموقع
- **CSS3**: التصميم والتنسيق
- **JavaScript**: التفاعل والوظائف الديناميكية
- **Google Fonts**: خط Cairo العربي
- **SVG**: الأيقونات والرسوم

## بنية المشروع

```
website/
├── index.html          # الصفحة الرئيسية
├── css/
│   └── style.css      # ملف التنسيق الرئيسي
├── js/
│   └── script.js      # ملف JavaScript الرئيسي
└── README.md          # هذا الملف
```

## التثبيت والتشغيل

1. **تحميل الملفات:**
   ```bash
   git clone [repository-url]
   cd website
   ```

2. **تشغيل الموقع:**
   - افتح ملف `index.html` في المتصفح مباشرة
   - أو استخدم خادم محلي:
   ```bash
   python -m http.server 8000
   # أو
   npx http-server
   ```

3. **الوصول للموقع:**
   - افتح المتصفح وتوجه إلى `http://localhost:8000`

## المواقع المدرجة

يحتوي الموقع على 9 مواقع مختارة بعناية:

1. **وقت المسلسلات** - مسلسلات بجودة عالية
2. **توب سينما** - أفلام ومسلسلات مترجمة
3. **سيما ناو** - أفلام عربية وأجنبية
4. **سيما وبس** - أفلام وMسلسلات HD
5. **عرب سيد** - مكتبة ضخمة
6. **إيجي ديد** - محتوى 4K
7. **فاصل إعلاني** - موقع شهير
8. **شاهد فور يو** - محتوى شامل
9. **ADTV** - بث مباشر

## الوظائف

### البحث والفلترة
- بحث بالاسم والوصف
- فلترة حسب النوع (أفلام، مسلسلات، عربي، بث مباشر)
- عرض النتائج بشكل تفاعلي

### التصميم التفاعلي
- أنيميشن الخلفية
- تأثيرات hover على البطاقات
- مودال للمعلومات التفصيلية
- قسم إحصائيات ديناميكي

### سهولة الاستخدام
- تصميم بديهي وسهل التنقل
- دعم لوحة المفاتيح (ESC لإغلاق المودال)
- روابط خارجية آمنة
- تحذيرات وإشعارات واضحة

## التخصيص

### إضافة موقع جديد
في ملف `js/script.js`، أضف عنصر جديد لمصفوفة `streamingSites`:

```javascript
{
    id: 10,
    name: "اسم الموقع",
    url: "https://example.com",
    description: "وصف الموقع",
    category: "movies", // movies, series, arabic, live
    rating: 4.5,
    badge: "نوع الموقع",
    badgeClass: "badge-movies", // حسب النوع
    image: "https://image-url.jpg"
}
```

### تغيير الألوان
في ملف `css/style.css`، عدّل متغيرات الألوان:

```css
/* الألوان الأساسية */
:root {
    --primary-color: hsl(43, 92%, 49%);
    --secondary-color: hsl(45, 93%, 47%);
    --background-color: hsl(210, 25%, 8%);
}
```

## النشر

### GitHub Pages
1. ارفع الملفات إلى مستودع GitHub
2. فعّل GitHub Pages من إعدادات المستودع
3. اختر المجلد الجذر كمصدر

### Netlify
1. اسحب مجلد `website` إلى موقع Netlify
2. أو اربط مستودع GitHub

### Vercel
```bash
npx vercel --prod
```

## المتطلبات

- متصفح حديث يدعم HTML5 وCSS3
- اتصال بالإنترنت لتحميل الخطوط والصور
- JavaScript مُفعّل

## الترخيص

هذا المشروع مجاني ومفتوح المصدر. يمكنك استخدامه وتعديله حسب حاجتك.

## المساهمة

نرحب بالمساهمات! يمكنك:
- إضافة مواقع جديدة
- تحسين التصميم
- إصلاح الأخطاء
- ترجمة للغات أخرى

## الدعم

للاستفسارات أو الدعم، تواصل معنا عبر:
- [موقع المطور](https://ibrahimmustafacv.github.io/my-social-media-page/)

## تنويه مهم

⚠️ **تحذير**: هذا الموقع للفهرسة فقط ولا يستضيف أي محتوى. نحن غير مسؤولين عن المحتوى أو الإعلانات في المواقع المدرجة.

---

تم التطوير بـ ❤️ بواسطة إبراهيم مصطفى للمجتمع العربي