# Sadece Kumpanya — Web sitesi başlangıç paketi

Bu paket, Sadece Kumpanya için hazırlanmış Türkçe, mobil uyumlu, statik bir web sitesi başlangıç tasarımıdır.

## Dosyalar
- `index.html`: Sayfa yapısı ve metinler
- `styles.css`: Tasarım ve mobil uyum
- `script.js`: Mobil menü ve e-posta taslağı oluşturan iletişim formu

## Yerelde görüntüleme
1. ZIP dosyasını bilgisayarınıza çıkarın.
2. `index.html` dosyasına çift tıklayarak tarayıcıda açın.
3. İnternet bağlantısı varsa yazı tipleri Google Fonts üzerinden yüklenir. Diğer özellikler yerel olarak çalışır.

## Yayına alma — GitHub Pages (ücretsiz)
1. GitHub hesabınızda yeni bir public repository oluşturun (ör. `sadece-kumpanya`).
2. `index.html`, `styles.css` ve `script.js` dosyalarını repository'nin kök dizinine yükleyin.
3. Repository içinde **Settings → Pages** bölümüne gidin.
4. **Deploy from a branch** seçin; `main` ve `/(root)` seçerek kaydedin.
5. GitHub birkaç dakika içinde bir yayın adresi üretir. Adres repository'nin Pages bölümünde görünür.

Alternatif olarak Netlify veya Vercel'e bu klasörü yükleyerek de yayınlayabilirsiniz.

## Yayına çıkmadan önce mutlaka düzenleyin
- Oyunların güncel olup olmadığını doğrulayın; örnek açıklamalar başlangıç metnidir.
- Her oyunun `index.html` içindeki `href="#iletisim"` bilet bağlantısını ilgili bilet satış sayfasının URL'siyle değiştirin.
- Afiş benzeri CSS tasarımlarını gerçek, kullanım izni alınmış oyun afişleriyle değiştirin.
- Ekip isimleri, biyografileri ve fotoğrafları onaylı bilgilerle ekleyin.
- Galeri alanındaki temsili grafiklerin yerine gerçek prodüksiyon fotoğrafları ve videoları koyun.
- İletişim telefonu ve e-posta adresini doğrulayın.
- Gizlilik/KVKK aydınlatma metni ve çerez kullanımı gerekiyorsa ekleyin.

## İletişim formu hakkında önemli not
Bu başlangıç sürümündeki form, sunucuya veri kaydetmez ve kendi başına e-posta göndermez. Ziyaretçinin cihazında varsayılan e-posta uygulamasında hazır bir mesaj açmayı dener. Gerçek form gönderimi için Formspree, Netlify Forms veya kendi sunucu/API çözümünüzü bağlamak gerekir.

## Teknik notlar
- Statik HTML, CSS ve JavaScript kullanır; kurulum veya derleme gerektirmez.
- Mobil menü ve form davranışı için JavaScript içerir.
- Erişilebilir etiketler ve mobil ekranlara uyumlu düzen bulunur.
