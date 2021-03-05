import React from 'react';
import Header from '@/components/header';
import Experience from '@/components/experience';
import Footer from '@/components/footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="mx-auto p-10 lg:container">
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
