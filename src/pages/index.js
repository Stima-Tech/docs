import React from 'react';
import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Home() {
  const {i18n} = useDocusaurusContext();
  
  // 在服務器端渲染時使用默認語言
  if (!ExecutionEnvironment.canUseDOM) {
    return <Redirect to="/intro" />;
  }

  // 在客戶端檢測瀏覽器語言
  const browserLang = navigator.language || navigator.userLanguage;
  const isZhBrowser = browserLang.toLowerCase().startsWith('zh');
  
  // 如果當前語言與瀏覽器語言不匹配，進行重定向
  const currentLocale = i18n.currentLocale;
  const shouldBeZh = isZhBrowser;
  
  if (shouldBeZh && currentLocale !== 'zh-Hant') {
    return <Redirect to="/intro" />;
  } else if (!shouldBeZh && currentLocale !== 'en') {
    return <Redirect to="/en/intro" />;
  }
  
  // 如果已經在正確的語言版本，直接重定向到對應的首頁
  return <Redirect to={`${currentLocale === 'zh-Hant' ? '' : '/en'}/intro`} />;
}
