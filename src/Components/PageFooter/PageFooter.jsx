import Layout from "@Components/Layout";
import "./footer.less";

const { Footer } = Layout;

export function PageFooter() {
  return (
    <Footer className="footerWrap">
      {/* hi i'm footer 🎉 */}
      <div className="bottomWrap">
        <hr />
        <p className="copyRight">© 2020 ccc.com. All rights reserved</p>
      </div>
    </Footer>
  );
}
