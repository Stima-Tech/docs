import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Home() {
  const {i18n} = useDocusaurusContext();

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const browserLang = navigator.language || navigator.userLanguage;
      const isZhBrowser = browserLang.toLowerCase().startsWith('zh');
      const targetPath = isZhBrowser ? '/intro' : '/en/intro';
      
      // 使用 window.location 進行重定向
      if (window.location.pathname === '/') {
        window.location.href = targetPath;
      }
    }
  }, []);

  // 在服務器端渲染時返回空內容
  return null;
}
