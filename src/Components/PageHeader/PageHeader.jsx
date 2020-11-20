import { APageHeader } from "@plugin/antd";
import { useTranslation } from "@plugin/i18n";
import { useHistory } from "react-router-dom";

const navigateSetting = [
  { path: "pageA", i18n: "pageA" },
  { path: "pageB", i18n: "pageB" },
  { path: "pageC", i18n: "pageC" },
  { path: "pageD", i18n: "pageD" },
];

export function PageHeader() {
  const history = useHistory();
  const { t } = useTranslation();
  const handleNavigate = (path) => {
    history.push(path);
  };
  return (
    <APageHeader
      title="Logo"
      extra={navigateSetting.map((set) => (
        <button
          onClick={() => handleNavigate(set.path)}
          type="button"
          key={set.path}
        >
          {t(set.i18n)}
        </button>
      ))}
    />
  );
}
