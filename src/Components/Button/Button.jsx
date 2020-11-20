import PropTypes from "prop-types";
import { AButton } from "@plugin/antd";

export function Button({
  onClick = () => {},
  size = "middle",
  type = "default",
  disabled = false,
  loading = false,
  children,
}) {
  return (
    <AButton
      onClick={onClick}
      size={size}
      type={type}
      loading={loading}
      disabled={disabled}
    >
      {children}
    </AButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["large", "middle", "small"]),
  type: PropTypes.oneOf([
    "primary",
    "ghost",
    "dashed",
    "link",
    "text",
    "default",
  ]),
};
