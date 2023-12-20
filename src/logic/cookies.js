export function isCookiesAccepted() {
  if (localStorage.getItem('cookies-accepted') === 'true') {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-6VMTN22R74');
  }
}
