import { Shield, Lock, Eye, Database, Cookie, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "سياسة الخصوصية - نظام التوثيق الوطني",
  description: "اقرأ سياسة الخصوصية الخاصة بنظام التوثيق الوطني وكيفية حماية بياناتك",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
            <Shield className="size-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-2">سياسة الخصوصية</h1>
          <p className="text-muted-foreground">آخر تحديث: {new Date().toLocaleDateString("ar-SA")}</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="size-5" />
              مقدمة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>
              نحن في نظام التوثيق الوطني نلتزم بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية
              معلوماتك الشخصية عند استخدام خدماتنا.
            </p>
            <p>
              باستخدامك لخدماتنا، فإنك توافق على جمع واستخدام المعلومات وفقاً لهذه السياسة. إذا كنت لا توافق على هذه
              السياسة، يُرجى عدم استخدام خدماتنا.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="size-5" />
              المعلومات التي نجمعها
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <h3 className="font-semibold text-lg">المعلومات الشخصية</h3>
            <p>عند إنشاء حساب، قد نطلب منك تقديم المعلومات التالية:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>الاسم الكامل</li>
              <li>عنوان البريد الإلكتروني</li>
              <li>اسم المستخدم</li>
              <li>رقم الهوية الوطنية (اختياري)</li>
              <li>صورة الملف الشخصي (اختياري)</li>
              <li>معلومات السيرة الذاتية (اختياري)</li>
            </ul>

            <h3 className="font-semibold text-lg">معلومات الاستخدام</h3>
            <p>نجمع تلقائياً معلومات حول كيفية استخدامك لخدماتنا، بما في ذلك:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>عنوان IP الخاص بك</li>
              <li>نوع المتصفح والإصدار</li>
              <li>الصفحات التي تزورها</li>
              <li>الوقت والتاريخ الذي قضيته على موقعنا</li>
              <li>المعرفات والتشخيصات الفريدة للجهاز</li>
            </ul>

            <h3 className="font-semibold text-lg">ملفات تعريف الارتباط (Cookies)</h3>
            <p>
              نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتتبع النشاط على خدماتنا وتخزين معلومات معينة. يمكنك
              توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="size-5" />
              كيف نستخدم معلوماتك
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>توفير وصيانة وتحسين خدماتنا</li>
              <li>إدارة حسابك والسماح لك بالوصول إلى ميزات مختلفة</li>
              <li>التواصل معك بشأن التحديثات والأخبار والعروض</li>
              <li>تقديم دعم العملاء والرد على استفساراتك</li>
              <li>اكتشاف ومنع الاحتيال والنشاط غير القانوني</li>
              <li>الامتثال للالتزامات القانونية</li>
              <li>تحليل كيفية استخدام خدماتنا لتحسين تجربة المستخدم</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="size-5" />
              حماية معلوماتك
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>نتخذ أمان معلوماتك الشخصية على محمل الجد ونستخدم الإجراءات الأمنية التالية:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>تشفير البيانات أثناء النقل باستخدام SSL/TLS</li>
              <li>تشفير كلمات المرور باستخدام خوارزميات تشفير قوية</li>
              <li>تقييد الوصول إلى المعلومات الشخصية للموظفين المصرح لهم فقط</li>
              <li>مراقبة أنظمتنا بانتظام للكشف عن الثغرات الأمنية والهجمات</li>
              <li>النسخ الاحتياطي المنتظم للبيانات لمنع فقدانها</li>
            </ul>
            <p className="text-muted-foreground text-sm mt-4">
              ومع ذلك، لا يمكن ضمان أمان نقل البيانات عبر الإنترنت بنسبة 100٪. على الرغم من أننا نبذل قصارى جهدنا لحماية
              معلوماتك الشخصية، لا يمكننا ضمان أمان المعلومات التي ترسلها إلى خدماتنا.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>مشاركة معلوماتك</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>لا نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك في الحالات التالية فقط:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>بموافقتك الصريحة</li>
              <li>مع مزودي الخدمات الذين يساعدوننا في تشغيل خدماتنا (مثل استضافة الخدمات)</li>
              <li>عندما يكون ذلك مطلوباً بموجب القانون أو استجابة لإجراءات قانونية</li>
              <li>لحماية حقوقنا أو ممتلكاتنا أو سلامتنا أو سلامة مستخدمينا أو الجمهور</li>
              <li>في حالة الاندماج أو الاستحواذ أو بيع الأصول</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>حقوقك</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>الحق في الوصول إلى معلوماتك الشخصية</li>
              <li>الحق في تصحيح المعلومات غير الدقيقة أو غير الكاملة</li>
              <li>الحق في حذف معلوماتك الشخصية</li>
              <li>الحق في تقييد معالجة معلوماتك</li>
              <li>الحق في نقل بياناتك إلى خدمة أخرى</li>
              <li>الحق في الاعتراض على معالجة معلوماتك</li>
              <li>الحق في سحب موافقتك في أي وقت</li>
            </ul>
            <p className="mt-4">لممارسة أي من هذه الحقوق، يُرجى الاتصال بنا باستخدام معلومات الاتصال أدناه.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cookie className="size-5" />
              سياسة ملفات تعريف الارتباط
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>نستخدم الأنواع التالية من ملفات تعريف الارتباط:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>
                <strong>ملفات تعريف الارتباط الضرورية:</strong> مطلوبة لتشغيل موقعنا بشكل صحيح
              </li>
              <li>
                <strong>ملفات تعريف الارتباط التحليلية:</strong> تساعدنا على فهم كيفية تفاعل المستخدمين مع موقعنا
              </li>
              <li>
                <strong>ملفات تعريف الارتباط الوظيفية:</strong> تتذكر اختياراتك وتفضيلاتك
              </li>
              <li>
                <strong>ملفات تعريف الارتباط الإعلانية:</strong> تُستخدم لعرض إعلانات ذات صلة بك
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>التوافق مع سياسات جوجل الإعلانية</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>نحن ملتزمون بالتوافق الكامل مع سياسات جوجل الإعلانية:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>نحن لا نجمع معلومات شخصية حساسة دون موافقة صريحة</li>
              <li>نوفر معلومات واضحة حول كيفية استخدام البيانات</li>
              <li>نحترم خيارات المستخدم فيما يتعلق بالإعلانات المخصصة</li>
              <li>نستخدم Google Analytics بطريقة تحترم الخصوصية</li>
              <li>نلتزم بجميع قوانين حماية البيانات المعمول بها</li>
              <li>نوفر آليات سهلة للمستخدمين لإدارة موافقتهم</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>خصوصية الأطفال</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>
              خدماتنا غير موجهة للأطفال دون سن 18 عاماً. نحن لا نجمع عن عمد معلومات شخصية من الأطفال. إذا كنت والداً أو
              وصياً وتعتقد أن طفلك قد قدم لنا معلومات شخصية، يُرجى الاتصال بنا.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>التغييرات على هذه السياسة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على
              هذه الصفحة وتحديث تاريخ "آخر تحديث" في الأعلى.
            </p>
            <p>
              يُنصح بمراجعة سياسة الخصوصية هذه بشكل دوري للتعرف على أي تغييرات. التغييرات على سياسة الخصوصية هذه سارية
              عند نشرها على هذه الصفحة.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="size-5" />
              اتصل بنا
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارساتنا، يُرجى الاتصال بنا عبر:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>البريد الإلكتروني: privacy@national-auth.example</li>
              <li>الهاتف: +966 55 77 88434</li>
              <li>العنوان: الرياض، المملكة العربية السعودية</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild variant="outline">
            <a href="/terms">الشروط والأحكام</a>
          </Button>
          <Button asChild>
            <a href="/">العودة للرئيسية</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
