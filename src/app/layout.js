import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import AllScript from "./AllScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Planner App",
  description: "Event planner App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/assets/images/favicon.png"
        />
        <link href="/assets/css/themify-icons.css" rel="stylesheet" />
        <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/assets/css/flaticon.css" rel="stylesheet" />
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/owl.carousel.css" rel="stylesheet" />
        <link href="/assets/css/owl.theme.css" rel="stylesheet" />
        <link href="/assets/css/slick.css" rel="stylesheet" />
        <link href="/assets/css/slick-theme.css" rel="stylesheet" />
        <link href="/assets/css/swiper.min.css" rel="stylesheet" />
        <link href="/assets/css/nice-select.css" rel="stylesheet" />
        <link href="/assets/css/owl.transitions.css" rel="stylesheet" />
        <link href="/assets/css/magnific-popup.css" rel="stylesheet" />
        <link href="/assets/css/jquery.fancybox.css" rel="stylesheet" />
        <link href="/assets/css/odometer-theme-default.css" rel="stylesheet" />
        <link href="/assets/css/jquery-ui.css" rel="stylesheet" />
        <link href="/assets/sass/style.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <AllScript />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
