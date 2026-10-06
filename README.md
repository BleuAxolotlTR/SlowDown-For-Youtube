# SlowDown for YouTube

YouTube videolarının etkin oynatma hızını en fazla **1×** yapar. Hız menüsü, `>` kısayolu, basılı tutma hareketi veya sayfa betiği daha yüksek hız istese de video hızlanamaz.

## Chromium tarayıcıya yükleme

1. Chrome, Edge, Brave veya başka bir Chromium tarayıcısında `chrome://extensions` ya da tarayıcının eklenti yönetimi sayfasını açın.
2. **Geliştirici modu**nu açın.
3. **Paketlenmemiş öğe yükle** seçeneğine basın.
4. Bu `SlowDown` klasörünü seçin.
5. YouTube sekmelerini yenileyin.

Eklenti YouTube ve `youtube-nocookie.com` oynatıcılarında çalışır. Hız menüsünde daha yüksek bir hız seçilmiş gibi görünse bile, oynatılan video en fazla 1× hızında çalışır. Daha düşük hızlar kullanılabilir.

## Sınırlar

- Bu proje Chromium Manifest V3 içindir; Firefox için ayrı paketleme ve uyumluluk kontrolü gerekir.
- Site, hız menüsünde seçilen değeri gösterebilir; eklenti gerçek medya hızını sınırlar.

## Lisans

Bu proje **GNU General Public License v3.0 (GPLv3)** lisansı altında korunmaktadır. Detaylı bilgi için [LICENSE](LICENSE) dosyasına göz atabilirsiniz.
