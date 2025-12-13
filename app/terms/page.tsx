import { Shield, FileText, Scale, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "الشروط والأحكام - نظام التوثيق الوطني",
  description: "اقرأ الشروط والأحكام الخاصة باستخدام نظام التوثيق الوطني",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
            <Scale className="size-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-2">الشروط والأحكام</h1>
          <p className="text-muted-foreground">آخر تحديث: {new Date().toLocaleDateString("ar-SA")}</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="size-5" />
              مقدمة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>
              مرحباً بك في نظام التوثيق الوطني. من خلال الوصول إلى هذا الموقع واستخدام خدماتنا، فإنك توافق على الالتزام
              بهذه الشروط والأحكام. يُرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا.
            </p>
            <p>
              إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يحق لك استخدام خدماتنا. نحتفظ بالحق في تحديث أو تعديل هذه
              الشروط في أي وقت دون إشعار مسبق.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="size-5" />
              استخدام الخدمة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <h3 className="font-semibold text-lg">الأهلية</h3>
            <p>
              يجب أن يكون عمرك 18 عاماً على الأقل لاستخدام هذه الخدمة. باستخدامك للخدمة، فإنك تقر وتضمن أن عمرك 18 عاماً
              على الأقل وأن لديك الأهلية القانونية الكاملة للدخول في هذه الاتفاقية.
            </p>

            <h3 className="font-semibold text-lg">حساب المستخدم</h3>
            <ul className="list-disc pr-6 space-y-2">
              <li>أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور</li>
              <li>أنت مسؤول عن جميع الأنشطة التي تحدث في حسابك</li>
              <li>يجب عليك إخطارنا فوراً بأي استخدام غير مصرح به لحسابك</li>
              <li>لا يجوز لك استخدام حساب شخص آخر دون إذن</li>
              <li>لا يجوز لك نقل حسابك إلى شخص آخر</li>
            </ul>

            <h3 className="font-semibold text-lg">الاستخدام المقبول</h3>
            <p>أنت توافق على عدم استخدام الخدمة من أجل:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>أي غرض غير قانوني أو محظور بموجب هذه الشروط</li>
              <li>التماس الآخرين لأداء أو المشاركة في أي أعمال غير قانونية</li>
              <li>انتهاك أي لوائح أو قوانين أو قواعد محلية أو دولية</li>
              <li>انتهاك حقوق الملكية الفكرية لنا أو لأطراف ثالثة</li>
              <li>التحرش أو الإساءة أو الأذى أو التمييز ضد أي شخص</li>
              <li>نشر معلومات مضللة أو احتيالية</li>
              <li>رفع أو نقل الفيروسات أو أي نوع آخر من التعليمات البرمجية الضارة</li>
              <li>جمع أو تتبع المعلومات الشخصية للآخرين</li>
              <li>إرسال رسائل غير مرغوب فيها أو رسائل تصيد احتيالية</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="size-5" />
              المحتوى والمسؤولية
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <h3 className="font-semibold text-lg">المحتوى الخاص بك</h3>
            <p>
              أنت تحتفظ بجميع حقوق الملكية في المحتوى الذي تنشره على الخدمة. ومع ذلك، من خلال نشر المحتوى، فإنك تمنحنا
              ترخيصاً عالمياً غير حصري لاستخدام وعرض وتوزيع المحتوى الخاص بك على المنصة.
            </p>

            <h3 className="font-semibold text-lg">مسؤولية المحتوى</h3>
            <p>أنت وحدك المسؤول عن المحتوى الذي تنشره وعن عواقب نشره. نحن لا نؤيد أي محتوى أو رأي يتم التعبير عنه.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>إخلاء المسؤولية</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>
              يتم توفير الخدمة "كما هي" و "حسب التوفر" دون أي ضمانات من أي نوع، صريحة أو ضمنية. نحن لا نضمن أن الخدمة
              ستكون متاحة دائماً أو خالية من الأخطاء أو آمنة.
            </p>
            <p>
              لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدامك أو عدم قدرتك
              على استخدام الخدمة.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>إنهاء الخدمة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>
              نحتفظ بالحق في تعليق أو إنهاء حسابك ووصولك إلى الخدمة في أي وقت، دون إشعار مسبق أو مسؤولية، لأي سبب كان،
              بما في ذلك، على سبيل المثال لا الحصر، إذا انتهكت هذه الشروط.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>القانون الساري</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>
              تخضع هذه الشروط وتفسر وفقاً للقوانين المعمول بها، دون النظر إلى أحكام تنازع القوانين. يجب حل أي نزاع ينشأ
              عن هذه الشروط من خلال المحاكم المختصة.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>تغييرات على الشروط</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>
              نحتفظ بالحق في تعديل أو استبدال هذه الشروط في أي وقت. إذا كان التعديل جوهرياً، سنبذل جهوداً معقولة لتقديم
              إشعار قبل 30 يوماً على الأقل قبل أن تصبح الشروط الجديدة سارية المفعول.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>اتصل بنا</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-relaxed">
            <p>إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يُرجى الاتصال بنا عبر:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>البريد الإلكتروني: support@national-auth.example</li>
              <li>الهاتف: +966 55 77 88434</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild variant="outline">
            <a href="/privacy">سياسة الخصوصية</a>
          </Button>
          <Button asChild>
            <a href="/">العودة للرئيسية</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
