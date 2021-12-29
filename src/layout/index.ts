import React from "react";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { LayoutProps } from "./types";
import InnerLayout from "./src/Layout";

interface LayoutType extends React.FC<LayoutProps> {
  Header: typeof Header
  Content: typeof Content
  Footer: typeof Footer
}

const Layout = InnerLayout as LayoutType

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout
