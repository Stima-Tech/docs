import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function NotFound() {
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const browserLang = navigator.language || navigator.userLanguage;
      const isZhBrowser = browserLang.toLowerCase().startsWith('zh');
      const path = window.location.pathname;
      
      // 如果是根路徑，根據瀏覽器語言重定向
      if (path === '/') {
        window.location.href = isZhBrowser ? '/intro' : '/en/intro';
      }
      // 如果是英文路徑但沒有 /en 前綴，添加前綴
      else if (!isZhBrowser && !path.startsWith('/en/')) {
        window.location.href = `/en${path}`;
      }
    }
  }, []);

  // 在服務器端渲染時返回空內容
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>頁面載入中...</h1>
    </div>
  );
} 