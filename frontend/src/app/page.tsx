'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/axios';
import styles from './page.module.css'
import { Header } from './components/header/index';
import { About } from './components/about/index';
import { Projects } from './components/projects/index';
import { Members } from './components/members/index';
import { Footer } from './components/footer/index';

export default function Home() {

  return (
    <main>
      <Header />
      <span id="about"></span>
      <About />
      <span id="projects"></span>
      <Projects />
      <span id="members"></span>
      <Members />
      <Footer />
    </main>
  );
}
