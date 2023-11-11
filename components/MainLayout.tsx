import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React, { ReactNode } from 'react';

type MainLayoutProps = {
    children: ReactNode;
  };

export default function MainLayout(props: MainLayoutProps) {
  
    return (
      <>
        <Header />
        {props.children}
        <Footer />
      </>
    )
  }
  
  
