import {
  BrowserRouter as Router,
  Link,
  Outlet,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";

export default function RouterQuiz() {
  return (
    <Router>
      <Link to="/">홈</Link>
      <Link to="/products/123">상품정보</Link>
      <Link to="/products/456/notice">상품공지사항</Link>
      <Link to="/cart?sort=name&sorting=asc#the-hash">카트</Link>
      <Link to="/users">내 페이지</Link>
      <Link to="/users/coupon">사용자쿠폰</Link>
      <Link to="/users/question">질문</Link>
      <Link
        to={{
          pathname: "/users/notice",
          search: "?sort=name&sorting=asc",
          hash: "#the-hash",
          state: { fromDashboard: true },
        }}
      >
        공지사항
      </Link>
      <br />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/products/:id/notice" element={<ProductDetailNoticePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/users/*" element={<Outlet />}>
          <Route path="" element={<UserPage name="licat" />} />
          <Route path="coupon/" element={<CouponPage />} />
          <Route path="question/" element={<QuestionPage />} />
          <Route path="notice/" element={<NoticePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

function HomePage() {
  return <p>HomePage</p>;
}

function ProductDetailPage() {
  const { id } = useParams();
  return <p>ProductDetailPage - id:{id}</p>;
}
function ProductDetailNoticePage() {
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  const path0 = location.pathname.split("/")[0];
  const path1 = location.pathname.split("/")[1];
  console.log(location);
  console.log(`path0:'${path0}', path1: '${path1}', pathID: '${pathID}'`);

  return <p>ProductDetailNoticePage - id:{pathID}</p>;
}

function CartPage() {
  const location = useLocation();
  console.log(location);

  return <p>CartPage</p>;
}

function UserPage(props) {
  return <p>UserPage - {props.name}</p>;
}
function CouponPage() {
  return <p>CouponPage</p>;
}
function QuestionPage() {
  return <p>QuestionPage</p>;
}
function NoticePage() {
  const location = useLocation();
  console.log(location);

  return <p>NoticePage</p>;
}
