import "./assets/css/layout.css";
import logo from "./assets/images/Ten-truong-do-1000x159.png";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <html>
      <header>
        <link rel="stylesheet" href="assets/css/layout.css" />

        <div id="header" className="header">
          <div id="banner" className="banner">
            <div id="divmenutrai">
              <nav id="menutrai">
                <ul className="menutrai" style={{ width: "250px" }}>
                  <li>
                    <a href="/" class="menutrai">
                      TRANG chủ
                    </a>
                  </li>
                  <li>
                    <a class="menutrai" href="/ListSanPham">
                      SanPham
                    </a>
                  </li>
                  <li>
                    <a class="menutrai" href="/trang1">
                      {" "}
                      EGOV
                    </a>
                  </li>
                  <li>
                    <a class="menutrai" href="/trang2">
                      SINH VIÊN
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div style={{ width: "1000px" }}>
              <a href="/">
                <img src={logo} width="500" height="80" />
              </a>
            </div>
            <div>Tim kiem</div>
          </div>
          <div id="menubar" className="menubar">
            <nav class="navbar">
              {" "}
              <ul>
                <li>
                  <a href="#">GIỚI THIỆU</a>
                  <ul>
                    <li>
                      <a href="#">lịch sử hình thành và phát triển</a>
                    </li>
                    <li>
                      <a href="#">bộ máy tổ chức</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">TIN TỨC</a>
                </li>
                <li>
                  <a href="#">TUYỂN SINH</a>
                  <ul>
                    <li>
                      <a href="#">tuyển sinh 2025</a>
                    </li>
                    <li>
                      <a href="#">tuyển sinh chính quy</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">CÔNG KHAI GIÁO DỤC</a>
                  <ul>
                    <li>
                      <a href="#">công khai thường niên</a>
                    </li>
                    <li>
                      <a href="#">chất lượng đào tạo</a>
                    </li>
                    <li>
                      <a href="#">chuẩn đầu ra</a>
                    </li>
                    <li>
                      <a href="#">đội ngũ giảng viên</a>
                    </li>
                    <li>
                      <a href="#">cơ sở vật chất</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">CƠ CẤU TỔ CHỨC</a>
                  <ul>
                    <li>
                      <a href="#">đảng ,toàn thể</a>
                    </li>
                    <li>
                      <a href="#">ban giám hiệu</a>
                    </li>
                    <li>
                      <a href="#">phòng ban</a>
                    </li>
                    <li>
                      <a href="#">khoa chuyênmôn</a>
                    </li>
                    <li>
                      <a href="#">trung tâm</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">LIÊN KẾT</a>
                  <ul>
                    <li>
                      <a href="#">thông tin từ sở dt tphcm</a>
                    </li>
                    <li>
                      <a href="#">cổng dky tuyển sinh</a>
                    </li>
                    <li>
                      <a href="#">sổ tay sinh viên</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <body>
        <Outlet />
      </body>
      <footer></footer>
    </html>
  );
};
export default Layout;
