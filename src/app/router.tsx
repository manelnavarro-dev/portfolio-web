import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/home/HomePage";
import { CookiesPolicyPage } from "@/pages/legal/CookiesPolicyPage";
import { LegalNoticePage } from "@/pages/legal/LegalNoticePage";
import { PrivacyPolicyPage } from "@/pages/legal/PrivacyPolicyPage";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/index.html" element={<HomePage />} />
      <Route path="/aviso-legal" element={<LegalNoticePage />} />
      <Route path="/legal-notice.html" element={<LegalNoticePage />} />
      <Route path="/privacidad" element={<PrivacyPolicyPage />} />
      <Route path="/privacy-policy.html" element={<PrivacyPolicyPage />} />
      <Route path="/cookies" element={<CookiesPolicyPage />} />
      <Route path="/cookies.html" element={<CookiesPolicyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
