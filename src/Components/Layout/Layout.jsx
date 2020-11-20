import PropTypes from "prop-types";
import { ALayout } from "@plugin/antd";

const wrapperType = {
  className: PropTypes.string,
  hasSider: PropTypes.bool,
};

ALayout.propTypes = wrapperType;
// ALayout.Header.propTypes = wrapperType;
ALayout.Footer.propTypes = wrapperType;
ALayout.Content.propTypes = wrapperType;
ALayout.Sider.propTypes = {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  collapsible: PropTypes.bool,
  collapsedWidth: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ALayout.Sider.defaultProps = {
  collapsed: false,
  collapsible: false,
  collapsedWidth: 80,
  width: 200,
};

export const Layout = ALayout;
